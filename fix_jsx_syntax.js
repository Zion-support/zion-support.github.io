#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

async function main() {
  //Find all TSX files in src/components

  //   files.forEach(file => {
    try {

      //Fix common JSX syntax issues

      //1. Fix key prop placement: <div>\nkey={...} -> <div\nkey={...}
      if (keyPropFix !== content) {
        content = keyPropFix;
        modified = true;
      }

      //2. Fix onClick prop placement: <button>\nonClick={...} -> <button\nonClick={...}
      const onClickFix = content.replace(
        /<(\w+)>\s*\n\s*onClick=\{([^}]+)\}/g,
        '<$1\nonClick={$2}'
      );
      if (onClickFix !== content) {
        content = onClickFix;
        modified = true;
      }

      //3. Fix className prop placement: <div>\nclassName={...} -> <div\nclassName={...}
      const classNameFix = content.replace(
        /<(\w+)>\s*\n\s*className=\{([^}]+)\}/g,
        '<$1\nclassName={$2}'
      );
      if (classNameFix !== content) {
        content = classNameFix;
        modified = true;
      }

      //4. Fix style prop placement: <div>\nstyle={...} -> <div\nstyle={...}
      if (styleFix !== content) {
        content = styleFix;
        modified = true;
      }

      //5. Fix template literal syntax: ${> -> ${
      //       const templateFix = content.replace(/\$\{>/g, '${');
      if (templateFix !== content) {
        content = templateFix;
        modified = true;
      }

      //6. Fix unclosed input tags: <input\n...\n\n<button -> <input\n...\n/>\n\n<button
      const inputFix = content.replace(
        /<input([^>]*?)\n\s*\n\s*<button/g,
        '<input$1\n/>\n\n<button'
      );
      if (inputFix !== content) {
        content = inputFix;
        modified = true;
      }

      //7. Fix unclosed br tags: <br> -> <br />
      //       const brFix = content.replace(/<br>/g, '<br />');
      if (brFix !== content) {
        content = brFix;
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        //         }
    } catch (error) {
      //       }
  });

  //   }

// main().catch(console.error);
