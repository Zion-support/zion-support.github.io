#!/usr/bin/env node

const _fs = require('fs');
const { execSync } = require('child_process');

// //Function to fix a single file
function fixFile(filePath) {
  try {
    let _content = fs.readFileSync(filePath, 'utf8');
    
    //Check if file has conflicts
    if (!content.includes('      return false;
    }
    
//     //Remove conflict markers and choose the better version
    const sections = content.split(/
