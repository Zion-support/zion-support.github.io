#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { ignore: ['node_modules/**'] });

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Check if file has duplicate component definitions
    const componentNameMatch = content.match(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{/g);
    if (componentNameMatch && componentNameMatch.length > 1) {
      console.log(`File ${file} has duplicate component definitions, fixing...`);
      
      // Extract the component name
      const componentName = componentNameMatch[0].match(/const\s+(\w+):/)[1];
      
      // Find the first complete component definition
      const firstComponentStart = content.indexOf(`const ${componentName}: React.FC = () => {`);
      const firstComponentEnd = content.lastIndexOf('};');
      
      if (firstComponentStart !== -1 && firstComponentEnd !== -1) {
        // Extract the first component
        const firstComponent = content.substring(firstComponentStart, firstComponentEnd + 2);
        
        // Find the export statement
        const exportMatch = content.match(/export\s+default\s+\w+;/);
        if (exportMatch) {
          // Rebuild the file with just the first component and export
          const beforeComponent = content.substring(0, firstComponentStart);
          const afterExport = content.substring(exportMatch.index);
          
          content = beforeComponent + firstComponent + '\n\n' + afterExport;
          modified = true;
        }
      }
    }

    // Fix malformed imports: }}from -> } from
    if (content.includes('}}from')) {
      content = content.replace(/}}from/g, '} from');
      modified = true;
    }

    // Fix malformed JSX tags: <$2 /> -> <div />
    if (content.includes('<$2 />')) {
      content = content.replace(/<\$2 \/>/g, '<div />');
      modified = true;
    }

    // Fix malformed JSX tags: <$2> -> <div>
    if (content.includes('<$2>')) {
      content = content.replace(/<\$2>/g, '<div>');
      modified = true;
    }

    // Fix malformed JSX tags: </$2> -> </div>
    if (content.includes('</$2>')) {
      content = content.replace(/<\/\$2>/g, '</div>');
      modified = true;
    }

    // Fix malformed syntax: const Component = () => {,
    if (content.includes('const ') && content.includes('() => {,')) {
      content = content.replace(/\(\)\s*=>\s*{,\s*$/gm, '() => {');
      modified = true;
    }

    // Fix malformed syntax: 'use client' without proper placement
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      content = content.replace(/'use client'\s*/g, '');
      content = "'use client';\n" + content;
      modified = true;
    }

    // Remove duplicate imports
    const lines = content.split('\n');
    const importLines = [];
    const otherLines = [];
    let inImportSection = true;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (inImportSection && (line.startsWith('import ') || line.startsWith("'use client'") || line.startsWith('const ') || line.startsWith('interface ') || line.startsWith('type '))) {
        importLines.push(line);
      } else if (line.startsWith('import ') && !inImportSection) {
        // Found import outside import section, move it up
        importLines.push(line);
        continue;
      } else {
        inImportSection = false;
        otherLines.push(lines[i]);
      }
    }

    // Remove duplicate imports
    const uniqueImports = [...new Set(importLines)];
    
    if (uniqueImports.length !== importLines.length) {
      const newContent = uniqueImports.join('\n') + '\n\n' + otherLines.join('\n');
      content = newContent;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);