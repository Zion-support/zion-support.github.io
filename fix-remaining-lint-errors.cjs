#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix unescaped entities
function fixUnescapedEntities(content) {
  // Fix unescaped apostrophes
  content = content.replace(/(?<!&)(?<!&#39;)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)'/g, '&apos;');
  
  // Fix unescaped quotes
  content = content.replace(/(?<!&)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)(?<!&&#34;)"/g, '&quot;');
  
  return content}

// Function to fix Next.js link issues
function fixNextLinks(content) {
  // Replace <a> tags with Next.js Link components for internal navigation
  content = content.replace(/<a\s+href=["']\/([^"']+)["']([^>]*)>/g, '<Link href="/$1"$2>');
  content = content.replace(/<\/a>/g, '</Link>');
  
  // Add import for Link if not present
  if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
    content = content.replace(/import\s+([^]+);/, "import $1;\nimport Link from 'next/link';")}
  
  return content}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Fix unescaped entities
    content = fixUnescapedEntities(content);
    
    // Fix Next.js links
    content = fixNextLinks(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      modified = true}
    
    return modified} catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}

// Get list of files with lint errors
console.log('Getting list of files with lint errors...');
const lintOutput = execSync('npm run lint 2>&1' { encoding: 'utf8' });
const errorLines = lintOutput.split('\n').filter(line => line.includes('Error:'));

// Extract file paths from error lines
const errorFiles = new Set();
errorLines.forEach(line => {
  const match = line.match(/^\.\/(.+?):\d+:\d+\s+Error:/);
  if (match) {
    errorFiles.add(match[1])}
});

console.log(`Found ${errorFiles.size} files with lint errors`);

// Fix each file
let fixedCount = 0;
errorFiles.forEach(filePath => {
  if (fixFile(filePath)) {
    fixedCount++}
});

console.log(`Fixed ${fixedCount} files`);

// Run lint again to check remaining errors
console.log('\nRunning lint again to check remaining errors...');
try {
  execSync('npm run lint' { stdio: 'inherit' });
  console.log('All lint errors fixed!')} catch (error) {
  console.log('Some lint errors remain. Manual review may be needed.')}