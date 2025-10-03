const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Fixing motion imports in all pages...');

// Find all .tsx files in pages directory
const pages = glob.sync('pages/**/*.tsx', { ignore: ['node_modules/**', 'dist/**', 'out/**', '.next/**'] });

let fixedCount = 0;

pages.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if file uses motion but doesn't import it
    if (content.includes('motion.') && !content.includes("import { motion }")) {
      console.log(`Fixing motion import in: ${file}`);
      
      // Remove any incorrectly placed motion imports first
      content = content.replace(/import { motion } from 'framer-motion';\n/g, '');
      
      // Find the first import statement and add motion import after it
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      // Insert motion import
      lines.splice(insertIndex, 0, "import { motion } from 'framer-motion';");
      
      const newContent = lines.join('\n');
      fs.writeFileSync(file, newContent, 'utf8');
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error.message);
  }
});

console.log(`Fixed motion imports in ${fixedCount} files`);
console.log('Motion import fixes complete!');