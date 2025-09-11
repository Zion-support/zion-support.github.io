const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);