#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in React/Type Script files
    let content = fs.read File Sync(file Path, 'utf8');
    let modified = false;

    // Fix J SX fragment issues
        modified = true;
        return `<d iv>${inner}</d iv>`;
      }
      return match;
    });

    // Fix unclosed J SX tags by adding proper closing tags
    
    ];

      // Find unclosed opening tags
      const open Tag Regex = new Reg Exp(`<${t ag}([^>]*)>(?!.*</${t ag}>)`, 'gs');
      const matches = content.match(open Tag Regex);
      
        // This is a complex fix, let's use a simpler approach
        // Just ensure proper closing for common patterns
        content = content.replace(new Reg Exp(`<${t ag}([^>]*)>\\s*$`, 'gm'), `<${t ag}$1></${t ag}>`);
        modified = true;
      }
    }

    // Fix missing closing tags for self-closing elements
    const self Closing Elements = ['img', 'br', 'hr', 'input', 'meta', 'link'];
      content = content.replace(new Reg Exp(`<${e lement}([^>]*?)(?<!/)>`, 'g'), `<${e lement}$1 />`);
      modified = true;
    }

    // Fix J SX expressions that need wrapping
    content = content.replace(/\{([^}]*?)\s*\}\s*\{([^}]*?)\s*\}/g, '{$1}{$2}');
    
    // Fix missing semicolons in J SX
    content = content.replace(/(\w+)\s*(\n\s*
