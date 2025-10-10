#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Fix console statements
function fixConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);\s*/g, '');
}

// Fix unused variables
function fixUnusedVariables(content) {
  let fixed = content;
  
  // Remove unused variable declarations
  fixed = fixed.replace(/const\s+__dirname\s*=\s*[^;]+;\s*/g, '');
  fixed = fixed.replace(/const\s+withSentry\s*=\s*[^;]+;\s*/g, '');
  fixed = fixed.replace(/let\s+__dirname\s*=\s*[^;]+;\s*/g, '');
  fixed = fixed.replace(/var\s+__dirname\s*=\s*[^;]+;\s*/g, '');
  
  return fixed;
}

// Fix JSX syntax errors
function fixJSXSyntax(content) {
  let fixed = content;
  
  // Fix missing closing tags
  const tagPatterns = [
    { open: '<section', close: '</section>' },
    { open: '<div', close: '</div>' },
    { open: '<main', close: '</main>' },
    { open: '<article', close: '</article>' },
    { open: '<header', close: '</header>' },
    { open: '<footer', close: '</footer>' },
    { open: '<nav', close: '</nav>' },
    { open: '<aside', close: '</aside>' }
  ];
  
  tagPatterns.forEach(pattern => {
    const regex = new RegExp(`<${pattern.open}[^>]*>([\\s\\S]*?)(?=<${pattern.open}|<div|<section|<main|</main>|</section>|$)`);
    fixed = fixed.replace(regex, (match, content) => {
      if (!content.includes(`</${pattern.close}>`) && !match.includes(`</${pattern.close}>`)) {
        return match + `</${pattern.close}>`;
      }
      return match;
    });
  });
  
  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+),?\s*(?=\n\s*[}])/g, (match, key, value) => {
    if (value.trim().endsWith(',')) {
      return match;
    }
    if (!value.trim().endsWith('"') && !value.trim().endsWith("'") && !value.trim().endsWith(']') && !value.trim().endsWith('}')) {
      return `${key}: ${value.trim()},`;
    }
    return match;
  });
  
  // Fix incomplete object definitions
  fixed = fixed.replace(/{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]+)['"],\s*description:\s*['"]([^'"]+)['"],\s*benefits:\s*\[([^\]]*)\]\s*,\s*$/gm, (match, icon, title, description, benefits) => {
    return `{
      icon: ${icon},
      title: '${title}',
      description: '${description}',
      benefits: [${benefits}]
    }`;
  });
  
  // Fix missing closing braces in objects
  fixed = fixed.replace(/{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]+)['"],\s*description:\s*['"]([^'"]+)['"],\s*benefits:\s*\[([^\]]*)\]\s*$/gm, (match, icon, title, description, benefits) => {
    return `{
      icon: ${icon},
      title: '${title}',
      description: '${description}',
      benefits: [${benefits}]
    }`;
  });
  
  // Fix empty arrays
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\[\s*\]\s*;/g, (match, varName) => {
    return `const ${varName} = [];`;
  });
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<\/div>\s*<>/g, 'return (\n    <>');
  
  // Fix missing Navigation component
  fixed = fixed.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*$/m, (match) => {
    if (!match.includes('<Navigation />')) {
      return match + '\n\n      <Navigation />';
    }
    return match;
  });
  
  return fixed;
}

// Fix TypeScript errors
function fixTypeScriptErrors(content) {
  let fixed = content;
  
  // Fix missing imports
  if (content.includes('Navigation') && !content.includes("import Navigation")) {
    fixed = fixed.replace(/(import.*from.*react.*;)/, '$1\nimport Navigation from \'../components/Navigation\';');
  }
  
  if (content.includes('Footer') && !content.includes("import Footer")) {
    fixed = fixed.replace(/(import.*from.*react.*;)/, '$1\nimport Footer from \'../components/Footer\';');
  }
  
  // Fix missing React import
  if (content.includes('React.FC') && !content.includes("import React")) {
    fixed = 'import React from \'react\';\n' + fixed;
  }
  
  return fixed;
}

// Main function to process files
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    
    // Apply fixes
    fixed = fixConsoleStatements(fixed);
    fixed = fixUnusedVariables(fixed);
    fixed = fixJSXSyntax(fixed);
    fixed = fixTypeScriptErrors(fixed);
    
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

// Find all files to process
async function main() {
  const files = await glob('**/*.{ts,tsx,js,jsx}', { 
    ignore: [
      'node_modules/**',
      'dist/**',
      '*.disabled/**',
      '*-disabled/**',
      'backup*/**',
      '**/disabled/**',
      'fix-*.cjs',
      'fix-*.js'
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
}

main().catch(console.error);