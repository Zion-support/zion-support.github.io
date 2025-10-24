#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax fixes
const fixes = [
  // Fix unterminated string literals
  {
    pattern: /<a"\s*$/gm,
    replacement: '<a'
  },
  {
    pattern: /children: "React\.ReactNode\)/g,
    replacement: 'children: React.ReactNode'
  },
  {
    pattern: /const\s+(\w+):\s*"React\.FC<[^>]+>\s*=\s*\(\{/g,
    replacement: 'const $1: React.FC<$1Props> = ({'
  },
  // Fix malformed JSX
  {
    pattern: /className\s*=\s*\{className\}/g,
    replacement: 'className={className}'
  },
  {
    pattern: /<div\s+className\s*=\s*\{className\}>/g,
    replacement: '<div className={className}>'
  },
  // Fix missing closing tags
  {
    pattern: /<\/>\s*\)\s*\)\s*}/g,
    replacement: '</div>\n  )\n}'
  },
  {
    pattern: /<html\s+lang\s*=\s*"en">/g,
    replacement: '<html lang="en">'
  },
  {
    pattern: /<body\s+className=\{inter\.className\}\s*>/g,
    replacement: '<body className={inter.className}>'
  },
  // Fix duplicate function definitions
  {
    pattern: /export default function RootLayout\(\{[^}]+\}\s*:\s*\{[^}]+\}\)\s*\{[^}]*\}\s*interface RootLayoutProps[^}]*\}\s*export const RootLayout[^}]*\}/gs,
    replacement: 'export default function RootLayout({\n  children\n}: {\n  children: React.ReactNode\n}) {\n  return (\n    <html lang="en">\n      <body className={inter.className}>\n        {children}\n      </body>\n    </html>\n  )\n}'
  },
  // Fix missing semicolons and colons
  {
    pattern: /interface\s+(\w+Props)\s*\{[^}]*\}/g,
    replacement: (match, interfaceName) => {
      return match.replace(/\s*;\s*$/, '');
    }
  },
  // Fix malformed imports
  {
    pattern: /import\s+React[^;]*;\s*$/gm,
    replacement: 'import React from "react";'
  },
  // Fix missing closing parentheses
  {
    pattern: /\)\s*\)\s*}\s*$/gm,
    replacement: ')\n  )\n}'
  }
];

// Additional specific fixes for common patterns
const specificFixes = [
  // Fix AIToolCard
  {
    file: 'app/components/AIToolCard.tsx',
    pattern: /<a"\s*$/gm,
    replacement: '<a'
  },
  // Fix AccessibilityComponents
  {
    file: 'app/components/AccessibilityComponents.tsx',
    pattern: /const AccessibilityComponents:\s*"React\.FC<AccessibilityComponentsProps>\s*=\s*\(\{\s*className\s*"\}\)\s*=>\s*\{/g,
    replacement: 'const AccessibilityComponents: React.FC<AccessibilityComponentsProps> = ({ className }) => {'
  },
  // Fix root-layout
  {
    file: 'app/root-layout.tsx',
    pattern: /export default function RootLayout\(\{\s*children\s*\}\s*:\s*\{\s*children:\s*"React\.ReactNode\)\s*"\}\)\s*\{/g,
    replacement: 'export default function RootLayout({\n  children\n}: {\n  children: React.ReactNode\n}) {'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply general fixes
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Apply specific fixes
    for (const fix of specificFixes) {
      if (filePath.includes(fix.file)) {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
    }

    // Additional cleanup
    // Remove duplicate semicolons
    content = content.replace(/;;+/g, ';');
    
    // Fix common JSX issues
    content = content.replace(/<(\w+)\s+className\s*=\s*\{([^}]+)\}\s*>/g, '<$1 className={$2}>');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*([^<]*)\s*<\/>\s*\)/g, '<$1$2>$3</$1>\n  )');
    
    // Fix malformed function parameters
    content = content.replace(/\(\{\s*(\w+)\s*\}\s*:\s*\{\s*(\w+):\s*"([^"]+)"\s*\)/g, '({ $1 }: { $2: $3 })');
    
    // Fix missing return statements
    content = content.replace(/const\s+(\w+):\s*React\.FC<[^>]+>\s*=\s*\(\{[^}]*\}\)\s*=>\s*\{([^}]*)\}/g, 
      (match, name, body) => {
        if (!body.includes('return')) {
          return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  )\n}');
        }
        return match;
      }
    );

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('Starting syntax error fixes...');
  
  // Get all TypeScript/TSX files
  const files = glob.sync('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**', 'dist/**']
  });

  let fixedCount = 0;
  let totalFiles = files.length;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} out of ${totalFiles} files`);
  console.log('Syntax error fixes completed!');
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixes };