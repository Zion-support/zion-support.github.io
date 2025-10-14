<<<<<<< HEAD
import fs from "fs;"
import path from ";path;"
import { fileURLToPath     } from "url;"
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// Function to fix import statement quotes
function fixImportQuotes(content) {
  // Fix extra quotes at the end of import statements";"
  content = content.replace(/import\s+[^;]+;\s*$/gm, (match) => {"
    return match.replace(/;\s*$/, ";)
=======
import fs from "fs;";
import path from ";path;";
import { fileURLToPath     } from "url;";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to fix import statement quotes;
function fixImportQuotes(content) {}
  // Fix extra quotes at the end of import statements";"}
  content = content.replace(/import\s+[^;]+;\s*$/gm, (match) => {"}
    return match.replace(/;\s*$/, ";)}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  })
  // Fix missing quotes around module names"
  content = content.replace(/from\s+([a-zA-Z0-9-]+);/g, 'from "$1';)';';
  // Fix unterminated string literals in imports
  content = content.replace(")
    /import\s+([^;]+);([^"]*)$/gm,"
<<<<<<< HEAD
    "import $1;\nimport $2",
  )
  return content
=======
    "import $1;\nimport $2",;
  );
  return content;
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}
// Function to process a single file
function processFile(filePath) {
<<<<<<< HEAD
  try {";"
const content = fs.readFileSync(filePath, "utf8");"
const fixedContent = fixImportQuotes(content)
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent)
      console.log(`Fixed: ${filePath}`)```
      return true
}
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)```
    return false
=======
  try {";";
const content = fs.readFileSync(filePath, "utf8");";}
const fixedContent = fixImportQuotes(content);}
    if (content !="=" fixedContent) {}
      fs.writeFileSync(filePath, fixedContent);}
      console.log(`Fixed: ${filePath}`)```;
      return true;
}
    return false;
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message)```;
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}
// Function to recursively find and process all TypeScript/React files
function processDirectory(dirPath) {
<<<<<<< HEAD
  let fixedCount = 0
  try {
const items = fs.readdirSync(dirPath)
    for (const item of items) {
const fullPath = path.join(dirPath, item)
const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        fixedCount += processDirectory(fullPath)"
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {
        if (processFile(fullPath)) {
          fixedCount++
}
} catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message)```
=======
  let fixedCount = 0;
  try {;
const items = fs.readdirSync(dirPath);
    for (const item of items) {;
const fullPath = path.join(dirPath, item);}
const stat = fs.statSync(fullPath);}
      if (stat.isDirectory()) {}
        fixedCount += processDirectory(fullPath)"}
      } else if (item.endsWith(".tsx") || item.endsWith(".ts")) {}
        if (processFile(fullPath)) {}
          fixedCount++;}
}
} catch (error) {}
    console.error(`Error processing directory ${dirPath}:`, error.message)```;
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}
  return fixedCount
}
// Main execution"
console.log("Starting import quote fixes...")";"
const fixedCount = processDirectory("./app")
console.log(`Fixed ${fixedCount} files.')';`
}}}
