#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and choose HEAD version
  let resolved = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
  
  // Clean up any remaining conflict markers
  resolved = resolved
    .replace(/<<<<<<< HEAD\n?/g, '')
    .replace(/=======\n?/g, '')
    .replace(/>>>>>>> [^\n]+\n?/g, '');
  
  return resolved;
}

// Function to fix common JSX syntax issues
function fixJSXSyntax(content) {
  // Fix unclosed JSX tags by adding proper closing tags
  let fixed = content;
  
  // Fix common JSX issues
  fixed = fixed
    // Fix missing closing tags for common elements
    .replace(/<div([^>]*)>(?!.*<\/div>)/g, (match, attrs) => {
      // Only add closing tag if there's no corresponding closing tag
      const openDivs = (match.match(/<div/g) || []).length;
      const closeDivs = (match.match(/<\/div>/g) || []).length;
      if (openDivs > closeDivs) {
        return match + '</div>';
      }
      return match;
    })
    // Fix missing closing tags for sections
    .replace(/<section([^>]*)>(?!.*<\/section>)/g, (match, attrs) => {
      const openSections = (match.match(/<section/g) || []).length;
      const closeSections = (match.match(/<\/section>/g) || []).length;
      if (openSections > closeSections) {
        return match + '</section>';
      }
      return match;
    })
    // Fix missing closing tags for main
    .replace(/<main([^>]*)>(?!.*<\/main>)/g, (match, attrs) => {
      const openMain = (match.match(/<main/g) || []).length;
      const closeMain = (match.match(/<\/main>/g) || []).length;
      if (openMain > closeMain) {
        return match + '</main>';
      }
      return match;
    })
    // Fix missing closing tags for article
    .replace(/<article([^>]*)>(?!.*<\/article>)/g, (match, attrs) => {
      const openArticle = (match.match(/<article/g) || []).length;
      const closeArticle = (match.match(/<\/article>/g) || []).length;
      if (openArticle > closeArticle) {
        return match + '</article>';
      }
      return match;
    })
    // Fix missing closing tags for p
    .replace(/<p([^>]*)>(?!.*<\/p>)/g, (match, attrs) => {
      const openP = (match.match(/<p/g) || []).length;
      const closeP = (match.match(/<\/p>/g) || []).length;
      if (openP > closeP) {
        return match + '</p>';
      }
      return match;
    });
  
  return fixed;
}

// Function to fix TypeScript/JavaScript syntax issues
function fixSyntaxIssues(content) {
  let fixed = content;
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\n\s*}/g, '$1;\n}');
  
  // Fix missing commas in object literals
  fixed = fixed.replace(/([^,}])\n\s*}/g, '$1,\n}');
  
  // Fix missing closing parentheses
  fixed = fixed.replace(/([^)])\n\s*}/g, '$1)\n}');
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  console.log('Starting merge conflict resolution...');
  
  // Find all TypeScript and JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'api/**/*.js',
    'api/**/*.ts'
  ];
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { 
      ignore: [
        'node_modules/**',
        'dist/**',
        '*.disabled/**',
        '*-disabled/**',
        'backup*/**',
        '**/*.backup',
        '**/*.broken'
      ]
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has merge conflicts
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          console.log(`Processing merge conflicts in: ${file}`);
          
          let resolved = resolveMergeConflicts(content);
          resolved = fixJSXSyntax(resolved);
          resolved = fixSyntaxIssues(resolved);
          
          fs.writeFileSync(file, resolved);
          processedCount++;
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        errorCount++;
      }
    }
  }
  
  console.log(`\nMerge conflict resolution complete!`);
  console.log(`Files processed: ${processedCount}`);
  console.log(`Errors encountered: ${errorCount}`);
}

// Run the script
processFiles().catch(console.error);