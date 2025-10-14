#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🔧 Starting comprehensive error fixing...');'
// Function to recursively find all files
function getAllFiles(dirPath, arrayOfFiles = []) {}
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {)}
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {}
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(file)) {}'
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else if (file.match(/\.(tsx?|jsx?)$/)) {}
      arrayOfFiles.push(fullPath);
    }
  });
  
  return arrayOfFiles;
}

// Function to fix merge conflicts
function fixMergeConflicts(content) {}
  // Remove merge conflict markers and keep the HEAD version
  const lines = content.split('\n');'
  const result = [];
  let inConflict = false;
  let keepLines = false;
  
  for (let i = 0; i < lines.length; i++) {}
    const line = lines[i];
    
      inConflict = true;
      keepLines = true;
      continue;
      inConflict = false;
      keepLines = false;
      continue;
    }
    
    if (!inConflict || keepLines) {}
      result.push(line);
    }
  }
  
  return result.join('\n');'
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {}
  let fixed = content;
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+.*?from\s+['"][^'"]+['"]\s*(?!;)/g, (match) => {}"'
    if (!match.endsWith(';')) {}'
      return match + ';';'
    }
    return match;
  });
  
  // Fix unterminated string literals in JSX
  fixed = fixed.replace(/className="([^"]*?)\s*$/gm, (match, className) => {}"
    if (!className.endsWith('"')) {}"'
      return `className="${className}"`;`"
    }
    return match;
  });
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className=\s*$/gm, 'className=""');"'
  fixed = fixed.replace(/src=\s*$/gm, 'src=""');"'
  fixed = fixed.replace(/alt=\s*$/gm, 'alt=""');"'
  // Fix missing closing tags
  fixed = fixed.replace(/<div([^>]*)>\s*$/gm, (match) => {}
    if (!match.includes('/>')) {}'
      return match + '\n        </div>';'
    }
    return match;
  });
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{/g, 'export default function $1() {');}'
  // Fix React component declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');}'
  return fixed;
}

// Function to fix specific file patterns
function fixFilePatterns(content, filePath) {}
  let fixed = content;
  
  // Fix page.tsx files
  if (filePath.includes('/page.tsx')) {}'
    // Ensure proper export default
    if (!fixed.includes('export default')) {}'
      const componentName = path.basename(path.dirname(filePath))
        .split('-');'
        .map(word => word.charAt(0).toUpperCase() + word.slice(1));
        .join('') + 'Page';'
      fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{/g, `const ${componentName}: React.FC = () => {`);}`
      if (!fixed.includes('export default')) {}'
        fixed += `\n\nexport default ${componentName};`;`
      }
    }
  }
  
  return fixed;
}

// Main function to process all files
function processAllFiles() {}
  const allFiles = getAllFiles('/workspace');'
  let processedCount = 0;
  let errorCount = 0;
  
  console.log(`📁 Found ${allFiles.length} files to process...`);`
  allFiles.forEach(filePath => {)}
    try {}
      let content = fs.readFileSync(filePath, 'utf8');'
      let originalContent = content;
      
      // Apply fixes
      content = fixMergeConflicts(content);
      content = fixSyntaxErrors(content);
      content = fixFilePatterns(content, filePath);
      
      // Only write if content changed
      if (content !== originalContent) {}
        fs.writeFileSync(filePath, content, 'utf8');'
        processedCount++;
        console.log(`✅ Fixed: ${filePath}`);`
      }
      
    } catch (error) {}
      errorCount++;
      console.error(`❌ Error processing ${filePath}:`, error.message);`
    }
  });
  
  console.log(`\n🎉 Processing complete!`);`
  console.log(`✅ Files processed: ${processedCount}`);`
  console.log(`❌ Errors: ${errorCount}`);`
}

// Run the fix
processAllFiles();

console.log('\n🔍 Running additional cleanup...');'
// Clean up any remaining broken files
try {}
  execSync('find /workspace -name "*.broken" -delete', { stdio: 'inherit' });"'
  console.log('✅ Removed .broken files');'
} catch (error) {}
  console.log('ℹ️  No .broken files found');'
}

console.log('\n✨ Error fixing complete!');'