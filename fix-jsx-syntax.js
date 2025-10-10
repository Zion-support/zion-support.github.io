#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to match malformed JSX closing tags
const malformedTagPattern = /;\s*\n\s*<\//g;
const incompleteTagPattern = /<\s*$/gm;

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changes = 0;

    // Fix malformed closing tags (pattern: ;\n  </)
    content = content.replace(malformedTagPattern, (match) => {
      changes++;
      return ';\n            </';
    });

    // Fix incomplete tags at end of lines
    content = content.replace(incompleteTagPattern, (match, offset) => {
      // Look ahead to see what the next line contains
      const lines = content.split('\n');
      const currentLineIndex = content.substring(0, offset).split('\n').length - 1;
      const nextLine = lines[currentLineIndex + 1];
      
      if (nextLine && nextLine.trim().startsWith('<')) {
        changes++;
        return match.trim() + nextLine.trim();
      }
      return match;
    });

    // Fix specific patterns we've seen
    // Pattern: "Key Benefits;\n  </"
    content = content.replace(/Key Benefits;\s*\n\s*<\//g, 'Key Benefits</h2>');
    
    // Pattern: "Get Started;\n  </"
    content = content.replace(/Get Started;\s*\n\s*<\//g, 'Get Started</button>');
    
    // Pattern: "View Demo;\n  </"
    content = content.replace(/View Demo;\s*\n\s*<\//g, 'View Demo</button>');
    
    // Pattern: "Ai 3d Generation;\n  </"
    content = content.replace(/Ai 3d Generation;\s*\n\s*<\//g, 'Ai 3d Generation</h1>');
    
    // Pattern: "Advanced AI-powered.*;\n  </"
    content = content.replace(/Advanced AI-powered[^;]*;\s*\n\s*<\//g, (match) => {
      const text = match.replace(/;\s*\n\s*<\//, '');
      return text + '</p>';
    });

    // Fix any remaining malformed closing tags
    content = content.replace(/;\s*\n\s*<\//g, ';\n            </');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ${filePath} (${changes} changes)`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/TSX files
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  files.forEach(file => {
    if (fixJSXFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);