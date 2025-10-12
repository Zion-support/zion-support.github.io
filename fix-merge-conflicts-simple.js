#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix merge conflicts in a file
    let content = fs.read File Sync(file Path, 'utf8');
    
    // Remove merge conflict markers and keep the content
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Write the cleaned content back
    fs.write File Sync(file Path, content);
    console.log(`Fixed merge conflicts in: ${file Path}`);
    return true;
    console.error(`Error fixing ${file Path}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
  const files = [];
  
    const items = fs.readdir Sync(current Path);
    
      const full Path = path.join(current Path, item);
      const stat = fs.stat Sync(full Path);
      
        walk Dir(full Path);
          const content = fs.read File Sync(full Path, 'utf8');
            files.push(full Path);
          }
          // Skip files that can't be read
        }
      }
    }
  }
  
  walk Dir(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const files With Conflicts = find Files With Merge Conflicts('/workspace');
console.log(`Found ${files With Conflicts.length} files with merge conflicts`);

let fixed Count = 0;
    fixed Count++;
  }
}

console.log(`Fixed merge conflicts in ${fixed Count} files`);
console.log('Merge conflict resolution completed!');
