<<<<<<< HEAD
import fs from 'fs';
import { glob } from 'glob';

// Find all page.tsx files
const pageFiles = await glob('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to fix`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
<<<<<<< HEAD
    // Fix missing closing tags and syntax issues
    const originalContent = content;
    // Fix missing closing div tags
    content = content.replace(/<div\s+key="[^"]*"\s*>\s*className="[^"]*"\s*>/g, '<div key="$1" className="$2">');
    // Fix malformed JSX attributes
    content = content.replace(/className="\$1"/g, 'className="service-card"');
    // Fix missing closing tags for common patterns
    content = content.replace(/<div\s+key="[^"]*"\s*>\s*className="[^"]*"\s*>\s*<div/g, '<div key="$1" className="$2"><div');
    // Fix missing semicolons and closing braces
    content = content.replace(/export default (\w+)(?!;)/g, 'export default $1;');
    // Fix missing closing tags for React components
    content = content.replace(/(<[A-Z]\w+[^>]*>)(?!.*<\/\1>)(?!.*\/>)/g, (match, tag) => {
      const tagName = tag.match(/<(\w+)/)[1];
}
      return match + `</${tagName}>`;
    });
    // Fix JSX fragment issues
    content = content.replace(/<>\s*<\/>/g, '<></>');
    // Fix missing closing parentheses in function calls
    content = content.replace(/\(([^)]*)\s*$/gm, '($1)');
    // Fix malformed object literals
    content = content.replace(/\{\s*([^}]*)\s*$/gm, '{\n  $1\n}');
    // Fix missing commas in object literals
    content = content.replace(/([^,}])\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    // Fix missing closing brackets
    content = content.replace(/\[\s*([^\]]*)\s*$/gm, '[\n  $1\n]');
    // Fix missing closing parentheses in JSX
    content = content.replace(/\(\s*([^)]*)\s*$/gm, '(\n  $1\n)');
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    if (content !== originalContent) { fs.writeFileSync(filePath, content); }
      console.log(`Fixed syntax errors in: ${filePath}`);
      modified = true;
    }
    return modified;
  } catch (error) {
}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git') && !item.includes('app-broken')) {
        traverse(fullPath);
}
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item) && !item.includes('app-broken')) { files.push(fullPath); }
      }
