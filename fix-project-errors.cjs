#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive project error fixer...');

// Function to recursively find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions));
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = 0;
  
  // Fix missing semicolons and colons
  fixed = fixed.replace(/\(\s*\)\s*=>\s*{/g, '() => {');
  fixed = fixed.replace(/:\s*{\s*;/g, ': {');
  
  // Fix property signatures
  fixed = fixed.replace(/action\?\s*:\s*{\s*;/g, 'action?: {');
  fixed = fixed.replace(/logout:\s*any\(\)\s*=>\s*Promise<any>;/g, 'logout: () => Promise<any>;');
  
  // Fix JSX expressions with multiple parent elements
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    // Wrap multiple root elements in a fragment
    const jsxMatch = fixed.match(/return\s*\(\s*([^)]+)\s*\)/);
    if (jsxMatch) {
      const jsxContent = jsxMatch[1];
      if (jsxContent.includes('><') && !jsxContent.includes('<>')) {
        fixed = fixed.replace(/return\s*\(\s*([^)]+)\s*\)/g, 'return (<>\n$1\n</>)');
        changes++;
      }
    }
  }
  
  // Fix parsing errors with commas
  fixed = fixed.replace(/,\s*,/g, ',');
  fixed = fixed.replace(/\(\s*,/g, '(');
  fixed = fixed.replace(/,\s*\)/g, ')');
  
  // Fix unterminated string literals
  fixed = fixed.replace(/(['"])([^'"]*)$/gm, '$1$2$1');
  
  // Fix unnecessary escape characters
  fixed = fixed.replace(/\\\[/g, '[');
  fixed = fixed.replace(/\\\//g, '/');
  fixed = fixed.replace(/\\\(/g, '(');
  fixed = fixed.replace(/\\\)/g, ')');
  
  return { content: fixed, changes };
}

// Function to fix unused imports and variables
function fixUnusedImports(content, filePath) {
  let fixed = content;
  let changes = 0;
  
  // Remove unused imports (basic approach)
  const lines = fixed.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip lines that are already commented out
    if (line.trim().startsWith('//')) {
      newLines.push(line);
      continue;
    }
    
    // Check for import statements
    const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"][^'"]+['"]/);
    if (importMatch) {
      const imports = importMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      for (const imp of imports) {
        const importName = imp.split(' as ')[0].trim();
        // Check if this import is used in the rest of the file
        const isUsed = fixed.includes(importName) && 
                      !line.includes(importName) && 
                      !importName.startsWith('//');
        
        if (isUsed) {
          usedImports.push(imp);
        }
      }
      
      if (usedImports.length === 0) {
        // Comment out the entire import line
        newLines.push(`// ${line} // Unused import`);
        changes++;
      } else if (usedImports.length < imports.length) {
        // Replace with only used imports
        const newImport = line.replace(importMatch[1], usedImports.join(', '));
        newLines.push(newImport);
        changes++;
      } else {
        newLines.push(line);
      }
    } else {
      newLines.push(line);
    }
  }
  
  return { content: newLines.join('\n'), changes };
}

// Function to fix React unescaped entities
function fixReactEntities(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix unescaped apostrophes
  fixed = fixed.replace(/(\w)'(\w)/g, '$1&apos;$2');
  fixed = fixed.replace(/(\w)'(\s)/g, '$1&apos;$2');
  fixed = fixed.replace(/(\s)'(\w)/g, '$1&apos;$2');
  
  return { content: fixed, changes };
}

// Function to fix TypeScript specific errors
function fixTypeScriptErrors(content, filePath) {
  let fixed = content;
  let changes = 0;
  
  if (filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
    // Fix empty object type
    fixed = fixed.replace(/:\s*\{\s*\}/g, ': Record<string, unknown>');
    
    // Fix any types (basic approach)
    fixed = fixed.replace(/:\s*any'/g, ': string');
    
    // Fix missing type annotations
    fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(/g, 'const $1 = (');
    
    // Fix property assignment errors
    fixed = fixed.replace(/:\s*{\s*$/gm, ': {');
  }
  
  return { content: fixed, changes };
}

// Main function to process all files
async function fixAllErrors() {
  try {
    console.log('🔍 Scanning for files to fix...');
    const files = findFiles('./src');
    console.log(`📁 Found ${files.length} files to process`);
    
    let totalFixes = 0;
    let filesFixed = 0;
    
    for (const filePath of files) {
      try {
        console.log(`🔧 Processing: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        let fileChanges = 0;
        
        // Apply fixes
        const syntaxResult = fixSyntaxErrors(content, filePath);
        content = syntaxResult.content;
        fileChanges += syntaxResult.changes;
        
        const importResult = fixUnusedImports(content, filePath);
        content = importResult.content;
        fileChanges += importResult.changes;
        
        const entityResult = fixReactEntities(content);
        content = entityResult.content;
        fileChanges += entityResult.changes;
        
        const tsResult = fixTypeScriptErrors(content, filePath);
        content = tsResult.content;
        fileChanges += tsResult.changes;
        
        if (fileChanges > 0) {
          fs.writeFileSync(filePath, content);
          console.log(`  ✅ Fixed ${fileChanges} issues in ${filePath}`);
          totalFixes += fileChanges;
          filesFixed++;
        }
        
      } catch (error) {
        console.log(`  ⚠️  Error processing ${filePath}: ${error.message}`);
      }
    }
    
    console.log(`\n✅ Error fixing completed!`);
    console.log(`📊 Total fixes applied: ${totalFixes}`);
    console.log(`📁 Files modified: ${filesFixed}`);
    
    // Run linting to check remaining issues
    console.log('\n🔍 Running linting to check remaining issues...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ Linting passed!');
    } catch (error) {
      console.log('⚠️  Some linting issues remain. Consider running: npm run lint -- --fix');
    }
    
  } catch (error) {
    console.error('❌ Error fixing failed:', error.message);
  }
}

// Run the error fixer
fixAllErrors();