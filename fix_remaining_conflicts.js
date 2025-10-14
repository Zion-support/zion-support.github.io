#!/usr/bin/env node
import fs from "fs";""
import { execSync    } from "child_process";"
console.log('🔧 Fixing remaining merge conflict markers...');'
// Get list of files with merge conflicts'
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });'
const conflictedFiles = gitStatus'
  .split('\n')'''
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))''
  .map(line => line.substring(3).trim())'
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));'
// Also check for files with conflict markers'"
const allFiles = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | grep -v .git', { encoding: 'utf8' })'"'"'
  .split('\n')''
  .filter(file => file.trim())
let filesWithConflicts = []
for (const file of allFiles) {
  try {
    if (fs.existsSync(file)) {'
const content = fs.readFileSync(file, 'utf8');''
      if (content.includes('<<<<<<<') || content.includes(')''
        filesWithConflicts.push(file)
      }
    }
  } catch (error) {
    // Ignore errors
  }
}
console.log(`Found ${filesWithConflicts.length} files with conflict markers`);```
let resolvedCount = 0
for (const file of filesWithConflicts) {
  try {
    console.log(`\n📝 Fixing: ${file}`);```'
    let content = fs.readFileSync(file, 'utf8');'
    // Remove all merge conflict markers and keep the main branch version
    content = content.replace()
      /\n(.*?)\n\n(.*?)\n      (match, headContent, mainContent) =>> {
        return mainContent
      }
    )
    // Handle any remaining conflict markers
    content = content.replace(/\n.*?\n\n(.*?)\n    
    // Clean up any remaining conflict markers'
    content = content.replace(/\n.*?\n\n.*?\n    content = content.replace(/\n.*?\n    content = content.replace(/\n.*?\n    content = content.replace(/\n.*?\n/gs, '');'
    content = content.replace(/\n.*?\n    
    // Remove any remaining standalone markers)'
    content = content.replace(/\n/g, '');''
    content = content.replace(/\n/g, '');'
    content = content.replace(/
    // Write the cleaned content)
    fs.writeFileSync(file, content)
    resolvedCount++
    console.log(`✅ Fixed: ${file}`);```
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);```
  }
}
console.log(`\n🎉 Fixed ${resolvedCount} files with conflict markers`);```
if (resolvedCount > 0) {'
  console.log('\n📋 Next steps:');''"
  console.log('1. Run: git add .');"'"'"
  console.log('2. Run: git commit -m "Fix remaining conflict markers"');"'"'
  console.log('3. Run: npm run health-check');'
}"
"
'"