=======

    // Fix malformed JSX with incorrect parentheses
    const malformedJSXRegex = /{solutions\.map\(\(solution, index\) => \(}/g;
    if (malformedJSXRegex.test(content)) {
      content = content.replace(malformedJSXRegex, '{solutions.map((solution, index) => (');
      modified = true;
    }

    const malformedJSXRegex2 = /{solution\.features\.map\(\(feature, idx\) => \(}/g;
    if (malformedJSXRegex2.test(content)) {
      content = content.replace(malformedJSXRegex2, '{solution.features.map((feature, idx) => (');
      modified = true;
>>>>>>> origin/main
    }

    // Fix malformed object syntax with extra quotes
    const malformedObjectRegex = /title: "([^"]+)",\s*description: "([^"]+)",\s*icon: <([^>]+) \/>,\s*color: "([^"]+)"}/g;
    if (malformedObjectRegex.test(content)) {
      content = content.replace(malformedObjectRegex, (match, title, description, icon, color) => {
        return `title: "${title}",\n      description: "${description}",\n      icon: <${icon} />,\n      color: "${color}"`;
      });
      modified = true;
    }

    // Fix unterminated string literals
    const unterminatedStringRegex = /"([^"]*)"\s*"\s*$/gm;
    if (unterminatedStringRegex.test(content)) {
      content = content.replace(unterminatedStringRegex, '"$1"');
      modified = true;
    }

    // Fix malformed closing tags and brackets
    const malformedClosingRegex = /}\s*<\/div><\/div><\/div><\/div>\s*\);\s*}\s*}\s*''\s*$/gm;
    if (malformedClosingRegex.test(content)) {
      content = content.replace(malformedClosingRegex, '}\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}');
      modified = true;
    }

    // Fix duplicate color properties
    const duplicateColorRegex = /color: "([^"]+)"\s*color: "([^"]+)"/g;
    if (duplicateColorRegex.test(content)) {
      content = content.replace(duplicateColorRegex, 'color: "$1"');
      modified = true;
    }

    // Fix malformed closing brackets
    const malformedBracketsRegex = /}\s*\);\s*}\s*}\s*''\s*$/gm;
    if (malformedBracketsRegex.test(content)) {
      content = content.replace(malformedBracketsRegex, '}\n  );\n}');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
=======
import React from 'react'
#!/usr/bin/env node
import fs from "fs"
import path from "path"
import { glob } from "glob"
// Function to fix common syntax errors
function fixSyntaxErrors(content, filePath) {
  let fixed = content
  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/content="([^"]*?)(?=\s*\/>)/g, 'content="$1"')
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
    const tags = match.match(/<\/[^>]*>/g)
    return tags[tags.length - 1]; // Keep only the last closing tag
  })
  // Fix orphaned closing tags
  fixed = fixed.replace(/<\/[^>]*>\s*<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
    const tags = match.match(/<\/[^>]*>/g)
    return tags[tags.length - 1]
  })
  // Fix malformed function returns
  fixed = fixed.replace(
    /return\s*\(\s*<[^>]*>\s*\)\s*;\s*\)\s*;\s*\)\s*;/g,
    "return (",
  )
  // Fix multiple closing parentheses
  fixed = fixed.replace(/\)\s*;\s*\)\s*;\s*\)\s*;/g, ");")
  // Fix orphaned semicolons and braces
  fixed = fixed.replace(/;\s*}\s*;\s*}\s*;\s*}/g, "}")
  // Fix malformed JSX structure
  fixed = fixed.replace(/<([^>]+)>\s*<\/\1>\s*<([^>]+)>/g, "<$1>")
  // Fix unterminated JSX elements
  fixed = fixed.replace(
    /<([^>]+)(?![^<]*\/>)(?![^<]*<\/\1>)/g,
    (match, tagName) => {
      if (match.includes("=") && !match.includes("/>")) {
        return match + ">"
}
      return match
    },
  )
  // Fix orphaned closing tags that don't match opening tags
  const lines = fixed.split("\n")
  const fixedLines = []
  const openTags = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    // Skip lines that are just orphaned closing tags
    if (/^\s*<\/[^>]*>\s*$/.test(line) && openTags.length === 0) {
      continue
}
    // Track opening tags
    const openingTags = line.match(/<([^\/][^>]*?)>/g)
    if (openingTags) {
      openingTags.forEach((tag) => {
        const tagName = tag.match(/<([^\s>]+)/)
        if (tagName && !tag.includes("/>")) {
          openTags.push(tagName[1])
})
}
    // Track closing tags
    const closingTags = line.match(/<\/([^>]+)>/g)
    if (closingTags) {
      closingTags.forEach((tag) => {
        const tagName = tag.match(/<\/([^>]+)>/)
        if (tagName) {
          const index = openTags.lastIndexOf(tagName[1])
          if (index !== -1) {
            openTags.splice(index, 1)
}
      })
}
    fixedLines.push(line)
}
  fixed = fixedLines.join("\n")
  return fixed
}
// Function to fix specific file patterns
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8")
    const fixed = fixSyntaxErrors(content, filePath)
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, "utf8")
      console.log(`Fixed: ${filePath}`)
      return true
}
    return false
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
    return false
}
// Main execution
async function main() {
  console.log("Starting syntax error fixes...")
  // Get all TypeScript/JavaScript files
  const patterns = [
    "app/**/*.tsx",
    "app/**/*.ts",
    "app/**/*.jsx",
    "app/**/*.js",
    "__tests__/**/*.tsx",
    "__tests__/**/*.ts",
  ]
  let totalFixed = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() })
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++
}
}
  console.log(`Fixed ${totalFixed} files.`)
}
main().catch(console.error)
>>>>>>> origin/main
