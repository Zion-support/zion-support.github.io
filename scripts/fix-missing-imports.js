<<<<<<< HEAD

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; `)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);

=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; `)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Common Lucide React icons that are frequently used
const commonIcons = [
  'ArrowRight',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  'CheckCircle',
  'Star',
  'Users',
  'Zap',
  'Shield',
  'Globe',
  'TrendingUp',
  'Award',
  'Clock',
  'Brain',
  'Cloud',
  'Database',
  'Network',
  'Target',
  'Phone',
  'Mail',
  'MessageSquare',
  'FileText',
  'Search',
  'Menu',
  'X',
  'ChevronDown',
  'ChevronUp',
  'ChevronLeft',
  'ChevronRight',
  'Plus',
  'Minus',
  'Edit',
  'Trash',
  'Save',
  'Download',
  'Upload',
  'Settings',
  'User',
  'Lock',
  'Unlock',
  'Eye',
  'EyeOff',
  'Heart',
  'Share',
  'Copy',
  'ExternalLink',
  'Home',
  'Info',
  'AlertCircle',
  'Check',
  'XCircle',
];
let totalFixes = 0;
let filesProcessed = 0;
// Find missing imports in a file
function findMissingImports(content, filePath) {
  const missingImports = [];

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  // Check for each common icon
  commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  commonIcons && commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content && content.match(iconRegex);
  commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    if (matches && matches.length > 0) {
      // Check if the icon is already imported
      const importRegex = new RegExp(
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,
        'g'
      );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      const existingImport = content.match(importRegex);
      const existingImport = content.match(importRegex);

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
      if (!existingImport) {
        missingImports.push(icon)}
      const existingImport = content && content.match(importRegex);
      if (!existingImport) {
        missingImports && missingImports.push(icon)}
      const existingImport = content.match(importRegex);
      if (!existingImport) {
        missingImports.push(icon)}
    }
  });

  return missingImports;
}

// Fix missing imports in a file
function fixMissingImports(content, filePath) {
  const missingImports = findMissingImports(content, filePath);

  if (missingImports.length === 0) {
    return { content, changes: 0 };
  }

  let fixedContent = content;
  let changes = 0;

  // Find existing lucide-react import
  const existingImportRegex =
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent.match(existingImportRegex);

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  if (existingImport) {
    // Add missing icons to existing import
    const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]
        ?.split(',')
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
    // Create new import statement
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    // Find the best place to insert the import
    const importIndex = fixedContent.indexOf('import');
    if (importIndex !== -1) {
      const nextLineIndex = fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
<<<<<<< HEAD
<<<<<<< HEAD
        fixedContent.slice(nextLineIndex)} else {
  const existingImportRegex =;
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent && fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        fixedContent.slice(nextLineIndex);
    } else {
      fixedContent = newImport + fixedContent;
    }
    changes++;
  }

  return { content: fixedContent, changes };
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc

        ?.split(',')
        .map(icon => icon ;

<<<<<<< HEAD
<<<<<<< HEAD
=======
        ?.split(',');
        .map(icon => icon.trim()) || [];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
        ?.split(',');
        .map(icon => icon.trim()) || [];




>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
<<<<<<< HEAD
=======

    // Create new import statement
    const newImport = `import { ${missingImports ;\n`;
    // Find the best place to insert the import const importIndex = fixedContent ;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
    if (importIndex !== -1) {
      const nextLineIndex = fixedContent && fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent && fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
        fixedContent && fixedContent.slice(nextLineIndex)} else {
<<<<<<< HEAD
=======
  const existingImportRegex =
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import
    const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]
        ?.split(',')
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
    // Create new import statement
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
    // Find the best place to insert the import
    const importIndex = fixedContent.indexOf('import');
    if (importIndex !== -1) {
      const nextLineIndex = fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
        fixedContent.slice(nextLineIndex)} else {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
      fixedContent = newImport + fixedContent}
    changes++}
  return { "content": fixedContent, changes }}
// Process individual file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);

    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes;
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`);
    }

    filesProcessed++;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
}
// Main function
async function main() {
  console.log('🔧 Starting missing imports fix...\n');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);
    if (result && result.changes > 0) {
      fs && fs.writeFileSync(filePath, result && result.content, 'utf8');
      totalFixes += result && result.changes;
      console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
<<<<<<< HEAD
=======

    console && console.error(`❌ Error processing ${filePath}:`, error && error.message)}
}
// Main function
async function main() {
  console ;

    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes;
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)}
}
// Main function
async function main() {
  console.log('🔧 Starting missing imports fix...\n');
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];
  const excludeDirs = ['node_modules',

  const patterns = [
    'pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];

  const excludeDirs = [
    'node_modules',
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    '.next',
    'build',
    'dist',
    'scripts',
    'automation',
    'automation_backup',
    'src.disabled',
    'pages.disabled',
    'components.disabled',
  ];

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: excludeDirs.map(dir => `**/${dir}/**`),
    });

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
    for (const file of files) {
      processFile(file)}
  }

  console.log(`\n📊 Missing Imports Fix Summary:`);
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total import "fixes": ${totalFixes}`);
  console.log("\n✨ Missing imports fix completed!")}
// Run the script
main().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
    'src && src.disabled',
    'pages && pages.disabled',
    'components && components.disabled',
  ];
<<<<<<< HEAD
=======

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      "ignore": excludeDirs && excludeDirs.map(dir => `**/${dir}/**`)});
    for (const file of files) {
      processFile(file)}

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
  }
  console && console.log("\n📊 Missing Imports Fix "Summary": ");
  console && console.log(`   Files processed: ${filesProcessed}`);
  console && console.log(`   Total import "fixes": ${totalFixes}`);
  console && console.log("\n✨ Missing imports fix completed!")}
// Run the script
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    'src.disabled',
    'pages.disabled',
    'components.disabled',
  ];
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      "ignore": excludeDirs.map(dir => `**/${dir}/**`)});
    for (const file of files) {
      processFile(file)}
  }
  console.log("\n📊 Missing Imports Fix "Summary": ");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total import "fixes": ${totalFixes}`);
  console.log("\n✨ Missing imports fix completed!")}
// Run the script
main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

main


origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
