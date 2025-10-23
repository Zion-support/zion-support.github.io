const fs = require('fs');
const path = require('path');

// List of files with merge conflicts
const filesToFix = [
  'app/components/AccessibilityComponents.tsx',
  'app/components/AccessibilityUtils.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/Footer.tsx',
  'app/components/LazyImage.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceImage.tsx',
  'app/components/SEOHead.tsx',
  'app/components/Sidebar.tsx',
  'app/pages/AdminPage.tsx',
  'app/pages/ContactPage.tsx'
];

function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/    
    // Clean up extra newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
=======
    let _content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
    if (
      !content.includes('<<<<<<< HEAD') &&
      !content.includes('=======') &&
      !content.includes('>>>>>>> ')
    ) {
      return false; // No conflicts to fix
    }

    // Split content into lines
    const _lines = content.split('\n');
    const _fixedLines = [];
    let _inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    let _headLines = [];
    let _incomingLines = [];

    for (let i = 0; i < lines.length; i++) {
      const _line = lines[i];

      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'incoming';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = null;

        // Choose the incoming version (usually more complete)
        fixedLines.push(...incomingLines);
        headLines = [];
        incomingLines = [];
        continue;
      }

      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'incoming') {
          incomingLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }

    // Write the fixed content back
    const _fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
    return true;
  } catch (error) {

    return false;
  }
}

<<<<<<< HEAD
// Fix all files
let fixedCount = 0;
filesToFix.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
=======
// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  try {
    const _files = fs.readdirSync(dir);
    let _fixedCount = 0;

    for (const file of files) {
      const _filePath = path.join(dir, file);

      try {
        const _stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          // Skip certain directories
          if (['node_modules', '.git', 'dist', '.next', 'media'].includes(file)) {
            continue;
          }
          fixedCount += fixAllMergeConflicts(filePath);
        } else if (
          file.endsWith('.tsx') ||
          file.endsWith('.ts') ||
          file.endsWith('.js') ||
          file.endsWith('.jsx')
        ) {
          if (fixMergeConflicts(filePath)) {
            fixedCount++;
          }
        }
      } catch (error) {
        // Skip files that can't be accessed

        continue;
      }
    }

    return fixedCount;
  } catch (error) {

    return 0;
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
  }
});

<<<<<<< HEAD
console.log(`\nFixed merge conflicts in ${fixedCount}/${filesToFix.length} files`);
=======
// Main execution
const _workspaceDir = process.cwd();

const _fixedCount = fixAllMergeConflicts(workspaceDir);
>>>>>>> 40ca7232406b369c6706f4e528a6385ab62c9b51
