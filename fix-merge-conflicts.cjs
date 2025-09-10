const fs = require('fs');
const path = require('path');
function fixMergeConflicts(filePath) {}
  try {}
    let content = fs.readFileSync(filePath, 'utf8');
    // Remove merge conflict markers and keep the newer version (after );