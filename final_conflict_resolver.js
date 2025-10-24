const fs = require('fs');
const path = require('path');

function resolveConflicts(content) {
  return content

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');