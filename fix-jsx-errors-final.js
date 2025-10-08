import fs from 'fs';
import { glob } from 'glob';
#!/usr/bin/env node




//Find all TypeScript/JSX files in src/components
const _files = await glob('src/components/**/*.{tsx,ts}');

// let fixedFiles = 0;

for (const filePath of files) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    let _originalContent = content;

    //Fix orphaned /> tags (standalone /> on their own lines)
    content = content.replace(/^\s*\/>\s*$/gm, '');

    //Fix unterminated regular expression literals in object properties
    //Pattern: property: /pattern without closing /content = content.replace(/(\w+):\s*\/[^\/\n]*$/gm, (match, prop) => {
      const _value = match.split(':')[1].trim();
      if (value.startsWith('/') && !value.endsWith('/')) {
        return `${prop}: '${value.substring(1)}'`;
      }
      return match;
    });

    //Fix malformed <br> tags
    content = content.replace(/<br\s*>\s*<\/br>/g, '<br />');
    content = content.replace(/<br\s*>\s*$/gm, '<br />');

    //Fix backticks after JSX tags
    content = content.replace(/<(\w+)`/g, '<$1');

    //Fix specific patterns where /> appears in wrong places
    content = content.replace(/\s*\/>\s*<(\w+)/g, ' <$1');
    content = content.replace(/\s*\/>\s*<\/(\w+)>/g, '</$1>');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
//       fixedFiles++;
    }
  } catch (error) {
//     }
}

// 