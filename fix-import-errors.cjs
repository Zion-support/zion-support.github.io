const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

let fixedFiles = 0;

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix corrupted import statements
    if (content.includes('../components/Navigation"') || content.includes('../components/Footer"')) {
      // Fix malformed import statements
      content = content.replace(/import\s+Navigation\s+from\s+['"]\.\.\/components\/Navigation['"];?\s*import\s+Footer\s+from\s+['"]\.\.\/components\/Footer['"];?/g, 
        'import Navigation from "../components/Navigation";\nimport Footer from "../components/Footer";');
      
      // Fix individual corrupted imports
      content = content.replace(/\.\.\/components\/Navigation['"]\s*import\s+Footer\s+from\s+['"]\.\.\/components\/Footer['"]/g, 
        'import Navigation from "../components/Navigation";\nimport Footer from "../components/Footer";');
      
      // Fix standalone corrupted imports
      content = content.replace(/\.\.\/components\/Navigation['"]/g, 'import Navigation from "../components/Navigation";');
      content = content.replace(/\.\.\/components\/Footer['"]/g, 'import Footer from "../components/Footer";');
      
      modified = true;
    }

    // Fix missing semicolons in import statements
    content = content.replace(/import\s+Navigation\s+from\s+['"][^'"]*['"]\s*(?!;)/g, 'import Navigation from "../components/Navigation";');
    content = content.replace(/import\s+Footer\s+from\s+['"][^'"]*['"]\s*(?!;)/g, 'import Footer from "../components/Footer";');

    // Fix relative import paths for different directory levels
    if (file.includes('/it-services/')) {
      content = content.replace(/import\s+Navigation\s+from\s+['"]\.\.\/components\/Navigation['"];?/g, 'import Navigation from "../../components/Navigation";');
      content = content.replace(/import\s+Footer\s+from\s+['"]\.\.\/components\/Footer['"];?/g, 'import Footer from "../../components/Footer";');
    }

    // Remove duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          cleanedLines.push(line);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    content = cleanedLines.join('\n');

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      console.log(`Fixed import errors in ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed import errors in ${fixedFiles} files.`);