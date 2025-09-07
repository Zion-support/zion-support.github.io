#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Quick Syntax Fixer...\n');

// Function to fix common syntax errors
function fixSyntaxErrors() {
  console.log('🔍 Scanning for syntax errors...\n');
  
  // Find all TypeScript/JavaScript files
  const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
    let files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
          files = files.concat(findFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Ignore errors for directories we can't read
    }
    return files;
  };

  const files = findFiles('.');
  console.log(`Found ${files.length} files to check\n`);

  let fixedCount = 0;
  let errorCount = 0;

  files.forEach(file => {
    try {
      // Check if file has syntax errors
      execSync(`node -c "${file}"`, { stdio: 'pipe' });
      console.log(`✅ ${file} - OK`);
    } catch (error) {
      console.log(`❌ ${file} - has syntax errors`);
      errorCount++;
      
      // Try to fix common issues
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix common merge conflict markers
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          console.log(`   🔧 Removing merge conflict markers from ${file}`);
          content = content.replace(/<<<<<<<.*?\n/g, '');
          content = content.replace(/=======.*?\n/g, '');
          content = content.replace(/>>>>>>>.*?\n/g, '');
          modified = true;
        }

        // Fix common quote issues
        if (content.includes("'") && content.includes('"')) {
          // Try to standardize quotes
          const singleQuoteCount = (content.match(/'/g) || []).length;
          const doubleQuoteCount = (content.match(/"/g) || []).length;
          
          if (singleQuoteCount > doubleQuoteCount) {
            content = content.replace(/"/g, "'");
            modified = true;
          }
        }

        // Fix common semicolon issues
        if (content.includes(';;')) {
          content = content.replace(/;;+/g, ';');
          modified = true;
        }

        // Fix common bracket issues
        if (content.includes('{{') || content.includes('}}')) {
          content = content.replace(/\{\{/g, '{');
          content = content.replace(/\}\}/g, '}');
          modified = true;
        }

        if (modified) {
          fs.writeFileSync(file, content);
          console.log(`   ✅ Fixed syntax issues in ${file}`);
          fixedCount++;
        }
      } catch (fixError) {
        console.log(`   ❌ Could not fix ${file}: ${fixError.message}`);
      }
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Files checked: ${files.length}`);
  console.log(`   Files with errors: ${errorCount}`);
  console.log(`   Files fixed: ${fixedCount}`);
  console.log(`   Files still broken: ${errorCount - fixedCount}`);
}

// Run the syntax fixer
fixSyntaxErrors();