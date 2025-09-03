
const fs = require('fs');
const path = require('path');

function analyzeBundle() {
  const buildDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(buildDir)) {
    console.log('Bundle analysis would go here');
    return true}
  return false}

analyzeBundle();
