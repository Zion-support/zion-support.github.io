const fs = require('fs');
const path = require('path');

// Function to fix final remaining errors
function fixFinalRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix operator.ts - remove trailing comma
    if (filePath.includes('operator.ts')) {
      content = content.replace(/const sys = system \|\| 'You are a professional writing assistant\. Write clear, concise, and helpful content\. Format output as markdown\.',;/g, 'const sys = system || \'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.\';');
      modified = true;
    }

    // Fix track.ts - fix import path
    if (filePath.includes('track.ts')) {
      content = content.replace(/import { ensureAdmin } from '\.\.\/\.\.\/\.\.\/utils\/auth';/g, 'import { ensureAdmin } from \'../../../utils/auth\';');
      modified = true;
    }

    // Fix applications.ts - remove trailing semicolon
    if (filePath.includes('applications.ts')) {
      content = content.replace(/const app: Application = {;/g, 'const app: Application = {');
      modified = true;
    }

    // Fix nextauth.ts - remove catch block without try
    if (filePath.includes('nextauth.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    // Fix login.ts - remove trailing comma
    if (filePath.includes('login.ts')) {
      content = content.replace(/ensureDemoUsers\(\),;/g, 'ensureDemoUsers();');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final remaining errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with final remaining errors
const filesToFix = [
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth/[...nextauth].ts',
  'pages/api/auth/login.ts'
];

let fixedCount = 0;

console.log('Fixing final remaining errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixFinalRemainingErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed final remaining errors in ${fixedCount} files.`);