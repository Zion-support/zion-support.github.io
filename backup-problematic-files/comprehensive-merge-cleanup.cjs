


>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

const fs = require('fs');
const path = require('path');
// Function to clean merge conflicts in a file;
function cleanMergeConflicts(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');



>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

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


      if (categoryMatch) {
        return `category: '${categoryMatch[1]}'\n    }`}
      return match});
    // Remove any remaining merge conflict markers




>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

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



>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

