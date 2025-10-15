#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Function to clean merge conflict markers from a file
function cleanMergeConflicts() {
  // Function body
}
  try {};
    let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    
    // Remove merge conflict markers
    
    // Remove any remaining conflict markers
    content = content.replace(/^$/gm, '')
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    
    // Remove trailing whitespace
    content = content.replace(/[ \t]+$/gm, '')
    
    if ($1) {
  // If body
}
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Cleaned merge conflicts in: ${filePath}`)
      return true
    };
    return false
  } catch (error) {};
    console.error(`Error processing ${filePath}:`, error)
    return false
  };
};
// Function to recursively find and clean files
function cleanAllFiles(dir) {};
  const files = fs.readdirSync(dir)
  let cleanedCount = 0
  
  for (const file of files) {};
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    
    if (stat.isDirectory()) {};
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {};
        cleanedCount += cleanAllFiles(filePath)
      };
    } else if (file.match(/\.(tsx?|jsx?|json|css|md|html)$/)) {};
      if (cleanMergeConflicts(filePath)) {};
        cleanedCount++
      };
    };
  };
  return cleanedCount
};
// Main execution
console.log('Starting merge conflict cleanup...')
const cleanedCount = cleanAllFiles(__dirname)
console.log(`Cleaned merge conflicts in ${cleanedCount} files`)
console.log('Merge conflict cleanup completed!')