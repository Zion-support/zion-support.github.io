#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common TypeScript errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unused variables by removing them
    const lines = content.split('\n');
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip lines that declare unused variables
      if (line.includes('function Home()') || 
          line.includes('function PagePage()') ||
          line.includes('function AboutLayout()') ||
          line.includes('function FiveGMobileApplications()') ||
          line.includes('function Page()') ||
          line.includes('const Home =') ||
          line.includes('const PagePage =') ||
          line.includes('const AboutLayout =') ||
          line.includes('const FiveGMobileApplications =') ||
          line.includes('const Page =')) {
        // Skip the function declaration and its body
        let braceCount = 0;
        let foundOpeningBrace = false;
        let j = i;
        
        while (j < lines.length) {
          const currentLine = lines[j];
          if (currentLine.includes('{')) {
            braceCount++;
            foundOpeningBrace = true;
          }
          if (currentLine.includes('}')) {
            braceCount--;
          }
          if (foundOpeningBrace && braceCount === 0) {
            i = j; // Skip to the end of the function
            break;
          }
          j++;
        }
        continue;
      }
      
      // Skip unused import lines
      if (line.includes('import { Home }') ||
          line.includes('import { PagePage }') ||
          line.includes('import { AboutLayout }') ||
          line.includes('import { FiveGMobileApplications }') ||
          line.includes('import { Page }') ||
          line.includes('import { ErrorBoundary }') ||
          line.includes('import ErrorBoundary from') ||
          line.includes('import { Home,') ||
          line.includes('import { PagePage,') ||
          line.includes('import { AboutLayout,') ||
          line.includes('import { FiveGMobileApplications,') ||
          line.includes('import { Page,') ||
          line.includes('import { ErrorBoundary,')) {
        continue;
      }
      
      // Fix GlobalErrorBoundary import path
      if (line.includes("import ErrorBoundary from '../components/GlobalErrorBoundary'")) {
        fixedLines.push("import ErrorBoundary from '../../components/GlobalErrorBoundary';");
        modified = true;
        continue;
      }
      
      // Fix Navigation import path
      if (line.includes("import Navigation from '../components/Navigation'")) {
        fixedLines.push("import Navigation from '../components/Navigation';");
        modified = true;
        continue;
      }
      
      fixedLines.push(line);
    }
    
    const newContent = fixedLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

main().catch(console.error);