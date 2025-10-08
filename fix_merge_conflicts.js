#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
    if (
      !content.includes('<<<<<<< HEAD') &&
      !content.includes('=======') &&
      !content.includes('>>>>>>> ')
    ) {
      return false; // No conflicts to fix
    }

    // Split content into lines
    const _lines = content.split('\n');
    const _fixedLines = [];
    let _inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    let _headLines = [];
    let _incomingLines = [];

    for (let i = 0; i < lines.length; i++) {
      const _line = lines[i];

      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'incoming';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = null;

        // Choose the incoming version (usually more complete)
        fixedLines.push(...incomingLines);
        headLines = [];
        incomingLines = [];
        continue;
      }

      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'incoming') {
          incomingLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }

    // Write the fixed content back
    const _fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {

    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  try {
    const _files = fs.readdirSync(dir);
    let _fixedCount = 0;

    for (const file of files) {
      const _filePath = path.join(dir, file);

      try {
        const _stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Skip certain directories
          if (['node_modules', '.git', 'dist', '.next', 'media'].includes(file)) {
            continue;
          }
          fixedCount += fixAllMergeConflicts(filePath);
        } else if (
          file.endsWith('.tsx') ||
          file.endsWith('.ts') ||
          file.endsWith('.js') ||
          file.endsWith('.jsx')
        ) {
          if (fixMergeConflicts(filePath)) {
            fixedCount++;
          }
        }
      } catch (error) {
        // Skip files that can't be accessed

        continue;
      }
    }

    return fixedCount;
  } catch (error) {

    return 0;
  }
}

// Main execution
const _workspaceDir = process.cwd();

const _fixedCount = fixAllMergeConflicts(workspaceDir);
