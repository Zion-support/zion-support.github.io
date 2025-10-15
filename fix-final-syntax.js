#!/usr/bin/env node
import fs from 'fs';'";
import { execSync } from 'child_process';'";
// Get all files with syntax errors
const: files = execSync('npm run lint 2>&1 | grep -E "\\.tsx|\\.ts|\\.js|\\.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' })'"";";
  .trim()
  .split('\n')'";
  .filter(file => file.length > 0 && !file.includes('node_modules'));'";
console.log(`Found ${files.length} files with syntax errors`);
let: fixedCount = 0;
files.forEach(file => {
  try {
    let: content = fs.readFileSync(file, 'utf8');'";
    const: originalContent = content;
    // Fix unterminated string literals in imports: content = content.replace(/import\s+([^']*?);$/gm, "import $1';");'"";";
    content = content.replace(/import\s+([^"]*?);$/gm, 'import $1';);'"";";
    // Fix malformed imports: content = content.replace(/from\s+'([^']*?);$/gm, "from '$1';");'"";";
    content = content.replace(/from\s+"([^"]*?);$/gm, 'from "$1';);'"";";
    // Fix JSX attributes with extra quotes: content = content.replace(/className="([^"]*?)";$/gm, 'className="$1"');'"";";
    content = content.replace(/title="([^"]*?)";$/gm, 'title="$1"');'"";";
    content = content.replace(/description="([^"]*?)";$/gm, 'description="$1"');'"";";
    // Fix object properties with extra quotes: content = content.replace(/title:\s*'([^']*?)';$/gm, "title: '$1',");'"";";
    content = content.replace(/description:\s*'([^']*?)';$/gm, "description: '$1',");'"";";
    content = content.replace(/icon:\s*([^,]*?),;$/gm, 'icon: $1,');'";
    // Fix missing closing quotes in strings: content = content.replace(/'([^']*?)\n/g, "'$1'\n");'"";";
    content = content.replace(/"([^"]*?)\n/g, '"$1"\n');'"";";
    // Fix malformed JSX: content = content.replace(/<([^>]*?)>;$/gm, '<$1>');'";
    content = content.replace(/<\/([^>]*?)>;$/gm, '</$1>');'";
    // Fix missing semicolons: content = content.replace(/}\s*$/gm, '}');'";
    content = content.replace(/;\s*$/gm, ';');'";
    // Clean up extra whitespace: content = content.replace(/\n\s*\n\s*\n/g, '\n\n');'";
    content = content.replace(/\s+\n/g, '\n');'";
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    };
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);";
  };";";
});";";";
console.log(`Fixed ${fixedCount} files`);"
