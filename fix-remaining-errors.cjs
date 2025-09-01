>>>>>>> 3f7ebdbe1e1fa0e4c5dda1aa85d4701fd0f9aea5
const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
<<<<<<< HEAD
    // Fix missing types in function parameters
    content = content.replace(/\(entry: \)/g, '(entry: any)');
    content = content.replace(/\(entry: \)/g, '(entry: any)');
    content = content.replace(/\(key: keyof (\w+), value: \)/g, '(key: keyof $1, value: any)');
    content = content.replace(/\(key: keyof (\w+), value: \)/g, '(key: keyof $1, value: any)');
    
    // Fix malformed useState
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');
    
    // Fix malformed type annotations
    content = content.replace(/:\s*{;/g, ': {');
    content = content.replace(/:\s*};/g, ': };');
    
    // Fix malformed object properties
    content = content.replace(/(\w+)\s*:\s*{;/g, '$1: {');
    content = content.replace(/(\w+)\s*:\s*string\s*;/g, '$1: string;');
    content = content.replace(/(\w+)\s*:\s*number\s*;/g, '$1: number;');
    content = content.replace(/(\w+)\s*:\s*boolean\s*;/g, '$1: boolean;');
    
    // Fix malformed function parameters
    content = content.replace(/\(\s*(\w+)\s*:\s*string\s*\)/g, '($1: string)');
    content = content.replace(/\(\s*(\w+)\s*:\s*number\s*\)/g, '($1: number)');
    content = content.replace(/\(\s*(\w+)\s*:\s*boolean\s*\)/g, '($1: boolean)');
    
    // Fix malformed JSX
    content = content.replace(/<\/([^>]+)>/g, '</$1>');
    
    // Fix specific patterns
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2, $3, $4, $5 }');
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2, $3, $4 }');
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2, $3 }');
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2 }');
    
    // Fix malformed interface declarations
    content = content.replace(/interface\s+(\w+)\s*{;/g, 'interface $1 {');
    content = content.replace(/interface\s+(\w+)\s*{/g, 'interface $1 {');
    
    // Fix malformed type declarations
    content = content.replace(/type\s+(\w+)\s*=\s*{;/g, 'type $1 = {');
    content = content.replace(/type\s+(\w+)\s*=\s*{/g, 'type $1 = {');
    
    // Fix malformed function declarations
    content = content.replace(/export function (\w+)\(\.\.\.args: \[\]\): \{/g, 'export function $1() {');
    content = content.replace(/export function (\w+)\(\.\.\.args: \[\]\): \{/g, 'export function $1() {');
    
    // Fix malformed const declarations
    content = content.replace(/const\s+(\w+)\s*:\s*(\w+)\s*=\s*{;/g, 'const $1: $2 = {');
    content = content.replace(/const\s+(\w+)\s*:\s*(\w+)\s*=\s*{/g, 'const $1: $2 = {');
    
    // Fix malformed object literals
    content = content.replace(/{\s*(\w+)\s*:\s*([^,}]+)\s*}/g, '{ $1: $2 }');
    content = content.replace(/{\s*(\w+)\s*:\s*([^,}]+)\s*,/g, '{ $1: $2,');
    
    // Fix specific missing types
    content = content.replace(/forEach\(\(entry: \)/g, 'forEach((entry: any)');
    content = content.replace(/forEach\(\(entry: \)/g, 'forEach((entry: any)');
    content = content.replace(/forEach\(\((\w+): \)/g, 'forEach(($1: any)');
    content = content.replace(/forEach\(\((\w+): \)/g, 'forEach(($1: any)');
    
    // Fix malformed array types
    content = content.replace(/:\s*string\s*\[\s*\]/g, ': string[]');
    content = content.replace(/:\s*number\s*\[\s*\]/g, ': number[]');
    content = content.replace(/:\s*any\s*\[\s*\]/g, ': any[]');
    
    // Fix malformed generic types
    content = content.replace(/:\s*Promise\s*<\s*any\s*>/g, ': Promise<any>');
    content = content.replace(/:\s*Partial\s*<\s*(\w+)\s*>/g, ': Partial<$1>');
    
    // Write back if changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
=======
    // Fix double import statements
    content = content.replace(/import\s+\{\s*import\s+\{\s*([^}]+)\s*\}\s*from\s*['"`]([^'"`]+)['"`]/g, "import { $1 } from '$2'");
    
    // Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*\{\s*import\s+\{/g, "export default function $1() {\n  import {");
    
    // Fix missing closing braces
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*\{\s*$/gm, "export default function $1() {\n");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', '.next', 'out', 'dist'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting remaining syntax fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);
