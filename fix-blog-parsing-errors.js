import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


// Get all blog files
const blogDir = path.join(__dirname, 'src', 'blog');
const blogFiles = [];

function findBlogFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findBlogFiles(filePath);
    } else if (file === 'page.tsx' || file === 'page.ts') {
      blogFiles.push(filePath);
    }
  }
}

findBlogFiles(blogDir);

function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing parenthesis before closing brace
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this line ends with }; and the previous line doesn't have a closing parenthesis
      if (line.trim() === '};' && i > 0) {
        const prevLine = lines[i - 1];
        // If previous line doesn't end with ) or );, add missing )
        if (!prevLine.trim().endsWith(')') && !prevLine.trim().endsWith(');')) {
          // Check if this looks like a JSX return statement that needs closing
          if (prevLine.includes('</') || prevLine.includes('>')) {
            newLines.push('  );');
            modified = true;
            continue;
          }
        }
      }
      
      newLines.push(line);
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content);
      console.log(`Fixed parsing errors: ${path.relative(__dirname, filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all blog files
blogFiles.forEach(file => {
  fixParsingErrors(file);
});

console.log(`Processed ${blogFiles.length} blog files`);