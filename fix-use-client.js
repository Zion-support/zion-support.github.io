'use client';
#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix directive placement
function fixUseClientDirective(content) {}
  // Remove all directives first
  content = content.replace(/\s*/g, );
  content = content.replace(/\s*;?\s*/g, );
  
  // Check if this is a React component file that needs if (content.includes('export default function') || 
      content.includes('export function') ||
      content.includes('const ') && content.includes('= () =>')) {}
    // Add at the very top
    content = "\n" + content;
  }
  
  return content;
}

// Function to fix import statement issues
function fixImportStatements(content) {}
  // Fix malformed import statements
  content = content.replace(/import\s+.*?\s+from\s+from\s+/g, (match) => {}
    return match.replace(/\s+from\s+from\s+/, ' from ');
  });
  
  // Ensure imports have semicolons
  content = content.replace(/import\s+.*?from\s+['"][^'"]+['"]\s*(?!;)/g, (match) => {}
    if (!match.endsWith(';')) {}
      return match + ';';
    }
    return match;
  });
  
  return content;
}

// Function to fix JSX syntax
function fixJSXSyntax(content) {}
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*$/gm, '<></>');
  
  // Fix missing closing tags
  content = content.replace(/<div[^>
      </div>
      </div>
      </div>]*>(?!.*<\/div>)/g, (match) => {}
    return match + '\n      </div>';
  });
  
  // Fix unterminated string literals
  content = content.replace(/title\s*=\s*["']([^"']*?)\s*$/gm, 'title="$1"');
  content = content.replace(/className\s*=\s*["']([^"']*?)\s*$/gm, 'className="$1"');
  content = content.replace(/src\s*=\s*["']([^"']*?)\s*$/gm, 'src="$1"');
  content = content.replace(/alt\s*=\s*["']([^"']*?)\s*$/gm, 'alt="$1"');
  
  return content;
}

// Function to fix function syntax
function fixFunctionSyntax(content) {}
  // Fix missing function bodies
  content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{?\s*$/gm, 
    'export default function $1() {\n  return (\n    <div>Page content</div>\n  );\n}');
  
  // Fix missing return statements
  content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 
    'function $1() {\n  return (\n    <div>Content</div>\n  );\n}');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {}
  try {}
    // Skip broken and disabled directories
    if (filePath.includes('app-broken') || filePath.includes('app-disabled')) {}
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixUseClientDirective(content);
    content = fixImportStatements(content);
    content = fixJSXSyntax(content);
    content = fixFunctionSyntax(content);
    
    // Only write if content changed
    if (content !== originalContent) {}
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {}
  return (
    <div>Content</div>
  );
}
  return (
    <div>Content</div>
  );
}
  console.log('Starting directive fix...');
  
  // Get all TypeScript and JavaScript files, excluding broken/disabled directories
  const patterns = [
    'app/**/*.{ts,tsx,js,jsx}',
    'api/**/*.{ts,tsx,js,jsx}',
    'components/**/*.{ts,tsx,js,jsx}',
    '*.{ts,tsx,js,jsx}'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {}
    const files = await glob(pattern, {}
      cwd: process.cwd(),
      ignore: ['**/app-broken/**', '**/app-disabled/**']
    });
    for (const file of files) {}
      totalFiles++;
      if (processFile(file)) {}
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
  console.log('Use client directive fix completed!');
}

// Run the script
main().catch(console.error);