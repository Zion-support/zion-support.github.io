#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
console.log('🔧 Fixing syntax errors in automation scripts...');
const scriptsDir = path.join(__dirname);
const files = fs.readdirSync(scriptsDir).filter(f => f.endsWith('.cjs') || f.endsWith('.js'));
files.forEach(file => {const filePath = path.join(scriptsDir, file),let content = fs.readFileSync(filePath, 'utf8'),// Fix common syntax errors
  content = content
    .replace(/,\s*}/g, '}')  // Remove trailing commas before }
    .replace(/,\s*]/g, ']')  // Remove trailing commas before ]
    .replace(/console\.log\([^)]*\),\s*}/g, (match) => match.replace(/,$/, ';'))  // Fix console.log with comma
    .replace(/require\("\\$1"\)/g, 'require("child_process")')  // Fix require statements
    .replace(/require\("\\$1"\)/g, 'require("fs")')  // Fix require statements
    .replace(/;\s*}/g, '}')  // Remove semicolons before }
    .replace(/}\s*else\s*{/g, '} else {')  // Fix else statements
    .replace(/}\s*catch\s*\(/g, '} catch (')  // Fix catch statements
    .replace(/}\s*finally\s*{/g, '} finally {')  // Fix finally statements
    .replace(/\s*,\s*$/gm, ';')  // Replace trailing commas with semicolons
    .replace(/;\s*;/g, ';')  // Remove double semicolons
    .replace(/\s+$/gm, '')  // Remove trailing whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n');  // Remove multiple empty lines
  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed: ${file}`)});
console.log('🎉 Syntax fixing complete!');