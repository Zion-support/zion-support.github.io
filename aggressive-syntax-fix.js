#!/usr/bin/env node;
import fs from 'fs';
import glob from 'glob';
// Function to fix syntax errors aggressively
function fixSyntaxErrors(content) {
  let fixed = content
  // Fix malformed import statements with 'use client' - more comprehensive patterns'
  fixed = fixed.replace(/import\s+([^']+)'([^']+)'use client'/g, "import $2 from '$2'\n'use client'")"'
  fixed = fixed.replace(/import\s+([^']+)'([^']+)'use client'/g, "import $2 from '$2';\n'use client'");"'
  fixed = fixed.replace(/import\s+([^']+)'([^']+)'use client'/g, "import $2 from '$2';\n'use client'");"'
  
  // Fix missing semicolons after import statements - more comprehensive
  fixed = fixed.replace(/import\s+[^]+(?!)\n/g, (match) => {
    if (!match.trim().endsWith('')) {'
      return match.trim() + ';\n';'
    }
    return match;
  });
  // Fix specific patterns like "import React from 'react'use client'""'
  fixed = fixed.replace(/import\s+React\s+from\s+'react'use client'/g, "import React from 'react';\n'use client'");"'
  fixed = fixed.replace(/import\s+([^']+)\s+from\s+'([^']+)'use client'/g, "import $2 from '$2';\n'use client'");"'
  
  // Fix unterminated string literals in object properties - more comprehensive
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"([^,}\n]*)/g, (match, key, value, rest) => {"
    if (rest.includes('"') && !rest.includes('",')) {"'
      return `${key}: "${value}",`"
    }
    return match;
  });
  // Fix unterminated string literals with missing closing quotes - more comprehensive
  fixed = fixed.replace(/(\w+):\s*"([^"]*)(?![^"]*")/g, (match, key, value) => {"
    if (!value.endsWith('"')) {"'
      return `${key}: "${value}"`"
    }
    return match;
  });
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*(?=\w+:)/g, '$1: "$2",')"'
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$2></>')'
  
  // Fix missing closing brackets in object literals
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*}(?=\s*[}\]])/g, '$1: "$2"\n  }')"'
  
  // Fix missing semicolons after variable declarations
  fixed = fixed.replace(/(const|let|var)\s+\w+\s*=\s*[^]+(?!)\n/g, (match) => {
    if (!match.trim().endsWith('')) {'
      return match.trim() + ';\n';'
    }
    return match;
  });
  // Fix specific unterminated string patterns
  fixed = fixed.replace(/(\w+):\s*"([^"]*)(?=\s*[^"]*$)/gm, (match, key, value) => {"
    if (!value.endsWith('"')) {"'
      return `${key}: "${value}"`"
    }
    return match;
  });
  // Fix malformed object properties with missing quotes
  fixed = fixed.replace(/(\w+):\s*([^",\n}]+)(?=\s*[,}\n])/g, (match, key, value) => {"
    if (!value.startsWith('"') && !value.startsWith('{') && !value.startsWith('[') && !value.match(/^\d+$/) && !value.match(/^(true|false|null)$/)) {"'
      return `${key}: "${value.trim()}"`"
    }
    return match;
  });
  // Fix missing commas between object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*(?=\w+:)/g, '$1: "$2",')"'
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+)=([^"'\s>]+)(?=\s*[>\/])/g, '$1="$2"')"'
  
  // Fix missing closing quotes in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*)(?=\s*[>\/])/g, '$1="$2"')"'
  
  // Fix octal literals
  fixed = fixed.replace(/0(\d+)/g, '0o$1')'
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default function (\w+)\.js\(\)/g, 'export default function; $1()');'
  
  // Fix malformed object literals
  fixed = fixed.replace(/(\w+):\s*\{([^}]*)\}\s*([^,}\n]*)/g, (match, key, value, rest) => {
    if (rest.includes('}') && !rest.includes('},')) {'
      return `${key}: {\n${value}\n  },`
    }
    return match;
  });
  // Fix missing commas in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}\n]+)\s*(?=\w+:)/g, '$1: $2,')'
  
  // Fix malformed arrow functions
  fixed = fixed.replace(/(\w+):\s*\(\)\s*=>\s*\(\{\s*status:\s*'ok'\s*\}\)/g, '$1: () => ({ status: \'ok\' })')'
  
  // Fix malformed string literals
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*([^,}\n]*)/g, (match, key, value, rest) => {"
    if (rest.includes('"') && !rest.includes('",')) {"'
      return `${key}: "${value}",`"
    }
    return match;
  });
  // Fix specific patterns in object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*([^,}\n]*)/g, (match, key, value, rest) => {"
    if (rest.includes('"') && !rest.includes('",')) {"'
      return `${key}: "${value}",`"
    }
    return match;
  });
  // Fix missing commas between object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*)"\s*(?=\w+:)/g, '$1: "$2",')"'
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/(\w+)=([^"'\s>]+)(?=\s*[>\/])/g, '$1="$2"')"'
  
  // Fix missing closing quotes in JSX attributes
  fixed = fixed.replace(/(\w+)="([^"]*)(?=\s*[>\/])/g, '$1="$2"')"'
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')'
    const fixed = fixSyntaxErrors(content);
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');'
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    'app/**/*.tsx','
    'app/**/*.ts','
    'api/**/*.js''
  ]
  let totalFixed = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {if (processFile(file)) {
        totalFixed++}
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (import.meta.url === `file:// ${process.argv[1]}`) {main()}

export { fixSyntaxErrors, processFile }