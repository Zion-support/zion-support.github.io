#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix button tags and other JSX issues
function fixButtonTags(content) {
  let fixed = content;
  
  // Fix incomplete button tags that end with just >
  fixed = fixed.replace(/<button[^>]*>\s*([^<]+)>\s*$/gm, '<button');
  
  // Fix button tags that have text followed by </button>
  fixed = fixed.replace(/<button[^>]*>\s*([^<]+)>\s*$/gm, '<button$1</button>');
  
  // Fix button tags with incomplete closing
  fixed = fixed.replace(/<button[^>]*>\s*([^<]+)>\s*$/gm, '<button$1</button>');
  
  // Fix any remaining incomplete JSX elements
  fixed = fixed.replace(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>\s*([^<]+)>\s*$/gm, '<$1>$2</$1>');
  
  // Fix specific patterns we've seen
  fixed = fixed.replace(/Get Started>\s*$/gm, 'Get Started</button>');
  fixed = fixed.replace(/Schedule Demo>\s*$/gm, 'Schedule Demo</button>');
  fixed = fixed.replace(/Learn More>\s*$/gm, 'Learn More</button>');
  fixed = fixed.replace(/Contact Us>\s*$/gm, 'Contact Us</button>');
  fixed = fixed.replace(/Get Quote>\s*$/gm, 'Get Quote</button>');
  fixed = fixed.replace(/View Details>\s*$/gm, 'View Details</button>');
  fixed = fixed.replace(/Start Now>\s*$/gm, 'Start Now</button>');
  fixed = fixed.replace(/Try Free>\s*$/gm, 'Try Free</button>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixButtonTags(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed button tags in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (item === 'node_modules' || item === '.git' || item === 'dist' || item === '.next') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (stat.isFile()) {
        // Process TypeScript and JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting button tag fixes...');
const processedCount = processDirectory('.');
console.log(`\n✓ Processed ${processedCount} files with button tag issues`);
console.log('Button tag fixes completed!');