<<<<<<< HEAD
const fs = require("fs")"const path = require("path")function fixMergeConflicts(filePath) {" let content = fs.readFileSync(filePath, "utf8";); / Remove all merge conflict markers and keep the HEAD version''"
=======
const fs = require('fs');
const path = require('path');
function fixMergeConflicts(filePath) {}
  let content = fs.readFileSync(filePath, 'utf8';);
<<<<<<< HEAD
  
  // Remove all merge conflict markers and keep the HEAD version
=======
  // Remove all merge conflict markers and keep the HEAD version;
  content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n[^\n]*\n/g, '$1');
cursor/fix-lint-push-and-merge-to-main-f3c1;
  // Remove any remaining  lines;
  content = content.replace(/^\n/gm, '');
  fs.writeFileSync(filePath, content);
  console.log(`Fixed conflicts in ${filePath}`)};
// Fix the problematic files;
const filesToFix = ['pages/ai-services.tsx',]
  'pages/it-services.tsx', 
  'pages/micro-saas.tsx'
];
filesToFix.forEach(fixMergeConflicts);
console.log('All merge conflicts fixed!');
cursor/website-audit-and-update-with-deployment-76dc;
cursor/fix-lint-push-and-merge-to-main-f3c1;
>>>>>>> main
>>>>>>> main
