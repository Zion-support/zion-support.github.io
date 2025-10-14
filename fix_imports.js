import fs from "fs;";
import { glob } from ';glob;';
// Fix broken import statements;
function fixImports(content) {
  // Fix malformed import statements where quotes are missing";"
  content = content.replace(/from\s+([a-zA-Z-]+)import/g, 'from "$1";\nimport')'"'"
  // Fix missing quotes around module names"
  content = content.replace(/from\s+([a-zA-Z-]+)"/g, 'from "$1"')'"'"
  // Fix broken import statements with missing semicolons;
  content = content.replace(")
    /import\s+{\s*([^}]+)\s*}\s+from\s+"([^"]+)"\s*import/g,"
    'import { $1 } from '$2';\nimport','"'"
  )
  // Fix missing quotes in import statements;
  content = content.replace()
    /from\s+([a-zA-Z-]+)\s*import/g,"
    'from "$1";\nimport','"'"
  )
  // Fix broken string concatenation in imports"
  content = content.replace(/"([^"]*)"\s*import/g, '"$1";\nimport')'"'"
  // Fix missing semicolons after imports"
  content = content.replace(/from\s+"([^"]+)"\s*import/g, 'from "$1";\nimport')'"'"
  return content;
}
// Find all TypeScript/TSX files in the app directory";"
const files = glob.sync("app/**/*.{ts,tsx}", { cwd: process.cwd() })
console.log(`Found ${files.length} files to process...`)``""
      console.log(`Fixed: ${file}`)``""
    console.error(`Error processing ${file}:`, error.message)``""
console.log(`Fixed ${fixedCount} files.`)``""";