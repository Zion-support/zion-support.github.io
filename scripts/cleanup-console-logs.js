import fs from 'fs'
import { glob } from 'glob'
// Function to remove console.log statements from a file
function removeConsoleLogs(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8')
    let _modified = false
    // Remove console.log statements (but keep console.error and console.warn for debugging)
    const _consoleLogRegex = /^\s*console\.log\([^)]*\);\s*$/gm
    const _consoleLogMultiLineRegex = /^\s*console\.log\(\s*[^)]*\s*\);\s*$/gm
//     const originalContent = content
    content = content.replace(consoleLogRegex, '')
    content = content.replace(consoleLogMultiLineRegex, '')
    if (content !== originalContent) {
      modified = true
      fs.writeFileSync(filePath, content, 'utf8')
function removeConsoleLogs(filePath) {/* TODO: Fix JSX expression */}
//       }
    
    return modified
  } catch (error) {/* TODO: Fix JSX expression */}
  }
}

// Function to process all TypeScript and JavaScript files
async function processFiles() {
async function processFiles() {/* TODO: Fix JSX expression */}
}
  const patterns = [
    'src/**/*.{ts,tsx,js,jsx}',
    'app/**/*.{ts,tsx,js,jsx}'
  ]
  let _totalFiles = 0
  let _modifiedFiles = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, { )
      ignore: [)
        '**/node_modules/**')
        '**/dist/**')
        '**/build/**')
        '**/*.test.*')
        '**/*.spec.*'
      ]
    })
    files.forEach(file => {
    )
      totalFiles++;)
      if (removeConsoleLogs(file)) {
        modifiedFiles++
  }
  for (const pattern of patterns) {/* TODO: Fix JSX expression */}
    })
    files.forEach(file => {/* TODO: Fix JSX expression */}
      })
    })
  })
//   //   //   }

// Run the cleanup
// processFiles().catch(console.error)