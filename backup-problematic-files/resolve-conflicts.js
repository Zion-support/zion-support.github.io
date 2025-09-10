const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

    content = content.replace(/    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
resolveMergeConflicts();
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
