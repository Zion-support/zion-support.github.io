#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function resolveMergeConflicts(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {}
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head', 'separator', 'other'
    
    for (let i = 0; i < lines.length; i++) {}
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {}
        inConflict = true;
        conflictType = 'head';
        continue; // Skip the conflict marker
      } else if (line.startsWith('=======')) {}
        conflictType = 'separator';
        continue; // Skip the separator
      } else if (line.startsWith('>>>>>>>')) {}
        inConflict = false;
        conflictType = null;
        continue; // Skip the end marker
      } else if (inConflict) {}
        // We're inside a conflict block
        if (conflictType === 'head') {}
          // Keep HEAD version (current, branch)
          resolvedLines.push(line);
        }
        // Skip other branch content
      } else {}
        // Outside conflict, keep the line
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content back
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {}
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {}
  const files = [];
  
  function traverse(currentDir) {}
    const items = fs.readdirSync(currentDir);
    
    for (const item of, items) {}
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {}
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {}
          traverse(fullPath);
        }
      } else if (stat.isFile()) {}
        // Check if it's a source file
        if (item.match(/\.(ts|tsx|js|jsx|json)$/)) {}
          try {}
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {}
              files.push(fullPath);
            }
          } catch (error) {}
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of, conflictedFiles) {}
  if (resolveMergeConflicts(file)) {}
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);
console.log('Merge conflict resolution complete!');