#!/usr/bin/env node

import fs from 'fs';
import path from 'path';


// Function to fix duplicate metadata in a file
function fixDuplicateMetadata(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Check if file has duplicate metadata declarations
  /g;
    
  if (matches && matches.length > 1) {
        
    // Keep only the first metadata declaration
    let firstMatch = true;
    content = content.replace(metadataRegex, (match) => {
      if (firstMatch) {
        firstMatch = false;
        return match;
      } else {
        modified = true;
        return ''; // Remove duplicate
      }
    });
    
    // Clean up any extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  }

  // Fix specific files with known duplicate metadata issues
  if (filePath.includes('ai-powered-devops/page.tsx') ||
      filePath.includes('ai-powered-email-analyzer/page.tsx') ||
      filePath.includes('ecommerce-analytics-pro/page.tsx') ||
      filePath.includes('it-services/cybersecurity-audit/page.tsx') ||
      filePath.includes('legal-document-manager/page.tsx') ||
      filePath.includes('medical-records-manager/page.tsx') ||
      filePath.includes('online-learning-platform/page.tsx') ||
      filePath.includes('property-management-ai/page.tsx') ||
      filePath.includes('supply-chain-optimizer/page.tsx') ||
      filePath.includes('test/page.tsx') ||
      filePath.includes('zion-ai-api-tester/page.tsx') ||
      filePath.includes('zion-ai-database-optimizer/page.tsx')) {
    
    // Create a clean metadata declaration
    `;

    // Replace all metadata declarations with a single clean one
    content = content.replace(/export\s+const\s+metadata\s*=\s*\{[^}]*\};/g, '');
    content = cleanMetadata + '\n\n' + content;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

// Main function
async function main() {
  
  // Get all files that might have duplicate metadata
  
  let fixedCount = 0;

  // Process each file
  for (const file of filesToCheck) {
    if (fs.existsSync(file)) {
      if (fixDuplicateMetadata(file)) {
        fixedCount++;
              }
    }
  }

    }

main().catch(console.error);