<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
    // Fix common HTML entities
    const fixes = [
  }
      { from: /&apos;/g, to: "'" },
      { from: /&quot;/g, to: '"' },
      { from: /&lt;/g, to: "<" },
      { from: /&gt;/g, to: ">" },
      { from: /&amp;/g, to: "&" },
      { from: /&rbrace;/g, to: "}" },      { from: /&lbrace;/g, to: "{" }
]
=======

    // Fix common HTML entities
    const fixes = [

// Fix common HTML entities
    const fixes = [
      { from: /&apos;/g, to: "'" },
      { from: /&quot;/g, to: '"' },
      { from: /&lt;/g, to: '<' },
      { from: /&gt;/g, to: '>' },
      { from: /&amp;/g, to: '&' },

      { from: /&rbrace;/g, to: '}' },
{ from: /&rbrace;/g, to: '}' },
      { from: /&lbrace;/g, to: '{' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
    ];
    let hasChanges = false;
    fixes.forEach(
  fix => {
)
  )
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        hasChanges = true;
}
      }
    });
<<<<<<< HEAD
    if (hasChanges) { fs.writeFileSync(filePath, content, 'utf8'); }
      console.log(`Fixed HTML entities in: ${filePath}`);
      return true;
    }
=======
    
    if (hasChanges) {

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed HTML entities in: ${filePath}`);
      return true;
    }

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
    return false;
  } catch (error) {
}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
function findTsxFiles(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
}
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) { files.push(fullPath); }
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);
console.log(`Found ${files.length} TypeScript files to process...`);
let fixedCount = 0;
files.forEach(
  file => {
)
  )
  if (fixHtmlEntities(file)) {
    fixedCount++;
}
  }
});
console.log(`Fixed HTML entities in ${fixedCount} files.`);
<<<<<<< HEAD
=======
// fix-html-entities - Basic implementation
export default function fix-html-entities() {
  return null;
}
>>>>>>> origin/main
=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
