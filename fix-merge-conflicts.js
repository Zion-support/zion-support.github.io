import fs from 'fs;
import path from 'path;
#!/usr/bin/env node;
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts;
