'use client'
#!/usr/bin/env node
'
import fs from 'fs';'
import { glob } from 'glob'

// Function to fix directive placement
function fixUseClientDirective(content) {}
  // Remove all directives first
  content = content.replace(/\s*/g, )
  content = content.replace(/\s*;?\s*/g, )
  '
  // Check if this is a React component file that needs if (content.includes('export default function') || '
      content.includes('export function') ||'
      (content.includes('const ') && content.includes('= () =>'))) {}
    // Add at the very top, before any imports
    content = "\n" + content
  }
  
  return content
}

// Function to fix import statement issues
function fixImportStatements(content) {}
  // Fix malformed import statements
  content = content.replace(/import\s+.*?\s+from\s+from\s+/g, (match) => {}
  })
  
  // Ensure imports have semicolons'"
  content = content.replace(/import\s+.*?from\s+['"][^'"]+['"]\s*(?!;)/g, (match) => {}'
    if (!match.endsWith(';')) {}
    }
  })
  
}

// Function to fix JSX syntax
function fixJSXSyntax(content) {}
  // Fix malformed JSX fragments'
  content = content.replace(/<>\s*$/gm, '<></>')
  
  // Fix missing closing tags
  content = content.replace(/<div[^>
      </div>
      </div>]*>(?!.*<\/div>)/g, (match) => {}
  })
  
  // Fix unterminated string literals'"
  content = content.replace(/title\s*=\s*["']([^"']*?)\s*$/gm, 'title="$1"');'"
  content = content.replace(/className\s*=\s*["']([^"']*?)\s*$/gm, 'className="$1"');'"
  content = content.replace(/src\s*=\s*["']([^"']*?)\s*$/gm, 'src="$1"');'"
  content = content.replace(/alt\s*=\s*["']([^"']*?)\s*$/gm, 'alt="$1"')
  
}

// Function to fix function syntax
function fixFunctionSyntax(content) {}
  // Fix missing function bodies
  content = content.replace(/export default function\s+(\w+)\s*\(\s*\)\s*{?\s*$/gm, '
    'export default function $1() {\n  return (\n    <div>Page content</div>\n  );\n}')
  
  // Fix missing return statements
  content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, '
    'function $1() {\n  return (\n    <div>Content</div>\n  );\n}')
  
}

// Function to process a single file
function processFile(filePath) {}
  try {}
    // Skip broken and disabled directories'
    if (filePath.includes('app-broken') || filePath.includes('app-disabled')) {}
    }
    '
    let content = fs.readFileSync(filePath, 'utf8')
    const originalContent = content
    
    // Apply fixes
    content = fixUseClientDirective(content)
    content = fixImportStatements(content)
    content = fixJSXSyntax(content)
    content = fixFunctionSyntax(content)
    
    // Only write if content changed
    if (content !== originalContent) {}'
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed: ${filePath}`)
    }
    
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)
  }
}

// Main function
async function main() {}
    <div>Content</div>
  )
}'
  console.log('Starting final directive fix...')
  
  // Get all TypeScript and JavaScript files, excluding broken/disabled directories
  const patterns = ['
    'app/**/*.{ts,tsx,js,jsx}','
    'api/**/*.{ts,tsx,js,jsx}','
    'components/**/*.{ts,tsx,js,jsx}','
    '*.{ts,tsx,js,jsx}'
  ]
  
  let totalFiles = 0
  let fixedFiles = 0
  
  for (const pattern of patterns) {}
    const files = await glob(pattern, {}
      cwd: process.cwd(),'
      ignore: ['**/app-broken/**', '**/app-disabled/**']
    })
    for (const file of files) {}
      totalFiles++
      if (processFile(file)) {}
        fixedFiles++
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);'
  console.log('Final directive fix completed!')
}

// Run the script
main().catch(console.error);'"