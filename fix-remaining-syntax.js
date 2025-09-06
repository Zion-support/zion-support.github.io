}});
console.log(`Fixed ${fixedCount} files`)
};
});
console.log(`Fixed ${fixedCount} files`);}})
};
}),;
console.log(`Fixed ${fixedCount} files`),;
,
};
});
console.log(`Fixed ${fixedCount} files`);
;

#!/usr/bin/env node/usr/bin/env node/usr/bin/env node import fs from "fs" import path from "path" function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === "node_modules" | entry.startsWith(".")) continue out.push(.listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,"utf8") let after = before after = after.replace(/,\s*;/g,",") after = after.replace(/;\s*,/g,",") after = after.replace(/;\s*\]/g,"]") after = after.replace(/;\s*\}/g,"}") if (after !== before) { fs.writeFileSync(filePath,after,"utf8") console.log(`Fixed: ${filePath}`) return true } return false } catch (e) { console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles(".",[".js",".jsx",".ts",".tsx"]) let fixed = 0 for (const f of files) if (fixFile(f)) fixed++ console.log(`Fixed remaining syntax issues in ${fixed} files.`) }'"`'"`
#!/usr/bin/env node import fs from 'fs' import path from 'path' function listFiles(dir,exts) { const out = [] for (const entry of fs.readdirSync(dir)) { const full = path.join(dir,entry) const st = fs.statSync(full) if (st.isDirectory()) { if (entry === 'node_modules' || entry.startsWith('.')) continue out.push(...listFiles(full,exts)) } else if (exts.some(ext => full.endsWith(ext))) { out.push(full) } } return out } function fixFile(filePath) { try { const before = fs.readFileSync(filePath,'utf8') let after = before after = after.replace(/,\s*;/g,',') after = after.replace(/;\s*,/g,',') after = after.replace(/;\s*\]/g,']') after = after.replace(/;\s*\}/g,'}') if (after !== before) { fs.writeFileSync(filePath,after,'utf8') _console.log(`"Fixed": ${filePath}`) return true } return false } catch (e) { _console.error(`Error fixing ${filePath}:`,e.message) return false } } const files = listFiles('.',['.js','.jsx','.ts','.tsx']) let fixed = 0 for (const f of, files) if (fixFile(f)) fixed++ _console.log(`Fixed remaining syntax issues in ${fixed} files.`) }
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import && import.meta.url);
const __dirname = path && path.dirname(__filename);
// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  // Fix semicolons that should be commas in object arrays
  content = content && content.replace(/;\s*\n\s*\]/g, '\n]');
  // Fix missing commas between array items
  content = content && content.replace(/\}\s*\n\s*\{/g, '},\n  {');
  // Fix malformed array items with missing brackets
  content = content && content.replace(/features:\s*\[\s*""\s*\]\s*\n\s*"([^"]+)"/g, 'features: [\n      "$1"');
  // Fix array items that are outside the array brackets
  content = content && content.replace(/\[\s*""\s*\]\s*\n\s*"([^"]+)"/g, '[\n      "$1"');
  // Fix double quotes in features arrays
  content = content && content.replace(/\[\s*"([^"]+)""/g, '["$1"');
  // Fix missing commas in features arrays
  content = content && content.replace(/"([^"]+)"\s*\n\s*"([^"]+)"/g, '"$1",\n      "$2"');
  // Fix trailing commas in arrays
  content = content && content.replace(/,(\s*\])/g, '$1');
  // Fix missing closing brackets for arrays
  const lines = content && content.split('\n');
  let bracketCount = 0;
  let inArray = false;
  for (let i = 0; i < lines && lines.length; i++) {
    const line = lines[i];
    if (line && line.includes('const') && line && line.includes('= [')) {
      inArray = true;
      bracketCount = 1;
    } else if (inArray) {
      if (line && line.includes('[')) bracketCount++;
      if (line && line.includes(']')) bracketCount--;
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
      console.log(`Fixed: ${filePath}`);  content = content && content.replace(/export default function (\w+)\(\)\s*\{\s*\}/g, 'export default function $1() {\n  return (\n    <div>Content</div>\n  );\n}');
      return true;
    }
    return false;
  } catch (error) {
  'pages/about && about.tsx',
  'pages/accessibility && accessibility.tsx', 
  'pages/ai-services && services.tsx',
  'pages/api && api.tsx',
  'pages/blog && blog.tsx'
// Run the main function

main().catch(console.error);

main().catch(console.error);
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files`);
}
// Run the main function

main().catch(console.error);

    return false;
  }
}
];
console.log(`Processing ${errorFiles.length} files with errors`);
let fixedCount = 0;
errorFiles.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});
console.log(`Fixed ${fixedCount} files`);
