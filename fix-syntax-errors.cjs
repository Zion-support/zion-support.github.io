#!/usr/bin/env node

const fs = require('fs');
<<<<<<< HEAD
const path = require('path');
<<<<<<< HEAD
const { execSync } = require('child_process');

// Find files with syntax errors
function findFilesWithSyntaxErrors() {
  try {
    const result = execSync('find /workspace -name "*.tsx" -o -name "*.ts" | grep -v node_modules | xargs grep -l "Declaration or statement expected\\|Unexpected token" 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra closing braces at the end
    content = content.replace(/\n\s*}\s*}\s*}\s*$/g, '\n}');
    content = content.replace(/\n\s*}\s*}\s*$/g, '\n}');
    
    // Fix missing opening braces for useEffect
    content = content.replace(/useEffect\(\(\) => \{([^}]+)\}, \[\]\);/g, 'useEffect(() => {\n    $1\n  }, []);');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\s*\/\s*>\s*$/gm, '');
    
    // Fix incomplete function declarations
    content = content.replace(/export default function[^{]*\{[^}]*$/g, (match) => {
      if (!match.includes('}')) {
        return match + '\n  return null;\n}';
      }
      return match;
    });
    
    // Remove any remaining orphaned closing braces at the end
    const lines = content.split('\n');
    let fixedLines = [];
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      
      braceCount += openBraces - closeBraces;
      
      // If we have too many closing braces at the end, skip them
      if (i === lines.length - 1 && braceCount < 0) {
        // Skip extra closing braces
        continue;
      }
      
      fixedLines.push(line);
    }
    
    content = fixedLines.join('\n');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
=======

// Function to fix common TypeScript/JSX syntax errors
function fixSyntaxErrors(content) {
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^,}\n]+)(\s*)([}\n])/g, (match, key, value, space, end) => {
    if (value.trim() && !value.includes(',') && !value.includes(';') && end === '}') {
      return `${key}: ${value},${space}${end}`;
    }
    return match;
  });

  // Fix missing commas in interface properties
  content = content.replace(/(\w+):\s*(\w+)(\s*)([}\n])/g, (match, key, type, space, end) => {
    if (end === '}') {
      return `${key}: ${type};${space}${end}`;
    }
    return match;
  });

  // Fix missing commas in function parameters
  content = content.replace(/(\w+):\s*(\w+)(\s*)([)\n])/g, (match, param, type, space, end) => {
    if (end === ')') {
      return `${param}: ${type},${space}${end}`;
    }
    return match;
  });

  // Fix missing commas in array elements
  content = content.replace(/(\w+)(\s*)(\n\s*])/g, (match, item, space, end) => {
    return `${item},${space}${end}`;
  });

  // Fix missing semicolons in variable declarations
  content = content.replace(/(\w+):\s*(\w+)(\s*)([}\n])/g, (match, key, value, space, end) => {
    if (end === '\n' && !value.includes(';')) {
      return `${key}: ${value};${space}${end}`;
    }
    return match;
  });

  // Fix JSX fragment syntax
  content = content.replace(/<>([\s\S]*?)<\/>/g, '<React.Fragment>$1</React.Fragment>');

  // Fix missing closing tags
  content = content.replace(/(<div[^>]*>)([\s\S]*?)(<\/div>)/g, (match, open, content, close) => {
    const openCount = (content.match(/<div/g) || []).length;
    const closeCount = (content.match(/<\/div>/g) || []).length;
    if (openCount > closeCount) {
      return open + content + '</div>'.repeat(openCount - closeCount) + close;
    }
    return match;
  });

  return content;
}

// Function to fix merge conflict markers
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  return content;
}

// Function to fix React component issues
function fixReactIssues(content) {
  // Fix missing React import
  if (content.includes('React.FC') && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
  }

  // Fix missing component wrapper
  if (content.includes('return (') && !content.includes('const ') && !content.includes('function ')) {
    content = "const Component: React.FC = () => {\n" + content;
    content = content.replace(/export default [^;]+;?$/, '};\n\nexport default Component;');
  }

  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixMergeConflicts(content);
    content = fixSyntaxErrors(content);
    content = fixReactIssues(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    return false;
  }
}

