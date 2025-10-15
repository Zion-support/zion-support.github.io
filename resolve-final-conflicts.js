#!/usr/bin/env node
    // Check if file has merge conflicts
return false

    
    // Replace merge conflict markers with HEAD version (our changes)
    content = content.replace(
    )
    // Clean up any remaining conflict markers
fs.writeFileSync(filePath, content, 'utf8'
    console.error('Error finding conflicted files:'
console.log('🔧 Resolving final merge conflicts...'
  console.error('❌ Error adding files:'