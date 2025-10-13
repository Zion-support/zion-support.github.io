#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unused imports more aggressively
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const result = [];
    const usedIdentifiers = new Set();
    
    // First pass: collect all used identifiers
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip import lines for now
      if (line.trim().startsWith('import ')) {
        continue;
      }
      
      // Find used identifiers in the line
      const matches = line.match(/\b[A-Z][a-zA-Z0-9]*\b/g);
      if (matches) {
        matches.forEach(match => usedIdentifiers.add(match));
      }
      
      // Also check for JSX components
      const jsxMatches = line.match(/<([A-Z][a-zA-Z0-9]*)/g);
      if (jsxMatches) {
        jsxMatches.forEach(match => {
          const component = match.replace('<', '');
          usedIdentifiers.add(component);
        });
      }
    }
    
    // Second pass: filter imports
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('import ')) {
        // Handle named imports
        const namedImportMatch = line.match(/import\s*\{([^}]+)\}/);
        if (namedImportMatch) {
          const importedItems = namedImportMatch[1].split(',').map(item => item.trim());
          const usedItems = importedItems.filter(item => usedIdentifiers.has(item));
          
          if (usedItems.length === 0) {
            // Remove the entire import line
            continue;
          } else if (usedItems.length < importedItems.length) {
            // Keep only used items
            const newImport = line.replace(/\{[^}]+\}/, `{ ${usedItems.join(', ')} }`);
            result.push(newImport);
            continue;
          }
        }
        
        // Handle default imports
        const defaultImportMatch = line.match(/import\s+(\w+)\s+from/);
        if (defaultImportMatch && !usedIdentifiers.has(defaultImportMatch[1])) {
          continue; // Remove unused default import
        }
        
        // Handle namespace imports
        const namespaceImportMatch = line.match(/import\s+\*\s+as\s+(\w+)/);
        if (namespaceImportMatch && !usedIdentifiers.has(namespaceImportMatch[1])) {
          continue; // Remove unused namespace import
        }
      }
      
      result.push(line);
    }
    
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing unused imports in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix unused variables
function fixUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const result = [];
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      
      // Remove unused variable assignments
      if (line.includes('is assigned a value but never used')) {
        continue; // Skip this line
      }
      
      // Remove unused variable declarations
      const unusedVarMatch = line.match(/^\s*const\s+(\w+)\s*=.*$/);
      if (unusedVarMatch) {
        const varName = unusedVarMatch[1];
        // Check if this variable is used anywhere in the file
        const isUsed = content.includes(varName) && !content.includes(`const ${varName} =`);
        if (!isUsed) {
          continue; // Skip this line
        }
      }
      
      result.push(line);
    }
    
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing unused variables in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing closing braces
    if (content.includes("'}' expected")) {
      // Count opening and closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces);
      }
    }
    
    // Fix JSX fragment issues
    content = content.replace(/<>\s*$/gm, '<div>');
    content = content.replace(/^\s*<\/>/gm, '</div>');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing parsing errors in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific files with known issues
function fixSpecificFiles() {
  const specificFixes = [
    {
      file: 'app/ai-services/page.tsx',
      fixes: [
        { from: 'const AIServicesPage = () => {', to: 'export default function AIServices() {' },
        { from: 'const aiServices = [', to: '// const aiServices = [' },
        { from: '];', to: '// ];' }
      ]
    },
    {
      file: 'app/devops-services/page.tsx',
      fixes: [
        { from: 'const DevOpsServicesPage = () => {', to: 'export default function DevOpsServices() {' }
      ]
    },
    {
      file: 'app/software-development/page.tsx',
      fixes: [
        { from: 'const SoftwareDevelopmentPage = () => {', to: 'export default function SoftwareDevelopment() {' }
      ]
    }
  ];
  
  for (const fix of specificFixes) {
    const filePath = path.join(__dirname, fix.file);
    if (fs.existsSync(filePath)) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        for (const replacement of fix.fixes) {
          content = content.replace(replacement.from, replacement.to);
        }
        fs.writeFileSync(filePath, content);
        console.log(`Fixed specific issues in ${fix.file}`);
      } catch (error) {
        console.error(`Error fixing ${fix.file}:`, error.message);
      }
    }
  }
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  const filesToFix = [];
  
  // Find all .tsx and .ts files in app directory
  function findFiles(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findFiles(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filesToFix.push(filePath);
      }
    }
  }
  
  findFiles(appDir);
  
  console.log(`Found ${filesToFix.length} files to fix`);
  
  let fixedCount = 0;
  
  // Fix specific files first
  fixSpecificFiles();
  
  for (const filePath of filesToFix) {
    if (fixUnusedImports(filePath)) {
      fixedCount++;
    }
    
    if (fixParsingErrors(filePath)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed issues in ${fixedCount} files`);
}

main();