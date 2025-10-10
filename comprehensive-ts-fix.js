#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript files in the app directory
function getAllTsxFiles(dir) {
    const files = [];
  const items = fs.readdirSync(dir);
<<<<<<< HEAD
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
=======
  for (const item of items) {;
const fullPath = path.join(dir, item);
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
<<<<<<< HEAD
      files.push(...getAllTsxFiles(fullPath))
  } else if (item.endsWith('.tsx')) {
    files.push(fullPath)
  }
  }
  
  return files;
}

=======
      files.push(...getAllTsxFiles(fullPath))} else if (item.endsWith('.tsx')) {
      files.push(fullPath)};
  };
  return files};
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD

    // Fix 1: Fix malformed JSX with missing opening tags
    const malformedJsxPattern = /<(\w+)([^>]*)\s*>\s*<\/\1>\s*([^<]+)/g,
    content = content.replace(malformedJsxPattern, (match, tagName, attributes, text) => {
      if (text.trim()) {
        modified = true;
        return `<${tagName}${attributes}>${text}</${tagName}>`;
      }
      return match;
    });

    // Fix 2: Fix self-closing tags that should have content
    const selfClosingWithContentPattern = /<(\w+)([^>]*)\s*\/>\s*([^<]+)/g,
    content = content.replace(selfClosingWithContentPattern, (match, tagName, attributes, text) => {
      if (text.trim() && !text.includes('<')) {
        modified = true;
        return `<${tagName}${attributes}>${text}</${tagName}>`;
      }
      return match;
    });

    // Fix 3: Fix missing closing braces in object literals
    const missingBracePattern = /(\w+):\s*([^}\n]+)\s*\n\s*(\w+):/g;
    content = content.replace(missingBracePattern, (match, key1, value1, key2) => {
      if (!value1.trim().endsWith(',') && !value1.trim().endsWith('}')) {
        modified = true;
        return `${key1}: ${value1.trim()},\n    ${key2}:`;
      }
      return match;
    });

    // Fix 4: Fix malformed SVG URLs
    const svgUrlPattern = /bg-\[url\('data:image\/svg\+xml,([^']+)'\)\]/g;
    content = content.replace(svgUrlPattern, (match, svgContent) => {
      const encodedSvg = encodeURIComponent(svgContent);
      modified = true;
      return `bg-[url('data:image/svg+xml,${encodedSvg}')]`;
    });

    // Fix 5: Fix missing closing parentheses in function calls
    const missingParenPattern = /(\w+\([^)]*)\s*\n\s*(\w+)/g,
    content = content.replace(missingParenPattern, (match, funcCall, nextToken) => {
      if (!funcCall.includes(')') && !nextToken.startsWith(')')) {
        modified = true;
        return `${funcCall})\n    ${nextToken}`;
      }
      return match;
    });

    // Fix 6: Fix JSX elements with missing content between tags
    const emptyJsxPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*([^<\n]+)/g,
    content = content.replace(emptyJsxPattern, (match, tagName, attributes, content) => {
      if (content.trim()) {
        modified = true;
        return `<${tagName}${attributes}>${content}</${tagName}>`;
      }
      return match;
    });

    // Fix 7: Fix malformed className attributes with quotes
    const malformedClassPattern = /className="([^"]*"[^"]*)"([^>]*)>/g,
    content = content.replace(malformedClassPattern, (match, className, rest) => {
      const fixedClassName = className.replace(/"/g, '&quot;');
      modified = true;
      return `className="${fixedClassName}"${rest}>`;
    });

    // Fix 8: Fix missing closing tags in JSX
    const unclosedTagPattern = /<(\w+)([^>]*)>\s*$/gm;
    const lines = content.split('\n');
    let newContent = content;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(unclosedTagPattern);
      if (match) {
        const tagName = match[1];
        const attributes = match[2]
        // Look ahead to see if there's a closing tag
        let foundClosing = false
        for (let j = i + 1; j < lines.length; j++) {
          const nextLine = lines[j].trim(),
          if (nextLine.startsWith(`</${tagName}>`)) {
    foundClosing = true;
            break
  }
          if (nextLine.startsWith('<') && !nextLine.startsWith('</')) {
    break
  }
        }
        
        if (!foundClosing) {
          // Add closing tag
          newContent = newContent.replace(line, line + `</${tagName}>`);
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting comprehensive TypeScript fixes...');

=======
    // Fix 1: Fix malformed JSX with missing opening tags;
const malformedJsxPattern = /<(\w+)([^>]*)\s*>\s*<\/\1>\s*([^<]+)/g;
    content = content.replace(malformedJsxPattern, (match, tagName, attributes, text) => {
return (
      if (text.trim()) {
        modified = true;
        return `<${tagName}${attributes}>
);
}${text}</${tagName}>`};
      return match});
    // Fix 2: Fix self-closing tags that should have content;
const selfClosingWithContentPattern = /<(\w+)([^>]*)\s*\/>\s*([^<]+)/g;
    content = content.replace(selfClosingWithContentPattern, (match, tagName, attributes, text) => {
return (
      if (text.trim() && !text.includes('<')) {
        modified = true;
        return `<${tagName}${attributes}>
);
}${text}</${tagName}>`};
      return match});
    // Fix 3: Fix missing closing braces in object literals;
const missingBracePattern = /(\w+):\s*([^}\n]+)\s*\n\s*(\w+):/g;
    content = content.replace(missingBracePattern, (match, key1, value1, key2) => {
      if (!value1.trim().endsWith(',') && !value1.trim().endsWith('}')) {
        modified = true;
        return `${key1}: ${value1.trim()},\n    ${key2}:`};
      return match});
    // Fix 4: Fix malformed SVG URLs;
const svgUrlPattern = /bg-\[url\('data:image\/svg\+xml,([^']+)'\)\]/g;
    content = content.replace(svgUrlPattern, (match, svgContent) => {;
const encodedSvg = encodeURIComponent(svgContent);
      modified = true;
      return `bg-[url('data:image/svg+xml,${encodedSvg}')]`});
    // Fix 5: Fix missing closing parentheses in function calls;
const missingParenPattern = /(\w+\([^)]*)\s*\n\s*(\w+)/g;
    content = content.replace(missingParenPattern, (match, funcCall, nextToken) => {
      if (!funcCall.includes(')') && !nextToken.startsWith(')')) {
        modified = true;
        return `${funcCall})\n    ${nextToken}`};
      return match});
    // Fix 6: Fix JSX elements with missing content between tags;
const emptyJsxPattern = /<(\w+)([^>]*)>\s*<\/\1>\s*([^<\n]+)/g;
    content = content.replace(emptyJsxPattern, (match, tagName, attributes, content) => {
return (
      if (content.trim()) {
        modified = true;
        return `<${tagName}${attributes}>
);
}${content}</${tagName}>`};
      return match});
    // Fix 7: Fix malformed className attributes with quotes;
const malformedClassPattern = /className="([^"]*"[^"]*)"([^>]*)>/g;
    content = content.replace(malformedClassPattern, (match, className, rest) => {;
const fixedClassName = className.replace(/"/g, '&quot;');
      modified = true;
      return `className="${fixedClassName}"${rest}>`});
    // Fix 8: Fix missing closing tags in JSX;
const unclosedTagPattern = /<(\w+)([^>]*)>\s*$/gm;
    const lines = content.split('\n');
    let newContent = content;
    for (let i = 0; i < lines.length; i++) {;
const line = lines[i];
      const match = line.match(unclosedTagPattern);
      if (match) {;
const tagName = match[1];
        const attributes = match[2];
        // Look ahead to see if there's a closing tag;
let foundClosing = false;
        for (let j = i + 1; j < lines.length; j++) {;
const nextLine = lines[j].trim();
          if (nextLine.startsWith(`</${tagName}>`)) {
            foundClosing = true;
            break};
          if (nextLine.startsWith('<') && !nextLine.startsWith('</')) {
            break};
        };
        if (!foundClosing) {
          // Add closing tag
          newContent = newContent.replace(line, line + `</${tagName}>`);
          modified = true};
      };
    };
    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      // console.log removed for production
}`);
      return true};
    return false} catch (error) {
    // console.error removed for production
return false};
};
// console.log removed for production
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTsxFiles(appDir);

let fixedCount = 0;
tsxFiles.forEach(filePath => {
<<<<<<< HEAD
    if (fixTsxFile(filePath)) {
    fixedCount++
  }
});

console.log(`Fixed ${fixedCount} files.`);
=======
  if (fixTsxFile(filePath)) {
    fixedCount++};
});
// console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
