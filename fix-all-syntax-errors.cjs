#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax error fixing...\n');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix import statements with commas instead of semicolons
    if (content.includes('import {') && content.includes('",')) {
      content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*,/g, 'import { $1 } from "$2";');
      modified = true;
    }

    // Fix object properties with semicolons instead of colons
    if (content.includes(': \';\'')) {
      content = content.replace(/:\s*';\s*'/g, ': \'\'');
      modified = true;
    }

    // Fix missing commas in arrays
    if (content.includes('}\n    {')) {
      content = content.replace(/}\n\s*{/g, '},\n    {');
      modified = true;
    }

    // Fix duplicate export default statements
    const exportDefaultMatches = content.match(/export\s+default\s+/g);
    if (exportDefaultMatches && exportDefaultMatches.length > 1) {
      // Keep only the first export default (function declaration)
      const lines = content.split('\n');
      let foundFirst = false;
      const filteredLines = lines.filter(line => {
        if (line.trim().startsWith('export default')) {
          if (!foundFirst) {
            foundFirst = true;
            return true;
          }
          return false;
        }
        return true;
      });
      content = filteredLines.join('\n');
      modified = true;
    }

    // Fix JSX structure issues - remove extra closing divs
    if (content.includes('</motion.div>\n        </div>\n        </div>')) {
      content = content.replace('</motion.div>\n        </div>\n        </div>', '</motion.div>\n        </div>');
      modified = true;
    }

    // Fix missing imports
    if (content.includes('motion.') && !content.includes('import { motion')) {
      const importMatch = content.match(/import\s+React[^;]+;/);
      if (importMatch) {
        content = content.replace(importMatch[0], importMatch[0] + '\nimport { motion } from \'framer-motion\';');
        modified = true;
      }
    }

    // Fix missing useEffect import
    if (content.includes('useEffect(') && !content.includes('useEffect')) {
      const reactImport = content.match(/import\s+React[^;]+;/);
      if (reactImport) {
        content = content.replace(reactImport[0], reactImport[0].replace('React', 'React, { useEffect }'));
        modified = true;
      }
    }

    // Fix missing useLocation import
    if (content.includes('useLocation(') && !content.includes('useLocation')) {
      const routerImport = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]react-router-dom['"]/);
      if (routerImport) {
        content = content.replace(routerImport[0], routerImport[0].replace('}', ', useLocation }'));
        modified = true;
      }
    }

    // Fix missing AnimatePresence import
    if (content.includes('AnimatePresence') && !content.includes('AnimatePresence')) {
      const motionImport = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]framer-motion['"]/);
      if (motionImport) {
        content = content.replace(motionImport[0], motionImport[0].replace('}', ', AnimatePresence }'));
        modified = true;
      }
    }

    // Fix missing Button import
    if (content.includes('<Button') && !content.includes('import { Button')) {
      const imports = content.match(/import\s*{[^}]*}\s*from\s*['"][^'"]*['"];?\s*\n/g) || [];
      const lastImport = imports[imports.length - 1];
      if (lastImport) {
        content = content.replace(lastImport, lastImport + 'import { Button } from \'./ui/button\';\n');
        modified = true;
      }
    }

    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim();

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles() {
  try {
    const result = execSync('find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js" | head -50', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding source files:', error.message);
    return [];
  }
}

// Main execution
async function main() {
  console.log('🔍 Finding source files...');
  const sourceFiles = findSourceFiles();
  
  if (sourceFiles.length === 0) {
    console.log('✅ No source files found!');
    return;
  }

  console.log(`📋 Found ${sourceFiles.length} source files:\n`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const file of sourceFiles) {
    if (fixSyntaxErrors(file)) {
      console.log(`  ✅ Fixed: ${file}`);
      fixedCount++;
    } else {
      errorCount++;
    }
  }

  console.log(`\n📊 Fix Summary:`);
  console.log(`  ✅ Successfully fixed: ${fixedCount} files`);
  console.log(`  ❌ Errors: ${errorCount} files`);

  if (fixedCount > 0) {
    console.log('\n🔄 Adding fixed files to git...');
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ All fixed files added to git');
    } catch (error) {
      console.error('❌ Error adding files to git:', error.message);
    }
  }

  console.log('\n🎉 Syntax error fixing completed!');
}

main().catch(console.error);