#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const issues = [];

    const openBrackets = (content.match(/\{/g) || []).length;
    const closeBrackets = (content.match(/\}/g) || []).length;
    if (openBrackets !== closeBrackets) {
      issues.push(`Mismatched brackets: ${openBrackets} open, ${closeBrackets} close`);
    }

    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
      issues.push(`Mismatched parentheses: ${openParens} open, ${closeParens} close`);
    }

    const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
    const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
    if (openTags !== closeTags) {
      issues.push(`Mismatched JSX tags: ${openTags} open, ${closeTags} close`);
    }

    if (issues.length > 0) {
      console.log(`❌ ${filePath}:`);
      for (const issue of issues) console.log(`  ${issue}`);
      return false;
    }

    console.log(`✅ ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ ${filePath}: Error reading file - ${error.message}`);
    return false;
  }
}

function checkDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let allGood = true;
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      allGood = checkDirectory(fullPath) && allGood;
    } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
      allGood = checkFile(fullPath) && allGood;
    }
  }
  return allGood;
}

console.log('Checking for syntax errors...');
console.log('Checking pages directory:');
const pagesGood = fs.existsSync('pages') ? checkDirectory('pages') : true;
console.log('Checking src directory:');
const srcGood = fs.existsSync('src') ? checkDirectory('src') : true;

if (pagesGood && srcGood) {
  console.log('✅ No syntax errors found!');
  process.exit(0);
}

console.log('❌ Syntax errors found!');
process.exit(1);

