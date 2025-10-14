import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix all syntax issues comprehensively
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements missing quotes and semicolons
    content = content
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
      .replace(/import { use } from 'react$/gm, "import { use } from 'react';")
      .replace(/import { useActionState } from 'react$/gm, "import { useActionState } from 'react';")
      .replace(/import { useFormState } from 'react$/gm, "import { useFormState } from 'react';")
      .replace(/import { useFormStatus } from 'react$/gm, "import { useFormStatus } from 'react';")
      .replace(/import { useOptimistic } from 'react$/gm, "import { useOptimistic } from 'react';")
      // Fix other common imports
      .replace(/from '([^']+)$/gm, "from '$1';")
      .replace(/from "([^"]+)$/gm, 'from "$1";')
      // Fix any remaining unterminated strings
      .replace(/import React from 'react\n/g, "import React from 'react';\n")
      .replace(/import { Helmet } from 'react-helmet-async\n/g, "import { Helmet } from 'react-helmet-async';\n")
      .replace(/import { useEffect } from 'react\n/g, "import { useEffect } from 'react';\n")
      .replace(/import { useState } from 'react\n/g, "import { useState } from 'react';\n")
      .replace(/import { useCallback } from 'react\n/g, "import { useCallback } from 'react';\n")
      .replace(/import { useMemo } from 'react\n/g, "import { useMemo } from 'react';\n")
      .replace(/import { useRef } from 'react\n/g, "import { useRef } from 'react';\n")
      .replace(/import { useReducer } from 'react\n/g, "import { useReducer } from 'react';\n")
      .replace(/import { useContext } from 'react\n/g, "import { useContext } from 'react';\n")
      .replace(/import { createContext } from 'react\n/g, "import { createContext } from 'react';\n")
      .replace(/import { Fragment } from 'react\n/g, "import { Fragment } from 'react';\n")
      .replace(/import { Suspense } from 'react\n/g, "import { Suspense } from 'react';\n")
      .replace(/import { lazy } from 'react\n/g, "import { lazy } from 'react';\n")
      .replace(/import { memo } from 'react\n/g, "import { memo } from 'react';\n")
      .replace(/import { forwardRef } from 'react\n/g, "import { forwardRef } from 'react';\n")
      .replace(/import { useImperativeHandle } from 'react\n/g, "import { useImperativeHandle } from 'react';\n")
      .replace(/import { useLayoutEffect } from 'react\n/g, "import { useLayoutEffect } from 'react';\n")
      .replace(/import { useDebugValue } from 'react\n/g, "import { useDebugValue } from 'react';\n")
      .replace(/import { useDeferredValue } from 'react\n/g, "import { useDeferredValue } from 'react';\n")
      .replace(/import { useId } from 'react\n/g, "import { useId } from 'react';\n")
      .replace(/import { useInsertionEffect } from 'react\n/g, "import { useInsertionEffect } from 'react';\n")
      .replace(/import { useSyncExternalStore } from 'react\n/g, "import { useSyncExternalStore } from 'react';\n")
      .replace(/import { useTransition } from 'react\n/g, "import { useTransition } from 'react';\n")
      .replace(/import { startTransition } from 'react\n/g, "import { startTransition } from 'react';\n")
      .replace(/import { use } from 'react\n/g, "import { use } from 'react';\n")
      .replace(/import { useActionState } from 'react\n/g, "import { useActionState } from 'react';\n")
      .replace(/import { useFormState } from 'react\n/g, "import { useFormState } from 'react';\n")
      .replace(/import { useFormStatus } from 'react\n/g, "import { useFormStatus } from 'react';\n")
      .replace(/import { useOptimistic } from 'react\n/g, "import { useOptimistic } from 'react';\n")
      // Fix other common imports
      .replace(/from '([^']+)\n/g, "from '$1';\n")
      .replace(/from "([^"]+)\n/g, 'from "$1";\n')
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

// Function to find all tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} tsx/ts files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${tsxFiles.length} files`);