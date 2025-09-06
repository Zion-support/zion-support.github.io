const fs = require('fs');
const path = require('path');

// Function to fix comprehensive syntax errors
function fixComprehensiveSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolon after import statements
    if (content.includes('import type { NextApiRequest, NextApiResponse } from \'next\',')) {
      content = content.replace(/import type { NextApiRequest, NextApiResponse } from 'next',/g, 'import type { NextApiRequest, NextApiResponse } from \'next\';');
      modified = true;
    }

    // Fix missing semicolon after res.status call
    if (content.includes('res.status(405).end(),')) {
      content = content.replace(/res\.status\(405\)\.end\(\),/g, 'res.status(405).end();');
      modified = true;
    }

    // Fix trailing comma in destructuring
    if (content.includes('const { name, page = \'\', userType = \'guest\', properties = {}, at } = req.body || {},;')) {
      content = content.replace(/const \{ name, page = '', userType = 'guest', properties = \{\}, at \} = req\.body \|\| \{\},;/g, 'const { name, page = \'\', userType = \'guest\', properties = {}, at } = req.body || {};');
      modified = true;
    }

    // Fix trailing comma in variable declarations
    if (content.includes('userType,;')) {
      content = content.replace(/userType,;/g, 'userType;');
      modified = true;
    }

    if (content.includes('properties,;')) {
      content = content.replace(/properties,;/g, 'properties;');
      modified = true;
    }

    // Fix return statement outside function
    if (content.includes('return limited;') && !content.includes('function')) {
      content = content.replace(/return limited;/g, '');
      modified = true;
    }

    // Fix catch block without try
    if (content.includes('} catch (error) {') && !content.includes('try {')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    // Fix missing semicolon after res.status call
    if (content.includes('res.status(400).json({ error: \'Invalid request\' });')) {
      content = content.replace(/res\.status\(400\)\.json\(\{ error: 'Invalid request' \}\);/g, 'res.status(400).json({ error: \'Invalid request\' });');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('return;')) {
      content = content.replace(/return;/g, 'return;');
      modified = true;
    }

    // Fix missing semicolon after res.status call
    if (content.includes('res.status(405).end();')) {
      content = content.replace(/res\.status\(405\)\.end\(\);/g, 'res.status(405).end();');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('return;')) {
      content = content.replace(/return;/g, 'return;');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed comprehensive syntax errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with comprehensive syntax errors
const filesToFix = [
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth/[...nextauth].ts',
  'pages/api/auth/confirm.ts'
];

let fixedCount = 0;

console.log('Fixing comprehensive syntax errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixComprehensiveSyntaxErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed comprehensive syntax errors in ${fixedCount} files.`);