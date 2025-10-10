#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  searchDirectory(dir);
  return files;
}
// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining merge conflict markers
    content = content.replace(/    
    // Fix common JSX issues
    content = content.replace(/<meta([^ />]*?)(?<!\/)>/g, '<meta$1 />');
    content = content.replace(/<br([^ />]*?)(?<!\/)>/g, '<br$1 />');
    content = content.replace(/<img([^ />]*?)(?<!\/)>/g, '<img$1 />');
    content = content.replace(/<input([^ />]*?)(?<!\/)>/g, '<input$1 />');
    content = content.replace(/<hr([^ />]*?)(?<!\/)>/g, '<hr$1 />');
    // Fix unclosed JSX tags
    content = content.replace(/<([A-Z][a-zA-Z0-9]*)([^>]*?)(?<!\/)>/g, (match, tagName, attributes) => {
      if (match.endsWith('/>')) return match;
      return `<${tagName}${attributes}>`;
    });
    // Fix common syntax errors
    content = content.replace(/,\s*\)/g, ')');
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    // Remove empty lines with just whitespace
    content = content.replace(/^\s*\n/gm, '');
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  const filesWithConflicts = findFilesWithConflicts('.');
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  if (filesWithConflicts.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  let fixedCount = 0;
  for (const file of filesWithConflicts) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  }
  console.log(`\n🎉 Fixed merge conflicts in ${fixedCount}/${filesWithConflicts.length} files`);
  // Try to build to check if issues are resolved
  console.log('\n🔨 Testing build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful!');
  } catch (error) {
    console.log('⚠️  Build still has issues, but merge conflicts are resolved');
  }
}
main();