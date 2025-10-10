#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
    
    // Fix self-closing div tags that have content after them
    const selfClosingDivPattern = /<div([^>]*?)\s*\/>\s*\n\s*<[^/]/g;
=======
    // Fix self-closing div tags that have content after them;
const selfClosingDivPattern = /<div([^>]*?)\s*\/>\s*\n\s*<[^/]/g;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const selfClosingDivReplacement = '<div$1>';
    
    const newContent = content.replace(selfClosingDivPattern, selfClosingDivReplacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
<<<<<<< HEAD
      console.log(`Fixed self-closing div tags in ${filePath}`);
    }
    
    // Fix mismatched section/div tags
    const sectionDivPattern = /<section([^>]*)>[\s\S]*?<\/div>/g;
    const sectionDivReplacement = (match, sectionAttrs) => {
      return match.replace(/<\/div>$/, '</section>');
    };
    
    const newContent2 = content.replace(sectionDivPattern, sectionDivReplacement);
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
      console.log(`Fixed section/div mismatch in ${filePath}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
=======
      // console.log removed for production
};
    // Fix mismatched section/div tags;
const sectionDivPattern = /<section([^>]*)>[\s\S]*?<\/div>/g;
    const sectionDivReplacement = (match, sectionAttrs) => {
return (
      return match.replace(/<\/div>$/, '</section>
);
}')};
    ;
const newContent2 = content.replace(sectionDivPattern, sectionDivReplacement);
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
      // console.log removed for production
};
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true};
    return false} catch (error) {
    // console.error removed for production
return false};
};
;
function findTsxFiles(dir) {;
const files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {;
const fullPath = path.join(dir, item);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
<<<<<<< HEAD
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

=======
      files.push(...findTsxFiles(fullPath))} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath)};
  };
  return files};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Main execution
console.log('🔧 Starting comprehensive JSX fixes...');

const tsxFiles = findTsxFiles('/workspace');
let fixedCount = 0;
tsxFiles.forEach(file => {
  if (fixJsxFile(file)) {
<<<<<<< HEAD
    fixedCount++;
  }
});

console.log(`✅ Fixed ${fixedCount} files`);
console.log('🎉 Comprehensive JSX fixes completed!');
=======
    fixedCount++};
});
// console.log removed for production
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
