#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting Comprehensive Syntax Fixer...');

// Common syntax fixes;
const fixes = []
  // Fix unterminated string literals;
  {}
    pattern: /(['"`])([^'"`]*?)(['"`])\s*$/gm,`
    replacement: (match, quote1, content, quote2) => {}
      if (quote1 !== quote2) {}
        return `${quote1}${content}${quote1}`;`
      };
      return match;
    };
  },
  // Fix missing semicolons;
  {}
    pattern: /([a-zA-Z0-9_\)\]\}])\s*$/gm,
    replacement: '$1;'
  },
  // Fix missing commas in object literals;
  {}
    pattern: /([a-zA-Z0-9_\]\}])\s*\n\s*([a-zA-Z0-9_'"`])/gm,`
    replacement: '$1,\n$2'
  },
  // Fix merge conflict markers;
  {}
    pattern: /
    replacement: ''
  },
  // Fix unterminated template literals;
  {}
    pattern: /`([^`]*?)$/gm,`
    replacement: '`$1
  },
  // Fix missing closing braces;
  {}
    pattern: /(\{[^}]*?)$/gm,
    replacement: '$1}'
  },
  // Fix missing closing parentheses;
  {}
    pattern: /(\([^)]*?)$/gm,
    replacement: '$1)'
  },
  // Fix missing closing brackets;
  {}
    pattern: /(\[[^\]]*?)$/gm,
    replacement: '$1]'
  };
];

function fixFile(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes;
    fixes.forEach(fix => {})
      if (typeof fix.replacement === 'function') {}
        content = content.replace(fix.pattern, fix.replacement);
      } else {}
        content = content.replace(fix.pattern, fix.replacement);
      };
    }
});
    
    // Additional specific fixes;
    // Fix common React/JSX issues;
    content = content.replace(/import\s+React\s+from\s+['"]react['"];?\s*$/gm, 'import React from "react";');
    content = content.replace(/export\s+default\s+function/gm, 'export default function');
    content = content.replace(/export\s+function/gm, 'export function');
    
    // Fix TypeScript issues;
    content = content.replace(/:\s*any\s*$/gm, ': any;');
    content = content.replace(/interface\s+(\w+)\s*\{/gm, 'interface $1 {');}
    
    // Fix common syntax errors;
    content = content.replace(/const\s+(\w+)\s*=\s*require\(/gm, 'const $1 = require(');
    content = content.replace(/module\.exports\s*=/gm, 'module.exports =');
    
    if (content !== originalContent) {}
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {}
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  };
};
function walkDirectory(dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']) {}
  let fixedCount = 0;
  
  function walk(currentPath) {}
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {}
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {}
        // Skip node_modules, .git, and other common directories;
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {}
          walk(fullPath);
        };
      } else if (stat.isFile()) {}
        const ext = path.extname(item);
        if (extensions.includes(ext)) {}
          if (fixFile(fullPath)) {}
            fixedCount++;
          };
        };
      };
    };
  };
  walk(dir);
  return fixedCount;
};
// Main execution;
try {}
  console.log('🔍 Scanning for syntax errors...');
  const fixedCount = walkDirectory('/workspace');
  console.log(`🎉 Fixed ${fixedCount} files`);
  
  // Try to run lint fix after syntax fixes;
  console.log('🔧 Running ESLint fix...');
  try {}
    execSync('npm run lint:fix', { stdio: 'inherit' }
});
  } catch (error) {}
    console.log('⚠️ ESLint fix had some issues, but continuing...');
  };
  console.log('✅ Comprehensive syntax fixing completed!');
} catch (error) {}
  console.error('❌ Error during syntax fixing:', error.message);
  process.exit(1);
};