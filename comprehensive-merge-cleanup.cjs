const fs = require('fs');
const path = require('path');

// Function to clean merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers
    
    // Remove duplicate category lines
    content = content.replace(/"category": '[^']*'},\s*"category": '[^']*'\s*}/g, (match) => {
      const categoryMatch = match.match(/"category": '([^']*)'/);
      if (categoryMatch) {
        return `category: '${categoryMatch[1]}'\n    }`}
      return match});
    
    // Clean up any remaining syntax issues
    content = content.replace(/},\s*}/g, '}\n  }');
    content = content.replace(/},\s*]/g, '}\n  ]');
    content = content.replace(/"category": '[^']*'}\s*"category": '[^']*'\s*}/g, (match) => {
      const categoryMatch = match.match(/"category": '([^']*)'/);
      if (categoryMatch) {
        return `category: '${categoryMatch[1]}'\n    }`}
      return match});
    
    // Remove any remaining merge conflict markers