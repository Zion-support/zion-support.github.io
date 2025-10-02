#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with unused imports/variables that need to be fixed
const filesToFix = [
  {
    file: 'src/components/AccessibilityEnhancer.tsx',
    fixes: [
      { line: 17, type: 'remove-unused-var', name: 'trapFocus' }
    ]
  },
  {
    file: 'src/components/BannerManager.tsx',
    fixes: [
      { line: 30, type: 'remove-unused-var', name: 'currentBanners' }
    ]
  },
  {
    file: 'src/components/NewContentShowcase.tsx',
    fixes: [
      { line: 3, type: 'remove-unused-import', name: 'Sparkles' }
    ]
  },
  {
    file: 'src/components/OptimizedApp.tsx',
    fixes: [
      { line: 52, type: 'remove-unused-var', name: 'setBanners' }
    ]
  },
  {
    file: 'src/components/Revolutionary2026ContentMegaBanner.tsx',
    fixes: [
      { line: 2, type: 'remove-unused-imports', names: ['Sparkles', 'Atom', 'Bot', 'Gem', 'Microscope'] },
      { line: 136, type: 'remove-unused-var', name: 'index' }
    ]
  },
  {
    file: 'src/pages/AIMicroSAAS.tsx',
    fixes: [
      { line: 17, type: 'remove-unused-imports', names: ['Globe', 'Lock', 'Cloud', 'Database', 'Cpu', 'Target', 'Rocket'] }
    ]
  },
  {
    file: 'src/pages/AISolutions.tsx',
    fixes: [
      { line: 4, type: 'remove-unused-import', name: 'Helmet' },
      { line: 251, type: 'remove-unused-var', name: 'index' }
    ]
  },
  {
    file: 'src/pages/About.tsx',
    fixes: [
      { line: 4, type: 'remove-unused-import', name: 'Zap' }
    ]
  },
  {
    file: 'src/pages/AboutPage.tsx',
    fixes: [
      { line: 3, type: 'remove-unused-import', name: 'Globe' }
    ]
  },
  {
    file: 'src/pages/CaseStudiesPage.tsx',
    fixes: [
      { line: 4, type: 'remove-unused-imports', names: ['TrendingUp', 'Users', 'DollarSign', 'CheckCircle'] }
    ]
  },
  {
    file: 'src/pages/ComprehensiveServices.tsx',
    fixes: [
      { line: 7, type: 'remove-unused-import', name: 'Rocket' }
    ]
  },
  {
    file: 'src/pages/Demo.tsx',
    fixes: [
      { line: 3, type: 'remove-unused-imports', names: ['Clock', 'Mail', 'Phone', 'CheckCircle'] }
    ]
  },
  {
    file: 'src/pages/Home.tsx',
    fixes: [
      { line: 4, type: 'remove-unused-imports', names: ['ArrowRight', 'Award', 'Globe', 'Star', 'Target', 'TrendingUp', 'Users'] },
      { line: 40, type: 'remove-unused-var', name: 'posts' }
    ]
  },
  {
    file: 'src/pages/ITServices.tsx',
    fixes: [
      { line: 20, type: 'remove-unused-imports', names: ['BarChart3', 'Settings', 'Monitor', 'HardDrive', 'Wifi', 'Eye', 'Key', 'AlertTriangle', 'Users'] }
    ]
  },
  {
    file: 'src/pages/Resources.tsx',
    fixes: [
      { line: 3, type: 'remove-unused-import', name: 'Award' }
    ]
  },
  {
    file: 'src/pages/Support.tsx',
    fixes: [
      { line: 3, type: 'remove-unused-imports', names: ['CheckCircle', 'Helmet'] },
      { line: 10, type: 'remove-unused-var', name: 'supportChannels' },
      { line: 109, type: 'remove-unused-var', name: 'quickActions' }
    ]
  }
];

function fixFile(filePath, fixes) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let lines = content.split('\n');
  let modified = false;

  fixes.forEach(fix => {
    const lineIndex = fix.line - 1;
    if (lineIndex >= 0 && lineIndex < lines.length) {
      const line = lines[lineIndex];

      if (fix.type === 'remove-unused-import') {
        // Remove unused import
        const importRegex = new RegExp(`\\b${fix.name}\\b,?\\s*`, 'g');
        const newLine = line.replace(importRegex, '');
        if (newLine !== line) {
          lines[lineIndex] = newLine;
          modified = true;
        }
      } else if (fix.type === 'remove-unused-imports') {
        // Remove multiple unused imports
        let newLine = line;
        fix.names.forEach(name => {
          const importRegex = new RegExp(`\\b${name}\\b,?\\s*`, 'g');
          newLine = newLine.replace(importRegex, '');
        });
        if (newLine !== line) {
          lines[lineIndex] = newLine;
          modified = true;
        }
      } else if (fix.type === 'remove-unused-var') {
        // Remove unused variable assignment
        const varRegex = new RegExp(`\\s*const\\s+${fix.name}\\s*=\\s*[^;]+;?\\s*`, 'g');
        const newLine = line.replace(varRegex, '');
        if (newLine !== line) {
          lines[lineIndex] = newLine;
          modified = true;
        }
      }
    }
  });

  if (modified) {
    // Clean up empty lines and trailing commas
    const cleanedLines = lines.map(line => {
      // Remove trailing commas from import statements
      return line.replace(/,\s*$/, '');
    }).filter((line, index, arr) => {
      // Remove empty lines that are not needed
      if (line.trim() === '') {
        return index === 0 || arr[index - 1].trim() !== '';
      }
      return true;
    });

    fs.writeFileSync(filePath, cleanedLines.join('\n'));
    console.log(`Fixed: ${filePath}`);
  }
}

// Apply fixes
filesToFix.forEach(({ file, fixes }) => {
  fixFile(file, fixes);
});

console.log('Lint fixes applied!');