import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common Lucide React icons used across the project
const commonIcons = [
  'Wifi', 'Cloud', 'Smartphone', 'Shield', 'BarChart3', 'Settings', 'Cpu', 'Globe', 'Activity',
  'CheckCircle', 'Star', 'Brain', 'Users', 'Award', 'Zap', 'Target', 'FileText', 'Bot', 'Workflow',
  'Headphones', 'Mail', 'Phone', 'Play', 'ArrowRight', 'MessageSquare', 'MessageCircle', 'Clock',
  'TrendingUp', 'Database', 'Eye', 'Calendar', 'Search', 'Filter', 'User', 'DollarSign', 'Helmet',
  'ShoppingCart', 'Box', 'Sparkles', 'ArrowRight', 'Box', 'Target', 'CheckCircle', 'Globe', 'Sparkles', 'Star'
];

// Function to fix malformed imports and content
function fixFileContent(content, filePath) {
  // Fix escaped quotes
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&amp;/g, '&');
  
  // Fix malformed imports
  content = content.replace(/import { Helmet } from 'lucide-react';/g, '');
  content = content.replace(/import { Helmet } from "lucide-react";/g, '');
  
  // Fix duplicate Helmet imports
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  let hasReactImport = false;
  let hasHelmetImport = false;
  let hasIconImport = false;
  let insertIndex = 0;

  // Process lines
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('import') && line.includes('from')) {
      if (line.includes('react') && !line.includes('lucide-react')) {
        hasReactImport = true;
        importLines.push(line);
        insertIndex = i + 1;
      } else if (line.includes('react-helmet-async')) {
        hasHelmetImport = true;
        importLines.push(line);
        insertIndex = i + 1;
      } else if (line.includes('lucide-react')) {
        hasIconImport = true;
        importLines.push(line);
        insertIndex = i + 1;
      } else {
        importLines.push(line);
        insertIndex = i + 1;
      }
    } else {
      otherLines.push(line);
    }
  }

  // Find all icon usage in the content
  const usedIcons = new Set();
  for (const icon of commonIcons) {
    if (content.includes(`<${icon}`) || content.includes(`<${icon} `)) {
      usedIcons.add(icon);
    }
  }

  // Create proper imports
  const newLines = [...lines];
  
  // Remove malformed lines
  const filteredLines = newLines.filter(line => {
    return !line.includes("import { Helmet } from 'lucide-react'") &&
           !line.includes('import { Helmet } from "lucide-react"') &&
           !line.includes('&quot;') &&
           !line.includes('&apos;');
  });

  // Add proper imports if missing
  let finalContent = filteredLines.join('\n');
  
  // Add React import if missing
  if (!finalContent.includes('import React') && !finalContent.includes('import { React }')) {
    finalContent = "import React from 'react';\n" + finalContent;
  }
  
  // Add Helmet import if missing
  if (!finalContent.includes('react-helmet-async') && finalContent.includes('<Helmet>')) {
    finalContent = "import { Helmet } from 'react-helmet-async';\n" + finalContent;
  }
  
  // Add icon imports if needed
  if (usedIcons.size > 0 && !finalContent.includes('lucide-react')) {
    const iconList = Array.from(usedIcons).sort().join(', ');
    const iconImport = `import { ${iconList} } from 'lucide-react';`;
    finalContent = finalContent.replace(/import React from 'react';/, `import React from 'react';\n${iconImport}`);
  }

  return finalContent;
}

// Function to fix specific syntax issues
function fixSyntaxIssues(content) {
  // Fix malformed JSX
  content = content.replace(/<(\w+)\s*className="[^"]*"\s*\/>/g, '<$1 className="w-6 h-6" />');
  
  // Fix missing closing tags
  content = content.replace(/<section[^>]*>(?!.*<\/section>)/g, (match) => {
    if (!content.includes('</section>')) {
      return match + '\n  </section>';
    }
    return match;
  });
  
  // Fix malformed function declarations
  content = content.replace(/export default function\s+\w+\s*\(\s*\)\s*{\s*return;\s*},\s*{/g, 
    'export default function AI3DGeneration() {\n  const features = [\n    {');
  
  // Fix missing closing braces
  content = content.replace(/}\s*,\s*{/g, '},\n    {');
  
  return content;
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixFileContent(content, filePath);
    content = fixSyntaxIssues(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Process all files
console.log('Starting proper error fixes...');
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);