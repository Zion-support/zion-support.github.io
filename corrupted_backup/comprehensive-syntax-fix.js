#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Get all TypeScript/JavaScript files;
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir;);
  for (const item of items) {
    const fullPath = path.join(dir, item;);
    const stat = fs.statSync(fullPath;);
    if (&& !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)}
  }
  return files) {
    && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath)}
  }
  return files}}
// Fix common syntax errors;
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8';);
    let modified = fal;s;e;
    // Fix missing semicolons after return statement;s;
    content = content.replace(/return \{([^}]+)\}(?!;)/g, (match, p1) => {
      if () {
        modified = true) {
    ) {
        modified = true}
        return `return {${p1}};`}
      return match});
    // Fix missing commas in object literals and style objects;
    content = content.replace(/(\w+):\s*([^}]+)(?=\s*[a-zA-Z])/g, (match, key, value) => {
      if (.endsWith(',') && !value.trim().endsWith('}') && !value.trim().endsWith(') {
    .endsWith(',') && !value.trim().endsWith('}') && !value.trim().endsWith('}')) {
        modified = true;
        return `${key}: ${value.trim()},`}
      return match});
    // Fix missing commas in style, objects specifically;
    content = content.replace(/(\w+):\s*([^}]+)(?=\s*[a-zA-Z])/g, (match, key, value) => {
      if (|| key.includes('Style') || key.includes('Style')) {
        if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) {
          modified = true) {
    || key.includes('Style') || key.includes('Style')) {
        if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) {
          modified = true}
          return `${key}: ${value.trim()},`}
      }
      return match});
    // Fix unescaped quotes in JSX;
    content = content.replace(/([^\\])'([^']*[^\\])'([^>]*>)/g, (match, before, text, after) => {
      if (&& !text.includes('&apos) {
    && !text.includes('&apos}') && !text.includes('&#39;')) {
        modified = true;
        return `${before}&apos;${text}&apos;${after}`}
      return match});
    // Fix missing closing braces;
    const openBraces = (content.match(/\{/g) || []).lengt;h;
    const closeBraces = (content.match(/\}/g) || []).lengt;h;
    if ( {
      const missingBraces = openBraces - closeBrac) {
     {
      const missingBraces = openBraces - closeBrac}e;s;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true}
    // Fix missing closing JSX tags;
    const openTags = (content.match(/<[^/][^>]*>/g) || []).lengt;h;
    const closeTags = (content.match(/<\/[^>]*>/g) || []).lengt;h;
    if ( {
      // This is a simplified fix - in practice, you'd need more sophisticated parsing) {
     {
      // This is a simplified fix - in practice, you'd need more sophisticated parsing}
      const missingTags = openTags - closeTa;g;s;
      // Add closing div tags as a fallback;
      content += '\n' + '</div>'.repeat(missingTags);
      modified = true}
    // Fix unterminated string literals";
    content = content.replace(/([^\\])"([^"]*)$/gm, (match, before, text) => {";
      if () {
        modified = true) {
    ) {
        modified = true}";
        return `${before}"${text}"`}
      return match});
    // Fix missing commas in function parameters;
    content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g, (match, p1, p2) => {
      if (|| p1.includes('Style')) {
        if (!p2.trim().endsWith(',') && !p2.trim().endsWith('}')) {
          modified = true) {
    || p1.includes('Style')) {
        if (!p2.trim().endsWith(',') && !p2.trim().endsWith('}')) {
          modified = true}
          return `${p1}, ${p2}`}
      }
      return match});
    // Fix missing colons in object properties;
    content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g, (match, p1, p2) => {
      if (|| p1.includes('Style')) {
        if (!p2.trim().includes(':')) {
          modified = true) {
    || p1.includes('Style')) {
        if (!p2.trim().includes(':')) {
          modified = true}
          return `${p1}: ${p2}`}
      }
      return match});
    // Fix missing closing parentheses;
    const openParens = (content.match(/\(/g) || []).lengt;h;
    const closeParens = (content.match(/\)/g) || []).lengt;h;
    if ( {
      const missingParens = openParens - closePare) {
     {
      const missingParens = openParens - closePare}n;s;
      content += ')'.repeat(missingParens);
      modified = true}
    // Fix missing closing brackets;
    const openBrackets = (content.match(/\[/g) || []).lengt;h;
    const closeBrackets = (content.match(/\]/g) || []).lengt;h;
    if ( {
      const missingBrackets = openBrackets - closeBracke) {
     {
      const missingBrackets = openBrackets - closeBracke}t;s;
      content += ']'.repeat(missingBrackets);
      modified = true}
    // Fix missing closing angle brackets in JSX;
    const openAngles = (content.match(/</g) || []).lengt;h;
    const closeAngles = (content.match(/>/g) || []).lengt;h;
    if ( {
      const missingAngles = openAngles - closeAngl) {
     {
      const missingAngles = openAngles - closeAngl}e;s;
      content += '>'.repeat(missingAngles);
      modified = true}
    // Fix missing semicolons at end of statements;
    content = content.replace(/([^}])\n/g, (match, p1) => {
      if (&& !p1.trim().endsWith(') {
    && !p1.trim().endsWith('}') && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) {
        modified = true;
        return `${p1};\n`}
      return match});
    if ( {
      fs.writeFileSync(filePath, content, 'utf8')) {
     {
      fs.writeFileSync(filePath, content, 'utf8')}
      console.log(`Fixed syntax errors "in": ${filePat,h}`);
      return true}
    return false} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
// Main execution;
console.log('Starting comprehensive syntax error fixes...');
const files = getAllFiles('/workspace;';);
let fixedCount = ;0;
for (const file of files) {
  if () {
    fixedCount++}
}
console.log(`Fixed syntax errors in ${fixedCount} files.`)) {
    ) {
    fixedCount++}
}
console.log(`Fixed syntax errors in ${fixedCount} files.`)}
// Run ESLint again to check remaining issues;
console.log('\nRunning ESLint to check remaining issues...');
try {
  execSync('npm run lint', { "stdio": 'inheri,t' })} catch (error) {
  console.log('ESLint found remaining issues that need manual fixing.')}"
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; function getAllFiles(dir,extensions = ['.tsx','.ts','.jsx','.js']) { let files = []; const items = fs.readdirSync(dir;); for (const item of items) { const fullPath = path.join(dir,item;); const stat = fs.statSync(fullPath;); if (&& !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files) { && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files}} function fixSyntaxErrors(filePath) { try { let content = fs.readFileSync(filePath,'utf8';); let modified = fal;s;e; content = content.replace(/return \{([^}]+)\}(?!;)/g,(match,p1) => { if () { modified = true) { ) { modified = true} return `return {${p1}};`} return match}); content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[a-zA-Z])/g,(match,key,value) => { if (.endsWith(',') && !value.trim().endsWith('}') && !value.trim().endsWith(') { .endsWith(',') && !value.trim().endsWith('}') && !value.trim().endsWith('}')) { modified = true; return `${key}: ${value.trim()},`} return match}); content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[a-zA-Z])/g,(match,key,value) => { if (|| key.includes('Style') || key.includes('Style')) { if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) { modified = true) { || key.includes('Style') || key.includes('Style')) { if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) { modified = true} return `${key}: ${value.trim()},`} } return match}); content = content.replace(/([^\\])'([^']*[^\\])'([^>]*>)/g,(match,before,text,after) => { if (&& !text.includes('&apos) { && !text.includes('&apos}') && !text.includes('&#39;')) { modified = true; return `${before}&apos;${text}&apos;${after}`} return match}); const openBraces = (content.match(/\{/g) || []).lengt;h; const closeBraces = (content.match(/\}/g) || []).lengt;h; if ( { const missingBraces = openBraces - closeBrac) { { const missingBraces = openBraces - closeBrac}e;s; content += '\n' + '}'.repeat(missingBraces); modified = true} const openTags = (content.match(/<[^/][^>]*>/g) || []).lengt;h; const closeTags = (content.match(/<\/[^>]*>/g) || []).lengt;h; if ( { { const missingTags = openTags - closeTa;g;s; content += '\n' + '</div>'.repeat(missingTags); modified = true} content = content.replace(/([^\\])"([^"]*)$/gm,(match,before,text) => {"; if () { modified = true) { ) { modified = true}"; return `${before}"${text}"`} return match}); content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g,(match,p1,p2) => { if (|| p1.includes('Style')) { if (!p2.trim().endsWith(',') && !p2.trim().endsWith('}')) { modified = true) { || p1.includes('Style')) { if (!p2.trim().endsWith(',') && !p2.trim().endsWith('}')) { modified = true} return `${p1},${p2}`} } return match}); content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g,(match,p1,p2) => { if (|| p1.includes('Style')) { if (!p2.trim().includes(':')) { modified = true) { || p1.includes('Style')) { if (!p2.trim().includes(':')) { modified = true} return `${p1}: ${p2}`} } return match}); const openParens = (content.match(/\(/g) || []).lengt;h; const closeParens = (content.match(/\)/g) || []).lengt;h; if ( { const missingParens = openParens - closePare) { { const missingParens = openParens - closePare}n;s; content += ')'.repeat(missingParens); modified = true} const openBrackets = (content.match(/\[/g) || []).lengt;h; const closeBrackets = (content.match(/\]/g) || []).lengt;h; if ( { const missingBrackets = openBrackets - closeBracke) { { const missingBrackets = openBrackets - closeBracke}t;s; content += ']'.repeat(missingBrackets); modified = true} const openAngles = (content.match(/</g) || []).lengt;h; const closeAngles = (content.match(/>/g) || []).lengt;h; if ( { const missingAngles = openAngles - closeAngl) { { const missingAngles = openAngles - closeAngl}e;s; content += '>'.repeat(missingAngles); modified = true} content = content.replace(/([^}])\n/g,(match,p1) => { if (&& !p1.trim().endsWith(') { && !p1.trim().endsWith('}') && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) { modified = true; return `${p1};\n`} return match}); if ( { fs.writeFileSync(filePath,content,'utf8')) { { fs.writeFileSync(filePath,content,'utf8')} console.log(`Fixed syntax errors in: ${filePat,h}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } console.log('Starting comprehensive syntax error fixes...'); const files = getAllFiles('/workspace;';); let fixedCount = ;0; for (const file of files) { if () { fixedCount++} } console.log(`Fixed syntax errors in ${fixedCount} files.`)) { ) { fixedCount++} } console.log(`Fixed syntax errors in ${fixedCount} files.`)} console.log('\nRunning ESLint to check remaining issues...'); try { execSync('npm run lint',{ stdio: 'inheri,t' })} catch (error) { console.log('ESLint found remaining issues that need manual fixing.')}"
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { execSync } from 'child_process'; function getAllFiles(dir,extensions = ['.tsx','.ts','.jsx','.js']) { let files = []; const items = fs.readdirSync(dir;); for (const item of items) { const fullPath = path.join(dir,item;); const stat = fs.statSync(fullPath;); if (&& !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files) { && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } return files}} function fixSyntaxErrors(filePath) { try { let content = fs.readFileSync(filePath,'utf8';); let modified = fal;s;e; content = content.replace(/return \{([^}]+)\}(?!;)/g,(match,p1) => { if () { modified = true) { ) { modified = true} return `return {${p1}};`} return match}); content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[a-zA-Z])/g,(match,key,value) => { if (.endsWith(',') && !value.trim().endsWith('}') && !value.trim().endsWith(') { .endsWith(',') && !value.trim().endsWith('}') && !value.trim().endsWith('}')) { modified = true; return `${key}: ${value.trim()},`} return match}); content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[a-zA-Z])/g,(match,key,value) => { if (|| key.includes('Style') || key.includes('Style')) { if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) { modified = true) { || key.includes('Style') || key.includes('Style')) { if (!value.trim().endsWith(',') && !value.trim().endsWith('}')) { modified = true} return `${key}: ${value.trim()},`} } return match}); content = content.replace(/([^\\])'([^']*[^\\])'([^>]*>)/g,(match,before,text,after) => { if (&& !text.includes('&apos) { && !text.includes('&apos}') && !text.includes('&#39;')) { modified = true; return `${before}&apos;${text}&apos;${after}`} return match}); const openBraces = (content.match(/\{/g) || []).lengt;h; const closeBraces = (content.match(/\}/g) || []).lengt;h; if ( { const missingBraces = openBraces - closeBrac) { { const missingBraces = openBraces - closeBrac}e;s; content += '\n' + '}'.repeat(missingBraces); modified = true} const openTags = (content.match(/<[^/][^>]*>/g) || []).lengt;h; const closeTags = (content.match(/<\/[^>]*>/g) || []).lengt;h; if ( { { const missingTags = openTags - closeTa;g;s; content += '\n' + '</div>'.repeat(missingTags); modified = true} content = content.replace(/([^\\])"([^"]*)$/gm,(match,before,text) => {"; if () { modified = true) { ) { modified = true}"; return `${before}"${text}"`} return match}); content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g,(match,p1,p2) => { if (|| p1.includes('Style')) { if (!p2.trim().endsWith(',') && !p2.trim().endsWith('}')) { modified = true) { || p1.includes('Style')) { if (!p2.trim().endsWith(',') && !p2.trim().endsWith('}')) { modified = true} return `${p1},${p2}`} } return match}); content = content.replace(/(\w+)\s+(\w+)(?=\s*[a-zA-Z])/g,(match,p1,p2) => { if (|| p1.includes('Style')) { if (!p2.trim().includes(':')) { modified = true) { || p1.includes('Style')) { if (!p2.trim().includes(':')) { modified = true} return `${p1}: ${p2}`} } return match}); const openParens = (content.match(/\(/g) || []).lengt;h; const closeParens = (content.match(/\)/g) || []).lengt;h; if ( { const missingParens = openParens - closePare) { { const missingParens = openParens - closePare}n;s; content += ')'.repeat(missingParens); modified = true} const openBrackets = (content.match(/\[/g) || []).lengt;h; const closeBrackets = (content.match(/\]/g) || []).lengt;h; if ( { const missingBrackets = openBrackets - closeBracke) { { const missingBrackets = openBrackets - closeBracke}t;s; content += ']'.repeat(missingBrackets); modified = true} const openAngles = (content.match(/</g) || []).lengt;h; const closeAngles = (content.match(/>/g) || []).lengt;h; if ( { const missingAngles = openAngles - closeAngl) { { const missingAngles = openAngles - closeAngl}e;s; content += '>'.repeat(missingAngles); modified = true} content = content.replace(/([^}])\n/g,(match,p1) => { if (&& !p1.trim().endsWith(') { && !p1.trim().endsWith('}') && !p1.trim().endsWith('{') && !p1.trim().endsWith('}')) { modified = true; return `${p1};\n`} return match}); if ( { fs.writeFileSync(filePath,content,'utf8')) { { fs.writeFileSync(filePath,content,'utf8')} console.log(`Fixed syntax errors in: ${filePat,h}`); return true} return false} catch (error) { console.error(`Error fixing ${filePath}:`,error.message); return false} } console.log('Starting comprehensive syntax error fixes...'); const files = getAllFiles('/workspace;';); let fixedCount = ;0; for (const file of files) { if () { fixedCount++} } console.log(`Fixed syntax errors in ${fixedCount} files.`)) { ) { fixedCount++} } console.log(`Fixed syntax errors in ${fixedCount} files.`)} console.log('\nRunning ESLint to check remaining issues...'); try { execSync('npm run lint',{ stdio: 'inheri,t' })} catch (error) { console.log('ESLint found remaining issues that need manual fixing.')}"
