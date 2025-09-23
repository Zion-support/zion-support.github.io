#!/usr/bin/env node

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all files with merge conflict markers
function findFilesWithMergeConflicts(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .next, and other build directories
      if (!['node_modules', '.next', 'out', 'dist', 'build', '.git'].includes(item)) {
        findFilesWithMergeConflicts(fullPath, files);
      }
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('