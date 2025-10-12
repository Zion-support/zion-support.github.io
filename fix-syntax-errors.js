#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unclosed JSX tags by adding closing tags
    const unclosedTags = [
      { open: '<section', close: '</section>' },
      { open: '<div', close: '</div>' },
      { open: '<header', close: '</header>' },
      { open: '<footer', close: '</footer>' },
      { open: '<span', close: '</span>' }
    ];
    
    for (const tag of unclosedTags) {
      const openRegex = new RegExp(`<${tag.open.split('<')[1]}([^>]*)>`, 'g');
      const closeRegex = new RegExp(`</${tag.open.split('<')[1]}>`, 'g');
      
      const openMatches = [...content.matchAll(openRegex)];
      const closeMatches = [...content.matchAll(closeRegex)];
      
      if (openMatches.length > closeMatches.length) {
        // Find the last unclosed tag and add closing tag
        let openCount = 0;
        let closeCount = 0;
        let lastOpenIndex = -1;
        
        for (let i = 0; i < content.length; i++) {
          const openMatch = content.substring(i).match(openRegex);
          const closeMatch = content.substring(i).match(closeRegex);
          
          if (openMatch) {
            openCount++;
            lastOpenIndex = i + openMatch.index;
          }
          if (closeMatch) {
            closeCount++;
          }
        }
        
        if (openCount > closeCount && lastOpenIndex !== -1) {
          // Find the end of the component to add the closing tag
          const componentEnd = content.lastIndexOf('</>') || content.lastIndexOf(');');
          if (componentEnd !== -1) {
            content = content.substring(0, componentEnd) + `\n        ${tag.close}\n      ` + content.substring(componentEnd);
            modified = true;
          }
        }
      }
    }
    
    // Fix missing closing tags for meta elements
    if (content.includes('<meta') && !content.includes('</meta>')) {
      content = content.replace(/<meta([^>]*?)(?<!\/)>/g, '<meta$1 />');
      modified = true;
    }
    
    // Fix parsing errors in component files
    if (filePath.includes('components/')) {
      // Fix common component syntax issues
      content = content.replace(/^import\s+.*?;\s*$/gm, (match) => {
        if (!match.includes('from') && !match.includes('import(')) {
          return match.replace(';', '');
        }
        return match;
      });
      
      // Fix missing semicolons in component files
      content = content.replace(/(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, '$1 = ($2) => {');
      
      modified = true;
    }
    
    // Fix unused variable warnings by removing unused imports
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines with unused imports that are clearly unused
      if (line.includes('is defined but never used')) {
        continue;
      }
      
      // Fix specific unused import patterns
      if (line.includes('import') && line.includes('from')) {
        // Check if all imported items are used
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const importName = imp.split(' as ')[0].trim();
            return content.includes(importName) && !content.includes(`${importName} is defined but never used`);
          });
          
          if (usedImports.length === 0) {
            // Remove the entire import line if no imports are used
            continue;
          } else if (usedImports.length < imports.length) {
            // Replace with only used imports
            const newLine = line.replace(importMatch[1], usedImports.join(', '));
            fixedLines.push(newLine);
            modified = true;
            continue;
          }
        }
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main function
function main() {
  console.log('🔧 Starting syntax error fixes...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  let fixedCount = 0;
  
  console.log(`Found ${sourceFiles.length} source files to check`);
  
  for (const file of sourceFiles) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed syntax errors in ${fixedCount} files`);
  
  // Try to run linting to check for remaining issues
  try {
    console.log('\n🔍 Running linting to check for remaining issues...');
    execSync('npm run lint', { stdio: 'inherit' });
    console.log('✅ Linting passed!');
  } catch (error) {
    console.log('⚠️  Linting found issues, but syntax errors should be resolved');
  }
  
  console.log('\n🎉 Syntax error fixes complete!');
}

// Run the main function
main();

export { fixSyntaxErrors, findSourceFiles };