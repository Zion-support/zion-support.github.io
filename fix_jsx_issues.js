import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixJSXIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX structure issues
    const lines = content.split('\n');
    const newLines = [];
    let braceCount = 0;
    let inJSX = false;
    let tagStack = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track JSX opening and closing tags
      if (trimmedLine.includes('<') && !trimmedLine.includes('</')) {
        // Opening tag
        const tagMatch = trimmedLine.match(/<(\w+)/);
        if (tagMatch) {
          tagStack.push(tagMatch[1]);
        }
      } else if (trimmedLine.includes('</')) {
        // Closing tag
        const tagMatch = trimmedLine.match(/<\/(\w+)/);
        if (tagMatch) {
          const expectedTag = tagStack.pop();
          if (expectedTag && expectedTag !== tagMatch[1]) {
            // Fix mismatched tags
            newLines.push(line.replace(`</${tagMatch[1]}>`, `</${expectedTag}>`));
            modified = true;
            continue;
          }
        }
      }
      
      // Fix common syntax issues
      if (trimmedLine.includes('export default function') && !trimmedLine.includes('const ')) {
        // Convert to arrow function
        const functionName = trimmedLine.match(/export default function (\w+)/)?.[1];
        if (functionName) {
          newLines.push(`const ${functionName} = () => {`);
          modified = true;
          continue;
        }
      }
      
      // Fix duplicate imports
      if (trimmedLine.startsWith('import ') && newLines.some(l => l.trim() === line.trim())) {
        modified = true;
        continue;
      }
      
      newLines.push(line);
    }
    
    // Ensure proper closing of JSX elements
    while (tagStack.length > 0) {
      const tag = tagStack.pop();
      newLines.push(`</${tag}>`);
      modified = true;
    }
    
    // Fix 'use client' directive placement
    if (content.includes("'use client'") && !content.startsWith("'use client'")) {
      const newContent = newLines.join('\n');
      const fixedContent = newContent.replace(/.*'use client';.*\n/g, '');
      newLines.length = 0;
      newLines.push("'use client';", ...fixedContent.split('\n'));
      modified = true;
    }
    
    if (modified) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed JSX issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixJSXIssues(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += findAndFixJSXIssues(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixJSXIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix issues in app directory
const appDir = path.join(__dirname, 'app');
const fixedCount = findAndFixJSXIssues(appDir);

console.log(`Fixed JSX issues in ${fixedCount} files`);