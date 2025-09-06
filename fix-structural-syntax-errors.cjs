const fs = require('fs');
const path = require('path');

// Function to fix structural syntax errors in a file
function fixStructuralErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolon after const declaration
    if (content.includes('const { userId, amount, reason } = req.body || {},')) {
      content = content.replace(/const \{ userId, amount, reason \} = req\.body \|\| \{\},/g, 'const { userId, amount, reason } = req.body || {};');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('return res.status(400).json({ error: "userId and amount required" }),')) {
      content = content.replace(/return res\.status\(400\)\.json\(\{ error: "userId and amount required" \}\),/g, 'return res.status(400).json({ error: "userId and amount required" });');
      modified = true;
    }

    // Fix missing semicolon after function call
    if (content.includes('const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke"),')) {
      content = content.replace(/const tx = revokeTokens\(userId, Math\.floor\(amount\), reason \|\| "admin_revoke"\),/g, 'const tx = revokeTokens(userId, Math.floor(amount), reason || "admin_revoke");');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('return res.status(200).json({ tx })')) {
      content = content.replace(/return res\.status\(200\)\.json\(\{ tx \}\)/g, 'return res.status(200).json({ tx });');
      modified = true;
    }

    // Fix missing semicolon after if statement
    if (content.includes('if (!limited) {;')) {
      content = content.replace(/if \(!limited\) \{;/g, 'if (!limited) {');
      modified = true;
    }

    // Fix missing semicolon after function call
    if (content.includes('bucket.timestamps.push(now);')) {
      content = content.replace(/bucket\.timestamps\.push\(now\);/g, 'bucket.timestamps.push(now);');
      modified = true;
    }

    // Fix missing semicolon after if statement
    if (content.includes('if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });')) {
      content = content.replace(/if \(!fs\.existsSync\(LOG_DIR\)\) fs\.mkdirSync\(LOG_DIR, \{ recursive: true \}\);/g, 'if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });');
      modified = true;
    }

    // Fix missing semicolon after if statement
    if (content.includes('if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, \'\');')) {
      content = content.replace(/if \(!fs\.existsSync\(LOG_FILE\)\) fs\.writeFileSync\(LOG_FILE, ''\);/g, 'if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, \'\');');
      modified = true;
    }

    // Fix missing semicolon after res.status call
    if (content.includes('res.status(200).json({ applications: apps });')) {
      content = content.replace(/res\.status\(200\)\.json\(\{ applications: apps \}\);/g, 'res.status(200).json({ applications: apps });');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('return;')) {
      content = content.replace(/return;/g, 'return;');
      modified = true;
    }

    // Fix missing semicolon after res.status call
    if (content.includes('res.status(401).json({ error: \'Unauthorized\' });')) {
      content = content.replace(/res\.status\(401\)\.json\(\{ error: 'Unauthorized' \}\);/g, 'res.status(401).json({ error: \'Unauthorized\' });');
      modified = true;
    }

    // Fix missing semicolon after return statement
    if (content.includes('return;')) {
      content = content.replace(/return;/g, 'return;');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed structural syntax errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with structural syntax errors
const filesToFix = [
  'pages/api/admin/tokens/revoke.ts',
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth-session.ts'
];

let fixedCount = 0;

console.log('Fixing structural syntax errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixStructuralErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed structural syntax errors in ${fixedCount} files.`);