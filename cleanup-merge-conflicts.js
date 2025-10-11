#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('
