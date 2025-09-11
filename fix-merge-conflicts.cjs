const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  