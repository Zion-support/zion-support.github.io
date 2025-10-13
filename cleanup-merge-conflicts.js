#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflict markers
    if (!content.includes('') && !content.includes('')) {
      return false; // No conflicts to clean
    }
    console.log(`Cleaning merge conflicts in: ${filePath}`);
    // Split content into lines
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let conflictEnd = -1;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith('')) {
        continue; // Skip separator line
      }
      if (line.startsWith('')) {
        inConflict = false;
        conflictEnd = i;
        // For now, we'll keep the first version (before >= 0) {
          // Keep lines from before the conflict
          for (let j = conflictStart; j < i; j++) {
            if (!lines[j].startsWith('