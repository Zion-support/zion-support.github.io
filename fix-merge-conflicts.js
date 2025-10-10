
import fs from 'fs';
import path from 'path';

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and choose HEAD version
  let resolved = content
