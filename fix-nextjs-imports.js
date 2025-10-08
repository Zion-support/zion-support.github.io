#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with Next.js imports
const files = execSync("find /workspace/app -name '*.tsx' -o -name '*.ts' | xargs grep -l \"from 'next\"", { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);

// console.log(`Found ${files.length} files with Next.js imports`);

// Replacement mappings
const replacements = [
  // Next.js imports
  { from: "import Link from 'next/link';", to: "import { Link } from 'react-router-dom';" },
  { from: "import Image from 'next/image';", to: "import { Helmet } from 'react-helmet-async';" },
  { from: "import { useRouter } from 'next/navigation';", to: "import { useNavigate } from 'react-router-dom';" },
  { from: "import { usePathname } from 'next/navigation';", to: "import { useLocation } from 'react-router-dom';" },
  { from: "import { useSearchParams } from 'next/navigation';", to: "import { useSearchParams } from 'react-router-dom';" },
  { from: "import dynamic from 'next/dynamic';", to: "import { lazy, Suspense } from 'react';" },
  { from: "import { Metadata } from 'next';", to: "" },
  { from: "import type { Metadata } from 'next';", to: "" },
  
  // Next.js specific patterns
  { from: "export const metadata: Metadata = {", to: "// Metadata moved to Helmet component" },
  { from: "};", to: "" },
  
  // Link href to to
  { from: 'href="/', to: 'to="/' },
  { from: 'href=\'/', to: 'to=\'/' },
  
  // Router usage
  { from: 'const router = useRouter();', to: 'const navigate = useNavigate();' },
  { from: 'router.push(', to: 'navigate(' },
  { from: 'router.back();', to: 'navigate(-1);' },
  { from: 'router.replace(', to: 'navigate(' },
  
  // Pathname usage
  { from: 'const pathname = usePathname();', to: 'const location = useLocation();\n  const pathname = location.pathname;' },
  
  // Dynamic imports
  { from: 'const Component = dynamic(() => import(', to: 'const Component = lazy(() => import(' },
  { from: 'loading: () => <LoadingComponent />,', to: '' },
  { from: 'ssr: false,', to: '' },
];

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply replacements
    replacements.forEach(({ from, to }) => {
      if (content.includes(from)) {
        content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
        modified = true;
      }
    });
    
    // Remove 'use client' directive
    if (content.includes("'use client';")) {
      content = content.replace(/'use client';\n?/g, '');
      modified = true;
    }
    
    // Add Helmet import if not present and file has metadata
    if (content.includes('title:') && !content.includes('react-helmet-async')) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      // console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    // console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Process all files
let fixedCount = 0;
files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

// console.log(`\nFixed ${fixedCount} out of ${files.length} files`);