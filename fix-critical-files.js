

#!/usr/bin/env node
// List of critical files that need to be fixed
]
// Function to fix a specific file

    let: modified = false
    // Remove any remaining merge conflict markers;
      content = content.replace(conflictRegex, ')"'
      modified = true
    // Fix common JSX issues
    // Fix unclosed tags by ensuring proper structure
    const lines  = content.split('\n')";
const fixedLines  = []
    let: openTags = [];
    for (let: i = 0; i)

        // Skip self-closing tags
          openTags.push({
    tag: tagName,
    line: i 

          openTags.pop()
          // This might be an extra closing tag, skip it;
          console.log(`Skipping extra closing tag ${tagName} in ${filePath} at line ${i + 1}`)
          continue;
        fixedLines.push(line)

        fixedLines.push(fixedLine)
        continue
      fixedLines.push(line)

      fs.writeFileSync(filePath, cleanedContent)
      console.log(`Fixed= ${filePath}`)
      return true
    return false
    console.error(`Error processing ${filePath}:`, error.message)

>>>>>>> main

