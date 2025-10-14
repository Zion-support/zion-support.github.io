import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(content) {
  // Fix triple quotes in 'use client' directive
  content = content.replace(/'use client''''/g, "'use client';");
  content = content.replace(/'use client''/g, "'use client';");
  
  // Fix import statements with extra quotes
  content = content.replace(/import\s+([^;]+);""/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);"/g, 'import $1;');
  
  // Fix JSX closing tags with extra quotes
  content = content.replace(/<\/[^>]+>""/g, (match) => match.replace('""', ''));
  content = content.replace(/<\/[^>]+>"/g, (match) => match.replace('"', ''));
  
  // Fix JSX attributes with extra quotes
  content = content.replace(/className="([^"]+)""/g, 'className="$1"');
  content = content.replace(/className="([^"]+)"'/g, 'className="$1"');
  
  // Fix malformed JSX structure
  content = content.replace(/<>    <div><\/div>/g, '<>');
  content = content.replace(/<Helmet><\/Helmet>/g, '<Helmet>');
  content = content.replace(/<\/Helmet>/g, '</Helmet>');
  
  // Fix function return statements
  content = content.replace(/  \)\};/g, '  );');
  content = content.replace(/  \)\};/g, '  );');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*<div><\/div>/g, '<>');
  content = content.replace(/<>\s*<Helmet><\/Helmet>/g, '<>\n      <Helmet>');
  
  // Fix extra semicolons in JSX
  content = content.replace(/;\s*""/g, '');
  content = content.replace(/;\s*"/g, '');
  
  // Fix malformed closing tags
  content = content.replace(/<\/[^>]+>\s*<\/[^>]+>/g, (match) => {
    const tags = match.match(/<\/[^>]+>/g);
    return tags[tags.length - 1];
  });
  
  // Fix extra closing divs and fragments
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  content = content.replace(/<\/div>\s*<\/div>\s*<\/div>/g, '</div>');
  content = content.replace(/<\/div>\s*<\/div>/g, '</div>');
  
  // Fix malformed JSX structure patterns
  content = content.replace(/<>\s*<div[^>]*><\/div>\s*<Helmet><\/Helmet>/g, '<>\n      <Helmet>');
  content = content.replace(/<>\s*<div[^>]*><\/div>\s*<Helmet>/g, '<>\n      <Helmet>');
  
  // Fix extra closing fragments
  content = content.replace(/<\/>\s*<\/div>\s*<\/div>\s*<\/div>/g, '</>');
  content = content.replace(/<\/>\s*<\/div>\s*<\/div>/g, '</>');
  content = content.replace(/<\/>\s*<\/div>/g, '</>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all TSX files
async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: ['node_modules/**', 'dist/**', '.next/**'] 
    });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

main();