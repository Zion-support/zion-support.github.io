#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
// Function to fix emoji characters in JSX
function fixEmojis(content) {
  const emojiMap = {
    '🎧': 'headphones',
    '📈': 'trending-up',
    '💰': 'dollar-sign',
    '👥': 'users',
    '📧': 'Email:',
    '📍': 'Address:',
    '🚀': 'rocket',
    '⚡': 'zap',
    '🔒': 'lock',
    '💡': 'lightbulb',
    '🎯': 'target',
    '📊': 'bar-chart',
    '🔧': 'settings',
    '🌟': 'star',
    '💼': 'briefcase',
    '🎨': 'palette',
    '📱': 'smartphone',
    '💻': 'laptop',
    '🌐': 'globe',
    '🔍': 'search',
    '📝': 'edit',
    '✅': 'check',
    '❌': 'x',
    '⚠️': 'alert-triangle',
    'ℹ️': 'info',
    '🎉': 'party-popper',
    '🔥': 'flame',
    '💪': 'muscle',
    '🎪': 'circus-tent',
    '🎭': 'theater-masks',
    '🎨': 'art-palette',
    '🎵': 'music',
    '🎬': 'film',
    '🎮': 'gamepad',
    '🎲': 'dice',
    '🎯': 'bullseye',
    '🎪': 'circus-tent',
    '🎨': 'palette',
    '🎵': 'music',
    '🎬': 'film',
    '🎮': 'gamepad',
    '🎲': 'dice',
    '🎯': 'target',
    '🎪': 'circus-tent',
    '🎨': 'palette',
    '🎵': 'music',
    '🎬': 'film',
    '🎮': 'gamepad',
    '🎲': 'dice',
    '🎯': 'target'
  };
  let fixed = content
  for (const [emoji, replacement] of Object.entries(emojiMap)) {
    fixed = fixed.replace(new RegExp(emoji, 'g'), replacement)
  }
  return fixed
}

// Function to fix common JSX parsing issues
function fixJSXIssues(content) {
  let fixed = content
  // Fix unclosed JSX elements by checking for common patterns
  // This is a basic fix - more sophisticated parsing would be needed for complex cases
  
  // Fix common emoji issues in JSX
  fixed = fixEmojis(fixed)
  // Fix common syntax issues
  fixed = fixed.replace(/\{\s*'([^']*)'\s*\}/g, '"$1"'); // Fix single quotes in JSX expressions
  fixed = fixed.replace(/\{\s*"([^"]*)"\s*\}/g, '"$1"'); // Normalize quotes
  
  return fixed
}

// Function to check and fix JSX structure
function fixJSXStructure(content) {
  const lines = content.split('\n')
  let fixed = content
  // Count opening and closing div tags
  const openDivs = (content.match(/</g) || []).length$2 />
  const closeDivs = (content.match(/<\/div>/g) || []).length
  if (openDivs > closeDivs) {
    console.log(`Warning: Found ${openDivs - closeDivs} unclosed div tags`)
    // This is a basic check - more sophisticated parsing would be needed
  }
  
  return fixed
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'App.tsx'
  ]
  let processedCount = 0
  let errorCount = 0
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '**/*.d.ts',
        '**/node_modules/**'
      ]
    })
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8')
        let fixed = content
        // Apply fixes
        fixed = fixJSXIssues(fixed)
        fixed = fixJSXStructure(fixed)
        // Only write if content changed
        if (fixed !== content) {
          fs.writeFileSync(file, fixed, 'utf8')
          console.log(`Fixed: ${file}`)
          processedCount++
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message)
        errorCount++
      }
    }
  }
  
  console.log(`\nProcessed ${processedCount} files with ${errorCount} errors`)
}

// Run the script
processFiles().catch(console.error)