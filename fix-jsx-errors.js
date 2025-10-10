#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common JSX syntax fixes
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix missing closing tags - common patterns
  const patterns = [
    // Fix unclosed section tags
    { 
      regex: /<section[^>]*>([\s\S]*?)(?=<section|<div|<main|$)/g, 
      replacement: (match, content) => {
        if (!content.includes('</section>') && !match.includes('</section>')) {
          return match + '</section>';
        }
        return match;
      }
    },
    // Fix unclosed div tags
    { 
      regex: /<div[^>]*>([\s\S]*?)(?=<div|<section|<main|<\/main>|<\/section>|$)/g, 
      replacement: (match, content) => {
        if (!content.includes('</div>') && !match.includes('</div>')) {
          return match + '</div>';
        }
        return match;
      }
    },
    // Fix unclosed main tags
    { 
      regex: /<main[^>]*>([\s\S]*?)(?=<main|<div|<section|$)/g, 
      replacement: (match, content) => {
        if (!content.includes('</main>') && !match.includes('</main>')) {
          return match + '</main>';
        }
        return match;
      }
    },
    // Fix malformed object properties
    {
      regex: /(\w+):\s*([^,}]+),?\s*(?=\n\s*[}])/g,
      replacement: (match, key, value) => {
        if (value.trim().endsWith(',')) {
          return match;
        }
        if (!value.trim().endsWith('"') && !value.trim().endsWith("'") && !value.trim().endsWith(']') && !value.trim().endsWith('}')) {
          return `${key}: ${value.trim()},`;
        }
        return match;
      }
    },
    // Fix incomplete object definitions
    {
      regex: /{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]+)['"],\s*description:\s*['"]([^'"]+)['"],\s*benefits:\s*\[([^\]]*)\]\s*,\s*$/gm,
      replacement: (match, icon, title, description, benefits) => {
        return `{
      icon: ${icon},
      title: '${title}',
      description: '${description}',
      benefits: [${benefits}]
    }`;
      }
    },
    // Fix missing closing braces in objects
    {
      regex: /{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]+)['"],\s*description:\s*['"]([^'"]+)['"],\s*benefits:\s*\[([^\]]*)\]\s*$/gm,
      replacement: (match, icon, title, description, benefits) => {
        return `{
      icon: ${icon},
      title: '${title}',
      description: '${description}',
      benefits: [${benefits}]
    }`;
      }
    },
    // Fix empty arrays
    {
      regex: /const\s+(\w+)\s*=\s*\[\s*\]\s*;/g,
      replacement: (match, varName) => {
        return `const ${varName} = [];`;
      }
    },
    // Fix malformed return statements
    {
      regex: /return\s*\(\s*<\/div>\s*<>/g,
      replacement: 'return (\n    <>'
    },
    // Fix missing Navigation component
    {
      regex: /<Helmet>[\s\S]*?<\/Helmet>\s*$/m,
      replacement: (match) => {
        if (!match.includes('<Navigation />')) {
          return match + '\n\n      <Navigation />';
        }
        return match;
      }
    }
  ];

  patterns.forEach(pattern => {
    if (typeof pattern.replacement === 'function') {
      fixed = fixed.replace(pattern.regex, pattern.replacement);
    } else {
      fixed = fixed.replace(pattern.regex, pattern.replacement);
    }
  });

  return fixed;
}

// Fix console statements
function fixConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);\s*/g, '');
}

// Fix unused variables
function fixUnusedVariables(content) {
  return content.replace(/const\s+__dirname\s*=\s*[^;]+;\s*/g, '');
}

// Main function to process files
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    
    // Apply fixes
    fixed = fixJSXSyntax(fixed);
    fixed = fixConsoleStatements(fixed);
    fixed = fixUnusedVariables(fixed);
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { 
  ignore: [
    'node_modules/**',
    'dist/**',
    '*.disabled/**',
    '*-disabled/**',
    'backup*/**',
    '**/disabled/**'
  ]
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);