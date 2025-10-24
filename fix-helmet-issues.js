const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to recursively find all .tsx and .ts files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix Helmet usage in a file
function fixHelmetInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses Helmet
    if (content.includes('react-helmet-async') || content.includes('<Helmet>')) {
      console.log(`Fixing Helmet usage in: ${filePath}`);
      
      // Remove Helmet import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
      content = content.replace(/import\s*Helmet\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
      
      // Remove Helmet usage
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
      content = content.replace(/<Helmet\s*\/>/g, '');
      
      // Add Metadata import if not present
      if (!content.includes('import { Metadata }') && !content.includes('from \'next\'')) {
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find the first import statement
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import ')) {
            insertIndex = i;
            break;
          }
        }
        
        // Insert Metadata import
        lines.splice(insertIndex, 0, "import { Metadata } from 'next';");
        content = lines.join('\n');
      }
      
      // Add basic metadata export if it's a page component and not a client component
      if (filePath.includes('/page.tsx') && !content.includes('export const metadata') && !content.includes("'use client'")) {
        const metadata = `export const metadata: Metadata = {
  title: 'Zion Tech Group | AI & IT Solutions',
  description: 'Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.',
  openGraph: {
    title: 'Zion Tech Group | AI & IT Solutions',
    description: 'Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.',
    type: 'website',
  },
};`;
        
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find where to insert metadata (after imports, before component)
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes('export default') || lines[i].includes('const ') && lines[i].includes('= () =>')) {
            insertIndex = i;
            break;
          }
        }
        
        lines.splice(insertIndex, 0, metadata);
        content = lines.join('\n');
=======
function fixHelmetIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't contain react-helmet-async or react-router-dom
    if (!content.includes('react-helmet-async') && !content.includes('react-router-dom')) {
      return false;
    }
    
    let modified = false;
    
    // Fix react-helmet-async imports and usage
    if (content.includes('react-helmet-async')) {
      // Remove Helmet import
      content = content.replace(/import\s*{\s*Helmet\s*}\s*from\s*['"]react-helmet-async['"];?\s*\n?/g, '');
      
      // Remove Helmet usage and replace with metadata export
      const helmetMatch = content.match(/<Helmet>\s*<title>([^<]+)<\/title>\s*<meta\s+name="description"\s+content="([^"]+)"\s*\/>\s*<\/Helmet>/s);
      if (helmetMatch) {
        const title = helmetMatch[1];
        const description = helmetMatch[2];
        
        // Add metadata import if not present
        if (!content.includes('import { Metadata }')) {
          content = content.replace(/import React from 'react';/, `import React from 'react';\nimport { Metadata } from 'next';`);
        }
        
        // Add metadata export
        const metadataExport = `export const metadata: Metadata = {\n  title: '${title}',\n  description: '${description}',\n};\n\n`;
        content = content.replace(/export default function/, metadataExport + 'export default function');
        
        // Remove Helmet JSX
        content = content.replace(/<Helmet>\s*<title>[^<]+<\/title>\s*<meta\s+name="description"\s+content="[^"]+"\s*\/>\s*<\/Helmet>\s*/s, '');
>>>>>>> origin/main
      }
      
      modified = true;
    }
    
<<<<<<< HEAD
    // Fix Link usage (to -> href)
    if (content.includes('to=')) {
      content = content.replace(/to=/g, 'href=');
      modified = true;
    }
    
    // Remove 'use client' from pages that don't need it
    if (filePath.includes('/page.tsx') && content.includes("'use client'") && !content.includes('useState') && !content.includes('useEffect') && !content.includes('useRouter')) {
      content = content.replace(/'use client';\s*\n?/g, '');
=======
    // Fix react-router-dom imports and usage
    if (content.includes('react-router-dom')) {
      // Replace Link import
      content = content.replace(/import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?\s*\n?/g, "import Link from 'next/link';\n");
      
>>>>>>> origin/main
      modified = true;
    }
    
    if (modified) {
<<<<<<< HEAD
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('🔧 Starting Helmet fixes...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
files.forEach(file => {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixHelmetInFile(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
});

console.log(`\n🎉 Fixed ${fixedCount} files`);
console.log('✅ Helmet fixes completed!');
=======
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixHelmetIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix files in app directory
const appDir = './app';
console.log('Fixing helmet and router issues in app directory...');
const fixedCount = walkDirectory(appDir);
console.log(`Fixed ${fixedCount} files`);
>>>>>>> origin/main
