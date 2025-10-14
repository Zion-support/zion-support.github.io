#!/usr/bin/env node

import fs from 'fs;'
import path from 'path;'
import { execSync } from 'child_process;'

console.log('🔧 Starting comprehensive syntax error fix...\n);'

// Function to fix common syntax errors in files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);'
    let originalContent = content;
    let fixed = false;

    // Fix common syntax errors
    const fixes = [
      // Fix malformed imports
      {
        pattern: /^import\s+React\s+from\s+"react"\s*$/gm,
        replacement: 'import React from "react"
      },
      // Fix malformed export statements
      {
        pattern: /^export\s+default\s+Page\s*$/gm,
        replacement: ''
      },
      // Fix malformed function declarations
      {
        pattern: /^const\s+(\w+):\s*"React\.FC<(\w+)Props>\s*=\s*\(\{/gm,
        replacement: const $1: React.FC<$2Props> = ({'
      },
      // Fix malformed string literals
      {
        pattern: /children:\s*"React\.ReactNode"/g,
        replacement: 'children: React.ReactNode
      },
      // Fix malformed JSX
      {
        pattern: /className=\`\$\{baseClasses\}\s*\$\{variantClasses\[variant\]\}\s*\$\{className\}\`/g,`
        replacement: 'className={`${baseClasses} ${variantClasses[variant]} ${className}`}'`
      },
      // Fix malformed object properties
      {
        pattern: /default:\s*"bg-white\/10",;/g,
        replacement: default: "bg-white/10",'
      },
      // Fix malformed return statements
      {
        pattern: /return\s*\(\s*<div\s+className=\`\$\{baseClasses\}\s*\$\{variantClasses\[variant\]\}\s*\$\{className\}\`>\s*\{children\}\s*<\/div>\s*\)/g,`
        replacement: 'return (\n    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>\n      {children}\n    </div>\n  )`
      },
      // Fix malformed interface declarations
      {
        pattern: /interface\s+(\w+)Props\s*\{\s*children:\s*"React\.ReactNode"/g,
        replacement: 'interface $1Props {\n  children: React.ReactNode'
      },
      // Fix malformed component declarations
      {
        pattern: /const\s+(\w+):\s*"React\.FC<(\w+)Props>\s*=\s*\(\{\s*children,\s*className\s*=\s*""\s*\}\s*\)\s*=>\s*\{/g,
        replacement: const $1: React.FC<$2Props> = ({\n  children,\n  className = ""\n}) => {'
      },
      // Fix malformed JSX elements
      {
        pattern: /<div\s+className=\`max-w-7xl\s+mx-auto\s+px-4\s+sm:\s*"px-6\s+l,g:px-8\s+\$\{className"\}\`>/g,`
        replacement: '<div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>`
      },
      // Fix malformed closing tags
      {
        pattern: /;\s*<\/div>\s*\)\s*\}\s*export\s+default\s+Page\s*\}\s*export\s+default\s+Page\s*$/gm,
        replacement: '  </div>\n  )\n}\n\nexport default $1'
      },
      // Fix malformed function parameters
      {
        pattern: /const\s+(\w+):\s*"React\.FC<(\w+)Props>\s*=\s*\(\{\s*children",\s*className\s*=\s*""\s*\}\s*\)\s*=>\s*\{""/g,
        replacement: const $1: React.FC<$2Props> = ({\n  children,\n  className = ""\n}) => {'
      },
      // Fix malformed return statements with JSX
      {
        pattern: /return\s*\(\s*<div\s+className=\`max-w-7xl\s+mx-auto\s+px-4\s+sm:\s*"px-6\s+l,g:px-8\s+\$\{className"\}\`>\s*\{children\};\s*<\/div>\s*\)\s*\}\s*export\s+default\s+Page\s*\}\s*export\s+default\s+Page\s*$/gm,`
        replacement: '  return (\n    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>\n      {children}\n    </div>\n  )\n}\n\nexport default $1`
      }
    ];

    // Apply fixes
    fixes.forEach(fix => {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        fixed = true;
      }
    });

    // Additional specific fixes for common patterns
    if (content.includes('"React.FC<') || content.includes("React.ReactNode"')) {'
      content = content.replace(/"React\.FC</g, React.FC<');'
      content = content.replace(/"React\.ReactNode"/g, React.ReactNode');'
      fixed = true;
    }

    // Fix malformed JSX attributes
    if (content.includes(className={`${baseClasses} ${variantClasses[variant]} ${className}`}')) {'`
      // This is already correct, no need to fix
    }

    // Fix duplicate export statements
    if (content.includes(export default Page') && content.includes('export default)) {'
      const lines = content.split('\n);'
      const filteredLines = [];
      let foundExport = false;
      
      for (const line of lines) {
        if (line.includes('export default)) {'
          if (!foundExport) {
            filteredLines.push(line);
            foundExport = true;
          }
        } else {
          filteredLines.push(line);
        }
      }
      
      content = filteredLines.join('\n);'
      fixed = true;
    }

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);`
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);`
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts, '.tsx', .js', '.jsx]) {'
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.) && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
try {
  const files = findFiles('./app');
  let fixedCount = 0;
  let totalCount = files.length;

  console.log(`Found ${totalCount} files to check...\n`);`

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\n🎉 Fixed ${fixedCount} out of ${totalCount} files`);`

  // Run linting to check if we fixed the issues
  console.log('\n🔍 Running linting check...');
  try {
    execSync('npm run lint', { stdio: pipe' });'
    console.log(✅ Linting passed!');'
  } catch (error) {
    console.log(⚠️  Linting still has issues, but we fixed many files');'
  }

  // Run type checking
  console.log(\n🔍 Running type checking...');'
  try {
    execSync(npm run type-check', { stdio: 'pipe });'
    console.log('✅ Type checking passed!);'
  } catch (error) {
    console.log('⚠️  Type checking still has issues, but we fixed many files);'
  }

} catch (error) {
  console.error('❌ Error during fix process:, error.message);'
  process.exit(1);
}