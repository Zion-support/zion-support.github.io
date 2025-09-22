#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix remaining import order issues
const importOrderFixes = [
  {
    file: 'app/blog/ai-2026-secure-agent-architecture/page.tsx',
    pattern: /import React from 'react';\nimport Link from 'next/link';\nimport SEO from '\.\.\/\.\.\/\.\.\/components\/SEO';/,
    replacement: "import React from 'react';\nimport Link from 'next/link';\n\nimport SEO from '../../../components/SEO';"
  },
  {
    file: 'app/components/ErrorBoundary.tsx',
    pattern: /import React, { Component, ErrorInfo, ReactNode } from 'react';\nimport { AlertTriangle, RefreshCw } from 'lucide-react';\nimport Button from '\.\/Button';/,
    replacement: "import React, { Component, ErrorInfo, ReactNode } from 'react';\nimport { AlertTriangle, RefreshCw } from 'lucide-react';\n\nimport Button from './Button';"
  },
  {
    file: 'app/components/Navigation.tsx',
    pattern: /import Link from 'next\/link';\nimport { useState, useEffect } from 'react';\nimport { Menu, X, ChevronDown } from 'lucide-react';\nimport Button from '\.\/Button';/,
    replacement: "import Link from 'next/link';\nimport { useState, useEffect } from 'react';\nimport { Menu, X, ChevronDown } from 'lucide-react';\n\nimport Button from './Button';"
  },
  {
    file: 'app/components/ScrollToTop.tsx',
    pattern: /import { useEffect } from 'react';\nimport { ChevronUp } from 'lucide-react';\nimport Button from '\.\/Button';/,
    replacement: "import { useEffect } from 'react';\nimport { ChevronUp } from 'lucide-react';\n\nimport Button from './Button';"
  },
  {
    file: 'app/components/Testimonials.tsx',
    pattern: /import { Star, Quote } from 'lucide-react';\nimport Card from '\.\/Card';\nimport Button from '\.\/Button';/,
    replacement: "import { Star, Quote } from 'lucide-react';\n\nimport Card from './Card';\nimport Button from './Button';"
  }
];

// Fix console statements
const consoleFixes = [
  {
    file: 'app/components/ErrorBoundary.tsx',
    pattern: /if \(process\.env\.NODE_ENV === 'development'\) {\s*console\.error\('ErrorBoundary caught an error:', error, errorInfo\)\s*}/,
    replacement: `// Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }`
  }
];

function fixFile(filePath, pattern, replacement) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`Pattern not found in: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Apply fixes
console.log('Fixing import order issues...');
importOrderFixes.forEach(fix => {
  fixFile(fix.file, fix.pattern, fix.replacement);
});

console.log('Fixing console statements...');
consoleFixes.forEach(fix => {
  fixFile(fix.file, fix.pattern, fix.replacement);
});

console.log('All fixes completed!');