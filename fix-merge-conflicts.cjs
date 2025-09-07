#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing merge conflicts in TypeScript files...');

const filesToFix = [
  'lib/integrations/connectors.ts',
  'lib/integrations/registry.ts', 
  'lib/integrations/types.ts',
  'src/data/enhancedServices.ts',
  'types/disputes.ts',
  'vite.config.ts'
];

function fixMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Remove empty lines and clean up syntax
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/;\s*;/g, ';');
    content = content.replace(/,\s*,/g, ',');
    
    // Fix common syntax issues
    content = content.replace(/export type DisputeStatus = 'Open' \| 'Under Review' \| 'Resolved',;/g, "export type DisputeStatus = 'Open' | 'Under Review' | 'Resolved';");
    content = content.replace(/export type DisputeReason =;/g, "export type DisputeReason = 'Scope Disagreement' | 'Quality Issues' | 'Delivery Delay' | 'Payment Issue' | 'Communication Breakdown' | 'Other';");
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixMergeConflicts);

console.log('🎉 Merge conflict fixing completed!');