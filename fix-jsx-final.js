#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to find all JSX files
const jsxFiles = glob.sync('app/**/*.tsx', { cwd: process.cwd() });

console.log(`Found ${jsxFiles.length} JSX files to process...`);

let fixedFiles = 0;
let totalFixes = 0;

jsxFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileFixes = 0;

    // Fix malformed closing tags that are concatenated
    content = content.replace(/<\/[^>]+><\/[^>]+><\/[^>]+><\/[^>]+>/g, (match) => {
      // Keep only the first closing tag
      const firstTag = match.match(/<\/[^>]+>/)[0];
      return firstTag;
    });
    
    // Fix specific patterns where closing tags are in wrong order
    content = content.replace(/<\/div><\/button><\/h1><\/p><\/span>/g, '</div>');
    content = content.replace(/<\/button><\/h1><\/p><\/span>/g, '</button>');
    content = content.replace(/<\/h1><\/p><\/span>/g, '</h1>');
    content = content.replace(/<\/p><\/span>/g, '</p>');
    content = content.replace(/<\/span><\/div>/g, '</span>');
    
    // Fix malformed map function closures
    content = content.replace(/<\/li>\)\}/g, '</li>\n              ))}');
    content = content.replace(/<\/li>\)\s*\)\}/g, '</li>\n              ))}');
    
    // Fix malformed comments
    content = content.replace(/<\/div>\/\* [^*]+ \*\/\}/g, '</div>\n          {/* $1 */}');
    content = content.replace(/<\/section>\/\* [^*]+ \*\/\}/g, '</section>\n        {/* $1 */}');
    
    // Fix specific button patterns
    content = content.replace(/<\/button><\/h1>/g, '</button>');
    content = content.replace(/<\/button><\/p>/g, '</button>');
    content = content.replace(/<\/button><\/span>/g, '</button>');
    content = content.replace(/<\/button><\/div>/g, '</button>');
    
    // Fix malformed section closures
    content = content.replace(/<\/section><\/section>/g, '</section>');
    content = content.replace(/<\/section><\/div>/g, '</section>');
    content = content.replace(/<\/section><\/main>/g, '</section>');
    
    // Fix malformed div closures
    content = content.replace(/<\/div><\/section>/g, '</div>');
    content = content.replace(/<\/div><\/main>/g, '</div>');
    content = content.replace(/<\/div><\/div><\/div>/g, '</div></div>');
    
    // Fix malformed main closures
    content = content.replace(/<\/main><\/section>/g, '</main>');
    content = content.replace(/<\/main><\/div>/g, '</main>');
    
    // Fix malformed React.Fragment closures
    content = content.replace(/<\/React\.Fragment><\/section>/g, '</React.Fragment>');
    content = content.replace(/<\/React\.Fragment><\/div>/g, '</React.Fragment>');
    content = content.replace(/<\/React\.Fragment><\/main>/g, '</React.Fragment>');
    
    // Fix specific patterns where multiple closing tags are concatenated
    content = content.replace(/<\/[^>]+><\/[^>]+><\/[^>]+>/g, (match) => {
      // Keep only the first closing tag
      const firstTag = match.match(/<\/[^>]+>/)[0];
      return firstTag;
    });
    
    // Fix unterminated regular expressions (common in malformed JSX)
    content = content.replace(/\/\*[^*]*\*\/\}/g, '');
    
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix specific malformed patterns
    content = content.replace(/<\/div><\/button><\/h1><\/p><\/span>/g, '</div>');
    content = content.replace(/<\/button><\/h1><\/p><\/span>/g, '</button>');
    content = content.replace(/<\/h1><\/p><\/span>/g, '</h1>');
    content = content.replace(/<\/p><\/span>/g, '</p>');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      fileFixes = 1; // Count as 1 fix per file
      totalFixes += fileFixes;
      fixedFiles++;
      console.log(`Fixed ${fileFixes} issues in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${totalFixes} JSX syntax issues across ${fixedFiles} files.`);