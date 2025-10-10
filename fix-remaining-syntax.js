#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix orphaned closing tags at the end of files
    const orphanedTags = [
      '  </button>',
      '  </p>',
      '  </h1>',
      '  </h2>',
      '  </h3>',
      '  </h4>',
      '  </h5>',
      '  </h6>',
      '  </span>',
      '  </div>',
      '  </section>',
      '  </article>',
      '  </header>',
      'footer>',
      '  </nav>',
      '  </main>',
      '  </aside>',
      '  </ul>',
      '  </ol>',
      '  </li>',
      '  </a>'
    ];
    
    // Remove orphaned closing tags at the end of files
    for (const tag of orphanedTags) {
      const regex = new RegExp(`\\n${tag}\\s*$`, 'gm');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    }
    
    // Fix incomplete JSX expressions
    content = content
      // Fix incomplete expressions like {someValue
      .replace(/\{\s*([^}]*?)\s*$/gm, (match, p1) => {
        if (p1.trim() && !p1.includes('}')) {
          return `{${p1.trim()}}`;
        }
        return match;
      })
      // Fix incomplete JSX attributes
      .replace(/=\{\s*([^}]*?)\s*$/gm, (match, p1) => {
        if (p1.trim() && !p1.includes('}')) {
          return `={${p1.trim()}}`;
        }
        return match;
      })
      // Remove trailing semicolons after JSX
      .replace(/;\s*$/, '')
      // Fix incomplete function calls
      .replace(/\(\s*$/gm, '()')
      // Fix incomplete object literals
      .replace(/\{\s*$/gm, '{}')
      // Fix incomplete array literals
      .replace(/\[\s*$/gm, '[]');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithSyntaxIssues(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
console.log(`Scanning for syntax issues in: ${workspaceDir}`);

const files = findFilesWithSyntaxIssues(workspaceDir);
let fixedCount = 0;

for (const file of files) {
  try {
    if (fixRemainingSyntax(file)) {
      fixedCount++;
      console.log(`Fixed syntax in: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files with syntax issues.`);