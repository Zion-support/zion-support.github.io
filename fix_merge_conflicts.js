#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflict markers
    if (!content.includes('>
      <h1>Component</h1>
      <p>This component is under construction.</p>
  </div>
  );
}
// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', 'dist', 'out', '.git'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          files.push(fullPath);
        }
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution
function main() {
  const workspaceDir = process.cwd();
  console.log(`Resolving merge conflicts in: ${workspaceDir}`);
  const sourceFiles = findSourceFiles(workspaceDir);
  let resolvedCount = 0;
  for (const file of sourceFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  console.log(`Resolved merge conflicts in ${resolvedCount} files`);
  // Run a quick check to see if there are any remaining conflicts
  try {
    const result = execSync('grep -r "