<<<<<<< HEAD
import fs from 'fs';
import path from 'path';

const filesToFix = [
  'pages/about.tsx',
  'pages/ITServices.tsx', 
  'pages/ai-services.tsx',
  'pages/api-docs.tsx',
  'pages/api.tsx',
  'pages/careers.tsx',
  'pages/guides.tsx',
  'pages/services.tsx',
  'pages/contact.tsx',
  'pages/micro-saas.tsx',
  'pages/it-services.tsx',
  'pages/index.tsx',
  'pages/404.tsx',
  'pages/cookies.tsx',
  'pages/case-studies.tsx',
  'pages/industries/index.tsx'
];

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    
    // Remove any remaining conflict markers
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

filesToFix.forEach(resolveConflicts);
console.log('All conflicts resolved!');
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
=======
#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
