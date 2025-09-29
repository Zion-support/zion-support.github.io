>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:resolve-conflicts.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

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
    
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

#!/usr/bin/env node/usr/bin/env node/usr/bin/env node const fs = require("fs"); const path = require("path"); const { execSync } = require("child_process"); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,"utf8"); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {'`'"`
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
>>>>>>> main
>>>>>>> main
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
resolveMergeConflicts();
#!/usr/bin/env node const fs = require('fs'); const path = require('path'); const { execSync } = require('child_process'); function resolveMergeConflicts(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); let resolvedContent = content fs.writeFileSync(filePath,resolvedContent); return true} catch (error) { _console.error(`Error resolving conflicts in ${filePath}:`,error.message); return false} } function findFilesWithConflicts() { try {
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
