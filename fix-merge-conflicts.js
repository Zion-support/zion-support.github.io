import fs from &apos;fs&apos;;
import path from &apos;path&apos;;
import { fileURLToPath } from &apos;url&apos;;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts
function fixMergeConflicts(content) {// Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '&apos;);
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '&apos;);
  content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '&apos;);
  content = content.replace(/>>>>>>> [a-f0-9]+/g, '&apos;);
  
  // Remove any remaining conflict markers
  content = content.replace(/^<<<<<<< HEAD$/gm, '&apos;);
  content = content.replace(/^=======$/gm, '&apos;);
  content = content.replace(/^>>>>>>> [a-f0-9]+$/gm, '&apos;);
  
  return content}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = [&apos;.ts&apos;, &apos;.tsx&apos;, &apos;.js&apos;, &apos;.jsx&apos]) {;
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith(&apos;.&apos;) && item !== &apos;node_modules&apos;) {
      files = files.concat(getAllFiles(fullPath, extensions))} else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {;
      files.push(fullPath)}
  }
  
  return files;
}

// Fix all files
const files = getAllFiles(path.join(__dirname, &apos;app&apos;));
let fixedCount = 0;

files.forEach(file => {
  try {;
    const content = fs.readFileSync(file, &apos;utf8');
    const fixedContent = fixMergeConflicts(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent);
      console.log(`Fixed merge conflicts in: ${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log(`\nFixed merge conflicts in ${fixedCount} files`);