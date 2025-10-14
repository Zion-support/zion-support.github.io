#!/usr/bin/env node

import fs from 'fs'
import { glob } from 'glob'
// Function to create a proper page structure
<<<<<<< HEAD
function createProperPage(title, description) {
  return `'use client'
import React from "react"
import { Helmet } from "react-helmet-async"
export default function Page() {
  return (
    <>
      <Helmet>
=======
function createProperPage(title, description) {}
  return `'use client';}
import React from "react";}
import { Helmet } from "react-helmet-async";

export default function Page() {}
  return (}
    <>}
      <Helmet ></Helmet>}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description} - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
            <p className="text-gray-300 text-lg">
              This page is under construction. Please check back later.
            </p>
          </div>
        </div>
<<<<<<< HEAD
      </div>
    </>
  )
}`
=======
      </div>)
    </>)
  );
}`;
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
}

// Function to fix broken files
function fixBrokenFile(content, filePath) {
  let changes = 0
  // Check if file is completely broken (has malformed JSX)
  const isBroken = content.includes('<Helmet>\n\n        </div>') || 
                   content.includes('Expected corresponding JSX closing tag') ||
                   content.includes('Declaration or statement expected')
  if (isBroken) {
    // Extract title from file path
    const pathParts = filePath.split('/')
    const fileName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
    const title = fileName.split('-').map(word => )
      word.charAt(0).toUpperCase() + word.slice(1)
<<<<<<< HEAD
    ).join(' ')
    const newContent = createProperPage(title, title)
    changes++
    return { content: newContent, changes }
=======
    ).join(' ');}
    }
    const newContent = createProperPage(title, title);}
    changes++;}
    return { content: newContent, changes };
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  }

  return { content, changes }
}

// Function to process a single file
function processFile(filePath) {
  try {
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8')
    const result = fixBrokenFile(content, filePath)
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content)
      console.log(`Fixed broken file: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
=======
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixBrokenFile(content, filePath);}
    }
    if (result.changes > 0) {}
      fs.writeFileSync(filePath, result.content);}
      console.log(`Fixed broken file: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {}
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
  }
}

// Main execution
<<<<<<< HEAD
async function main() {
  console.log('Starting comprehensive fix for all broken files...')
  // Get all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() })
  let totalFixed = 0
  let filesProcessed = 0
  files.forEach(file => {
    if (processFile(file)) {
      totalFixed++
=======
async function main() {}
  console.log('Starting comprehensive fix for all broken files...');}
}
  // Get all TypeScript/TSX files in the app directory}
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });

  let totalFixed = 0;
  let filesProcessed = 0;

  files.forEach(file => {)}
    if (processFile(file)) {}
      totalFixed++;}
>>>>>>> cursor/fix-errors-and-merge-to-main-d2b1
    }
    filesProcessed++
  })
  console.log(`\nProcessed ${filesProcessed} files, fixed ${totalFixed} files`)
  console.log('Comprehensive fix completed!')
}

main().catch(console.error)