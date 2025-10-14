import fs from &apos;fs&apos;;
import path from &apos;path&apos;;
import { fileURLToPath } from &apos;url&apos;;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix semicolons in object properties
  content = content.replace(/title: &apos;([^&apos]+)&apos;,/g, "title: &apos;$1&apos;,");
  content = content.replace(/description: &apos;([^&apos]+)&apos;;/g, "description: &apos;$1&apos;");
  content = content.replace(/name: &apos;([^&apos]+)&apos;;/g, "name: &apos;$1&apos;");
  content = content.replace(/href: &apos;([^&apos]+)&apos;;/g, "href: &apos;$1&apos;");
  
  // Fix extra semicolons in object properties
  content = content.replace(/hasError: false ;/g, &apos;hasError: false&apos;);
  content = content.replace(/hasError: true,/g, &apos;hasError: true,&apos;);
  content = content.replace(/error: Error,/g, &apos;error: Error,&apos;);
  content = content.replace(/Error,/g, &apos;Error,&apos;);
  
  // Fix CSS class syntax errors
  content = content.replace(/grid md: grid-cols/g, &apos;grid md:grid-cols&apos;);
  content = content.replace(/hover: border-/g, &apos;hover:border-&apos;);
  content = content.replace(/hover: from-/g, &apos;hover:from-&apos;);
  content = content.replace(/hover: to-/g, &apos;hover:to-&apos;);
  content = content.replace(/border: border-/g, &apos;border:border-&apos;);
  
  // Fix JSX syntax errors
  content = content.replace(/className="([^"]*);/g, &apos;className="$1"&apos;);
  content = content.replace(/style={{([^}]*);/g, &apos;style={{$1&apos;);
  
  // Fix function parameter syntax
  content = content.replace(/\(([^)]*);/g, &apos;($1&apos;);
  content = content.replace(/\): ([^,]+);/g, &apos;): $1&apos;);
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*&apos;([^&apos]+)&apos;\s*(\w+):/g, "$1: &apos;$2&apos;,\n    $3:");
  content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, &apos;$1: "$2",\n    $3:&apos;);
  
  // Fix merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '&apos;);
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '&apos;);
  
  // Fix malformed JSX closing tags
  content = content.replace(/<(\w+)>\s*<\/\1>\s*;/g, &apos;<$1></$1>&apos;);
  
  // Fix missing closing braces
  content = content.replace(/(\w+):\s*\([^)]*\)\s*{([^}]*)\s*$/gm, &apos;$1: () => {\n    $2\n  }&apos;);
  
  return content;
}

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
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent);
      console.log(`Fixed: ${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);