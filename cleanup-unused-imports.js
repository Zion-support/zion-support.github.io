import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content.trim()) return;
    
    // Run ESLint with --fix to remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --no-eslintrc --config '{"rules":{"@typescript-eslint/no-unused-vars":"error"},"parser":"@typescript-eslint/parser","parserOptions":{"ecmaVersion":2020,"sourceType":"module","ecmaFeatures":{"jsx":true}},"plugins":["@typescript-eslint"]}'`, { stdio: 'pipe' });
      console.log(`✓ Fixed unused imports in ${filePath}`);
    } catch (error) {
      // If ESLint fails, try a simpler approach
      console.log(`⚠ ESLint failed for ${filePath}, trying manual cleanup...`);
      
      // Remove unused imports manually (basic approach)
      const lines = content.split('\n');
      const newLines = lines.filter(line => {
        // Skip import lines that are likely unused
        if (line.trim().startsWith('import') && line.includes('from')) {
          // Check if the import is actually used in the file
          const importName = line.match(/import\s*{([^}]+)}/)?.[1]?.split(',').map(s => s.trim());
          if (importName) {
            const isUsed = importName.some(name => {
              const cleanName = name.replace(/\s+as\s+\w+/, '').trim();
              return content.includes(cleanName) && !line.includes(cleanName);
            });
            return isUsed;
          }
        }
        return true;
      });
      
      if (newLines.length !== lines.length) {
        fs.writeFileSync(filePath, newLines.join('\n'));
        console.log(`✓ Manually cleaned ${filePath}`);
      }
    }
  } catch (error) {
    console.log(`✗ Error processing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🧹 Starting cleanup of unused imports...\n');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to process\n`);

let processed = 0;
for (const file of files) {
  removeUnusedImports(file);
  processed++;
  
  if (processed % 10 === 0) {
    console.log(`Progress: ${processed}/${files.length} files processed`);
  }
}

console.log(`\n✅ Cleanup complete! Processed ${processed} files.`);