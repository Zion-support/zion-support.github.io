const fs = require('fs');
const path = require('path');

// Function to fix duplicate imports and structural issues
function fixDuplicateImportsAndStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate imports in revoke.ts
    if (filePath.includes('revoke.ts')) {
      // Remove duplicate imports and fix structure
      content = `import type { NextApiRequest, NextApiResponse } from "next";
import { revokeTokens } from "../../../../utils/token/service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  
  const { userId, amount, reason } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  
  try {
    const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke");
    return res.status(200).json({ tx });
  } catch (err: any) {
    return res.status(400).json({ error: err.message });
  }
}`;
      modified = true;
    }

    // Fix structural issues in operator.ts
    if (filePath.includes('operator.ts')) {
      // Fix the structure by adding proper try-catch blocks
      content = content.replace(/if \(!limited\) \{[\s\S]*?bucket\.timestamps\.push\(now\);\s*\} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*\}/g, 
        `if (!limited) {
    bucket.timestamps.push(now);
  }`);
      modified = true;
    }

    // Fix structural issues in track.ts
    if (filePath.includes('track.ts')) {
      // Fix the structure by adding proper try-catch blocks
      content = content.replace(/if \(!fs\.existsSync\(LOG_DIR\)\) fs\.mkdirSync\(LOG_DIR, \{ recursive: true \}\);[\s\S]*?if \(!fs\.existsSync\(LOG_FILE\)\) fs\.writeFileSync\(LOG_FILE, ''\);[\s\S]*?\} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*\}/g, 
        `if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '');`);
      modified = true;
    }

    // Fix structural issues in applications.ts
    if (filePath.includes('applications.ts')) {
      // Fix the structure by adding proper try-catch blocks
      content = content.replace(/res\.status\(200\)\.json\(\{ applications: apps \}\);[\s\S]*?return;[\s\S]*?\} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*\}/g, 
        `res.status(200).json({ applications: apps });
    return;`);
      modified = true;
    }

    // Fix structural issues in auth-session.ts
    if (filePath.includes('auth-session.ts')) {
      // Fix the structure by adding proper try-catch blocks
      content = content.replace(/res\.status\(401\)\.json\(\{ error: 'Unauthorized' \}\);[\s\S]*?return;[\s\S]*?\} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*\}/g, 
        `res.status(401).json({ error: 'Unauthorized' });
    return;`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate imports and structure in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with duplicate imports and structural issues
const filesToFix = [
  'pages/api/admin/tokens/revoke.ts',
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth-session.ts'
];

let fixedCount = 0;

console.log('Fixing duplicate imports and structural issues...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixDuplicateImportsAndStructure(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed duplicate imports and structure in ${fixedCount} files.`);