const fs = require($2);
const path = require($2);
console.log($2);
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync($2);
    const originalContent = $2;
    // Remove merge conflict markers and keep HEAD version
    content = content.replace($2);
    content = content.replace($2);
    if (content !== originalContent) {
      fs.writeFileSync($2);
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),
      return true
    }
    return false
  } catch (error) {
    console.log($2);
    return false
  }
}

// Function to get all files recursively
function getAllFiles(dir, extensions) {
  let files = $2;
  try {
    const items = fs.readdirSync($2);
    for (const item of items) {
      const fullPath = path.join($2);
      const stat = fs.statSync($2);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(getAllFiles(fullPath, extensions))
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  } catch (error) {
    // Skip directories that can't be read
  }
  return files
}

// Main execution
async function main() {
  console.log($2);
  const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js.json.md']),
  let fixedCount = $2;
  for (const file of files) {
    try {
      const content = fs.readFileSync($2);
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
        if (fixMergeConflicts(file)) {
          fixedCount++
        }
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  console.log($2);
  console.log('🎉 Merge conflict resolution completed!')
}

main().catch($2);