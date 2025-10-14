#!/usr/bin/env node

const fs = require('fs');''
const path = require('path');''
const { execSync } = require('child_process');'
// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8');'
    // Remove merge conflict markers
    content = content.replace(/
    content = content.replace(/
    // Clean up any remaining conflict markers
    content = content.replace(/
    // Remove empty lines that might be left behind'
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');'
    // Write the cleaned content back'
    fs.writeFileSync(filePath, content, 'utf8');'
    console.log(`Cleaned: ${filePath}`);```
    return true
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);```
    return false
  }
}
async function main() {
  const patterns = ['
    '**/*.tsx''
    '**/*.ts''
    '**/*.js'
  ]
  for (const item of items) {
    const fullPath = path.join(dirPath, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories'
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {''
        cleanedCount += cleanDirectory(fullPath)
      }
    } else if (stat.isFile()) {
      // Only process TypeScript, JavaScript, and JSX files
      if (/\.(ts|tsx|js|jsx)$/.test(item)) {'
        const content = fs.readFileSync(fullPath, 'utf8');''
        if (content.includes('''
          if (cleanMergeConflicts(fullPath)) {
            cleanedCount++
          }
        }
      }
    }
  }
  console.log(`\nTotal files cleaned: ${totalCleaned}`)
}'
console.log('Starting merge conflict cleanup...');''
const cleanedCount = cleanDirectory('.');'
console.log(`Cleaned ${cleanedCount} files with merge conflicts.`);```
// Run linting to check if issues are resolved'
console.log('Running linting check...');'
try {'
  execSync('pnpm run lint', { stdio: 'inherit' });''
  console.log('✅ Linting passed!');'
} catch (error) {'
  console.log('❌ Linting still has issues, but merge conflicts should be cleaned.');'
}'