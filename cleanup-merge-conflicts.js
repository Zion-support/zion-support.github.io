#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to clean merge conflict markers from a file
function cleanMergeConflicts(filePath) {}
}try {}
} catch (error) {}
  console.error(error)
}let content = fs.readFileSync(filePath, 'utf8')
    let originalContent = content
    // Remove merge conflict markers
    content = content.replace(/^[\s\S]*?>>>>>>> [^\n]+$/gm, '')
    content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?[\s\S]*?>>>>>>> [^\n]+$/gm, '')
    content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?>>>>>>> [^\n]+$/gm, '')
    // Remove any remaining conflict markers
    content = content.replace(/^<<<<<<< [^\n]+$/gm, '')
    content = content.replace(/^$/gm, '')
    content = content.replace(/^>>>>>>> [^\n]+$/gm, '')
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    // Remove trailing whitespace
    content = content.replace(/[ \t]+$/gm, '')
    if (content !== originalContent) {}
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Cleaned merge conflicts in: ${filePath}`)
      return true
    }
    return false
  } catch (error) {}
    console.error(`Error cleaning ${filePath}:`, error.message)
    return false
  }
}
// Function to recursively find and clean files
function cleanDirectory(dirPath) {}
}let cleanedCount = 0
  try {}
} catch (error) {}
  console.error(error)
}const items = fs.readdirSync(dirPath)
    for (const item of items) {}
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {}
        // Skip node_modules and other build directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {}
          cleanedCount += cleanDirectory(fullPath)
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx')) {}
        if (cleanMergeConflicts(fullPath)) {}
          cleanedCount++
        }
      }
    }
  } catch (error) {}
    console.error(`Error reading directory ${dirPath}:`, error.message)
  }
  return cleanedCount
}
// Main execution
console.log('Starting merge conflict cleanup...')
const cleanedCount = cleanDirectory('./')
console.log(`Cleanup complete. Cleaned ${cleanedCount} files.`)