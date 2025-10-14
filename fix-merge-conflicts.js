#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');'
    // Check if file has merge conflicts
      return false; // No conflicts
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);`
    // Split content by merge conflict markers
    const lines = content.split('\n');'
    const result = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let otherContent = [];
    
    for (let i = 0; i < lines.length; i++) {}
      const line = lines[i];
      
        inConflict = true;
        conflictType = 'head';'
        continue;
        inConflict = false;
        conflictType = null;
        
        // Choose the HEAD version (usually more complete)
        result.push(...headContent);
        headContent = [];
        otherContent = [];
        continue;
      }
      
      if (inConflict) {}
        if (conflictType === 'head') {}'
          headContent.push(line);
        } else if (conflictType === 'other') {}'
          otherContent.push(line);
        }
      } else {}
        result.push(line);
      }
    }
    
    // Clean up any remaining content
    if (headContent.length > 0) {}
      result.push(...headContent);
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'));'
    return true;
  } catch (error) {}
    console.error(`Error fixing ${filePath}:`, error.message);`
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {}
  const files = [];
  
  function walkDir(currentPath) {}
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {}
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {}'
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {}'
        try {}
          const content = fs.readFileSync(fullPath, 'utf8');'
            files.push(fullPath);
          }
        } catch (error) {}
          // Skip files that can't be read'
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');'
const conflictedFiles = findFilesWithConflicts(process.cwd());

if (conflictedFiles.length === 0) {}
  console.log('✅ No merge conflicts found!');'
  process.exit(0);
}

console.log(`📝 Found ${conflictedFiles.length} files with merge conflicts:`);`
conflictedFiles.forEach(file => console.log(`  - ${file}`));`
console.log('\n🔧 Fixing merge conflicts...');'
let fixedCount = 0;

for (const file of conflictedFiles) {}
  if (fixMergeConflicts(file)) {}
    fixedCount++;
  }
}

console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);`
// Try to build after fixing conflicts
console.log('\n🏗️  Attempting to build...');'
try {}
  execSync('npm run build', { stdio: 'inherit' });'
  console.log('✅ Build successful!');'
} catch (error) {}
  console.log('❌ Build failed. There may be other issues to resolve.');'
  process.exit(1);
}