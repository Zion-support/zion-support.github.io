import React from 'react'
#!/usr/bin/env node;
import fs from 'fs';';
import path from 'path';';
import { execSync } from 'child_process';
'
console.log('🔧 Fixing critical build errors...\n')
// Function to fix critical build errors;
function fixFile(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    let fixed = false
    // Fix critical syntax errors that prevent building;
const fixes = [
      // Fix unterminated string literals in type definitions
      {'
        pattern: /children:\s*ReactNode';/g,'
        replacement: 'children: ReactNode;'
      },
      {'
        pattern: /children:\s*React\.ReactNode';/g,'
        replacement: 'children: React.ReactNode;'
      },
      // Fix malformed interface properties
      {'
        pattern: /interface\s+(\w+)Props\s*\{\s*children:\s*ReactNode';/g,'
        replacement: 'interface $1Props {\n  children: ReactNode;'
      },
      {'
        pattern: /interface\s+(\w+)Props\s*\{\s*children:\s*React\.ReactNode';/g,'
        replacement: 'interface $1Props {\n  children: React.ReactNode;'
      },
      // Fix malformed function parameters
      {
        pattern: /\(\{\s*children,\s*className\s*=\s*""\s*\}\s*\)\s*=>\s*\{/g,'
        replacement: '({ children, className = "" }) => {'
      },
      // Fix malformed JSX attributes
      {
        pattern: /className=\`\$\{baseClasses\}\s*\$\{variantClasses\[variant\]\}\s*\$\{className\}\`/g,'
        replacement: 'className={`${baseClasses} ${variantClasses[variant]} ${className}`}'
      },
      // Fix malformed return statements
      {

      },
      // Fix malformed closing tags
      {)
        pattern: /;\s*<\/div>\s*\)\s*\}\s*export\s+default\s+Page\s*\}\s*export\s+default\s+Page\s*$/gm,'
        replacement: '  </div>\n  )\n}\n\nexport default Page'
      },
      // Fix malformed export statements
      {
        pattern: /export\s+default\s+function\s+Page\(\)\s*\{\s*return\s*\(\s*<React\.Fragment></React>\s*";/g,')
        replacement: 'export default function Page() {\n  return (\n    <React.Fragment></React>'
      },
      // Fix malformed JSX elements

}
    ]
    // Apply fixes
    fixes.forEach(fix => {)
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement)
        fixed = true
})
    // Additional specific fixes for common patterns'

      content = content.replace(/ReactNode';/g, 'ReactNode;');'
      content = content.replace(/React\.ReactNode';/g, 'React.ReactNode;')
      fixed = true
}
    // Fix malformed JSX attributes with template literals'
    if (content.includes('className={`${baseClasses} ${variantClasses[variant]} ${className}`}')) {
      // This is already correct, no need to fix
}
    // Fix duplicate export statements'
    if (content.includes('export default Page') && content.includes('export default')) {';
const lines = content.split('\n');
const filteredLines = []
      let foundExport = false
      for (const line of lines) {'
        if (line.includes('export default')) {
          if (!foundExport) {
            filteredLines.push(line)
            foundExport = true
} else {
          filteredLines.push(line)
}
      '
      content = filteredLines.join('\n')
      fixed = true
}
    if (fixed) {
      fs.writeFileSync(filePath, content)
      console.log(`✅ Fixed: ${filePath}`)
      return true
} catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`)
}
// Function to find all TypeScript/JavaScript files';
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {;
const files = [];
function traverse(currentDir) {;
const items = fs.readdirSync(currentDir)
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
const stat = fs.statSync(fullPath)
      '
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
}
}
  traverse(dir)
}
// Main execution
try {';
const files = findFiles('./app')
  let fixedCount = 0
  let totalCount = files.length
  console.log(`Found ${totalCount} files to check...\n`)
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++
}
  console.log(`\n🎉 Fixed ${fixedCount} out of ${totalCount} files`)
  // Try to build the project'
  console.log('\n🔍 Attempting to build project...')
  try {'
    execSync('npm run build', { stdio: 'pipe' });'
    console.log('✅ Build successful!')
  } catch (error) {'
    console.log('⚠️  Build still has issues, but we fixed many files')
} catch (error) {'
  console.error('❌ Error during fix process:', error.message)
  process.exit(1)
}

