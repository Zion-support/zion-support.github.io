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

    // Fix duplicate import statements
    if (content.includes('";../components/') || content.includes('";;')) {
      // Fix Navigation imports
      content = content.replace(/import Navigation from ["']\.\.\/components\/Navigation["'];\.\.\/components\/Navigation["'];;/g, 'import Navigation from "../components/Navigation";');
      content = content.replace(/import Navigation from ["']\.\.\/components\/Navigation["'];\.\.\/components\/Navigation["'];/g, 'import Navigation from "../components/Navigation";');
      
      // Fix Footer imports
      content = content.replace(/import Footer from ["']\.\.\/components\/Footer["'];\.\.\/components\/Footer["'];;/g, 'import Footer from "../components/Footer";');
      content = content.replace(/import Footer from ["']\.\.\/components\/Footer["'];\.\.\/components\/Footer["'];/g, 'import Footer from "../components/Footer";');
      
      // Fix other duplicate patterns
      content = content.replace(/import\s+Navigation\s+from\s+["'][^"']*["'];\.\.\/components\/Navigation["'];;/g, 'import Navigation from "../components/Navigation";');
      content = content.replace(/import\s+Footer\s+from\s+["'][^"']*["'];\.\.\/components\/Footer["'];;/g, 'import Footer from "../components/Footer";');
      
      modified = true;
    }

    // Fix malformed import statements
    if (content.includes('import Navigation from "') && content.includes('";../components/Navigation"')) {
      content = content.replace(/import Navigation from ["'][^"']*["'];\.\.\/components\/Navigation["'];;?/g, 'import Navigation from "../components/Navigation";');
      modified = true;
    }

    if (content.includes('import Footer from "') && content.includes('";../components/Footer"')) {
      content = content.replace(/import Footer from ["'][^"']*["'];\.\.\/components\/Footer["'];;?/g, 'import Footer from "../components/Footer";');
      modified = true;
    }

    // Fix relative import paths for different directory levels
    if (file.includes('/it-services/')) {
      content = content.replace(/import\s+Navigation\s+from\s+["']\.\.\/components\/Navigation["'];?/g, 'import Navigation from "../../components/Navigation";');
      content = content.replace(/import\s+Footer\s+from\s+["']\.\.\/components\/Footer["'];?/g, 'import Footer from "../../components/Footer";');
    }

    // Remove any remaining malformed lines
    content = content.replace(/^\.\.\/components\/[^;]*;?$/gm, '');
    content = content.replace(/^import\s+[^;]*;\.\.\/components\/[^;]*;?$/gm, '');

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      console.log(`Fixed duplicate imports in ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed duplicate imports in ${fixedFiles} files.`);