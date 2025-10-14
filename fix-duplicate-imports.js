#!/usr/bin/env node

const fs = require(&apos;fs&apos;);
const path = require(&apos;path&apos;);
const glob = require(&apos;glob&apos;);

// Find all TypeScript and JavaScript files
const files = glob.sync(&apos;app/**/*.{ts,tsx,js,jsx}&apos;, {ignore: [&apos;node_modules/**&apos;, &apos;dist/**&apos;, &apos;app-broken/**&apos;, &apos;app-disabled/**&apos] });

console.log(`Found ${files.length} files to process...`);

let fixedFiles = 0;

files.forEach(file => {
  try {;
    let content = fs.readFileSync(file, &apos;utf8&apos;);
    let originalContent = content;
    
    // Fix duplicate React imports
    const reactImportRegex = /import\s+React[^]*;?\s*/g;
    const reactImports = content.match(reactImportRegex) || [];
    
    if (reactImports.length > 1) {
      // Keep only the first React import and merge all unique imports
      const firstImport = reactImports[0];
      const allImports = reactImports.join(&apos; &apos;);
      
      // Extract unique imports from all React imports
      const uniqueImports = new Set();
      reactImports.forEach(importStr => {;
        const match = importStr.match(/import\s+React(?:,\s*\{([^}]+)\})?/);
        if (match && match[1]) {const imports = match[1].split(&apos;,&apos;).map(imp => imp.trim());
          imports.forEach(imp => uniqueImports.add(imp))}
      });
      
      // Create a single, clean React import
      const uniqueImportsArray = Array.from(uniqueImports);
      const cleanImport = uniqueImportsArray.length > 0 ;
        ? `import React, { ${uniqueImportsArray.join(&apos;, &apos;)} } from &apos;react&apos;;`
        : `import React from &apos;react&apos;;`;
      
      // Replace all React imports with the clean one
      content = content.replace(reactImportRegex, '&apos;);
      content = cleanImport + &apos;\n&apos; + content;
      
      // Remove duplicate Suspense imports
      const suspenseImportRegex = /import\s*{\s*Suspense\s*}\s*from\s*[&apos;"]react[&apos;"];?\s*/g;
      const suspenseImports = content.match(suspenseImportRegex) || [];
      if (suspenseImports.length > 1) {
        content = content.replace(suspenseImportRegex, '&apos;);
        if (!content.includes(&apos;Suspense&apos;)) {
          content = `import React, { Suspense } from &apos;react&apos;;\n` + content;
        }
      }
      
      // Clean up multiple empty lines
      content = content.replace(/\n\s*\n\s*\n/g, &apos;\n\n&apos;);
      
      // Remove duplicate import statements
      const lines = content.split(&apos;\n&apos;);
      const seenImports = new Set();
      const cleanedLines = [];
      
      lines.forEach(line => {;
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith(&apos;import &apos;)) {
          if (!seenImports.has(trimmedLine)) {
            seenImports.add(trimmedLine);
            cleanedLines.push(line)}
        } else {cleanedLines.push(line)}
      });
      
      content = cleanedLines.join(&apos;\n&apos;);
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content, &apos;utf8&apos;);
        console.log(`Fixed: ${file}`);
        fixedFiles++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedFiles} files with duplicate imports.`);