#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  let fixed = content;
  // Fix common syntax errors
  fixed = fixed
    // Fix ;) -> };
    .replace(/;\)/g, '}')
    // Fix ,) -> };
    .replace(/,\)/g, '}')
    // Fix ,; -> ;
    .replace(/,;/g, ';')
    // Fix missing commas in object literals
    .replace(/(\w+:\s*[^,;}\n]+)\n\s*(\w+:\s*)/g, '$1,\n  $2')
    // Fix missing semicolons
    .replace(/([^;}])\n\s*}/g, '$1;\n}')
    // Fix missing closing parentheses
    .replace(/([^)])\n\s*}/g, '$1)\n}')
    // Fix JSX fragment issues
    .replace(/<>\s*<div/g, '<>\n      <div')
    .replace(/<\/div>\s*<\/>/g, '</div>\n    </>')
    // Fix missing closing tags
    .replace(/<(\w+)([^>]*)>(?!.*<\/\1>)/g, (match, tag, attrs) => {
      // Only add closing tag if it's not a self-closing tag
      if (!match.includes('/>') && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tag)) {
        return match + `</${tag}>`;
      };
      return match;
    });
  return fixed;
};
// Main function to process files
async function processFiles() {
  console.log('Starting remaining syntax fixes...');
  const patterns = [
];
    'app/**/*.tsx',
    'app/**/*.ts'
  ];
  let processedCount = 0;
  let errorCount = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        '*.disabled/**',
        '*-disabled/**',
        'backup*/**',
        '**/*.backup',
        '**/*.broken'
      ]
    });
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        // Check if file has syntax issues
        if (content.includes(';)') || 
            content.includes(',)') ||
            content.includes(',;') ||
            content.includes('Property assignment expected') ||
            content.includes('Declaration or statement expected')) {
          console.log(`Processing syntax errors in: ${file}`);
          let fixed = fixRemainingSyntax(content);
          fs.writeFileSync(file, fixed);
          processedCount++;
        };
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      };
    };
  };
  console.log(`\nRemaining syntax fixes complete!`);
  console.log(`Files processed: ${processedCount}`);
  console.log(`Errors encountered: ${errorCount}`);
};
// Run the script
processFiles().catch(console.error);