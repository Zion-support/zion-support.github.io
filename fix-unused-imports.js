import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
#!/usr/bin/env node
// Get all TypeScript/JavaScript files
const getFiles = $2;
    const lucideImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]lucide-react['"];?/g)
    if (lucideImports) {
      lucideImports.forEach(importLine => {
        const importMatch = importLine.match(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/)
        if (importMatch) {
          const imports = $2;
            const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`
            content = content.replace(importLine, newImport)
          }
        }
      })
    }
    // Remove unused React imports
    const reactImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]react['"];?/g)
    if (reactImports) {
      reactImports.forEach(importLine => {
        const importMatch = importLine.match(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]react['"];?/)
        if (importMatch) {
          const imports = $2;
            const newImport = `import { ${usedImports.join(', ')} } from 'react';`
            content = content.replace(importLine, newImport)
          }
        }
      })
    }
    // Remove unused react-helmet-async imports
    const helmetImports = content.match(/import\s*{\s*[^}]*}\s*from\s*['"]react-helmet-async['"];?/g)
    if (helmetImports) {
      helmetImports.forEach(importLine => {
        const importMatch = importLine.match(/import\s*{\s*([^}]*)\s*}\s*from\s*['"]react-helmet-async['"];?/)
        if (importMatch) {
          const imports = $2;
            const newImport = `import { ${usedImports.join(', ')} } from 'react-helmet-async';`
            content = content.replace(importLine, newImport)
          }
        }
      })
    }
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content)
      // eslint-disable-next-line no-console
    console.log(`Fixed unused imports in: ${filePath}`)
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error processing ${filePath}:`, error.message)
  }
}
// Main execution
const __dirname = $2;
  const appFiles = getFiles(appDir)
  appFiles.forEach(removeUnusedImports)
}
// eslint-disable-next-line no-console
    console.log('Unused imports cleanup completed!')