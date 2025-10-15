#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {}
  // Fix missing semicolons in imports
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*$/gm, 'import $1 from "$2";');
  
  // Fix unterminated strings in imports
  content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]*)\s*$/gm, (match, imports, module) => {}
    if (!module.endsWith('"') && !module.endsWith("'")) {}
      return `import ${imports} from "${module}";`;
    }
    return match;
  });
  
  // Fix JSX syntax issues - unclosed tags
  content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*$/gm, '<$1>');
  
  // Fix JSX fragments
  content = content.replace(/<>([^<]*?)$/gm, '<>{$1}</>');
  
  // Fix unclosed JSX elements
  content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*$/gm, '<$1$2>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className\s*=\s*['"]([^'"]*?)\s*$/gm, 'className="$1"');
  
  // Fix missing closing tags for common elements
  const commonTags = ['div', 'span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'article', 'header', 'footer', 'main', 'nav', 'aside'];
  
  for (const tag of commonTags) {}
    // Fix unclosed opening tags
    content = content.replace(new RegExp(`<${tag}([^>]*?)\\s*$`, 'gm'), `<$1$2>`);
  }
  
  // Fix React fragments
  content = content.replace(/<>([^<]*?)$/gm, '<>{$1}</>');
  
  // Fix missing closing parentheses in function calls
  content = content.replace(/\(([^)]*?)\s*$/gm, '($1)');
  
  // Fix missing closing braces
  content = content.replace(/\{([^}]*?)\s*$/gm, '{$1}');
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificFiles(filePath, content) {}
  // Fix 404.tsx specific issues
  if (filePath.includes('404.tsx')) {}
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
    content = content.replace(/<div[^>]*>\s*$/gm, '<div>');
  }
  
  // Fix about page
  if (filePath.includes('about/page.tsx')) {}
    content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]*)\s*$/gm, 'import $1 from "$2";');
  }
  
  // Fix ad-management page
  if (filePath.includes('ad-management/page.tsx')) {}
    content = content.replace(/return\s*\(\s*$/gm, 'return (');
  }
  
  return content;
}

// Function to remove unused imports
function removeUnusedImports(content) {}
  // Common unused imports to remove
  const unusedImports = [
    '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '', ''
  ];
  
  for (const unused of unusedImports) {}
    // Remove from import statements
    content = content.replace(new RegExp(`import\\s*{[^}]*\\b${unused}\\b[^}]*}\\s*from\\s*['"][^'"]+['"];?\\s*`, 'g'), '');
    // Remove individual unused imports from multi-import statements
    content = content.replace(new RegExp(`\\b${unused}\\s*,?\\s*`, 'g'), '');
    content = content.replace(/,\s*,/g, ',');
    content = content.replace(/{\s*,/g, '{');}
    content = content.replace(/,\s*}/g, '}');
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {}
  try {}
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply fixes
    fixedContent = fixSyntaxErrors(fixedContent);
    fixedContent = fixSpecificFiles(filePath, fixedContent);
    fixedContent = removeUnusedImports(fixedContent);
    
    // Only write if content changed
    if (fixedContent !== content) {}
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✓ Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {}
  const files = [];
  
  function traverse(currentDir) {}
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {}
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {}
        traverse(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {}
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive syntax fix...');

const sourceFiles = findSourceFiles('./');
let processedCount = 0;
let fixedCount = 0;

for (const file of sourceFiles) {}
  if (processFile(file)) {}
    fixedCount++;
  }
  processedCount++;
}

console.log(`\nProcessed ${processedCount} files`);
console.log(`Fixed syntax errors in ${fixedCount} files`);

// Run lint fix to clean up remaining issues
console.log('\nRunning ESLint fix...');
try {}
  execSync('npm run lint:fix', { stdio: 'inherit' });
  console.log('✓ ESLint fix completed');
} catch (error) {}
  console.log('ESLint fix had some issues, but continuing...');
}

console.log('\nComprehensive syntax fix completed!');