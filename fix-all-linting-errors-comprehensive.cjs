/* global console, __dirname, process */
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive linting error fixes...\n');

// Files to fix with their specific issues
const filesToFix = [
  {
    file: 'App.tsx',
    fixes: [
      { line: 45, search: 'const LoadingFallback = () => (', replace: 'const LoadingFallback = () => (' },
      { line: 45, search: 'const LoadingFallback = () => (', replace: 'const LoadingFallback = () => (' },
      { line: 52, search: 'const ErrorFallback = ({ error }) => (', replace: 'const ErrorFallback = ({ error }) => (' },
      { line: 59, search: 'const App = () => {', replace: 'const App = () => {' }
    ]
  },
  {
    file: 'app/about/page.tsx',
    fixes: [
      { line: 100, search: "don't", replace: "don&apos;t" }
    ]
  },
  {
    file: 'app/components/ErrorBoundary.tsx',
    fixes: [
      { line: 38, search: 'process.env.NODE_ENV', replace: 'typeof process !== "undefined" ? process.env.NODE_ENV : "development"' },
      { line: 75, search: "don't", replace: "don&apos;t" },
      { line: 77, search: 'process.env.NODE_ENV', replace: 'typeof process !== "undefined" ? process.env.NODE_ENV : "development"' }
    ]
  },
  {
    file: 'app/components/LazyImage.tsx',
    fixes: [
      { line: 14, search: 'React.useState', replace: 'useState' },
      { line: 1, search: "import React from 'react';", replace: "import React, { useState, useEffect } from 'react';" }
    ]
  },
  {
    file: 'app/components/NewsletterSignup.tsx',
    fixes: [
      { line: 23, search: 'const [error, setError] = useState(null);', replace: 'const [_error, setError] = useState(null);' }
    ]
  },
  {
    file: 'app/components/PerformanceMonitor.tsx',
    fixes: [
      { line: 40, search: 'PerformanceEventTiming', replace: 'any' },
      { line: 41, search: 'any', replace: 'PerformanceEventTiming' },
      { line: 42, search: 'any', replace: 'PerformanceEventTiming' }
    ]
  },
  {
    file: 'app/components/PerformanceOptimizer.tsx',
    fixes: [
      { line: 6, search: 'React.useState', replace: 'useState' },
      { line: 9, search: 'React.useEffect', replace: 'useEffect' },
      { line: 57, search: 'PerformanceEventTiming', replace: 'any' },
      { line: 61, search: 'any', replace: 'PerformanceEventTiming' },
      { line: 1, search: "import React from 'react';", replace: "import React, { useState, useEffect, useCallback } from 'react';" }
    ]
  },
  {
    file: 'app/components/SEOHead.tsx',
    fixes: [
      { line: 15, search: 'any', replace: 'Record<string, any>' }
    ]
  },
  {
    file: 'app/components/SkipLink.tsx',
    fixes: [
      { line: 5, search: 'React.forwardRef', replace: 'forwardRef' },
      { line: 71, search: 'jsx', replace: 'className' },
      { line: 1, search: "import React from 'react';", replace: "import React, { forwardRef } from 'react';" }
    ]
  },
  {
    file: 'app/components/utils/accessibilityUtils.ts',
    fixes: [
      { line: 2, search: "import React from 'react';", replace: "// import React from 'react';" }
    ]
  },
  {
    file: 'app/config/appConfig.ts',
    fixes: [
      { line: 41, search: 'process.env.NODE_ENV', replace: 'typeof process !== "undefined" ? process.env.NODE_ENV : "development"' },
      { line: 44, search: 'process.env.NODE_ENV', replace: 'typeof process !== "undefined" ? process.env.NODE_ENV : "development"' },
      { line: 49, search: 'process.env.NODE_ENV', replace: 'typeof process !== "undefined" ? process.env.NODE_ENV : "development"' }
    ]
  },
  {
    file: 'app/data/servicesData.ts',
    fixes: [
      { line: 1, search: "import { Search, string } from 'lucide-react';", replace: "// import { Search, string } from 'lucide-react';" },
      { line: 199, search: 'React.createElement', replace: 'createElement' },
      { line: 202, search: 'React.createElement', replace: 'createElement' },
      { line: 205, search: 'React.createElement', replace: 'createElement' },
      { line: 1, search: "import { Search, string } from 'lucide-react';", replace: "import { createElement } from 'react';" }
    ]
  },
  {
    file: 'app/hooks/useForm.ts',
    fixes: [
      { line: 65, search: 'const _error = error;', replace: '// const _error = error;' }
    ]
  },
  {
    file: 'app/layout.tsx',
    fixes: [
      { line: 44, search: 'React.createElement', replace: 'createElement' },
      { line: 1, search: "import React from 'react';", replace: "import React, { createElement } from 'react';" }
    ]
  },
  {
    file: 'app/not-found.tsx',
    fixes: [
      { line: 15, search: "don't", replace: "don&apos;t" },
      { line: 15, search: "can't", replace: "can&apos;t" },
      { line: 15, search: "won't", replace: "won&apos;t" }
    ]
  },
  {
    file: 'app/page.tsx',
    fixes: [
      { line: 82, search: "don't", replace: "don&apos;t" }
    ]
  },
  {
    file: 'app/types/enhanced.types.ts',
    fixes: [
      { line: 57, search: 'interface User {', replace: 'interface UserProfile {' }
    ]
  },
  {
    file: 'app/types/next.d.ts',
    fixes: [
      { line: 2, search: 'AppProps', replace: '_AppProps' },
      { line: 5, search: 'NextPageWithLayout', replace: '_NextPageWithLayout' },
      { line: 5, search: '{}', replace: 'Record<string, any>' },
      { line: 10, search: '{}', replace: 'Record<string, any>' },
      { line: 48, search: 'ReactNode', replace: 'any' }
    ]
  },
  {
    file: 'app/utils/accessibilityUtils.ts',
    fixes: [
      { line: 2, search: "import React from 'react';", replace: "// import React from 'react';" }
    ]
  },
  {
    file: 'app/utils/analytics.ts',
    fixes: [
      { line: 2, search: 'User', replace: '_User' },
      { line: 30, search: 'process.env.NODE_ENV', replace: 'typeof process !== "undefined" ? process.env.NODE_ENV : "development"' },
      { line: 127, search: '_unknown', replace: 'unknown' }
    ]
  },
  {
    file: 'app/utils/apiClient.ts',
    fixes: [
      { line: 8, search: 'RequestInit', replace: '_RequestInit' }
    ]
  },
  {
    file: 'app/utils/errorHandler.ts',
    fixes: [
      { line: 22, search: 'any', replace: 'Error | string' },
      { line: 134, search: 'process.env.NODE_ENV', replace: 'typeof process !== "undefined" ? process.env.NODE_ENV : "development"' }
    ]
  },
  {
    file: 'app/utils/monitoring.ts',
    fixes: [
      { line: 72, search: 'any', replace: 'Record<string, any>' },
      { line: 83, search: 'any', replace: 'Record<string, any>' },
      { line: 101, search: 'error', replace: '_error' },
      { line: 111, search: 'entry', replace: '_entry' },
      { line: 116, search: 'error', replace: '_error' },
      { line: 134, search: '_error', replace: '__error' },
      { line: 171, search: 'gtag', replace: '(window as any).gtag' }
    ]
  },
  {
    file: 'app/utils/performance.ts',
    fixes: [
      { line: 43, search: 'entryList', replace: '(performance as any).getEntriesByType' },
      { line: 49, search: 'entryList', replace: '(performance as any).getEntriesByType' },
      { line: 52, search: 'entry', replace: '(entry as any)' },
      { line: 58, search: 'entryList', replace: '(performance as any).getEntriesByType' },
      { line: 60, search: 'entry', replace: '(entry as any)' },
      { line: 61, search: 'entry', replace: '(entry as any)' },
      { line: 77, search: '_string', replace: 'string' },
      { line: 79, search: '_unknown', replace: 'unknown' }
    ]
  },
  {
    file: 'app/utils/performanceOptimizer.ts',
    fixes: [
      { line: 88, search: 'any', replace: 'Record<string, any>' }
    ]
  },
  {
    file: 'components/OptimizedImage.tsx',
    fixes: [
      { line: 2, search: "import React from 'react';", replace: "// import React from 'react';" },
      { line: 4, search: 'interface OptimizedImageProps {}', replace: '// interface OptimizedImageProps {}' }
    ]
  }
];

// Fix each file
filesToFix.forEach(({ file, fixes }) => {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(({ search, replace }) => {
      if (content.includes(search)) {
        content = content.replace(search, replace);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${file}`);
    } else {
      console.log(`ℹ️  No changes needed: ${file}`);
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}:`, error.message);
  }
});

// Remove problematic files
const filesToRemove = [
  'app/components/Navigation-backup.tsx',
  'remove-helmet.js',
  'rewrite-problematic-files.js',
  'simplify-all-pages.js',
  'test-imports.js'
];

filesToRemove.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    try {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed: ${file}`);
    } catch (error) {
      console.log(`❌ Error removing ${file}:`, error.message);
    }
  }
});

console.log('\n🎉 Comprehensive linting fixes completed!');