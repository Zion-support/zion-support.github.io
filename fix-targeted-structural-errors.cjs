const fs = require('fs');
const path = require('path');

// Function to fix targeted structural errors
function fixTargetedStructuralErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix operator.ts - remove return statement outside function
    if (filePath.includes('operator.ts')) {
      content = content.replace(/return limited;[\s\S]*?} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    // Fix track.ts - remove trailing comma
    if (filePath.includes('track.ts')) {
      content = content.replace(/at: at && typeof at === 'string' \? at : nowIso,;/g, 'at: at && typeof at === \'string\' ? at : nowIso;');
      modified = true;
    }

    // Fix applications.ts - remove catch block without try
    if (filePath.includes('applications.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    // Fix nextauth.ts - remove catch block without try
    if (filePath.includes('nextauth.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    // Fix confirm.ts - remove catch block without try
    if (filePath.includes('confirm.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed targeted structural errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with targeted structural errors
const filesToFix = [
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth/[...nextauth].ts',
  'pages/api/auth/confirm.ts'
];

let fixedCount = 0;

console.log('Fixing targeted structural errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixTargetedStructuralErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed targeted structural errors in ${fixedCount} files.`);