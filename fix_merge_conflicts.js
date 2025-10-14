import fs from 'fs';
import { glob } from 'glob';

// Fix merge conflict artifacts in files
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix broken import statements
  content = content.replace(/import[^;]+;export/g, (match) => {
    return match.replace(';export', ';\n\nexport');
  });
  
  // Fix missing newlines after imports
  content = content.replace(/import[^;]+;([^<])/g, (match, after) => {
    return match.replace(';' + after, ';\n\n' + after);
  });
  
  // Fix broken function declarations
  content = content.replace(/export default function[^{]*{([^}]*return[^}]*<[^>]*>)/g, (match) => {
    return match.replace(/(return[^<]*<[^>]*>)/, '$1\n  );');
  });
  
  // Fix JSX without proper wrapping
  content = content.replace(/return\s*\(\s*<([A-Z][^>]*>[\s\S]*?<\/[A-Z][^>]*>)\s*\)/g, (match, jsx) => {
    return `return (\n    <>\n      ${jsx}\n    </>\n  )`;
  });
  
  // Fix missing closing parentheses and braces
  content = content.replace(/return\s*\(\s*<[^>]*>[\s\S]*?<[^>]*>\s*$/gm, (match) => {
    if (!match.includes(');')) {
      return match + '\n  );';
    }
    return match;
  });
  
  // Fix missing closing braces for functions
  content = content.replace(/export default function[^{]*{[\s\S]*?return[^}]*<[^>]*>[\s\S]*?<[^>]*>\s*$/gm, (match) => {
    if (!match.includes('}')) {
      return match + '\n}';
    }
    return match;
  });
  
  return content;
}

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixedContent = fixMergeConflicts(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files.`);