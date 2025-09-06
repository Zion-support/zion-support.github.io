<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const fs = require("fs");"const path = require("path");/ Function to clean merge conflicts in a filefunction cleanMergeConflicts(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); / Remove all merge conflict markers''"
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
const fs = require("fs");"const path = require("path");/ Function to clean merge conflicts in a filefunction cleanMergeConflicts(filePath) { try {" let content = fs.readFileSync(filePath, "utf8"); / Remove all merge conflict markers''"
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const fs = require('fs');
const path = require('path');
// Function to clean merge conflicts in a file;
function cleanMergeConflicts(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Remove all merge conflict markers
    // Remove duplicate category lines
    content = content.replace(/"category": '[^']*'},\s*"category": '[^']*'\s*}/g, (match) => {
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
    // Remove all merge conflict markers
    // Remove duplicate category lines
    content = content.replace(/"category": '[^']*'},\s*"category": '[^']*'\s*}/g, (match) => {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    // Remove all merge conflict markers;
    content = content.replace(/[\s\S]*?[\s\S]*?origin\/cursor[^\n]*\n?/g, '');
    content = content.replace(/origin\/cursor[^\n]*\n?/g, '');
    content = content.replace(/[\s\S]*?/g, '');
    content = content.replace(/[\s\S]*?origin\/cursor[^\n]*\n?/g, '');
cursor/fix-lint-push-and-merge-to-main-f3c1;
    // Remove duplicate category lines;
    content = content.replace(/"category": '[^']*'},\s*"category": '[^']*'\s*}/g, (match) => {}
      const categoryMatch = match.match(/"category": '([^']*)'/);
      if (categoryMatch) {}
        return `category: '${categoryMatch[1]}'\n    }`};
      return match}
});
    // Clean up any remaining syntax issues;
    content = content.replace(/},\s*}/g, '}\n  }');
    content = content.replace(/},\s*]/g, '}\n  ]');
    content = content.replace(/"category": '[^']*'}\s*"category": '[^']*'\s*}/g, (match) => {}
      const categoryMatch = match.match(/"category": '([^']*)'/);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
      if (categoryMatch) {
        return `category: '${categoryMatch[1]}'\n    }`}
      return match});
    // Remove any remaining merge conflict markers
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      if (categoryMatch) {}
        return `category: '${categoryMatch[1]}'\n    }`};
      return match}
});
    // Remove any remaining merge conflict markers;
    content = content.replace(/origin\/cursor[^\n]*\n?/g, '');
    content = content.replace(/[\s\S]*?/g, '');
cursor/fix-lint-push-and-merge-to-main-f3c1;
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned merge conflicts "in": ${filePath}`)} catch (error) {`}
    console.error(`Error cleaning ${filePath}:`, error.message)};
};
// List of files with merge conflicts;
const filesToClean = ['pages/ai-services.tsx',]
  'pages/services/it-services.tsx',
  'pages/services.tsx',
  'pages/services/ai-services.tsx',
  'pages/micro-saas.tsx',
  'pages/blog/index.tsx',
  'pages/careers.tsx',
  'pages/brochure.tsx',
  'pages/case-studies.tsx',
  'index.html',
  'public/offline.html'
];
// Clean all files;
filesToClean.forEach(file => {})
  if (fs.existsSync(file)) {}
    cleanMergeConflicts(file)};
}
});
console.log('Comprehensive merge conflict cleanup completed!');
cursor/website-audit-and-update-with-deployment-76dc;
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
cursor/fix-lint-push-and-merge-to-main-f3c1;
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
cursor/fix-lint-push-and-merge-to-main-f3c1;
<<<<<<< HEAD
=======
cursor/fix-lint-push-and-merge-to-main-f3c1;
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
