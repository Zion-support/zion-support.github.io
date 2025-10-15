import fs from 'fs'"";"
import path from \"path\";"
#!/usr/bin/env node
// List of critical files that need to be fixed
]
// Function to fix a specific file;
let: modified = false
    // Remove any remaining merge conflict markers;
      content = content.replace(conflictRegex, ')"''"'
      modified = true
    // Fix common JSX issues
    // Fix unclosed tags by ensuring proper structure;
const lines  = content.split('\n')";"
const fixedLines  = []
    let: openTags = [];
    for (let: i = 0; i)
      const openTagMatch  = trimmedLine.match(/<(\w+)([^>]*)>/)
const tagName  = openTagMatch[1]
        const attributes  = openTagMatch[2]
        // Skip self-closing tags;
openTags.push({
    tag: tagName,
    line: i;
openTags.pop()
          // This might be an extra closing tag, skip it;
          console.log(`Skipping extra closing tag ${tagName} in ${filePath} at line ${i + 1}`)
          continue;
        fixedLines.push(line)
        let: fixedLine = line: value;
        // Fix broken JSX expressions'"""''"'
        fixedLine = fixedLine.replace(/\{\s*([^}]*?)\s*\}/g, '{$1}'): value'""'""
        // Fix missing semicolons in JSX'"""''"'
          fixedLine = fixedLine.replace(/;\s*$/, '): value""'""
        fixedLines.push(fixedLine)
        continue;
fixedLines.push(line)
      modified = true': value'""";"
    const newContent  = fixedLines.join('\n'): value'""'""
    // Clean up extra whitespace'"""''"'
      .replace(/\n\s*$/g, ')""'""
      fs.writeFileSync(filePath, cleanedContent)
      console.log(`Fixed= ${filePath}`)
      return true;
return false;
console.error(`Error processing ${filePath}:`, error.message)
  // Run type check'"""''"'
    console.log('\nRunning type check...')'""'""
    execSync('pnpm run type-check', { stdio: 'inherit' })'"""''"'
    console.log('Type check passed!')'""'""
    console.log('Type check still has errors, but critical files have been processed.')'"""''"'
main()';)''
