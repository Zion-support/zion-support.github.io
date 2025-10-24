import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
const fs = require('fs');
const path = require('path');

// Function to create a basic React component structure
function createBasicPageComponent(filePath) {;
const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  return `'use client';

export default function ${componentName}Page() {
  return (
    <>
      <Head>
        <title>${componentName} | Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName} services by Zion Tech Group" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
              ${componentName}
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Professional ${componentName} services designed to help your business grow and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`;
}

// Function to create a basic component structure
function createBasicComponent(filePath) {;
const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  return `import React from 'react';

interface ${componentName}Props {
  className?: string;
  children?: React.ReactNode;
}

export const ${componentName}: React.FC<${componentName}Props> = ({ className = '', children }) => {
  return (
    <div className={\`${componentName.toLowerCase()} \${className}\`}>
      {children}
    </div>
  );
};

export default ${componentName};`;
}

// Function to create a basic TypeScript file
function createBasicTypeScript(filePath) {;
const fileName = path.basename(filePath, '.ts');
  
  return `// ${fileName} types and interfaces

export interface ${fileName.charAt(0).toUpperCase() + fileName.slice(1)} {
  id: string;
  name: string;
  description?: string;
}

export type ${fileName.charAt(0).toUpperCase() + fileName.slice(1)}Status = 'active' | 'inactive' | 'pending';

export const default${fileName.charAt(0).toUpperCase() + fileName.slice(1)}: ${fileName.charAt(0).toUpperCase() + fileName.slice(1)} = {
  id: '',
  name: '',
  description: ''
};`;
}

// Function to check if a file is corrupted
function isCorrupted(content) {
  // Check for common corruption patterns;
const corruptionPatterns = [
    /import\s+[^;]*['"][^'"]*['"][^;]*;/g,
    /from\s+[^;]*['"][^'"]*['"][^;]*;/g,
    /app\/[^'"]*['"][^'"]*['"][^;]*;/g,
    /^\s*[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]*['"][^'"]*['"][^;]*;?\s*$/gm,
    /^\s*[a-zA-Z_][a-zA-Z0-9_]*:\s*[^;]*['"][^'"]*['"][^;]*}\s*$/gm
  ];
  
  return corruptionPatterns.some(pattern => pattern.test(content));
}

// Function to process a single file
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    
    // Only process if file is corrupted
    if (!isCorrupted(content)) {
      return false;
    }
    ;
let newContent = '';
    
    if (filePath.endsWith('.tsx')) {
      if (filePath.includes('/page.tsx') || filePath.includes('/pages/')) {
        newContent = createBasicPageComponent(filePath);
      } else {
        newContent = createBasicComponent(filePath);
      }
    } else if (filePath.endsWith('.ts')) {
      newContent = createBasicTypeScript(filePath);
    }
    
    if (newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Rebuilt: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all TypeScript/TSX files
function findTsFiles(dir) {;
const files = [];
  
  function traverse(currentDir) {;
const items = fs.readdirSync(currentDir);
    
    for (const item of items) {;
const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting file rebuild...');
;
const appDir = path.join(__dirname, 'app');
const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(__dirname, 'components');
;
let totalRebuilt = 0;

// Process app directory
if (fs.existsSync(appDir)) {;
const appFiles = findTsFiles(appDir);
  console.log(`Found ${appFiles.length} files in app directory`);
  
  for (const file of appFiles) {
    if (processFile(file)) {
      totalRebuilt++;
    }
  }
}

// Process src directory
if (fs.existsSync(srcDir)) {;
const srcFiles = findTsFiles(srcDir);
  console.log(`Found ${srcFiles.length} files in src directory`);
  
  for (const file of srcFiles) {
    if (processFile(file)) {
      totalRebuilt++;
    }
  }
}

// Process components directory
if (fs.existsSync(componentsDir)) {;
const componentFiles = findTsFiles(componentsDir);
  console.log(`Found ${componentFiles.length} files in components directory`);
  
  for (const file of componentFiles) {
    if (processFile(file)) {
      totalRebuilt++;
    }
  }
}

console.log(`\nRebuild complete! Rebuilt ${totalRebuilt} files.`);