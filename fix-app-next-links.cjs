#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files that import next/link in app directory
const filesWithNextLink = execSync('grep -r "next/link" app/ --include="*.tsx" --include="*.ts" -l', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.trim());

console.log(`Found ${filesWithNextLink.length} files with next/link imports in app directory`);

let fixedCount = 0;

filesWithNextLink.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Replace import statement
    if (content.includes("import Link from 'next/link'")) {
      content = content.replace("import Link from 'next/link'", "import { Link } from 'react-router-dom'");
      modified = true;
    }
    
    if (content.includes('import Link from "next/link"')) {
      content = content.replace('import Link from "next/link"', 'import { Link } from "react-router-dom"');
      modified = true;
    }

    // Replace Link usage - change href to to
    content = content.replace(/<Link\s+href=/g, '<Link to=');
    
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`✗ Error fixing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files in app directory`);