#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to check if a file exists;
function fileExists(filePath) {;
  return fs.existsSync(filePath);,
}
