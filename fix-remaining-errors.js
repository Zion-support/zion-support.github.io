#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix remaining merge conflicts and syntax errors
function fixFileErrors(filePath) {

  try {

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix remaining merge conflict markers
    const conflictPattern = /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+/gs;
    content = content.replace(conflictPattern, (match, headContent, branchContent) => {
      modified = true;
      let cleaned = headContent
        .replace(/;\s*$/, '')
        .replace(/\s+$/, '')
        .trim();
      
      if (!cleaned || cleaned === ';') {
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
          cleaned = 'Content';}
        }
      }
      
      return cleaned;
    });
    
    // Fix unterminated string literals
    content = content.replace(/"[^"]*$/gm, (match) => {

      modified = true;"}
}
      return match + '"';}
    });
    
    // Fix unterminated template literals
    content = content.replace(/`[^`]*$/gm, (match) => {

      modified = true;`}
}
      return match + '`';}
    });
    
    // Fix JSX syntax issues
    content = content.replace(/<([^>]*?)\s*$/gm, (match, tagContent) => {

      if (tagContent && !tagContent.includes('>') && !tagContent.includes('/')) {}
}
        modified = true;`}
        return `<${tagContent}>`;
      }
      return match;
    });
    
    // Fix missing closing tags
    content = content.replace(/<span[^></span>]*>(?!.*<\/span>)/gm, (match) => {

      modified = true;}
}
      return match + '</span>';}
    });
    
    // Fix unterminated JSX expressions
    content = content.replace(/\{[^}]*$/gm, (match) => {

      if (match.length > 1) {}
}
        modified = true;}
        return match + '}';
      }
      return match;
    });
    
    // Fix common syntax errors
    content = content
      .replace(/;\s*$/, '') // Remove trailing semicolons
      .replace(/\s+$/, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
      .replace(/,\s*$/, '') // Remove trailing commas
      .replace(/{\s*$/, '{\n  // TODO: Add content\n}') // Fix empty objects
      .trim();
    
    // Fix specific patterns
    content = content
      .replace(/export\s+default\s+function\s+Page\(\)\s*{
\s*return\s*\(\s*<div[^>]*>\s*<h1[^>]*>\s*Page;\s*<\/h1>/g, "
        'export default function Page() {\n  return (\n    <div className="min-h-screen bg-white">\n      <h1 className="text-4xl font-bold text-gray-900 mb-8">\n        Page\n      </h1>')
      .replace(/export\s+default\s+function\s+NotFoundPage\(\)\s*{\s*return\s*\(\s*<div[^>]*>\s*<h1[^>]*>\s*404;\s*<\/h1>/g,"
        'export default function NotFoundPage() {\n  return (\n    <div className="min-h-screen bg-white">\n      <h1 className="text-4xl font-bold text-gray-900 mb-8">\n        404 - Page Not Found\n      </h1>');
    
    if (modified) {}
}
      fs.writeFileSync(filePath, content, 'utf8');`}
      console.log(`Fixed errors in: ${filePath}`);
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
          if (fixFileErrors(fullPath)) {}
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
console.log('Starting comprehensive error fixing...');

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

// Also fix specific problematic files
const specificFiles = [
  'SidebarNavigation.tsx',
  'api/newsletter/subscribe.js',
  'api/quotes.js',
  'api/shipping-rates.js',
  'api/subscribe.js',
  'api/wallet.js'
];

for (const file of specificFiles) {

  const filePath = path.join('/workspace', file);
  if (fs.existsSync(filePath)) {
    if (fixFileErrors(filePath)) {}
}
      totalFixed++;}
    }
  }
}
`
console.log(`\nComprehensive error fixing complete!`);`
console.log(`Total files fixed: ${totalFixed}`);"`