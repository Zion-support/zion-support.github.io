#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
console.log('🔧 Starting comprehensive error fixing - Phase 2...');'
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

// Function to fix specific syntax errors
function fixSyntaxErrors(content, filePath) {}
  let fixed = content;
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+.*?from\s+['"][^'"]+['"]\s*(?!;)/g, (match) => {}"'
    if (!match.endsWith(';')) {}'
      return match + ';';'
    }
    return match;
  });
  
  // Fix unterminated string literals
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
  // Fix JSX fragments
  fixed = fixed.replace(/<React.Fragment>([^<]*?)<\//g, '<React.Fragment>$1</React.Fragment>');'
  fixed = fixed.replace(/<\/>/g, '</React.Fragment>');'
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
  // Fix missing closing tags for common elements
  fixed = fixed.replace(/<section([^>]*)>\s*$/gm, (match) => {}
    if (!match.includes('/>')) {}'
      return match + '\n        </section>';'
    }
    return match;
  });
  
  fixed = fixed.replace(/<footer([^>]*)>\s*$/gm, (match) => {}
    if (!match.includes('/>')) {}'
      return match + '\n        </footer>';'
    }
    return match;
  });
  
  fixed = fixed.replace(/<header([^>]*)>\s*$/gm, (match) => {}
    if (!match.includes('/>')) {}'
      return match + '\n        </header>';'
    }
    return match;
  });
  
  // Fix malformed JSX expressions
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*$/gm, (match, tagName, attributes) => {}
    if (!match.includes('/>') && !match.includes('</')) {}'
      return match + `\n        </${tagName}>`;`
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
  
  // Fix malformed property assignments
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\{([^}]*?)\s*$/gm, (match, varName, content) => {}
    if (!content.endsWith('}')) {}'
      return `const ${varName} = {${content}};`;`
    }
    return match;
  });
  
  // Fix missing semicolons
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*[^;]+$/gm, (match) => {}
    if (!match.endsWith(';')) {}'
      return match + ';';'
    }
    return match;
  });
  
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
  
  // Fix component files
  if (filePath.includes('/components/')) {}'
    // Ensure proper React import
    if (!fixed.includes('import React')) {}'
      fixed = 'import React from \'react\';\n' + fixed;'
    }
  }
  
  return fixed;
}

// Function to fix broken files by removing them or fixing them
function fixBrokenFiles() {}
  const brokenDirs = ['/workspace/app-broken', '/workspace/app-disabled'];'
  brokenDirs.forEach(dir => {)}
    if (fs.existsSync(dir)) {}
      console.log(`🗑️  Removing broken directory: ${dir}`);`
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
  
  // Remove broken JS files
  const brokenFiles = []
    '/workspace/advanced-app-improvements.js','
    '/workspace/aggressive-cleanup.js',;'
    '/workspace/aggressive-fix.js';'
  ];
  
  brokenFiles.forEach(file => {)}
    if (fs.existsSync(file)) {}
      console.log(`🗑️  Removing broken file: ${file}`);`
      fs.unlinkSync(file);
    }
  });
}

// Main function to process all files
function processAllFiles() {}
  // First, remove broken files and directories
  fixBrokenFiles();
  
  const allFiles = getAllFiles('/workspace');'
  let processedCount = 0;
  let errorCount = 0;
  
  console.log(`📁 Found ${allFiles.length} files to process...`);`
  allFiles.forEach(filePath => {)}
    try {}
      let content = fs.readFileSync(filePath, 'utf8');'
      let originalContent = content;
      
      // Apply fixes
      content = fixSyntaxErrors(content, filePath);
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

console.log('\n✨ Error fixing complete!');'