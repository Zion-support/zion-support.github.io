const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixJSXIssues(content) {
=======
function fixJSXIssues(conte, n, t) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  let fixed = content;
  
  // Fix JSX structure issues
  // Pattern: return (\n    <div> -> return (\n    <div>
  fixed = fixed.replace(/return \(\s*\n\s*<div/g, 'return (\n    <div');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/a>a>/g, '</a>');
  fixed = fixed.replace(/<\/h1>h1>/g, '</h1>');
  fixed = fixed.replace(/<\/h2>h2>/g, '</h2>');
  fixed = fixed.replace(/<\/h3>h3>/g, '</h3>');
  fixed = fixed.replace(/<\/p>p>/g, '</p>');
  fixed = fixed.replace(/<\/div>div>/g, '</div>');
  
  // Fix JSX fragments
  fixed = fixed.replace(/<>\s*\n\s*<div/g, '<>\n      <div');
  fixed = fixed.replace(/<>\s*\n\s*<Helmet/g, '<>\n      <Helmet');
  fixed = fixed.replace(/<>\s*\n\s*<Head/g, '<>\n      <Head');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/<div([^>]*)>\s*\{\/\*[^*]+\*\/\}\s*<\/div>\s*\n\s*<a/g, '<div$1>\n        <a');
  
  return fixed;
}

<<<<<<< HEAD
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXIssues(content);
    if (content !== fixed) {
      console.log(`Fixing JSX issues in: ${filePath}`);
      fs.writeFileSync(filePath, fixed);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
=======
function processFile(filePa, t, h) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXIssues(conte, n, t);
    if (content !== fixed) {
      console.log(`Fixing JSX issues in: ${ filePa, t, h }`);
      fs.writeFileSync(filePath, fixed);
      return true;
    }
  } catch (err, o, r) {
    console.error(`Error processing ${ filePa, t, h }:`, error.message);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  }
  return false;
}

<<<<<<< HEAD
function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
=======
function walkDirectory(d, i, r) {
  const files = fs.readdirSync(d, i, r);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
<<<<<<< HEAD
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
=======
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePa, t, h);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePa, t, h)) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting JSX issues fix...');
const fixedCount = walkDirectory('app');
<<<<<<< HEAD
console.log(`Fixed JSX issues in ${fixedCount} files`);
=======
console.log(`Fixed JSX issues in ${ fixedCou, n, t } files`);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
