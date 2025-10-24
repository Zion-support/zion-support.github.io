<<<<<<< HEAD

    
      inConflict = false
keepContent = false
continue

    
    // Check if file has merge conflicts
        inConflict = false
        keepHead = false
        continue
}
      if (inConflict && !keepHead) {
  continue; // Skip lines in the non-HEAD section
}
      fixedLines.push(line)
    }
    const fixedContent = fixedLines.join('\n')
    // Clean up any remaining syntax issues
    const cleanedContent = fixedContent
      .replace(/;\s*$/gm, '') // Remove trailing semicolons
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove multiple empty lines
    fs.writeFileSync(filePath, cleanedContent)
    return true
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
  }
}

  
  return resolvedLines.join('\n'
  // Fix JSX syntax issues: content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*$/gm, '<$1>'
=======
import fs from 'fs''
import path from 'path''
import { fileURLToPath } from 'url''
    let content = fs.readFileSync(filePath, 'utf8''
    const fixedContent = fixedLines.join('\n'';
      .replace(/;\s*$/gm, '''
      .replace(/\s+$/gm, '''
      .replace(/\n\s*\n\s*\n/g, '\n\n''
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules''
      } else if (item.endsWith('.tsx') || item.endsWith('.ts''
const appDir = path.join(__dirname, 'app''
if (fixMergeConflicts(path.join(__dirname, 'App.tsx''
    console.log('Fixed merge conflicts in App.tsx''
>>>>>>> origin/main
