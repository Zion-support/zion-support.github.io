#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
