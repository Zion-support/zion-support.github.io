const fs = require('fs');

// Read the file
const filePath = '/workspace/scripts/advanced-performance-optimizer.js';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all syntax errors
content = content.replace(/console\.log\('([^']*)'\);/g, "console.log('$1');");
content = content.replace(/const\s+/g, 'const ');
content = content.replace(/let\s+/g, 'let ');
content = content.replace(/var\s+/g, 'var ');
content = content.replace(/if\s+/g, 'if ');
content = content.replace(/for\s+/g, 'for ');
content = content.replace(/while\s+/g, 'while ');
content = content.replace(/function\s+/g, 'function ');
content = content.replace(/async\s+/g, 'async ');
content = content.replace(/await\s+/g, 'await ');
content = content.replace(/return\s+/g, 'return ');
content = content.replace(/throw\s+/g, 'throw ');
content = content.replace(/try\s+/g, 'try ');
content = content.replace(/catch\s+/g, 'catch ');
content = content.replace(/finally\s+/g, 'finally ');

// Fix specific patterns
content = content.replace(/console\.log\(`([^`]*)`\);/g, 'console.log(`$1`);');
content = content.replace(/console\.log\(`([^`]*)`\);/g, 'console.log(`$1`);');
content = content.replace(/console\.log\(`([^`]*)`\);/g, 'console.log(`$1`);');

// Fix string literals
content = content.replace(/'([^']*)';"/g, "'$1';");
content = content.replace(/"([^"]*)";"/g, '"$1";');
content = content.replace(/`([^`]*)`;"/g, '`$1`;');

// Fix object properties
content = content.replace(/(\w+):\s*(\w+),/g, '$1: $2,');
content = content.replace(/(\w+):\s*(\w+);/g, '$1: $2;');

// Fix function calls
content = content.replace(/execSync\(`([^`]*)`,\s*{/g, 'execSync(`$1`, {');
content = content.replace(/fs\.writeFileSync\(([^,]+),\s*([^,]+),\s*'utf8'\);/g, 'fs.writeFileSync($1, $2, "utf8");');

// Fix specific patterns
content = content.replace(/console\.log\('⚠️\s+Image optimization skipped=',/g, "console.log('⚠️  Image optimization skipped:',");
content = content.replace(/console\.log\('✅ Images optimized'\);/g, "console.log('✅ Images optimized');");
content = content.replace(/console\.log\('🎨 Generating critical CSS\.\.\.'\);/g, "console.log('🎨 Generating critical CSS...');");

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed advanced-performance-optimizer.js');