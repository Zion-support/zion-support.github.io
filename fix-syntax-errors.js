#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix common syntax errors in React/TypeScript files
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX fragment issues
        modified = true;
        return `<div>${inner}</div>`;
      }
      return match;
    });

    // Fix unclosed JSX tags by adding proper closing tags

    ];

      // Find unclosed opening tags
      const openTagRegex = new RegExp(`<${tag}([^>]*)>(?!.*</${tag}>)`, 'gs');
      const matches = content.match(openTagRegex);

        // This is a complex fix, let's use a simpler approach
        // Just ensure proper closing for common patterns
        content = content.replace(new RegExp(`<${tag}([^>]*)>\\s*$`, 'gm'), `<${tag}$1></${tag}>`);
        modified = true;
      }
    }

    // Fix missing closing tags for self-closing elements
    const selfClosingElements = ['img', 'br', 'hr', 'input', 'meta', 'link'];
      content = content.replace(new RegExp(`<${element}([^>]*?)(?<!/)>`, 'g'), `<${element}$1 />`);
      modified = true;
    }

    // Fix JSX expressions that need wrapping
    content = content.replace(/\{([^}]*?)\s*\}\s*\{([^}]*?)\s*\}/g, '{$1}{$2}');

    // Fix missing semicolons in JSX
    content = content.replace(/(\w+)\s*(\n\s*
