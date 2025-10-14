import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove "use client"; lines
    if (content.includes('"use client";')) {
      content = content.replace(/"use client";\n?/g, '');
      modified = true;
    }

    // Fix common unused import patterns
    const patterns = [
      // Remove unused imports from @heroicons/react
      /import\s*{\s*[^}]*}\s*from\s*"@heroicons\/react\/24\/outline";\s*\n?/g,
      // Remove unused imports from lucide-react
      /import\s*{\s*[^}]*}\s*from\s*"lucide-react";\s*\n?/g,
      // Remove unused Link imports
      /import\s*{\s*Link\s*}\s*from\s*"react-router-dom";\s*\n?/g,
    ];

    patterns.forEach(pattern => {
      if (pattern.test(content)) {
        content = content.replace(pattern, '');
        modified = true;
      }
    });

    // Fix specific files with known issues
    if (filePath.includes('ai-solutions/page.tsx')) {
      // Keep only the imports that are actually used
      content = content.replace(
        /import\s*{\s*[^}]*}\s*from\s*"@heroicons\/react\/24\/outline";/,
        `import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";`
      );
      modified = true;
    }

    if (filePath.includes('5g-solutions/page.tsx')) {
      // Keep only the imports that are actually used
      content = content.replace(
        /import\s*{\s*[^}]*}\s*from\s*"lucide-react"/,
        `import { Right, Wifi, Circle } from "lucide-react"`
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx and .ts files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check`);

files.forEach(file => {
  fixUnusedImports(file);
});

console.log('Done fixing unused imports');