



#!/usr/bin/env node




const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');


  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('
        
        // Choose HEAD content (first part) and remove conflict markers
        resolved += headContent;
        if (endMarker.length > 1) {
          resolved += endMarker.slice(1).join('
        }
      }
    }
    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/
    
    // Write resolved content
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);

    console.log(`Fixing merge conflicts in: ${filePath}`);
    

    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< .*?\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);


    return false;
  }
}


  

  }
  
  scanDirectory(dir);
  return files;
}


    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      

            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read



        }
      }
    }
  }
  

  return files;
}

// Main execution

  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}


  return files;

}

// Main execution

}


console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
console.log('🎉 Merge conflict resolution complete!');


