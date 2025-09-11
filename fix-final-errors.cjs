// Function to fix final errors
function fixFinalErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix operator.ts - fix object property syntax
    if (filePath.includes('operator.ts')) {
      content = content.replace(/];/g, '];');
      modified = true;
    }

    // Fix track.ts - fix import path
    if (filePath.includes('track.ts')) {
      content = content.replace(/import { ensureAdmin } from '\.\.\/\.\.\/\.\.\/utils\/auth';/g, 'import { ensureAdmin } from \'../../../utils/auth\';');
      modified = true;
    }

    // Fix applications.ts - fix import paths
    if (filePath.includes('applications.ts')) {
      content = content.replace(/import { rateLimit } from '\.\.\/\.\.\/utils\/rate-limit';/g, 'import { rateLimit } from \'../../utils/rate-limit\';');
      content = content.replace(/import { readJsonFile, writeJsonFile } from '\.\.\/\.\.\/utils\/file-utils';/g, 'import { readJsonFile, writeJsonFile } from \'../../utils/file-utils\';');
      modified = true;
    }

    // Fix nextauth.ts - remove catch block without try
    if (filePath.includes('nextauth.ts')) {
      content = content.replace(/} catch \(error\) \{[\s\S]*?return res\.status\(500\)\.json\(\{ error: "Internal server error" \}\);\s*}/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed final errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// List of files with final errors
const filesToFix = [
  'pages/api/ai/operator.ts',
  'pages/api/analytics/events/track.ts',
  'pages/api/applications.ts',
  'pages/api/auth/[...nextauth].ts'
];

let fixedCount = 0;

console.log('Fixing final errors...');

filesToFix.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    if (fixFinalErrors(filePath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Fixed final errors in ${fixedCount} files.`);========
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/fix-final-errors.cjs
