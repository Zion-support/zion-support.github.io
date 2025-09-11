const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Fixing broken import statements...');

// Find all .tsx files in pages directory
const pages = glob.sync('pages/**/*.tsx', {
  ignore: ['node_modules/**', 'dist/**', 'out/**', '.next/**'],
});

let fixedCount = 0;

pages.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Fix broken import patterns
    // Pattern 1: import { \nimport { motion } from 'framer-motion';
    content = content.replace(
      /import { \nimport { motion } from 'framer-motion';\n/g,
      "import { motion } from 'framer-motion';\nimport { "
    );

    // Pattern 2: import { \nimport { motion } from 'framer-motion';
    content = content.replace(
      /import { \nimport { motion } from 'framer-motion';\n/g,
      "import { motion } from 'framer-motion';\nimport { "
    );

    // Pattern 3: import { \nimport { motion } from 'framer-motion';
    content = content.replace(
      /import { \nimport { motion } from 'framer-motion';\n/g,
      "import { motion } from 'framer-motion';\nimport { "
    );

    if (content !== originalContent) {
      console.log(`Fixed broken imports in: ${file}`);
      fs.writeFileSync(file, content, 'utf8');
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error.message);
  }
});

console.log(`Fixed broken imports in ${fixedCount} files`);
console.log('Import fixes complete!');
