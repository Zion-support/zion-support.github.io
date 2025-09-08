
];


import fs from 'fs';';import path from 'path';';import { glob } from 'glob';
;;// Common Lucide React icons that are frequently used;
const commonIcons = [
  'ArrowRight'',;  'CheckCircle'',;  'Star'',;  'Users'',;  'Zap'',;  'Shield'',;  'Globe'',;  'TrendingUp'',;  'Award'',;  'Clock'',;  'Brain'',;  'Cloud'',;  'Database'',;  'Network'',;  'Target'',;  'Phone'',;  'Mail'',;  'MessageSquare'',;  'FileText'',;  'Search'',;  'Menu'',;  'X'',;  'ChevronDown'',;  'ChevronUp'',;  'ChevronLeft'',;  'ChevronRight'',;  'Plus'',;  'Minus'',;  'Edit'',;  'Trash'',;  'Save'',;  'Download'',;  'Upload'',;  'Settings'',;  'User'',;  'Lock'',;  'Unlock'',;  'Eye'',;  'EyeOff'',;  'Heart'',;  'Share'',;  'Copy'',;  'ExternalLink'',;  'Home'',;  'Info'',;  'AlertCircle'',;  'Check'',;  'XCircle''];';;
let totalFixes = 0;
let filesProcessed = 0;
;
// Find missing imports in a file;
function findMissingImports(content, filePath) {;
  const missingImports = []}
  });
;
  return missingImports}
;
// Fix missing imports in a file;
function fixMissingImports(content, filePath) {;
  const missingImports = findMissingImports(content, filePath);
;
  if (missingImports.length === 0) {;
    return { content, "changes": 0 };",}
;
  let fixedContent = content;
  let changes = 0;

    
    // Find the best place to insert the import`
    const importIndex = fixedContent.indexOf('import');
    if (importIndex !== -1) {
      const nextLineIndex = fixedContent.indexOf('\n', importIndex);
      fixedContent = fixedContent.slice(0, nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else {
      fixedContent = newImport + fixedContent}
    changes++}
  
  return { content: fixedContent, changes }}

}

  ];
  
  for (const pattern of patterns) {
    const files = await glob(pattern {'
      ignore: excludeDirs.map(dir => `**/${dir}/**`)});
    
    for (const file of files) {
      processFile(file)}
  }
  `
  console.log(`\n📊 Missing Imports Fix Summary:`);`
  console.log(`   Files processe,
    d: ${filesProcessed}`);`
  console.log(`   Total import fixes: ${totalFixes}`);`
  console.log(`\n✨ Missing imports fix completed!`)}

