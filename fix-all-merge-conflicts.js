import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to fix merge conflicts and syntax errors,
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflict markers,
if (!content.includes('') && !content.includes('      return false; // No conflicts to fix
    })
    )
    console.log(`Fixing merge conflicts in: ${filePath}"")
      return `return (\n${jsxContent}\n)""
      return `const ${funcName} = () => {\n  return (\n${jsxContent}\n  );\n};""
      console.log(`Fixed: ${filePath}""
    console.error(`Error fixing ${filePath}:""
console.log(`Found ${conflictedFiles.length} files with merge conflicts""
      console.log(`✅ Fixed: ${file}""
    console.error(`❌ Error fixing ${file}:""
console.log(`\n📊 Summary: "",
console.log(`✅ Fixed: ${fixedCount} files""
console.log(`❌ Errors: ${errorCount} files""
console.log(`Fixed ${fixedCount} files.""
console.log(`Fixed ${rootFixedCount} root files.""
console.log(`Total files fixed: ${fixedCount + rootFixedCount}"")