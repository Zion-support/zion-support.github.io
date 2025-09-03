#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
console.log('🔧 Ultimate syntax fixing for all automation scripts...');
function fixAllSyntaxErrors(content) {
  // Fix object property syntax - replace semicolons with commas
  content = content.replace(/(\w+):\s*([^}]+);/g, '$1: $2,');
  // Fix array syntax - replace semicolons with commas
  content = content.replace(/\[\s*([^\[\]]*?);\s*([^\[\]]*?)\s*\]/gs, (match, before, after) => {return '[' + before.replace(/,/g, ',') + ',' + after.replace(/,/g, ',') + ']'});
  // Fix object syntax - replace semicolons with commas
  content = content.replace(/{\s*([^{}]*?);\s*([^{}]*?)\s*}/gs, (match, before, after) => {
    return '{' + before.replace(/,/g, ',') + ',' + after.replace(/,/g, ',') + '}'});
  // Fix specific patterns
  content = content
    .replace(/before:\s*{\s*}\s*;/g, 'before: {},')
    .replace(/after:\s*{\s*}\s*;/g, 'after: {},')
    .replace(/type: \s*"([^"]+)"\s*,/g, 'type: "$1",')
    .replace(/pattern:\s*([^}]+)\s*;/g, 'pattern: $1,')
    .replace(/replacement: \s*"([^"]+)"\s*,/g, 'replacement: "$1",')
    .replace(/memoryUsage: \s*(\d+)\s*,/g, 'memoryUsage: $1,')
    .replace(/cpuUsage: \s*(\d+)\s*,/g, 'cpuUsage: $1,')
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/console\.log\([^)]*\),\s*}/g, (match) => match.replace(/,$/, ';'))
    .replace(/require\("\\$1"\)/g, 'require("child_process")')
    .replace(/require\("\\$1"\)/g, 'require("fs")')
    .replace(/}\s*else\s*{/g, '} else {')
    .replace(/}\s*catch\s*\(/g, '} catch (')
    .replace(/}\s*finally\s*{/g, '} finally {')
    .replace(/\s*,\s*$/gm, ',')
    .replace(/,\s*,/g, ',')
    .replace(/\s+$/gm, '')
    .replace(/\n\s*\n\s*\n/g, '\n\n');
  return content}
const scriptsDir = path.join(__dirname);
const files = fs.readdirSync(scriptsDir).filter(f => f.endsWith('.cjs') || f.endsWith('.js'));
let fixedCount = 0;
files.forEach(file => {
  const filePath = path.join(scriptsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  content = fixAllSyntaxErrors(content);
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${file}`);
    fixedCount++}
});
console.log(`🎉 Ultimate syntax fixing complete! Fixed ${fixedCount} files.`);