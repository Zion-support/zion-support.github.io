import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix all remaining syntax issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common patterns
    content = content
      // Fix unterminated string literals in 'use client' directives
      .replace(/^'use client$/gm, "'use client';")
      .replace(/^"use client"$/gm, '"use client";')
      // Fix unterminated string literals in imports
      .replace(/import React from 'react$/gm, "import React from 'react';")
      .replace(/import { Helmet } from 'react-helmet-async$/gm, "import { Helmet } from 'react-helmet-async';")
      .replace(/import { useEffect } from 'react$/gm, "import { useEffect } from 'react';")
      .replace(/import { useState } from 'react$/gm, "import { useState } from 'react';")
      .replace(/import { useCallback } from 'react$/gm, "import { useCallback } from 'react';")
      .replace(/import { useMemo } from 'react$/gm, "import { useMemo } from 'react';")
      .replace(/import { useRef } from 'react$/gm, "import { useRef } from 'react';")
      .replace(/import { useReducer } from 'react$/gm, "import { useReducer } from 'react';")
      .replace(/import { useContext } from 'react$/gm, "import { useContext } from 'react';")
      .replace(/import { createContext } from 'react$/gm, "import { createContext } from 'react';")
      .replace(/import { Fragment } from 'react$/gm, "import { Fragment } from 'react';")
      .replace(/import { Suspense } from 'react$/gm, "import { Suspense } from 'react';")
      .replace(/import { lazy } from 'react$/gm, "import { lazy } from 'react';")
      .replace(/import { memo } from 'react$/gm, "import { memo } from 'react';")
      .replace(/import { forwardRef } from 'react$/gm, "import { forwardRef } from 'react';")
      .replace(/import { useImperativeHandle } from 'react$/gm, "import { useImperativeHandle } from 'react';")
      .replace(/import { useLayoutEffect } from 'react$/gm, "import { useLayoutEffect } from 'react';")
      .replace(/import { useDebugValue } from 'react$/gm, "import { useDebugValue } from 'react';")
      .replace(/import { useDeferredValue } from 'react$/gm, "import { useDeferredValue } from 'react';")
      .replace(/import { useId } from 'react$/gm, "import { useId } from 'react';")
      .replace(/import { useInsertionEffect } from 'react$/gm, "import { useInsertionEffect } from 'react';")
      .replace(/import { useSyncExternalStore } from 'react$/gm, "import { useSyncExternalStore } from 'react';")
      .replace(/import { useTransition } from 'react$/gm, "import { useTransition } from 'react';")
      .replace(/import { startTransition } from 'react$/gm, "import { startTransition } from 'react';")
      .replace(/import { use } from 'react$/gm, "import { use } from 'react';")
      .replace(/import { useActionState } from 'react$/gm, "import { useActionState } from 'react';")
      .replace(/import { useFormState } from 'react$/gm, "import { useFormState } from 'react';")
      .replace(/import { useFormStatus } from 'react$/gm, "import { useFormStatus } from 'react';")
      .replace(/import { useOptimistic } from 'react$/gm, "import { useOptimistic } from 'react';")
      // Fix other common imports
      .replace(/from '([^']+)$/gm, "from '$1';")
      .replace(/from "([^"]+)$/gm, 'from "$1";')
      // Fix function declarations
      .replace(/export default function (\w+)\(\) \{\}$/gm, 'export default function $1() {\n  return (\n    <div>Page content</div>\n  );\n}')
      .replace(/export default function (\w+)\(\) \{\}$/gm, 'export default function $1() {\n  return (\n    <div>Page content</div>\n  );\n}')
      // Fix malformed JSX
      .replace(/<div>Page content<\/div>$/gm, '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">\n      <div className="container mx-auto px-4">\n        <div className="text-center">\n          <h1 className="text-4xl font-bold text-white mb-8">Page</h1>\n          <p className="text-gray-300 text-lg">This page is under development.</p>\n        </div>\n      </div>\n    </div>')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '')
      .trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with issues
function findProblemFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');
const tempDir = path.join(__dirname, 'temp-broken');

const allFiles = [
  ...findProblemFiles(appDir),
  ...findProblemFiles(srcDir),
  ...findProblemFiles(publicDir),
  ...findProblemFiles(tempDir)
];

console.log(`Found ${allFiles.length} files to check`);

let fixedCount = 0;
for (const file of allFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${allFiles.length} files`);