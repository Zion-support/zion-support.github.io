#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in React components...\n');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 1: Remove duplicate React imports
    const reactImportRegex = /import React from ['"]react['"];?\s*\nimport React from ['"]react['"];?/g;
    content = content.replace(reactImportRegex, 'import React from "react";');
    
    // Fix 2: Fix broken JSX structure - remove orphaned text outside JSX
    const orphanedTextRegex = /}\s*[^<}\s][^}]*$/gm;
    content = content.replace(orphanedTextRegex, (match) => {
      // If the line after } contains text that's not JSX, remove it
      const lines = match.split('\n');
      const result = [];
      let inJSX = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.trim().startsWith('}')) {
          result.push(line);
          inJSX = false;
        } else if (line.trim().startsWith('<') || line.trim().startsWith('return')) {
          result.push(line);
          inJSX = true;
        } else if (inJSX || line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('*')) {
          result.push(line);
        }
        // Skip orphaned text lines
      }
      
      return result.join('\n');
    });
    
    // Fix 3: Fix broken Link components
    content = content.replace(/<Link[^>]*>\s*[^<]+[^>]*$/gm, (match) => {
      // If Link tag is not properly closed, fix it
      if (!match.includes('</Link>')) {
        return match.replace(/(<Link[^>]*>)\s*([^<]+)/, '$1$2</Link>');
      }
      return match;
    });
    
    // Fix 4: Remove duplicate closing tags
    content = content.replace(/\s*<\/div>\s*<\/div>\s*\);\s*}\s*<\/div>\s*\);\s*}/g, '\n  );\n}');
    
    // Fix 5: Fix function declarations outside JSX
    content = content.replace(/}\s*function\s+(\w+)\s*\([^)]*\)\s*:\s*\{[^}]*\}\s*\{/g, '\n}\n\nfunction $1() {\n  return (');
    
    // Fix 6: Remove orphaned text that appears after function closing
    content = content.replace(/}\s*[^<}\s][^}]*about their experience\./g, '}');
    
    // Fix 7: Fix broken JSX attributes
    content = content.replace(/className="[^"]*"\s*[^>]*$/gm, (match) => {
      if (!match.includes('>')) {
        return match + '>';
      }
      return match;
    });
    
    // Fix 8: Remove duplicate closing braces and divs
    content = content.replace(/\s*<\/div>\s*\);\s*}\s*<\/div>\s*\);\s*}/g, '\n  );\n}');
    
    // Fix 9: Fix broken string literals in JSX
    content = content.replace(/Don't just take our word for it\. Here's what our clients have to say\s*about their experience\./g, '');
    
    // Fix 10: Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`  Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Files to fix
const filesToFix = [
  'app/services/ai-meeting-assistant/page.tsx',
  'app/services/ai-powered-crm/page.tsx',
  'app/services/ai-services/page.tsx',
  'app/services/it-services/page.tsx',
  'app/services/smart-invoice-generator/page.tsx'
];

let fixedCount = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    console.log(`  Fixing: ${file}`);
    if (fixSyntaxErrors(file)) {
      fixedCount++;
      console.log(`  ✅ Fixed: ${file}`);
    } else {
      console.log(`  ℹ️  No changes needed: ${file}`);
    }
  } else {
    console.log(`  ⚠️  File not found: ${file}`);
  }
}

console.log(`\n✅ Fixed syntax errors in ${fixedCount} files`);
console.log('🎉 Syntax error fixing complete!');