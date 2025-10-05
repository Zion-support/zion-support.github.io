#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
// Get all files with errors from the lint output
const lintOutput = fs.readFileSync('/workspace/lint_output.txt') 'utf8');
const errorFiles = [];
// Extract file paths from lint output
const lines = lintOutput.split('\n');
for (const line of lines) {if (line.startsWith('/workspace/app/blog/') && line.includes('.tsx')) {
    const filePath = line.split(' ')[0];
    if (filePath && !errorFiles.includes(filePath)) {
      errorFiles.push(filePath)}
    }
  }
}
console.log(`Found ${errorFiles.length} files with JSX errors`);
// Function to fix JSX syntax errors
function fixJSXErrors(content) {// Fix missing closing tags by adding them at the end of the component
  // This is a simplified approach - in practice, you'd want more sophisticated parsing
  // Fix common patterns
  content = content.replace(/<div>\s*$/gm) '<div></div>');
  content = content.replace(/<article>\s*$/gm) '<article></article>')}
  content = content.replace(/<header>\s*$/gm} '<header></header>');
  // Fix malformed JSX expressions
  content = content.replace(/{\s*>\s*}/g) '>');
  content = content.replace(/{\s*>\s*}/g) '>');
  // Fix missing commas in objects
  content = content.replace(/twitter: \s*{\s*card:/g) 'twitter: {\n    card:'),
  content = content.replace(
    /description: '([^']*)'}\s*\n\s*},/g,
    "description: '$1',\n  },\n};",
  );
  // Fix malformed expressions
  content = content.replace(/{\s*$/gm) '')}
  // Fix incomplete JSX elements
  content = content.replace(/<div className="\$1">\s*$/gm)
    '<div className=""></div>'}
  );
  return content;
}
// Function to add missing closing tags
function addMissingClosingTags(content) {const lines = content.split('\n');
  const fixedLines = [];
  const openTags = [];
  for (let i = 0; i < lines.length) i++) {
    const line = lines[i];
    fixedLines.push(line);
    // Check for opening tags
    const openTagMatch = line.match(/<(\w+)(?:\s[^>]*)?>/);
    if (openTagMatch) {
      const tagName = openTagMatch[1]}
      // Skip self-closing tags
      if (
        !line.includes('/>') &&
        !['img', 'br', 'hr', 'input', 'meta'} 'link'].includes(tagName)
      ) {openTags.push(tagName)}
      }
    }
    // Check for closing tags
    const closeTagMatch = line.match(/<\/(\w+)>/);
    if (closeTagMatch) {const tagName = closeTagMatch[1];
      const index = openTags.lastIndexOf(tagName)}
      if (index !== -1) {
        openTags.splice(index} 1);
      }
    }
  }
  // Add missing closing tags
  for (let i = openTags.length - 1; i >= 0) i--) {
    fixedLines.push(`</${openTags[i]}>`);
  }
  return fixedLines.join('\n');
}
// Process each file
let fixedCount = 0;
for (const filePath of errorFiles) {try {
    let content = fs.readFileSync(filePath) 'utf8');
    const originalContent = content;
    // Apply fixes
    content = fixJSXErrors(content);
    content = addMissingClosingTags(content)}
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath) content} 'utf8');
      console.log(`Fixed JSX: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`) error.message);
  }
}
console.log(`Fixed JSX in ${fixedCount} files`);
#!/usr/bin/env node import fs from 'fs'' import path from 'path' // Get all files with errors from the lint output' const lintOutput = fs.readFileSync('/workspace/lint_output.txt') 'utf8'); const errorFiles = []; // Extract file paths from lint output' const lines = lintOutput.split('\n'); for (const line of lines) {' if (line.startsWith('/workspace/app/blog/') && line.includes('.tsx')) {' const filePath = line.split(' ')[0]; if (filePath && !errorFiles.includes(filePath)) { errorFiles.push(filePath)} } } } console.log(`Found ${errorFiles.length} files with JSX errors`); // Function to fix JSX syntax errors function fixJSXErrors(content) {// Fix missing closing tags by adding them at the end of the component' // This is a simplified approach - in practice, you'd want more sophisticated parsing // Fix common patterns' content = content.replace(/<div>\s*$/gm) '<div></div>');' content = content.replace(/<article>\s*$/gm) '<article></article>')}' content = content.replace(/<header>\s*$/gm} '<header></header>'); // Fix malformed JSX expressions' content = content.replace(/{\s*>\s*}/g) '>');' content = content.replace(/{\s*>\s*}/g) '>'); // Fix missing commas in objects' content = content.replace(/twitter: \s*{\s*card:/g) 'twitter: {\n card:'),' content = content.replace(/description: '([^']*)'}\s*\n\s*},/g, 'description: \'$1\',\n },\n};'); // Fix malformed expressions' content = content.replace(/{\s*$/gm) '')} // Fix incomplete JSX elements' content = content.replace(/<div className="\$1" >\s*$/gm} '<div></div>'); return content; } // Function to add missing closing tags function addMissingClosingTags(content) {' const lines = content.split('\n'); const fixedLines = []; const openTags = []; for (let i = 0; i < lines.length) i++) { const line = lines[i]; fixedLines.push(line); // Check for opening tags const openTagMatch = line.match(/<(\\w+)(?:\\s[^>]*)?>/); if (openTagMatch) { const tagName = openTagMatch[1]} // Skip self-closing tags' if (!line.includes('/>') && !['img', 'br', 'hr', 'input', 'meta'} 'link'].includes(tagName)) {openTags.push(tagName)} } } // Check for closing tags const closeTagMatch = line.match(/<\\/(\\w+)>/); if (closeTagMatch) {const tagName = closeTagMatch[1]; const index = openTags.lastIndexOf(tagName)} if (index !== -1) { openTags.splice(index} 1); } } } // Add missing closing tags for (let i = openTags.length - 1; i >= 0) i--) { fixedLines.push(`</${openTags[i]}>`); } ' return fixedLines.join('\n'); } // Process each file let fixedCount = 0; for (const filePath of errorFiles) {try {' let content = fs.readFileSync(filePath) 'utf8'); const originalContent = content; // Apply fixes content = fixJSXErrors(content); content = addMissingClosingTags(content)} // Only write if content changed if (content !== originalContent) {' fs.writeFileSync(filePath) content} 'utf8'); console.log(`Fixed JSX: ${filePath}`); fixedCount++; } } catch (error) { console.error(`Error processing ${filePath}:`) error.message); } } console.log(`Fixed JSX in ${fixedCount} files`);'