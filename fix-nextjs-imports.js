#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Patterns to replace
const replacements = [
  // Next.js imports
  { from: "import dynamic from 'next/dynamic';", to: "import { lazy } from 'react';" },
  { from: "import Image from 'next/image';", to: "import React from 'react';" },
  { from: "import Link from 'next/link';", to: "import { Link } from 'react-router-dom';" },
  { from: "import { useRouter } from 'next/navigation';", to: "import { useNavigate } from 'react-router-dom';" },
  { from: "import { usePathname } from 'next/navigation';", to: "import { useLocation } from 'react-router-dom';" },
  { from: "import { redirect } from 'next/navigation';", to: "import { useNavigate } from 'react-router-dom';" },
  { from: "import { notFound } from 'next/navigation';", to: "import { useNavigate } from 'react-router-dom';" },
  { from: "import type { Metadata } from 'next';", to: "import React from 'react';" },
  { from: "import { Metadata } from 'next';", to: "import React from 'react';" },
  
  // Dynamic imports
  { from: /dynamic\(\(\) => import\(['"]([^'"]+)['"]\)/g, to: "lazy(() => import('$1')" },
  { from: /dynamic\(\(\) => import\(['"]([^'"]+)['"]\),\s*\{[^}]*\}/g, to: "lazy(() => import('$1').catch(() => ({ default: () => <div>Loading...</div> })))" },
  
  // 'use client' directive
  { from: "'use client';", to: "" },
  { from: '"use client";', to: "" },
  
  // Next.js specific patterns
  { from: "useRouter()", to: "useNavigate()" },
  { from: "usePathname()", to: "useLocation().pathname" },
  { from: "redirect(", to: "navigate(" },
  { from: "notFound()", to: "navigate('/404')" },
];

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    replacements.forEach(({ from, to }) => {
      if (typeof from === 'string') {
        if (content.includes(from)) {
          content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
          modified = true;
        }
      } else if (from instanceof RegExp) {
        if (from.test(content)) {
          content = content.replace(from, to);
          modified = true;
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/JavaScript files in app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);