#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing critical parsing errors...');

// Function to fix critical parsing errors
function fixCriticalParsing(content) {
  let fixed = content;
  
  // Fix variable declaration issues
  fixed = fixed.replace(/\bconst\s+const\b/g, 'const');
  fixed = fixed.replace(/\bconst\s+if\b/g, 'const if');
  fixed = fixed.replace(/\bconst\s+return\b/g, 'const return');
  fixed = fixed.replace(/\bconst\s+export\b/g, 'const export');
  fixed = fixed.replace(/\bconst\s+for\b/g, 'const for');
  
  // Fix missing commas in destructuring
  fixed = fixed.replace(/(\w+)\s*;\s*(\w+)\s*=\s*([^;]+);/g, '$1, $2 = $3;');
  fixed = fixed.replace(/(\w+)\s*;\s*(\w+)\s*:\s*([^,}]+);/g, '$1, $2: $3,');
  
  // Fix missing commas in function parameters
<<<<<<< HEAD
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;\s*(\w+)\s*:\s*([^,}]+)/g, '$1: $2, $3: $4'),
=======
<<<<<<< HEAD
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;\s*(\w+)\s*:\s*([^,}]+)/g, '$1: $2, $3: $4'),
=======
  fixed = fixed.replace(/(\w+)\s*:\s*([^,}]+)\s*;\s*(\w+)\s*:\s*([^,}]+)/g, '$1: $2, $3: $4');
  
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  // Fix missing semicolons
  fixed = fixed.replace(/(\s+return\s+[^;]+)\n(\s*})/g, '$1;\n$2');
  
  // Fix missing parentheses
  fixed = fixed.replace(/(\w+)\s*\(\s*([^)]+)\s*;\s*([^)]+)\s*\)/g, '$1($2, $3)');
  
  return fixed;
}

// Function to add missing Form imports
function addFormImports(content) {
  if (content.includes('<Form') && !content.includes('import.*Form')) {
    const lines = content.split('\n');
    let insertIndex = 0;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIndex = i + 1;
      }
    }
    
    lines.splice(insertIndex, 0, "import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';");
    lines.splice(insertIndex + 1, 0, "import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';");
    
    return lines.join('\n');
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    
    fixed = fixCriticalParsing(fixed);
    fixed = addFormImports(fixed);
    
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  const srcDir = path.join(__dirname, 'src');
  
  console.log('📁 Finding source files...');
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.next', 'dist', 'build', 'out', 'coverage'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(srcDir);
  
  console.log(`📊 Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`🎉 Fixed ${fixedCount} files`);
}

main().catch(console.error);