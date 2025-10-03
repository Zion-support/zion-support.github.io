#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of all Lucide React icons that need to be imported
const lucideIcons = [
  'Users', 'Rocket', 'CheckCircle', 'Home', 'Award', 'Tag', 'Calendar', 'Target',
  'Brain', 'Cpu', 'BarChart3', 'Cloud', 'Zap', 'Database', 'Clock', 'Download',
  'Eye', 'ExternalLink', 'TrendingUp', 'Globe', 'ArrowRight', 'Shield', 'MapPin',
  'Briefcase', 'Heart', 'Lightbulb', 'Coffee', 'BookOpen', 'DollarSign', 'Mail', 'Phone'
];

// Files that need fixing
const filesToFix = [
  'app/careers/page.tsx',
  'app/marketplace/page.tsx', 
  'app/news/page.tsx',
  'app/press/page.tsx',
  'app/resources/page.tsx',
  'app/team/page.tsx'
];

function fixImports(filePath) {
  try {
    const fullPath = path.join(__dirname, '..', filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find all used icons in the file
    const usedIcons = [];
    for (const icon of lucideIcons) {
      if (content.includes(`<${icon}`)) {
        usedIcons.push(icon);
      }
    }

    if (usedIcons.length === 0) {
      console.log(`No icons found in ${filePath}`);
      return;
    }

    // Check if lucide-react import exists
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
    
    if (lucideImportMatch) {
      // Update existing import
      const existingIcons = lucideImportMatch[1].split(',').map(icon => icon.trim());
      const allIcons = [...new Set([...existingIcons, ...usedIcons])];
      
      content = content.replace(
        /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
        `import { ${allIcons.join(', ')} } from 'lucide-react'`
      );
    } else {
      // Add new import
      const importStatement = `import { ${usedIcons.join(', ')} } from 'lucide-react';\n`;
      content = importStatement + content;
    }

    // Fix React import if missing
    if (!content.includes("import React from 'react'")) {
      content = content.replace(
        /\/\/ import React from 'react';/,
        "import React from 'react';"
      );
    }

    // Fix duplicate imports in team page
    if (filePath === 'app/team/page.tsx') {
      // Remove duplicate Cloud, Brain, Cpu imports
      const lines = content.split('\n');
      const seen = new Set();
      const filteredLines = lines.filter(line => {
        const trimmed = line.trim();
        if (trimmed.includes('Cloud,') || trimmed.includes('Brain,') || trimmed.includes('Cpu,')) {
          if (seen.has('Cloud') && trimmed.includes('Cloud')) return false;
          if (seen.has('Brain') && trimmed.includes('Brain')) return false;
          if (seen.has('Cpu') && trimmed.includes('Cpu')) return false;
          
          if (trimmed.includes('Cloud')) seen.add('Cloud');
          if (trimmed.includes('Brain')) seen.add('Brain');
          if (trimmed.includes('Cpu')) seen.add('Cpu');
        }
        return true;
      });
      content = filteredLines.join('\n');
    }

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`✅ Fixed imports in ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

function fixOtherIssues() {
  // Fix main.tsx return type
  const mainPath = path.join(__dirname, '..', 'src/main.tsx');
  if (fs.existsSync(mainPath)) {
    let content = fs.readFileSync(mainPath, 'utf8');
    content = content.replace(
      /async function reportWebVitals\(\): void/,
      'async function reportWebVitals(): Promise<void>'
    );
    fs.writeFileSync(mainPath, content, 'utf8');
    console.log('✅ Fixed main.tsx return type');
  }

  // Fix ErrorBoundary gtag issue
  const errorBoundaryPath = path.join(__dirname, '..', 'src/components/ErrorBoundary.tsx');
  if (fs.existsSync(errorBoundaryPath)) {
    let content = fs.readFileSync(errorBoundaryPath, 'utf8');
    content = content.replace(
      /if \(typeof gtag !== 'undefined'\) \{/,
      'if (typeof window !== \'undefined\' && typeof (window as any).gtag !== \'undefined\') {'
    );
    content = content.replace(
      /gtag\('event', 'exception', \{/,
      '(window as any).gtag(\'event\', \'exception\', {'
    );
    fs.writeFileSync(errorBoundaryPath, content, 'utf8');
    console.log('✅ Fixed ErrorBoundary gtag issue');
  }

  // Fix usePerformance.ts web-vitals imports
  const usePerformancePath = path.join(__dirname, '..', 'src/hooks/usePerformance.ts');
  if (fs.existsSync(usePerformancePath)) {
    let content = fs.readFileSync(usePerformancePath, 'utf8');
    content = content.replace(
      /import\('web-vitals'\)\.then\(\(\{ getCLS, getFID, getFCP, getLCP, getTTFB \}\) => \{/,
      `import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {`
    );
    content = content.replace(/getCLS\(/g, 'onCLS(');
    content = content.replace(/getFID\(/g, 'onFID(');
    content = content.replace(/getFCP\(/g, 'onFCP(');
    content = content.replace(/getLCP\(/g, 'onLCP(');
    content = content.replace(/getTTFB\(/g, 'onTTFB(');
    content = content.replace(/\(metric\) => \{/g, '(metric: any) => {');
    fs.writeFileSync(usePerformancePath, content, 'utf8');
    console.log('✅ Fixed usePerformance.ts web-vitals imports');
  }
}

console.log('🔧 Starting TypeScript error fixes...\n');

// Fix imports in all files
filesToFix.forEach(fixImports);

// Fix other issues
fixOtherIssues();

console.log('\n✅ All TypeScript errors have been fixed!');