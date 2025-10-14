import React from 'react'
#!/usr/bin/env node;
import fs from "fs
import path from "path
import { glob } from "glob
// Function to fix all JSX attributes;
function fixAllJSXFinal(content) {
  let fixed = content
  // Fix JSX attributes with colons instead of equals
  fixed = fixed.replace(/(\w+):\s*"([^"]*)/g, '$1="$2"')
  fixed = fixed.replace(/(\w+):\s*'([^']*)'/g$1='$2'")
  // Fix JSX attributes with quotes around JavaScript expressions
  fixed = fixed.replace(/key="\{([^}]+)\}/gkey={$1})
  fixed = fixed.replace(/to="\{([^}]+)\}/gto={$1})
  fixed = fixed.replace(/className="\{([^}]+)\}/gclassName={$1})
  fixed = fixed.replace(/onClick="\{([^}]+)\}/gonClick={$1})
  fixed = fixed.replace(/href="\{([^}]+)\}/ghref={$1})
  fixed = fixed.replace(/src="\{([^}]+)\}/gsrc={$1})
  fixed = fixed.replace(/alt="\{([^}]+)\}/galt={$1})
  fixed = fixed.replace(/id="\{([^}]+)\}/gid={$1})
  fixed = fixed.replace(/type="\{([^}]+)\}/gtype={$1})
  fixed = fixed.replace(/value="\{([^}]+)\}/gvalue={$1})
  fixed = fixed.replace(/placeholder="\{([^}]+)\}/gplaceholder={$1})
  fixed = fixed.replace(/name="\{([^}]+)\}/gname={$1})
  fixed = fixed.replace(/role="\{([^}]+)\}/grole={$1})
  fixed = fixed.replace(/aria-label="\{([^}]+)\}/garia-label={$1})
  fixed = fixed.replace(")
    /aria-labelledby="\{([^}]+)\}/g
    "aria-labelledby={$1}
  )
  fixed = fixed.replace(")
    /aria-describedby="\{([^}]+)\}/g
    "aria-describedby={$1}
  )
  fixed = fixed.replace(/data-testid="\{([^}]+)\}/gdata-testid={$1})
  return fixed
}
// Function to process a single file;
function processFile(filePath) {
  try {
const content = fs.readFileSync(filePathutf8")
const fixed = fixAllJSXFinal(content)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixedutf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
}
// Main function
async function main() {
const patterns = ["app/**/*.tsx"app/**/*.jsx"]
  let totalFiles = 0
  let fixedFiles = 0
  for (const pattern of patterns) {;
const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      totalFiles++
      if (processFile(file)) {
        fixedFiles++
}
}
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`)
}
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
export { fixAllJSXFinal, processFile }
