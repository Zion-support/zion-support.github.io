<<<<<<< HEAD
<<<<<<< HEAD
=======
}});

;
  };
}),;
console.log(`Fixed ${fixedCount} files`),;
,;
;};
});
console.log(`Fixed ${fixedCount} files`);
;
  };
}),
console.log(`Fixed ${fixedCount} files`),
>>>>>>> origin/main
<<<<<<< HEAD
,
#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ }
=======
,#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ }
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node import fs from "fs" import path from "path" function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === "node_modules" | entry.startsWith(".")) continue out.push(.listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,"utf8") let after = before after = after.replace(/,\s*;/g,",") after = after.replace(/;\s*,/g,",") after = after.replace(/;\s*\]/g,"]") after = after.replace(/;\s*\}/g,"}") if (after !== before) { fs.writeFileSync(filePath,after,"utf8") console.log(`Fixed: ${filePath}`) return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles(".",[".js",".jsx",".ts",".tsx"]) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ console.log(`Fixed remaining syntax issues in ${fixed} files.`) }'"`'"`
#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') _console.log(`"Fixed": ${filePath}`) return true } return false } catch (e) { _console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of, files) if (fixFile(f)) fixed++ _console.log(`Fixed remaining syntax issues in ${fixed} files.`) }
<<<<<<< HEAD
=======
}});
console.log(`Fixed ${fixedCount} files`);
;
};
});
console.log(`Fixed ${fixedCount} files`);
;
#!/usr/bin/env node

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining syntax errors
function fixSyntaxErrors(content) {
  // Fix object property syntax issues
  content = content.replace(/(\w+):\s*([^,}]+),\s*$/gm, '$1: $2,');
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(\w+)\s*=\s*[^;]+,\s*$/gm, (match) => {
    if (!match.includes(';')) {
      return match.replace(/,\s*$/, ';');
    }
    return match;
  });
  
  // Fix function parameter syntax
  content = content.replace(/function\s+\w+\s*\([^)]*\)\s*\{/g, (match) => {
    return match.replace(/,(\s*\))/g, '$1');
  });
  
  // Fix arrow function syntax
  content = content.replace(/\([^)]*\)\s*=>\s*\{/g, (match) => {
    return match.replace(/,(\s*\))/g, '$1');
  });
  
  // Fix object destructuring
  content = content.replace(/\{\s*([^}]+)\s*\}\s*=\s*/g, (match, props) => {
    const fixedProps = props.replace(/,(\s*[}])/g, '$1');
    return `{ ${fixedProps} } = `;
  });
  
  // Fix array destructuring
  content = content.replace(/\[\s*([^\]]+)\s*\]\s*=\s*/g, (match, props) => {
    const fixedProps = props.replace(/,(\s*\])/g, '$1');
    return `[ ${fixedProps} ] = `;
  });
  
  // Fix JSX attribute syntax
  content = content.replace(/(\w+)=\{([^}]+)\}/g, (match, attr, value) => {
    if (value.includes(',')) {
      const fixedValue = value.replace(/,(\s*\})/g, '$1');
      return `${attr}={${fixedValue}}`;
    }
    return match;
  });
  
  // Fix template literal syntax
  content = content.replace(/`([^`]*),`/g, '`$1`');
  
  // Fix string concatenation
  content = content.replace(/(['"`])\s*\+\s*(['"`])/g, '$1$2');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
=======
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  // Fix semicolons that should be commas in object arrays
  content = content.replace(/;\s*\n\s*\]/g, '\n]');
  // Fix missing commas between array items
  content = content.replace(/\}\s*\n\s*\{/g, '},\n  {');
  // Fix malformed array items with missing brackets
  content = content.replace(/features:\s*\[\s*""\s*\]\s*\n\s*"([^"]+)"/g, 'features: [\n      "$1"');
  // Fix array items that are outside the array brackets
  content = content.replace(/\[\s*""\s*\]\s*\n\s*"([^"]+)"/g, '[\n      "$1"');
  // Fix double quotes in features arrays
  content = content.replace(/\[\s*"([^"]+)""/g, '["$1"');
  // Fix missing commas in features arrays
  content = content.replace(/"([^"]+)"\s*\n\s*"([^"]+)"/g, '"$1",\n      "$2"');
  // Fix trailing commas in arrays
  content = content.replace(/,(\s*\])/g, '$1');
  // Fix missing closing brackets for arrays
  const lines = content.split('\n');
  let bracketCount = 0;
  let inArray = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('const') && line.includes('= [')) {
      inArray = true;
      bracketCount = 1;
    } else if (inArray) {
      if (line.includes('[')) bracketCount++;
      if (line.includes(']')) bracketCount--;
      if (bracketCount === 0) {
        inArray = false;
      }
    }
  }
  // Fix function declarations that are missing opening braces
  content = content.replace(/export default function (\w+)\(\)\s*\{\s*\}/g, 'export default function $1() {\n  return (\n    <div>Content</div>\n  );\n}');
  return content;
}
// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntax(content);
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
>>>>>>> origin/main
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
<<<<<<< HEAD

// Main function
async function main() {
  const patterns = [
    'src/**/*.tsx',
    'src/**/*.ts',
    'zion-os/**/*.tsx',
    'zion-os/**/*.ts'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }
<<<<<<< HEAD
});
<<<<<<< HEAD
console.log(`Fixed ${fixedCount} files`);
=======
console.log(`Fixed ${fixedCount} files`);
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
=======
// Process the specific files that have errors
const errorFiles = [
  'pages/about.tsx',
  'pages/accessibility.tsx', 
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/blog.tsx'
];
console.log(`Processing ${errorFiles.length} files with errors`);
let fixedCount = 0;
errorFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
>>>>>>> origin/main
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}

// Run the main function
<<<<<<< HEAD
main().catch(console.error);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
main().catch(console.error);
>>>>>>> origin/main
