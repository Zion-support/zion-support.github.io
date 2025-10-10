#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common JSX issues
function fixJSXIssues(content) {
  // Fix missing closing tags by analyzing the structure
  const lines = content.split('\n');
  const fixed = [];
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track opening tags
    const openTagMatch = trimmed.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/);
    if (openTagMatch) {
      const tagName = openTagMatch[1];
      if (!['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
        tagStack.push({ tag: tagName, line: i + 1 });
      }
    }
    
    // Track closing tags
    const closeTagMatch = trimmed.match(/<\/(\w+)>/);
    if (closeTagMatch) {
      const tagName = closeTagMatch[1];
      const lastOpen = tagStack[tagStack.length - 1];
      if (lastOpen && lastOpen.tag === tagName) {
        tagStack.pop();
      } else if (tagStack.length > 0) {
        // Mismatched closing tag - try to fix
        console.log(`Warning: Mismatched closing tag ${tagName} at line ${i + 1}`);
      }
    }
    
    fixed.push(line);
  }
  
  // Add missing closing tags
  while (tagStack.length > 0) {
    const missing = tagStack.pop();
    console.log(`Adding missing closing tag for ${missing.tag} (opened at line ${missing.line})`);
    fixed.push(`</${missing.tag}>`);
  }
  
  return fixed.join('\n');
}

// Function to fix specific known issues
function fixSpecificIssues(content) {
  // Fix common patterns
  content = content.replace(/return \(\s*([^)]+)\s*\);/g, 'return <>{$1}</>;');
  
  // Fix mismatched article/div tags
  content = content.replace(/<article[^>]*>[\s\S]*?<\/div>/g, (match) => {
    return match.replace(/<\/div>$/, '</article>');
  });
  
  // Fix missing closing tags for common patterns
  content = content.replace(/(<section[^>]*>[\s\S]*?)(?=\n\s*<)/g, (match) => {
    if (!match.includes('</section>')) {
      return match + '\n        </section>';
    }
    return match;
  });
  
  return content;
}

async function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('<') && content.includes('>')) {
          console.log(`Checking JSX in: ${file}`);
          const fixed = fixSpecificIssues(content);
          if (fixed !== content) {
            fs.writeFileSync(file, fixed, 'utf8');
            fixedFiles++;
            console.log(`Fixed JSX issues in: ${file}`);
          }
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }

  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files with JSX issues.`);
}

main().catch(console.error);