import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Get all files with merge conflicts,
const filesWithConflicts = execSync('grep -r "" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' }).trim().split('\n').filter(f => f);
console.log(`Found ${filesWithConflicts.length} files with merge conflicts""
    console.log(`Fixed merge conflicts in: ${filePath}""
    console.error(`Error fixing ${filePath}:"")