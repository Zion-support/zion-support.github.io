
const fs = require('fs')
const path = require('path')
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep the HEAD version
  return content
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')