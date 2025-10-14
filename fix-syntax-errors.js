#!/usr/bin/env node
import fs from 'fs';'
import { execSync } from 'child_process';'
// Get all files with syntax errors
const files = execSync('npm run lint 2>&1 | grep -E "\\.tsx|\\.ts|\\.js|\\.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' })'"
  .trim()
  .split('\n')'
  .filter(file => file.length > 0 && !file.includes('node_modules'));'
console.log(`Found ${files.length} files with syntax errors`);
let fixedCount = 0;
files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');'
    const originalContent = content;
    // Fix common syntax errors
    // Fix unterminated string literals with quotes
    content = content.replace(/'([^']*?)\n/g, "'$1'\n");'"
    content = content.replace(/"([^"]*?)\n/g, '"$1"\n');'"
    // Fix malformed object literals
    content = content.replace(/\{\s*'\s*([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*\}\s*,\s*\{\s*'\s*([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*\}\s*,\s*\{\s*'\s*([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*,\s*'([^']*?)'\s*:\s*'([^']*?)'\s*\}\s*\]/g, '
      (match, ...groups) => {
        const [title1, desc1, price1, features1, title2, desc2, price2, features2, title3, desc3, price3, features3] = groups;
        return `[
    {
      title: '${title1}','
      description: '${desc1}','
      price: '${price1}','
      features: [${features1}]
    },
    {
      title: '${title2}','
      description: '${desc2}','
      price: '${price2}','
      features: [${features2}]
    },
    {
      title: '${title3}','
      description: '${desc3}','
      price: '${price3}','
      features: [${features3}]
    }
  ]`;
      });
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*([^<]*?)\s*$/gm, '<>$1</>');'
    // Fix missing closing tags
    content = content.replace(/(<[^>]+>)\s*$/gm, '$1');'
    // Fix unterminated string literals in JSX
    content = content.replace(/title="([^"]*?)\n/g, 'title="$1"\n');'"
    content = content.replace(/description="([^"]*?)\n/g, 'description="$1"\n');'"
    // Fix malformed function calls
    content = content.replace(/\)\s*\}\s*'\s*$/gm, ')}\n');'
    // Fix missing semicolons and commas
    content = content.replace(/\}\s*\)\s*$/gm, '});\n');'
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');'
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