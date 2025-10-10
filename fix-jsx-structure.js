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

    // Fix malformed section tags
    content = content.replace(/<section[^>]*><\/div>/g, '<section className="relative py-20 px-4 overflow-hidden">');
    
    // Fix multiple closing tags concatenated together
    content = content.replace(/<\/button><\/h1><\/p><\/span>/g, '</button>');
    content = content.replace(/<\/div><\/button><\/h1><\/p><\/span>/g, '</div>');
    content = content.replace(/<\/div><\/div><\/button><\/h1><\/p><\/span>/g, '</div></div>');
    
    // Fix misplaced closing tags
    content = content.replace(/<\/div><\/button><\/h1><\/p><\/span>/g, '</div>');
    content = content.replace(/<\/button><\/h1><\/p><\/span>/g, '</button>');
    
    // Fix malformed comments
    content = content.replace(/<\/section>\/\* Features Section \*\/\}/g, '</section>\n        {/* Features Section */}');
    content = content.replace(/<\/section>\/\* [^*]+ \*\/\}/g, '</section>');
    
    // Fix specific patterns where closing tags are in wrong order
    content = content.replace(/<\/div><\/div><\/button>/g, '</div></div>');
    content = content.replace(/<\/button><\/h1><\/p>/g, '</button>');
    content = content.replace(/<\/h1><\/p><\/span>/g, '</h1>');
    content = content.replace(/<\/p><\/span>/g, '</p>');
    
    // Fix malformed div closures
    content = content.replace(/<\/div><\/div><\/div>/g, '</div></div>');
    content = content.replace(/<\/div><\/div><\/button>/g, '</div></div>');
    
    // Fix specific button patterns
    content = content.replace(/<\/button><\/h1>/g, '</button>');
    content = content.replace(/<\/button><\/p>/g, '</button>');
    content = content.replace(/<\/button><\/span>/g, '</button>');
    
    // Fix malformed section closures
    content = content.replace(/<\/section><\/section>/g, '</section>');
    content = content.replace(/<\/section><\/div>/g, '</section>');
    
    // Fix malformed div closures
    content = content.replace(/<\/div><\/section>/g, '</div>');
    content = content.replace(/<\/div><\/main>/g, '</div>');
    
    // Fix malformed main closures
    content = content.replace(/<\/main><\/section>/g, '</main>');
    content = content.replace(/<\/main><\/div>/g, '</main>');
    
    // Fix malformed React.Fragment closures
    content = content.replace(/<\/React\.Fragment><\/section>/g, '</React.Fragment>');
    content = content.replace(/<\/React\.Fragment><\/div>/g, '</React.Fragment>');
    
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix specific patterns where multiple closing tags are concatenated
    content = content.replace(/<\/[^>]+><\/[^>]+><\/[^>]+><\/[^>]+>/g, (match) => {
      // Keep only the first closing tag
      const firstTag = match.match(/<\/[^>]+>/)[0];
      return firstTag;
    });
    
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