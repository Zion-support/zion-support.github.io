#!/usr/bin/env node
import fs from 'fs';'
import { execSync } from 'child_process';'
// Get all files with syntax errors
const files = execSync('npm run lint 2>&1 | grep -E "\\.tsx|\\.ts|\\.js|\\.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' })'"
  .trim()
  .split('\n')'
  .filter(file => file.length > 0 && !file.includes('node_modules'));'
console.log(`Found ${files.length} files with syntax errors`);
let fixedCount = 0;
files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');'
    const originalContent = content;
    // Fix extra quotes that were added
    content = content.replace(/';'/g, ';');'
    content = content.replace(/';/g, ';');'
    content = content.replace(/'/g, "'");'"
    content = content.replace(/"/g, '"');'"
    // Fix unterminated string literals
    content = content.replace(/import\s+([^']*?)';$/gm, "import $1';");'"
    content = content.replace(/import\s+([^"]*?)";$/gm, 'import $1';);'"
    // Fix malformed imports
    content = content.replace(/from\s+'([^']*?)';$/gm, "from '$1';");'"
    content = content.replace(/from\s+"([^"]*?)";$/gm, 'from "$1';);'"
    // Fix JSX attributes
    content = content.replace(/className="([^"]*?)";$/gm, 'className="$1"');'"
    content = content.replace(/title="([^"]*?)";$/gm, 'title="$1"');'"
    content = content.replace(/description="([^"]*?)";$/gm, 'description="$1"');'"
    // Fix object properties
    content = content.replace(/title:\s*'([^']*?)';$/gm, "title: '$1',");'"
    content = content.replace(/description:\s*'([^']*?)';$/gm, "description: '$1',");'"
    content = content.replace(/icon:\s*([^,]*?),;$/gm, 'icon: $1,');'
    // Clean up extra semicolons
    content = content.replace(/;+$/gm, ';');'
    content = content.replace(/,\s*;$/gm, ',');'
    // Fix missing imports
    if (content.includes('CheckCircle') && !content.includes("import { CheckCircle")) {'"
      content = content.replace(/import { ([^}]*?) } from 'lucide-react';/, '
        (match, imports) => {
          if (!imports.includes('CheckCircle')) {'
            return `import { ${imports}, CheckCircle } from 'lucide-react';`;'
          }
          return match;
        });
    }
    if (content.includes('Shield') && !content.includes("import { Shield")) {'"
      content = content.replace(/import { ([^}]*?) } from 'lucide-react';/, '
        (match, imports) => {
          if (!imports.includes('Shield')) {'
            return `import { ${imports}, Shield } from 'lucide-react';`;'
          }
          return match;
        });
    }
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});
console.log(`Fixed ${fixedCount} files`);