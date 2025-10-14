#!/usr/bin/env node
import fs from 'fs';'
import { execSync } from 'child_process';'
// Get all files with syntax errors
const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | head -100', { encoding: 'utf8' })'"
  .trim()
  .split('\n')'
  .filter(file => file.length > 0);
console.log(`Found ${files.length} files to check`);
let fixedCount = 0;
files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');'
    const originalContent = content;
    // Fix all malformed quote patterns systematically
    content = content.replace(/';/g, "';");'"
    content = content.replace(/';/g, "';");'"
    content = content.replace(/';/g, "';");'"
    content = content.replace(/';/g, "';");'"
    content = content.replace(/"/g, '"');'"
    content = content.replace(/'/g, "'");'"
    // Fix specific malformed import patterns
    content = content.replace(/import\s+([^']*?)';/g, "import $1';");'"
    content = content.replace(/import\s+([^"]*?)';/g, 'import $1';);'"
    content = content.replace(/from\s+'([^']*?)';/g, "from '$1';");'"
    content = content.replace(/from\s+"([^"]*?)';/g, 'from "$1';);'"
    // Fix JSX attributes
    content = content.replace(/className="([^"]*?)';/g, 'className="$1"');'"
    content = content.replace(/title="([^"]*?)';/g, 'title="$1"');'"
    content = content.replace(/description="([^"]*?)';/g, 'description="$1"');'"
    // Fix object properties
    content = content.replace(/title:\s*'([^']*?)';/g, "title: '$1',");'"
    content = content.replace(/description:\s*'([^']*?)';/g, "description: '$1',");'"
    content = content.replace(/icon:\s*([^,]*?)';/g, 'icon: $1,');'
    // Clean up any remaining malformed patterns
    content = content.replace(/;/g, ';');'
    content = content.replace(/';/g, ';');'
    content = content.replace(/;/g, ';');'
    // Fix unterminated strings
    content = content.replace(/'([^']*?)\n/g, "'$1'\n");'"
    content = content.replace(/"([^"]*?)\n/g, '"$1"\n');'"
    // Fix malformed JSX
    content = content.replace(/<([^>]*?)>;$/gm, '<$1>');'
    content = content.replace(/<\/([^>]*?)>;$/gm, '</$1>');'
    // Fix missing semicolons
    content = content.replace(/}\s*$/gm, '}');'
    content = content.replace(/;\s*$/gm, ';');'
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');'
    content = content.replace(/\s+\n/g, '\n');'
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});
console.log(`Fixed ${fixedCount} files`);