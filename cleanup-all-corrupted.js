import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to check if a file is corrupted
function isCorruptedFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const trimmed = content.trim();
    
    // Check for common corruption patterns
    const corruptionPatterns = [
      /^'use client';\s*import React from 'react';\s*$/, // Just imports, no component
      /^'use client';\s*import React from 'react';\s*}\s*$/, // Just imports and closing brace
      /^'use client';\s*}\s*$/, // Just use client and closing brace
      /^}\s*$/, // Just a closing brace
      /^[^a-zA-Z]*$/, // Only non-alphabetic characters
      /^.*displayName = '';\s*export default \w+;?\s*$/, // Just displayName and export
      /^.*const \w+: React\.FC = \(\) => \{\s*const \w+ = \[\;\s*$/, // Incomplete array declaration
      /^.*export default \w+\s*\]\}$/, // Incomplete export
      /^'use client';\s*$/, // Just use client directive
      /^'use client';\s*import.*;\s*}\s*$/, // Use client, imports, and closing brace
      /^'use client';\s*import.*;\s*$/, // Use client and imports only
      /^.*const \w+: React\.FC = \(\) => \{\s*$/, // Incomplete component declaration
      /^.*import.*;\s*$/, // Just imports
      /^.*\w+\.displayName = '';\s*export default \w+;?\s*$/, // DisplayName pattern
    ];
    
    // Also check if file is too short (likely corrupted)
    if (trimmed.length < 50) {
      return true;
    }
    
    return corruptionPatterns.some(pattern => pattern.test(trimmed));
  } catch (error) {
    return true; // If we can't read the file, consider it corrupted
  }
}

// Function to recursively find and remove corrupted files
function cleanupCorruptedFiles(dir) {
  let removedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively process subdirectories
        removedCount += cleanupCorruptedFiles(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        // Check if it's a corrupted file
        if (isCorruptedFile(fullPath)) {
          console.log(`Removing corrupted file: ${fullPath}`);
          fs.unlinkSync(fullPath);
          removedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dir}:`, error.message);
  }
  
  return removedCount;
}

console.log('Starting comprehensive cleanup of corrupted files...');
const removedCount = cleanupCorruptedFiles('./src');
console.log(`Removed ${removedCount} corrupted files`);