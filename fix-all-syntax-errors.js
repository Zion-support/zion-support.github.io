
const fs = $2;
    const cleanedLines = []
    let hasUseClient = false
    let hasReactImport = false
    let hasOtherImports = false
    for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim()
      // Skip duplicate "use client" directives
      if (line === '"use client";' || line === "'use client';") {
        if (!hasUseClient) {
          cleanedLines.push('"use client";')
          hasUseClient = true
}
        modified = true
        continue
      }
      // Skip duplicate React imports
      if (line.startsWith('import React from "react"') || line.startsWith("import React from 'react'")) {
  if (!hasReactImport) {
          cleanedLines.push('import React from "react";')
          hasReactImport = true
}
        modified = true
        continue
      }
      // Keep other lines
      cleanedLines.push(lines[i])
    }
    // Reconstruct content with proper order
    if (modified) {
      const newContent = []
      // Add "use client" first if it exists
      if (hasUseClient) {
        newContent.push('"use client";')
      }
      // Add React import
      if (hasReactImport) {
        newContent.push('import React from "react";')
      }
      // Add other imports and content
      let inImportSection = true
      for (const line of cleanedLines) {
  if (line.trim() === '"use client";' || line.trim() === 'import React from "react";') {
          continue; // Skip as we already added them
}
        if (inImportSection && (line.startsWith('import ') || line.trim() === '')) {
          newContent.push(line)
        } else {
          inImportSection = false
          newContent.push(line)
        }
      }
      content = newContent.join('\n')
    }
    // Fix malformed JSX closing structures
    content = content.replace(/<\/div>\s*\)\s*\)/g, '\n    </div>\n  )\n}')
    content = content.replace(/<\/div>\s*\)\s*}/g, '\n    </div>\n  )\n}')
    // Fix extra closing div tags
    const extraDivPattern = $2;
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'))
allFiles.forEach(fixFile)
// eslint-disable-next-line no-console
    console.log('Comprehensive syntax error fixes completed!')