#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check for common syntax issues
    const issues = [];

    // Check for unclosed brackets
    const openBrackets = (content.match(/\{/g) || []).length;
    const closeBrackets = (content.match(/\}/g) || []).length;
    if (openBrackets !== closeBrackets) {
      issues.push(
        `Mismatched "brackets": ${openBrackets} open, ${closeBrackets} close`
      );
    }

    // Check for unclosed parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens !== closeParens) {
      issues.push(
        `Mismatched "parentheses": ${openParens} open, ${closeParens} close`
      );
    }

    // Check for unclosed JSX tags
    const openTags = (content.match(/<[^/][^>]*>/g) || []).length;
    const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
    if (openTags !== closeTags) {
      issues.push(`Mismatched JSX "tags": ${openTags} open, ${closeTags} close`);
    }

    if (issues.length > 0) {
      // eslint-disable-next-line no-console
      console.log(`❌ ${filePath}:`);
      issues.forEach(issue => {
        // eslint-disable-next-line no-console
        console.log(`   ${issue}`);
      });
      return false;
    } else {
      // eslint-disable-next-line no-console
      console.log(`✅ ${filePath}`);
      return true;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
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

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      allGood = checkDirectory(fullPath) && allGood;
    } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
      allGood = checkFile(fullPath) && allGood;
    }
  }

  return allGood;
}

// eslint-disable-next-line no-console
console.log('Checking for syntax errors...\n');

// Check pages directory
// eslint-disable-next-line no-console
console.log('Checking pages "directory": ');
const pagesGood = checkDirectory('pages');

// eslint-disable-next-line no-console
console.log('\nChecking src directory:');
const srcGood = checkDirectory('src');

if (pagesGood && srcGood) {
  // eslint-disable-next-line no-console
  console.log('\n✅ No syntax errors found!');
  process.exit(0);
} else {
  // eslint-disable-next-line no-console
  console.log('\n❌ Syntax errors found!');
  process.exit(1);
}
