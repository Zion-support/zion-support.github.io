#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Find all TypeScript and TSX files in app directory
const files = glob.sync('app/**/*.{ts,tsx}', {
  cwd: process.cwd(),
  absolute: true,
});

let fixedCount = 0;
let errorCount = 0;

files.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // Replace Next.js Link import with React Router Link
    if (content.includes("import Link from 'next/link'")) {
      content = content.replace(
        /import Link from ['"]next\/link['"]/g,
        "import { Link } from 'react-router-dom'"
      );
      modified = true;
    }

    // Replace Next.js Image import with img tag
    if (content.includes("import Image from 'next/image'")) {
      content = content.replace(
        /import Image from ['"]next\/image['"]/g,
        '// Image component replaced with standard img tag'
      );
      // Replace <Image components with <img
      content = content.replace(
        /<Image\s+src={([^}]+)}\s+alt={([^}]+)}\s+width={[^}]+}\s+height={[^}]+}([^/>]*)\/?>/g,
        '<img src={$1} alt={$2} loading="lazy"$3/>'
      );
      content = content.replace(
        /<Image\s+([^>]*?)>/g,
        '<img $1 loading="lazy">'
      );
      modified = true;
    }

    // Remove Metadata imports
    if (content.includes("import { Metadata } from 'next'") || content.includes("import type { Metadata } from 'next'")) {
      content = content.replace(
        /import\s+(?:type\s+)?{\s*Metadata\s*}\s+from\s+['"]next['"]\s*;?\s*/g,
        ''
      );
      modified = true;
    }

    // Remove metadata exports
    if (content.includes('export const metadata:')) {
      content = content.replace(
        /export\s+const\s+metadata:\s*Metadata\s*=\s*{[^}]*};?/gs,
        '// Metadata removed - use React Helmet instead'
      );
      modified = true;
    }

    // Replace dynamic imports with React.lazy
    if (content.includes("import dynamic from 'next/dynamic'")) {
      content = content.replace(
        /import dynamic from ['"]next\/dynamic['"]/g,
        "import { lazy } from 'react'"
      );
      // Replace dynamic(() => import(...)) with lazy(() => import(...))
      content = content.replace(/dynamic\(/g, 'lazy(');
      modified = true;
    }

    // Replace usePathname with useLocation
    if (content.includes("from 'next/navigation'")) {
      content = content.replace(
        /import\s*{\s*usePathname\s*}\s*from\s*['"]next\/navigation['"]/g,
        "import { useLocation } from 'react-router-dom'"
      );
      content = content.replace(/usePathname\(\)/g, 'useLocation().pathname');
      modified = true;
    }

    // Replace any remaining 'next' imports
    if (content.includes("from 'next'")) {
      content = content.replace(
        /import\s+.*?\s+from\s+['"]next['"]\s*;?\s*/g,
        '// Next.js import removed\n'
      );
      modified = true;
    }

    // Clean up double newlines
    content = content.replace(/\n{3,}/g, '\n\n');

    if (modified && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${path.relative(process.cwd(), filePath)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\n✓ Fixed ${fixedCount} files`);
if (errorCount > 0) {
  console.log(`✗ Errors in ${errorCount} files`);
}