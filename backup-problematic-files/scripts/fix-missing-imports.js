#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Common Lucide React icons that are frequently used
#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import {glob} from 'glob';
// Common Lucide React icons that are frequently used;
const commonIcons = ['ArrowRight',
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
  // Check for each common icon
<<<<<<< HEAD
  commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);
=======
  commonIcons && commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content && content.match(iconRegex);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    if (matches && matches.length > 0) {
      // Check if the icon is already imported
      const importRegex = new RegExp(
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,
        'g'
      );
<<<<<<< HEAD
      const existingImport = content.match(importRegex);
      if (!existingImport) {
        missingImports.push(icon)}
=======
      const existingImport = content && content.match(importRegex);
      if (!existingImport) {
        missingImports && missingImports.push(icon)}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    }
  });
  return missingImports}
// Fix missing imports in a file
function fixMissingImports(content, filePath) {
  const missingImports = findMissingImports(content, filePath);
<<<<<<< HEAD
  if (missingImports.length === 0) {
=======
  if (missingImports && missingImports.length === 0) {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    return { content, "changes": 0 }}
  let fixedContent = content;
  let changes = 0;
  // Find existing lucide-react import
  const existingImportRegex =
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
<<<<<<< HEAD
  const existingImport = fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import
    const existingIcons =
=======
  const existingImport = fixedContent && fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import const existingIcons =
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]
        ?.split(',')
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
<<<<<<< HEAD
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
=======
    const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport);
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    changes++} else {
    // Create new import statement
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
    // Find the best place to insert the import
    const importIndex = fixedContent.indexOf('import');
    if (importIndex !== -1) {
<<<<<<< HEAD
      const nextLineIndex = fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
        fixedContent.slice(nextLineIndex)} else {
=======
      const nextLineIndex = fixedContent && fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent && fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
        fixedContent && fixedContent.slice(nextLineIndex)} else {
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      fixedContent = newImport + fixedContent}
    changes++}
  return { "content": fixedContent, changes }}
// Process individual file
function processFile(filePath) {
  try {
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes;
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
=======
    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);
    if (result && result.changes > 0) {
      fs && fs.writeFileSync(filePath, result && result.content, 'utf8');
      totalFixes += result && result.changes;
      console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)}
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    filesProcessed++} catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message)}
}
// Main function
async function main() {
  console.log('🔧 Starting missing imports fix...\n');
  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];
  'XCircle',']
];
let totalFixes = 0;
let filesProcessed = 0;
// Find missing imports in a file;
function findMissingImports(content, filePath) {
  const missingImports = [];
  // Check for each common icon;
  commonIcons && commonIcons.forEach(icon => {)
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content && content.match(iconRegex);
    if (matches && matches.length > 0) {
      // Check if the icon is already imported;
      const importRegex = new RegExp(`;
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,""
        'g)
      );
      const existingImport = content && content.match(importRegex);
      if (!existingImport) {
        missingImports && missingImports.push(icon)}
    }
  });
  return missingImports}
// Fix missing imports in a file;
function fixMissingImports(content, filePath) {
  const missingImports = findMissingImports(content, filePath);
  if (missingImports && missingImports.length === 0) {
    return { content, "changes": 0 }}"
  let fixedContent = content;
  let changes = 0;
  // Find existing lucide-react import;
  const existingImportRegex ="
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;"
  const existingImport = fixedContent && fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]"
        ?.split(',')

    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
    // Create new import statement

    if (importIndex !== -1) {
      const nextLineIndex = fixedContent && fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent && fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
        fixedContent && fixedContent.slice(nextLineIndex)} else {
  // TODO: Implement
      fixedContent = newImport + fixedContent}
    changes++}
  return { "content": fixedContent, changes }}"
// Process individual file;
function processFile(filePath) {
  try {
  // TODO: Implement
}"
    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);

  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',']
  const excludeDirs = ['node_modules',
    '.next',
    'build',
    'dist',
    'scripts',
    'automation',
    'automation_backup',
<<<<<<< HEAD
    'src.disabled',
    'pages.disabled',
    'components.disabled',
=======
    'src && src.disabled',
    'pages && pages.disabled',
    'components && components.disabled',
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  ];
  for (const pattern of patterns) {
    const files = await glob(pattern, {

    for (const file of files) {
      processFile(file)}
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  console.log("\n📊 Missing Imports Fix "Summary": ");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total import "fixes": ${totalFixes}`);
  console.log("\n✨ Missing imports fix completed!")}
<<<<<<< HEAD
// Run the script
=======
// Run the script
=======
  console && console.log("\n📊 Missing Imports Fix "Summary": ");
  console && console.log(`   Files processed: ${filesProcessed}`);
  console && console.log(`   Total import "fixes": ${totalFixes}`);
  console && console.log("\n✨ Missing imports fix completed!")}
// Run the script
main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
