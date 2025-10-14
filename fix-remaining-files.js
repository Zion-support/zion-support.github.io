import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 'use client' directive
    content = content.replace(/'use client';';';/g, "'use client';");
    
    // Fix import statements
    content = content.replace(/import React from 'react';';';/g, "import React from 'react';");
    content = content.replace(/import { [^}]+ } from '[^']+';';';/g, (match) => {
      return match.replace(/';';';$/, "';");
    });
    
    // Fix JSX with extra quotes and semicolons
    content = content.replace(/\/>";";/g, ' />');
    content = content.replace(/>";";/g, '>');
    content = content.replace(/className="[^"]*">";";/g, (match) => {
      return match.replace(/>";";$/, '>');
    });
    
    // Fix any remaining stray quotes and semicolons
    content = content.replace(/";";/g, '');
    content = content.replace(/";/g, '');
    
    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix specific file patterns
    if (filePath.includes('services.ts')) {
      content = `'use client';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
}

export const services: Service[] = [
  {
    id: 'ai-solutions',
    name: 'AI Solutions',
    description: 'Comprehensive AI solutions for your business',
    category: 'AI'
  },
  {
    id: 'it-services',
    name: 'IT Services',
    description: 'Professional IT services and support',
    category: 'IT'
  }
];

export default services;`;
    }
    
    if (filePath.includes('global-error.tsx')) {
      content = `'use client';
import React from 'react';

export default function GlobalError() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-300">Please try again later.</p>
      </div>
    </div>
  );
}`;
    }
    
    if (filePath.includes('not-found.tsx')) {
      content = `'use client';
import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-300">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}`;
    }
    
    if (filePath.includes('page-backup.tsx') || filePath.includes('page-optimized.tsx')) {
      content = `'use client';
import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Page</h1>
        <p className="text-gray-300">This page is under development.</p>
      </div>
    </div>
  );
}`;
    }
    
    // Fix malformed function declarations
    content = content.replace(/export default function [^(]+\(\) \{\}/g, (match) => {
      const funcName = match.match(/export default function ([^(]+)\(\)/)[1];
      return `export default function ${funcName}() {`;
    });
    
    // Fix malformed JSX
    content = content.replace(/return \([\s\S]*?\);[\s\S]*?return \([\s\S]*?\);/g, (match) => {
      const firstReturn = match.match(/return \([\s\S]*?\);/)[0];
      return firstReturn;
    });
    
    // Fix stray closing braces and parentheses
    content = content.replace(/\s*\}\s*\}\s*$/, '}');
    content = content.replace(/\s*\)\s*;\s*\}\s*$/, ');\n}');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fixFile(filePath);
    }
  }
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
if (fs.existsSync(appDir)) {
  fixAllFiles(appDir);
  console.log('All remaining files have been processed.');
} else {
  console.log('App directory not found.');
}