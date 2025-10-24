const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;

    // Fix duplicate React imports and "use client" directives
    const lines = content.split('\n');
    const cleanedLines = [];
    let hasUseClient = false;
    let hasReactImport = false;
    let hasOtherImports = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip duplicate "use client" directives
      if (line === '"use client";' || line === "'use client';") {
        if (!hasUseClient) {
          cleanedLines.push('"use client";');
          hasUseClient = true;
        }
        modified = true;
        continue;
      }
      
      // Skip duplicate React imports
      if (line.startsWith('import React from 'react"') || line.startsWith('import React from 'react'")) {
        if (!hasReactImport) {
          cleanedLines.push('import React from 'react";');
          hasReactImport = true;
        }
        modified = true;
        continue;
      }
      
      // Keep other lines
      cleanedLines.push(lines[i]);
    }

    // Reconstruct content with proper order
    if (modified) {
      const newContent = [];
      
      // Add "use client" first if it exists
      if (hasUseClient) {
        newContent.push('"use client";');
      }
      
      // Add React import
      if (hasReactImport) {
        newContent.push('import React from 'react";');
      }
      
      // Add other imports and content
      let inImportSection = true;
      for (const line of cleanedLines) {
        if (line.trim() === '"use client";' || line.trim() === 'import React from "react";') {
          continue; // Skip as we already added them
        }
        
        if (inImportSection && (line.startsWith('import ') || line.trim() === '')) {
          newContent.push(line);
        } else {
          inImportSection = false;
          newContent.push(line);
        }
      }
      
      content = newContent.join('\n');
    }

    // Fix malformed JSX closing structures
    content = content.replace(/<\/div>\s*\);\s*\);/g, '\n    </div>\n  );\n}');
    content = content.replace(/<\/div>\s*\);\s*}/g, '\n    </div>\n  );\n}');
    
    // Fix extra closing div tags
    const extraDivPattern = /(\s*<\/div>\s*){2,}(\s*<\/div>\s*){2,}/g;
    if (extraDivPattern.test(content)) {
      content = content.replace(extraDivPattern, '\n    </div>\n  );');
      modified = true;
    }

    // Fix incorrect closing tags
    content = content.replace(/<\s*\/\s*>/g, '</div>');
    if (content.includes('</>')) {
      modified = true;
    }

    // Fix h1/h2/h3 tag mismatches
    content = content.replace(/<h1([^>]*)>\s*([^<]*)\s*<\/h2>/g, '<h1$1>$2</h1>');
    content = content.replace(/<h2([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h2$1>$2</h2>');
    content = content.replace(/<h3([^>]*)>\s*([^<]*)\s*<\/h1>/g, '<h3$1>$2</h3>');

    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath.replace(__dirname + '/', ''));
    }
  }
  
  return files;
}

// Fix all TSX/TS files
console.log('Starting comprehensive syntax error fixes...');
const allFiles = getAllTsxFiles(path.join(__dirname, 'app'));
allFiles.forEach(fixFile);
console.log('Comprehensive syntax error fixes completed!');