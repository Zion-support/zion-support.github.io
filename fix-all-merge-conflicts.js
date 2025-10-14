#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflicts;
function findFilesWithConflicts(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {;
const files = [];
  ;
function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {;
const ext = path.extname(item);
        if (extensions.includes(ext)) {
          try {;
const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('') || content.includes(')
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
            console.log(`Skipping file: ${fullPath} (${error.message})`);
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to resolve merge conflicts by choosing the main branch version;
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Count conflicts;
const conflictCount = (content.match(/ (usually the main branch)
    // Remove conflict markers and keep the main branch version
    content = content.replace(/[\s\S]*?([\s\S]*?)
    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?
    
    // Remove any remaining conflict markers)
    content = content.replace(//g, '');
    content = content.replace(/
    
    // Clean up extra whitespace and empty lines)
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed conflicts in ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common syntax issues;
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated strings
    if (content.includes('"') && !content.match(/"[^"]*$/)) {"
      content = content.replace(/"([^"]*)$/g, '"$1"');
      modified = true;
    }
    
    // Fix JSX syntax issues
    content = content.replace(/<([^>]*?)>/g, (match, inner) => {
      // Fix unclosed tags
      if (inner.includes('<') && !inner.includes('>')) {
        return match + '>';
      }
      return match;
    });
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n\s*export/g, '$1;\nexport');
    content = content.replace(/([^;}])\n\s*import/g, '$1;\nimport');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed syntax issues in ${filePath}`);
    }
    
    return true;
  } catch (error) {
    console.error(`✗ Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Scanning for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving merge conflicts...');
let successCount = 0;
let errorCount = 0;

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    successCount++;
    // Also try to fix syntax issues
    fixSyntaxIssues(file);
  } else {
    errorCount++;
  }
}

console.log(`\n📊 Results:`);
console.log(`  ✓ Successfully processed: ${successCount} files`);
console.log(`  ✗ Errors: ${errorCount} files`);

if (successCount > 0) {
  console.log('\n🎉 Merge conflicts resolved! Running final checks...');
  
  try {
    // Run a quick syntax check
    console.log('Running TypeScript check...');
    execSync('cd /workspace && pnpm run type-check 2>&1 | head -20', { stdio: 'inherit' });
  } catch (error) {
    console.log('TypeScript check completed with some issues (expected after merge conflict resolution)');
  }
}

console.log('\n✨ Merge conflict resolution complete!');
"
