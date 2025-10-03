#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Critical syntax fixes that need to be applied
const criticalFixes = [
  {
    file: 'src/App.tsx',
    fixes: [
      {
        search: "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom;",
        replace: "import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';"
      },
      {
        search: "import { Header, Footer } from '../app/components/Navigation;",
        replace: "import { Header, Footer } from '../app/components/Navigation';"
      },
      {
        search: "import ErrorBoundary from './components/ErrorBoundary;",
        replace: "import ErrorBoundary from './components/ErrorBoundary';"
      },
      {
        search: "import { PageLoader } from './components/LoadingSpinner;",
        replace: "import { PageLoader } from './components/LoadingSpinner';"
      },
      {
        search: "import '../app/globals.css;",
        replace: "import '../app/globals.css';"
      }
    ]
  },
  {
    file: 'src/utils/security.ts',
    fixes: [
      {
        search: "return value ? directive : ';",
        replace: "return value ? directive : '';"
      },
      {
        search: "private static logLevel: 'info' | 'warn' | 'error' = 'warn;",
        replace: "private static logLevel: 'info' | 'warn' | 'error' = 'warn';"
      }
    ]
  },
  {
    file: 'src/utils/performance.ts',
    fixes: [
      {
        search: "'Content-Type': 'application/json},",
        replace: "'Content-Type': 'application/json',"
      },
      {
        search: "format?: 'webp' | 'avif' | 'jpeg' | 'png;",
        replace: "format?: 'webp' | 'avif' | 'jpeg' | 'png';"
      },
      {
        search: "link.rel = 'preload;",
        replace: "link.rel = 'preload';"
      },
      {
        search: "link.as = 'image;",
        replace: "link.as = 'image';"
      }
    ]
  },
  {
    file: 'src/components/LoadingSpinner.tsx',
    fixes: [
      {
        search: "LoadingSpinner.displayName = 'LoadingSpinner;",
        replace: "LoadingSpinner.displayName = 'LoadingSpinner';"
      },
      {
        search: "PageLoader.displayName = 'PageLoader;",
        replace: "PageLoader.displayName = 'PageLoader';"
      },
      {
        search: "InlineSpinner.displayName = 'InlineSpinner;",
        replace: "InlineSpinner.displayName = 'InlineSpinner';"
      }
    ]
  }
];

console.log('🔧 Applying critical syntax fixes...');

let totalFixed = 0;

criticalFixes.forEach(({ file, fixes }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fileFixed = false;

    fixes.forEach(({ search, replace }) => {
      if (content.includes(search)) {
        content = content.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
        fileFixed = true;
        console.log(`✅ Fixed: ${search}`);
      }
    });

    if (fileFixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      totalFixed++;
      console.log(`📝 Updated: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
  }
});

console.log(`\n🎉 Critical syntax fixes completed! Fixed ${totalFixed} files.`);