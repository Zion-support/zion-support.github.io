const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function fixJSXSyntax(content) {
  // Fix common JSX syntax issues
  let fixed = content;
  
  // Fix unclosed h1 tags
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h1$1>$2</h1>');
  fixed = fixed.replace(/<h1([^>]*)>\s*([^<]+)\s*$/gm, '<h1$1>$2</h1>');
  
  // Fix unclosed h2 tags
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h2$1>$2</h2>');
  fixed = fixed.replace(/<h2([^>]*)>\s*([^<]+)\s*$/gm, '<h2$1>$2</h2>');
  
  // Fix unclosed h3 tags
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<h3$1>$3</h3>');
  fixed = fixed.replace(/<h3([^>]*)>\s*([^<]+)\s*$/gm, '<h3$1>$2</h3>');
  
  // Fix unclosed p tags
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<p$1>$2</p>');
  fixed = fixed.replace(/<p([^>]*)>\s*([^<]+)\s*$/gm, '<p$1>$2</p>');
  
  // Fix unclosed div tags
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<div$1>$2</div>');
  fixed = fixed.replace(/<div([^>]*)>\s*([^<]+)\s*$/gm, '<div$1>$2</div>');
  
  // Fix unclosed span tags
  fixed = fixed.replace(/<span([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<span$1>$2</span>');
  fixed = fixed.replace(/<span([^>]*)>\s*([^<]+)\s*$/gm, '<span$1>$2</span>');
  
  // Fix unclosed button tags
  fixed = fixed.replace(/<button([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<button$1>$2</button>');
  fixed = fixed.replace(/<button([^>]*)>\s*([^<]+)\s*$/gm, '<button$1>$2</button>');
  
  // Fix unclosed a tags
  fixed = fixed.replace(/<a([^>]*)>\s*([^<]+)\s*<\/\s*$/gm, '<a$1>$2</a>');
  fixed = fixed.replace(/<a([^>]*)>\s*([^<]+)\s*$/gm, '<a$1>$2</a>');
  
  return fixed;
}
=======
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function main() {
  //Find all TSX files in src/components
  const _files = await glob('src/components/**/*.tsx');

  //   files.forEach(file => {
    try {
      let _content = fs.readFileSync(file, 'utf8');
      let _modified = false;

      //Fix common JSX syntax issues

      //1. Fix key prop placement: <div>\nkey={...} -> <div\nkey={...}
      const _keyPropFix = content.replace(/<(\w+)>\s*\n\s*key=\{([^}]+)\}/g, '<$1\nkey={$2}');
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
      const _styleFix = content.replace(/<(\w+)>\s*\n\s*style=\{([^}]+)\}/g, '<$1\nstyle={$2}');
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
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXSyntax(content);
    if (content !== fixed) {
      console.log(`Fixing JSX syntax in: ${filePath}`);
      fs.writeFileSync(filePath, fixed);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting JSX syntax fix...');
const fixedCount = walkDirectory('app');
console.log(`Fixed JSX syntax in ${fixedCount} files`);
