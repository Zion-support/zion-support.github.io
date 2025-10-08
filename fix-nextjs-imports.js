#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Define the replacements
const replacements = [
  // Next.js imports to React Router
  { from: "import Link from 'next/link';", to: "import { Link } from 'react-router-dom';" },
  {
    from: "import { useRouter } from 'next/router';",
    to: "import { useNavigate, useLocation } from 'react-router-dom';",
  },
  {
    from: "import { useRouter } from 'next/navigation';",
    to: "import { useNavigate, useLocation } from 'react-router-dom';",
  },
  {
    from: "import { usePathname } from 'next/navigation';",
    to: "import { useLocation } from 'react-router-dom';",
  },
  {
    from: "import { useSearchParams } from 'next/navigation';",
    to: "import { useSearchParams } from 'react-router-dom';",
  },
  { from: "import Image from 'next/image';", to: "import { Helmet } from 'react-helmet-async';" },
  { from: "import dynamic from 'next/dynamic';", to: "import { lazy, Suspense } from 'react';" },
  { from: "import { Metadata } from 'next';", to: "import { Helmet } from 'react-helmet-async';" },
  {
    from: "import type { Metadata } from 'next';",
    to: "import { Helmet } from 'react-helmet-async';",
  },

  // Next.js specific patterns
  { from: 'export const metadata: Metadata = {', to: '// Metadata moved to Helmet component' },
  { from: 'export const metadata = {', to: '// Metadata moved to Helmet component' },
  { from: "'use client';", to: '' },
  { from: "'use server';", to: '' },

  // Router usage patterns
  {
    from: 'const router = useRouter();',
    to: 'const navigate = useNavigate();\n  const location = useLocation();',
  },
  { from: 'router.push(', to: 'navigate(' },
  { from: 'router.replace(', to: 'navigate(' },
  { from: 'router.back()', to: 'navigate(-1)' },
  { from: 'router.pathname', to: 'location.pathname' },
  { from: 'router.query', to: 'new URLSearchParams(location.search)' },

  // Link patterns
  { from: 'href=', to: 'to=', context: 'Link' },
  { from: '<Link href=', to: '<Link to=' },

  // Dynamic import patterns
  { from: 'dynamic(() => import(', to: 'lazy(() => import(' },
  { from: 'loading: () => <', to: 'fallback={<' },

  // Image patterns (replace with regular img or custom component)
  { from: '<Image', to: '<img' },
  { from: 'src={', to: 'src={', context: 'Image' },
  { from: 'alt={', to: 'alt={', context: 'Image' },
  { from: 'width={', to: 'width={', context: 'Image' },
  { from: 'height={', to: 'height={', context: 'Image' },
  { from: 'priority', to: '' },
  { from: 'placeholder', to: '' },
  { from: 'blurDataURL', to: '' },
];

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Apply replacements
    replacements.forEach(({ from, to, context }) => {
      if (context) {
        // Context-specific replacement
        const regex = new RegExp(
          `(${context}[^>]*?)${from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`,
          'g'
        );
        if (regex.test(content)) {
          content = content.replace(regex, `$1${to}`);
          modified = true;
        }
      } else {
        // Simple replacement
        if (content.includes(from)) {
          content = content.replace(
            new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
            to
          );
          modified = true;
        }
      }
    });

    // Additional cleanup
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
      .replace(/import\s+{\s*}\s+from\s+['"][^'"]*['"];?\s*\n/g, '') // Remove empty imports
      .replace(/import\s+[^;]+;\s*\n\s*import\s+[^;]+;\s*\n/g, match => {
        // Merge consecutive imports from same module
        const lines = match.trim().split('\n');
        const imports = {};
        lines.forEach(line => {
          const match = line.match(/import\s+(.+?)\s+from\s+['"]([^'"]+)['"];?/);
          if (match) {
            const [, importsStr, module] = match;
            if (!imports[module]) imports[module] = [];
            imports[module].push(importsStr);
          }
        });

        return (
          Object.entries(imports)
            .map(([module, importList]) => `import { ${importList.join(', ')} } from '${module}';`)
            .join('\n') + '\n'
        );
      });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔧 Starting Next.js to React Router conversion...\n');

  // Find all TypeScript/JavaScript files in app directory
  const patterns = ['app/**/*.tsx', 'app/**/*.ts', 'app/**/*.jsx', 'app/**/*.js'];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      cwd: process.cwd(),
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/*.disabled/**',
        '**/*backup*/**',
        '**/*corrupted*/**',
        '**/*temp*/**',
        '**/*.broken/**',
      ],
    });

    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    });
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files modified: ${fixedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - fixedFiles}`);

  if (fixedFiles > 0) {
    console.log('\n✨ Next.js to React Router conversion completed!');
  } else {
    console.log('\n✅ No files needed conversion.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { processFile, replacements };
