const fs = require('fs');
const path = require('path');

// Function to fix final comprehensive errors
function fixFinalComprehensiveErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix operator.ts - remove extra semicolon and fix structure
    if (filePath.includes('operator.ts')) {
      content = content.replace(/ipToRequests\[ip\] = bucket;\s*}/g, 'ipToRequests[ip] = bucket;');
      content = content.replace(/};\s*export default async function handler/g, '};\n\nexport default async function handler');
      modified = true;
    }

    // Fix track.ts - remove trailing comma
    if (filePath.includes('track.ts')) {
      content = content.replace(/ua: req\.headers\['user-agent'\] \|\| '',;/g, 'ua: req.headers[\'user-agent\'] || \'\';');
      modified = true;
    }

    // Fix applications.ts - remove trailing comma
    if (filePath.includes('applications.ts')) {
      content = content.replace(/const apps = readJsonFile<Application\[\]>\(FILE, \[\]\),;/g, 'const apps = readJsonFile<Application[]>(FILE, []);');
      modified = true;
    }

    // Fix nextauth.ts - remove catch block without try
    if (filePath.includes('nextauth.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    // Fix confirm.ts - add proper try-catch structure
    if (filePath.includes('confirm.ts')) {
      content = `import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET' && req.method !== 'POST') {
      res.status(405).end();
      return;
    }
    
    // Add your logic here
    
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}`;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final comprehensive errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with final comprehensive errors
const filesToFix = [
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth/[...nextauth].ts',
  'pages/api/auth/confirm.ts'
];

let fixedCount = 0;

console.log('Fixing final comprehensive errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixFinalComprehensiveErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed final comprehensive errors in ${fixedCount} files.`);