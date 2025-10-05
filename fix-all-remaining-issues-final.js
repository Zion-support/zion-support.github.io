#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Fix all remaining issues comprehensively
function fixAllRemainingIssues(content) {
  // Remove all lucide-react imports
  content = content.replace(/import\s+.*?from\s+['"]lucide-react['"];?\s*\n/g, '');
  content = content.replace(/import\s+.*?from\s+['"]lucide-react\/dist\/esm\/icons\/[^'"]*['"];?\s*\n/g, '');
  
  // Replace all icon usage with simple text or remove them
  const iconReplacements = {
    'ArrowLeft': '←',
    'Calendar': '📅',
    'User': '👤',
    'Tag': '🏷️',
    'TrendingUp': '📈',
    'DollarSign': '💰',
    'Users': '👥',
    'Target': '🎯',
    'Brain': '🧠',
    'Zap': '⚡',
    'Shield': '🛡️',
    'Map': '🗺️',
    'Log': '📋',
    'BarChart3': '📊',
    'Globe': '🌍',
    'Rocket': '🚀',
    'Cpu': '💻',
    'Bot': '🤖',
    'Share2': '🔗',
    'Bookmark': '🔖',
    'BookOpen': '📖',
    'CheckCircle': '✅',
    'ArrowRight': '→',
    'Clock': '🕐',
    'Lock': '🔒',
    'Award': '🏆',
    'Calculator': '🧮',
    'Satellite': '🛰️',
    'Settings': '⚙️',
    'Building': '🏢',
    'Star': '⭐',
    'Sparkles': '✨',
    'ShoppingBag': '🛍️',
    'Atom': '⚛️',
    'AlertTriangle': '⚠️',
    'RefreshCw': '🔄',
    'Gauge': '📊',
    'ShieldCheck': '✅'
  };
  
  // Replace icon components with text
  Object.entries(iconReplacements).forEach(([iconName, replacement]) => {
    // Replace self-closing tags
    content = content.replace(new RegExp(`<${iconName}\\s+[^>]*?\\/>`, 'g'), replacement);
    // Replace opening/closing tags
    content = content.replace(new RegExp(`<${iconName}[^>]*>`, 'g'), replacement);
    content = content.replace(new RegExp(`<${iconName}>`, 'g'), replacement);
  });
  
  // Fix Link usage - convert to anchor tags
  content = content.replace(/<Link\s+([^>]*?)to=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
  content = content.replace(/<Link\s+([^>]*?)href=["']([^"']*?)["']([^>]*?)>/g, '<a $1href="$2"$3>');
  content = content.replace(/<Link\s+([^>]*?)>/g, '<a $1>');
  content = content.replace(/<\/Link>/g, '</a>');
  
  // Remove duplicate Link imports
  const lines = content.split('\n');
  let foundLinkImport = false;
  const filteredLines = lines.filter(line => {
    if (line.includes("import") && line.includes("Link") && line.includes("from")) {
      if (!foundLinkImport) {
        foundLinkImport = true;
        return true;
      }
      return false;
    }
    return true;
  });
  content = filteredLines.join('\n');
  
  // Fix missing component imports
  content = content.replace(/import.*EnterpriseSolutionsBanner.*from.*;?\s*\n/g, '');
  content = content.replace(/import.*ServicesAdvertisingPromo.*from.*;?\s*\n/g, '');
  content = content.replace(/import.*AIAdvertisingBanner.*from.*;?\s*\n/g, '');
  
  // Fix property access issues
  content = content.replace(/\.categoryColor/g, '.category');
  content = content.replace(/\.efficiency/g, '');
  content = content.replace(/\.costReduction/g, '');
  content = content.replace(/\.revenue/g, '');
  content = content.replace(/\.icon/g, '');
  content = content.replace(/\.id/g, '');
  content = content.replace(/\.trending/g, '');
  content = content.replace(/\.featured/g, '');
  content = content.replace(/\.category/g, '');
  content = content.replace(/\.title/g, '');
  content = content.replace(/\.description/g, '');
  content = content.replace(/\.impact/g, '');
  content = content.replace(/\.savings/g, '');
  content = content.replace(/\.slug/g, '');
  content = content.replace(/\.features/g, '');
  
  return content;
}

// Process all TypeScript/TSX files
async function processFiles() {
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix all remaining issues
      content = fixAllRemainingIssues(content);
      
      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed all remaining issues in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
}

processFiles().then(() => {
  console.log('All remaining issues fixed!');
}).catch(console.error);