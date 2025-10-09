#!/usr/bin/env node;
import fs from 'fs';
import { glob } from 'glob';

//Find all TypeScript/JSX files in src/components;
// let fixedFiles = 0;

for (const filePath of files) {/* TODO: Fix JSX expression */}
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });

    //Fix malformed <br> tags;
    content = content.replace(/<br\s*>\s*<\/br>/g, '<br />');
    content = content.replace(/<br\s*>\s*$/gm, '<br />');

    //Fix backticks after JSX tags;`
    content = content.replace(/<(\w+)`/g, '<$1');

    //Fix specific patterns where /> appears in wrong places;
    content = content.replace(/\s*\/>\s*<(\w+)/g, ' <$1');
    content = content.replace(/\s*\/>\s*<\/(\w+)>/g, '</$1>');

    if (content !== originalContent) {/* TODO: Fix JSX expression */}
    }
  } catch (error) {/* TODO: Fix JSX expression */}
//     }
}

// `