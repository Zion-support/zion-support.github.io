#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix duplicate closing Helmet tags
  const helmetPattern = /<\/Helmet>\s*<\/Helmet>/g;
  if (helmetPattern.test(fixed)) {
    fixed = fixed.replace(helmetPattern, '</Helmet>');
    changes++;
  }

  // Fix missing closing JSX fragments
  const fragmentPattern = /<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*$/gm;
  if (fragmentPattern.test(fixed)) {
    fixed = fixed.replace(fragmentPattern, (match) => {
      return match + '\n    </>';
    });
    changes++;
  }

  // Fix malformed JSX structure - look for incomplete JSX
  const incompleteJSXPattern = /<>\s*<Helmet>[\s\S]*?<\/Helmet>\s*<\/Helmet>\s*$/gm;
  if (incompleteJSXPattern.test(fixed)) {
    fixed = fixed.replace(incompleteJSXPattern, (match) => {
      return match.replace(/<\/Helmet>\s*<\/Helmet>/, '</Helmet>') + '\n    </>';
    });
    changes++;
  }

  // Fix files that are completely broken (like ai-3d-generation)
  if (filePath.includes('ai-3d-generation') && fixed.includes('<Helmet>\n\n        </div>')) {
    fixed = `'use client';
import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>AI 3D Generation - Zion Tech Group</title>
        <meta name="description" content="AI 3D Generation services and solutions from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI 3D Generation</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our AI 3D generation services.
          </p>
        </div>
      </div>
    </>
  );
}`;
    changes++;
  }

  // Fix missing closing div tags
  const missingDivPattern = /<div[^>]*>\s*<div[^>]*>\s*<h1[^>]*>[\s\S]*?<\/h1>\s*<p[^>]*>[\s\S]*?<\/p>\s*<\/div>\s*$/gm;
  if (missingDivPattern.test(fixed)) {
    fixed = fixed.replace(missingDivPattern, (match) => {
      return match + '\n      </div>\n    </>\n  );\n}';
    });
    changes++;
  }

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixJSXErrors(content, filePath);
    
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content);
      console.log(`Fixed ${result.changes} issues in ${filePath}`);
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
  console.log('Starting JSX error fixes...');

  // Get all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  let totalFixed = 0;
  let filesProcessed = 0;

  files.forEach(file => {
    if (processFile(file)) {
      totalFixed++;
    }
    filesProcessed++;
  });

  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files`);
  console.log('JSX error fixes completed!');
}

main().catch(console.error);