<<<<<<< HEAD
// Main function
function main() {
  console.log('🔍 Finding files with syntax errors...');
  
  // Get files that might have syntax errors by checking specific patterns
  const files = [
    '/workspace/App.tsx',
    '/workspace/App_clean.tsx', 
    '/workspace/EnhancedFooter.tsx'
  ];
  
  // Add all app pages
  try {
    const appFiles = execSync('find /workspace/app -name "*.tsx" -o -name "*.ts" | head -50', { encoding: 'utf8' });
    files.push(...appFiles.trim().split('\n').filter(line => line.trim()));
  } catch (error) {
    console.log('Could not find app files');
  }
  
  console.log(`📁 Checking ${files.length} files for syntax errors...`);
  
  let fixed = 0;
  let failed = 0;
  
  files.forEach(file => {
    if (fs.existsSync(file)) {
      if (fixSyntaxErrors(file)) {
        fixed++;
      } else {
        // Check if file has syntax issues
        try {
          const content = fs.readFileSync(file, 'utf8');
          if (content.includes('}') && content.split('{').length < content.split('}').length) {
            console.log(`⚠️  ${file} may have brace mismatch`);
          }
        } catch (error) {
          // File might not exist or be readable
        }
=======

// Files with syntax errors
const filesToFix = [
  '/workspace/src/ai-crm/page.tsx',
  '/workspace/src/ai-customer-support-bot/page.tsx',
  '/workspace/src/ai-email-marketing/page.tsx',
  '/workspace/src/ai-ml-platform/page.tsx',
  '/workspace/src/ai-project-manager/page.tsx',
  '/workspace/src/ai-services/page.tsx',
  '/workspace/src/it-services/page.tsx',
  '/workspace/src/page-minimal.tsx',
  '/workspace/src/services/page.tsx'
];

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    console.log(`Fixing ${filePath}...`);
    
    // Fix stray ]; characters
    if (content.includes('};  ];')) {
      content = content.replace(/};\s*];/g, '}\n  ];');
      modified = true;
      console.log(`  Fixed stray ]; characters`);
    }
    
    // Fix missing closing braces in object literals
    content = content.replace(/(\w+):\s*'([^']*)'\s*(\];)/g, (match, key, value, closing) => {
      if (!match.includes('}')) {
        return `${key}: '${value}'\n    }${closing}`;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
      }
      return match;
    });
    
    // Fix missing closing braces in array elements
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*(\];)/g, (match, key, value, closing) => {
      if (!match.includes('}')) {
        return `${key}: [${value}]\n    }${closing}`;
      }
      return match;
    });
    
    // Fix property assignment syntax errors
    content = content.replace(/(\w+)\s*=\s*(\w+)\s*:/g, '$1: $2,');
    
    // Fix missing closing braces in JSX expressions
    content = content.replace(/\{([^}]*?)(\s*)(<\/[^>]*>)/g, (match, expr, whitespace, closingTag) => {
      if (!expr.includes('}') && !expr.trim().endsWith(';')) {
        return `{${expr}}${whitespace}${closingTag}`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  Fixed syntax errors in ${filePath}`);
      return true;
    } else {
      console.log(`  No syntax issues found in ${filePath}`);
      return false;
    }
<<<<<<< HEAD
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Fixed: ${fixed} files`);
  console.log(`  ❌ Failed: ${failed} files`);
  
  if (fixed > 0) {
    console.log('\n🎉 Syntax errors fixed! Running type check...');
    try {
      execSync('cd /workspace && pnpm run type-check 2>&1 | head -20', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  Type check completed with some issues remaining');
    }
  }
}

main();
=======
// Find all TypeScript/JSX files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

console.log('🔧 Fixing syntax errors...\n');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
}

console.log(`\n✅ Fixed syntax errors in ${fixedCount} files.`);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
