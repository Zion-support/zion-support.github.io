#!/usr/bin/env node;
import fs from "fs";";
import path from "path";";
import { execSync } from 'child_process';";
console.log('🔧 Starting merge conflict resolution...');';
// Get list of files with merge conflicts;
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });';
const conflictedFiles = gitStatus;
  .split('\n')'';
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))'';
  .map(line => line.substring(3).trim());
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));';
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);``""
    console.log(`\n📝 Resolving conflicts in: ${file}`);``""
      console.log(`⚠️  File does not exist: ${file}`);``""
      console.log(`✅ No merge conflicts found in: ${file}`);``""