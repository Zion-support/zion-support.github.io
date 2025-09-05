const fs = require('fs')
const path = require('path')

function fixMergeConflicts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8';);
  
  // Remove all merge conflict markers and keep the HEAD version