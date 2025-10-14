#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {

  try {

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match merge conflict markers
    const conflictPattern = /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+/gs;
    
    // Replace merge conflicts by keeping the HEAD version (first part)
    content = content.replace(conflictPattern, (match, headContent, branchContent) => {
      modified = true;
      // Clean up the head content - remove extra semicolons and fix syntax
      let cleaned = headContent
        .replace(/;\s*$/, '') // Remove trailing semicolons
        .replace(/\s+$/, '') // Remove trailing whitespace
        .trim();
      
      // If it's just a semicolon or empty, use a default value
      if (!cleaned || cleaned === ';') {
        // Try to extract meaningful content from the branch version
        const branchCleaned = branchContent
          .replace(/;\s*$/, '')
          .replace(/\s+$/, '')
          .trim();
        
        if (branchCleaned && branchCleaned !== ';') {
          cleaned = branchCleaned;}
}
} catch (error) {

  console.error('Error:', error);}
}
}
        } else {

          // Default fallback based on file type
          if (filePath.includes('404')) {}
}
            cleaned = '404 - Page Not Found';}
          } else if (filePath.includes('about')) {
            cleaned = 'About Us';}
          } else if (filePath.includes('contact')) {
            cleaned = 'Contact Us';}
          } else {
            cleaned = 'Page';}
          }
        }
      }
      
      return cleaned;
    });
    
    // Fix any remaining syntax issues
    content = content
      .replace(/;\s*$/, '') // Remove trailing semicolons
      .replace(/\s+$/, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
      .trim();
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');}
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {`}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {

  let fixedCount = 0;
  
  try {

    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          fixedCount += fixFilesInDirectory(fullPath);}
}
} catch (error) {

  console.error('Error:', error);}
}
}
        }
      } else if (stat.isFile()) {

        // Process TypeScript, JavaScript, and JSX files
        if (/\.(tsx?|jsx?)$/.test(item)) {
          if (fixMergeConflicts(fullPath)) {}
}
            fixedCount++;}
          }
        }
      }
    }
  } catch (error) {`}
    console.error(`Error reading directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');

// Fix files in the main directories
const directories = [
  '/workspace/app',
  '/workspace/api',
  '/workspace'
];

let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {`}
    console.log(`Processing directory: ${dir}`);
    totalFixed += fixFilesInDirectory(dir);
  }
}
`
console.log(`\nMerge conflict resolution complete!`);`
console.log(`Total files fixed: ${totalFixed}`);

// Also fix any remaining files in the root
const rootFiles = [
  'App_minimal.tsx',
  'App_test.tsx', 
  'EnhancedFooter.tsx',
  'SidebarNavigation.tsx'
];

for (const file of rootFiles) {

  const filePath = path.join('/workspace', file);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {}
}
      totalFixed++;}
    }
  }
}
`
console.log(`Total files processed: ${totalFixed}`);`