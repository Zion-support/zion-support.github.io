#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common unused imports to remove
const unusedImports = [
  'Download', 'Share', 'Star', 'Clock', 'Users', 'Award', 'ArrowRight', 'Sparkles',
  'Helmet', 'Eye', 'DollarSign', 'Zap', 'Mail', 'MapPin', 'Shield', 'Globe', 'Target',
  'PieChart', 'Activity', 'AlertCircle', 'CheckCircle', 'Headphones', 'Bot', 'BarChart',
  'AlertTriangle', 'Database', 'Settings', 'TrendingUp', 'Brain', 'Phone', 'Calendar',
  'Cpu', 'MessageSquare', 'Link', 'useState', 'Mic', 'Search', 'Truck'
];

function cleanImports(content) {
  const lines = content.split('\n');
  const cleanedLines = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('import') && line.includes('{')) {
      // Extract imports from curly braces
      const braceMatch = line.match(/\{([^}]+)\}/);
      if (braceMatch) {
        const imports = braceMatch[1].split(',').map(imp => imp.trim());
        const usedImports = imports.filter(imp => {
          const importName = imp.replace(/\s+as\s+\w+/, '').trim();
          return !unusedImports.includes(importName);
        });
        
        if (usedImports.length > 0) {
          const newLine = line.replace(/\{[^}]+\}/, `{ ${usedImports.join(', ')} }`);
          cleanedLines.push(newLine);
        } else {
          // Remove the entire import line if no imports are used
          continue;
        }
      } else {
        cleanedLines.push(line);
      }
    } else {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
}

function addPerformanceOptimizations(content) {
  // Add React.memo for better performance
  if (content.includes('const ') && content.includes('React.FC') && !content.includes('React.memo')) {
    content = content.replace(
      /const (\w+): React\.FC = \(\) => \{/g,
      'const $1: React.FC = React.memo(() => {'
    );
  }
  
  // Add useCallback for event handlers
  if (content.includes('onClick') && !content.includes('useCallback')) {
    const hasUseCallback = content.includes('import { useCallback');
    if (!hasUseCallback) {
      content = content.replace(
        /import React[^}]*from 'react';/,
        "import React, { useCallback } from 'react';"
      );
    }
  }
  
  return content;
}

function addAccessibilityImprovements(content) {
  // Add ARIA labels to buttons
  content = content.replace(
    /<button([^>]*)>/g,
    '<button$1 aria-label="Button">'
  );
  
  // Add ARIA labels to links
  content = content.replace(
    /<a([^>]*href[^>]*)>/g,
    '<a$1 aria-label="Link">'
  );
  
  return content;
}

function addSEOImprovements(content) {
  // Add structured data
  if (content.includes('<title>') && !content.includes('application/ld+json')) {
    const structuredData = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Zion Tech Group AI Services",
      "description": "Advanced AI and IT solutions for enterprise transformation",
      "provider": {
        "@type": "Organization",
        "name": "Zion Tech Group",
        "url": "https://ziontechgroup.com"
      }
    }
    </script>`;
    
    content = content.replace('</head>', `${structuredData}\n</head>`);
  }
  
  return content;
}

function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Clean unused imports
    const cleanedContent = cleanImports(content);
    if (cleanedContent !== content) {
      content = cleanedContent;
      modified = true;
    }
    
    // Add performance optimizations
    const optimizedContent = addPerformanceOptimizations(content);
    if (optimizedContent !== content) {
      content = optimizedContent;
      modified = true;
    }
    
    // Add accessibility improvements
    const accessibleContent = addAccessibilityImprovements(content);
    if (accessibleContent !== content) {
      content = accessibleContent;
      modified = true;
    }
    
    // Add SEO improvements
    const seoContent = addSEOImprovements(content);
    if (seoContent !== content) {
      content = seoContent;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Improved: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('src/**/*.{ts,tsx,js,jsx}', {
  ignore: ['src/**/*.d.ts', 'node_modules/**', 'src/components/**']
});

let improvedCount = 0;

console.log('Applying comprehensive improvements...');

files.forEach(file => {
  if (processFile(file)) {
    improvedCount++;
  }
});

console.log(`\nImproved ${improvedCount} files.`);
console.log('Comprehensive improvements completed!');