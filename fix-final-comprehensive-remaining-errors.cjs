const fs = require('fs');
const path = require('path');

// Function to fix final comprehensive remaining errors
function fixFinalComprehensiveRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix operator.ts - fix object property syntax
    if (filePath.includes('operator.ts')) {
      content = content.replace(/model: 'gpt-4o-mini';/g, 'model: \'gpt-4o-mini\',');
      content = content.replace(/temperature: typeof temperature === 'number' \? temperature : 0\.7;/g, 'temperature: typeof temperature === \'number\' ? temperature : 0.7,');
      content = content.replace(/messages: \[;/g, 'messages: [');
      content = content.replace(/\{ role: 'system', content: sys \},;/g, '{ role: \'system\', content: sys },');
      modified = true;
    }

    // Fix track.ts - fix import path
    if (filePath.includes('track.ts')) {
      content = content.replace(/import { ensureAdmin } from '\.\.\/\.\.\/\.\.\/utils\/auth';/g, 'import { ensureAdmin } from \'../../../utils/auth\';');
      modified = true;
    }

    // Fix applications.ts - fix object property syntax
    if (filePath.includes('applications.ts')) {
      content = content.replace(/jobId: String\(jobId\);/g, 'jobId: String(jobId),');
      content = content.replace(/talentSlug: String\(talentSlug\);/g, 'talentSlug: String(talentSlug),');
      content = content.replace(/status: action === 'apply' \? 'applied' : 'skipped';/g, 'status: action === \'apply\' ? \'applied\' : \'skipped\',');
      content = content.replace(/createdAtIso: now\},;/g, 'createdAtIso: now');
      modified = true;
    }

    // Fix nextauth.ts - remove catch block without try
    if (filePath.includes('nextauth.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    // Fix nonce.ts - remove catch block without try
    if (filePath.includes('nonce.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final comprehensive remaining errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with final comprehensive remaining errors
const filesToFix = [
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth/[...nextauth].ts',
  'pages/api/auth/nonce.ts'
];

let fixedCount = 0;

console.log('Fixing final comprehensive remaining errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixFinalComprehensiveRemainingErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed final comprehensive remaining errors in ${fixedCount} files.`);