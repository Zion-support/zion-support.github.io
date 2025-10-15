#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX closing tag issues
function fixJSXClosingTags(content) {
  let fixed = content;
  
  // Fix common patterns of malformed closing tags
  const patterns = [
    // Fix </section></div> -> </div></section>
    { pattern: /<\/section><\/div>/g, replacement: '</div></section>' },
    
    // Fix </div></section> -> </div></section> (already correct)
    { pattern: /<\/div><\/section>/g, replacement: '</div></section>' },
    
    // Fix missing closing tags for common elements
    { pattern: /<div([^>]*)>([\s\S]*?)(?=<section|<\/div>|$)/g, replacement: (match, attrs, content) => {
      if (!content.includes('</div>') && !content.includes('<section')) {
        return `<div${attrs}>${content}</div>`;
      }
      return match;
    }},
    
    // Fix malformed closing tags like </section></div>
    { pattern: /<\/section><\/div>/g, replacement: '</div></section>' },
    
    // Fix missing closing tags for sections
    { pattern: /<section([^>]*)>([\s\S]*?)(?=<section|<\/div>|$)/g, replacement: (match, attrs, content) => {
      if (!content.includes('</section>') && !content.includes('<section')) {
        return `<section${attrs}>${content}</section>`;
      }
      return match;
    }},
    
    // Fix malformed JSX fragments
    { pattern: /<>\s*<\/>/g, replacement: '<></>' },
    
    // Fix missing closing tags in JSX fragments
    { pattern: /<>([\s\S]*?)(?=<section|<\/div>|$)/g, replacement: (match, content) => {
      if (!content.includes('</>') && !content.includes('<section')) {
        return `<>${content}</>`;
      }
      return match;
    }}
  ];
  
  patterns.forEach(({ pattern, replacement }) => {
    if (typeof replacement === 'function') {
      fixed = fixed.replace(pattern, replacement);
    } else {
      fixed = fixed.replace(pattern, replacement);
    }
  });
  
  return fixed;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply JSX fixes
    content = fixJSXClosingTags(content);
    
    // Additional specific fixes
    // Fix malformed closing tags
    content = content.replace(/<\/section><\/div>/g, '</div></section>');
    content = content.replace(/<\/div><\/section>/g, '</div></section>');
    
    // Fix missing closing tags for divs
    const divMatches = content.match(/<div[^>]*>[\s\S]*?(?=<section|<\/div>|$)/g);
    if (divMatches) {
      divMatches.forEach(match => {
        if (!match.includes('</div>') && !match.includes('<section')) {
          const fixedMatch = match + '</div>';
          content = content.replace(match, fixedMatch);
        }
      });
    }
    
    // Fix missing closing tags for sections
    const sectionMatches = content.match(/<section[^>]*>[\s\S]*?(?=<section|<\/div>|$)/g);
    if (sectionMatches) {
      sectionMatches.forEach(match => {
        if (!match.includes('</section>') && !match.includes('<section')) {
          const fixedMatch = match + '</section>';
          content = content.replace(match, fixedMatch);
        }
      });
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed JSX errors in: ${filePath}`);
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
  console.log('Starting JSX error fixes...');
  
  // Find all TypeScript/JavaScript files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (fixFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`Fixed JSX errors in ${totalFixed} files`);
}

main().catch(console.error);