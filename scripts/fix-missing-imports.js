<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; `)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);

=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  }    } main().catch(console.error);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; `)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);

>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
// Common Lucide React icons that are frequently used
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
<<<<<<< HEAD
  commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);
=======
  commonIcons && commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content && content.match(iconRegex);
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  commonIcons && commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content && content.match(iconRegex);
=======
  commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    if (matches && matches.length > 0) {
      // Check if the icon is already imported
      const importRegex = new RegExp(
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,
        'g'
      );
<<<<<<< HEAD
<<<<<<< HEAD
      const existingImport = content.match(importRegex);
      if (!existingImport) {
        missingImports.push(icon)}
=======
      const existingImport = content && content.match(importRegex);
      if (!existingImport) {
        missingImports && missingImports.push(icon)}
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
      const existingImport = content && content.match(importRegex);
      if (!existingImport) {
        missingImports && missingImports.push(icon)}
=======
      const existingImport = content.match(importRegex);
      if (!existingImport) {
        missingImports.push(icon)}
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    }
  });
  return missingImports}
// Fix missing imports in a file
function fixMissingImports(content, filePath) {
  const missingImports = findMissingImports(content, filePath);
<<<<<<< HEAD
<<<<<<< HEAD
  if (missingImports.length === 0) {
=======
  if (missingImports && missingImports.length === 0) {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
  if (missingImports && missingImports.length === 0) {
=======
  if (missingImports.length === 0) {
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    return { content, "changes": 0 }}
  let fixedContent = content;
  let changes = 0;
  // Find existing lucide-react import
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
  const existingImportRegex =;
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent && fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import const existingIcons =
      existingImport[0]
        .match(/{([^}]*)}/)?.[1]

        ?.split(',')
        .map(icon => icon ;

    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport);
    changes++} else {

    // Create new import statement
    const newImport = `import { ${missingImports ;\n`;
    // Find the best place to insert the import const importIndex = fixedContent ;

    if (importIndex !== -1) {
      const nextLineIndex = fixedContent && fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent && fixedContent.slice(0, nextLineIndex) +
        '\n' +
        newImport +
        fixedContent && fixedContent.slice(nextLineIndex)} else {
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
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
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
      fixedContent = newImport + fixedContent}
    changes++}
  return { "content": fixedContent, changes }}
// Process individual file
function processFile(filePath) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);
    if (result && result.changes > 0) {
      fs && fs.writeFileSync(filePath, result && result.content, 'utf8');
      totalFixes += result && result.changes;
      console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)}
    filesProcessed++} catch (error) {

    console && console.error(`❌ Error processing ${filePath}:`, error && error.message)}
}
// Main function
async function main() {
  console ;

<<<<<<< HEAD
=======
    console.error(`❌ Error processing ${filePath}:`, error.message)}

// Main function
async function main() {;
  console.log('🔧 Starting missing imports fix...\n');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
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
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];
  const excludeDirs = ['node_modules',
    '.next',
    'build',
    'dist',
    'scripts',
    'automation',
    'automation_backup',
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
    'src && src.disabled',
    'pages && pages.disabled',
    'components && components.disabled',
  ];

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      "ignore": excludeDirs && excludeDirs.map(dir => `**/${dir}/**`)});
    for (const file of files) {
      processFile(file)}

  }
  console && console.log("\n📊 Missing Imports Fix "Summary": ");
  console && console.log(`   Files processed: ${filesProcessed}`);
  console && console.log(`   Total import "fixes": ${totalFixes}`);
  console && console.log("\n✨ Missing imports fix completed!")}
// Run the script

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);

main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/fix-missing-imports.js
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
