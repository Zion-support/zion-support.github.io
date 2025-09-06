<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; `)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);

=======
<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; `)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
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
=======


#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);

#!/usr/bin/env node'
import fs from 'fs';'
import path from 'path';'
import { glob } from 'glob';
// Common Lucide React icons that are frequently used'
const commonIcons = ['ArrowRight','
  'CheckCircle','
  'Star','
  'Users','
  'Zap','
  'Shield','
  'Globe','
  'TrendingUp','
  'Award','
  'Clock','
  'Brain','
  'Cloud','
  'Database','
  'Network','
  'Target','
  'Phone','
  'Mail','
  'MessageSquare','
  'FileText','
  'Search','
  'Menu','
  'X','
  'ChevronDown','
  'ChevronUp','
  'ChevronLeft','
  'ChevronRight','
  'Plus','
  'Minus','
  'Edit','
  'Trash','
  'Save','
  'Download','
  'Upload','
  'Settings','
  'User','
  'Lock','
  'Unlock','
  'Eye','
  'EyeOff','
  'Heart','
  'Share','
  'Copy','
  'ExternalLink','
  'Home','
  'Info','
  'AlertCircle','
  'Check','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  'XCircle',
];
let totalFixes = 0;
let filesProcessed = 0;
// Find missing imports in a file;
function findMissingImports(content, filePath) {}
  const missingImports = [];
<<<<<<< HEAD

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  // Check for each common icon
  commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);

  commonIcons && commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content && content.match(iconRegex);
  commonIcons.forEach(icon => {
    const iconRegex = new RegExp(`\\b${icon}\\b`, 'g');
    const matches = content.match(iconRegex);

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

    if (matches && matches.length > 0) {
<<<<<<< HEAD
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; `)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import {glob} from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; `)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);    if (matches && matches.length > 0) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      // Check if the icon is already imported
      const importRegex = new RegExp(
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,
        'g'
      );

      const existingImport = content.match(importRegex);
      const existingImport = content.match(importRegex);

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
      if (!existingImport) {
<<<<<<< HEAD
<<<<<<< HEAD
        missingImports.push(icon)}      const existingImport = content && content.match(importRegex);
      if (!existingImport) {
        missingImports && missingImports.push(icon)}    return { content, "changes": 0 }}
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        missingImports.push(icon)}
      const existingImport = content && content.match(importRegex);
      if (!existingImport) {
        missingImports && missingImports.push(icon)}
      const existingImport = content.match(importRegex);
      if (!existingImport) {
        missingImports.push(icon)}
=======
  // Check for each common icon;
    if (matches && matches.length > 0) {}
      // Check if the icon is already imported;
      const importRegex = new RegExp('"`
        `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'
        'g'
      );

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  });
<<<<<<< HEAD
<<<<<<< HEAD
  return missingImports}
// Fix missing imports in a file;
function fixMissingImports(content, filePath) {}
  const missingImports = findMissingImports(content, filePath);
<<<<<<< HEAD
  if (missingImports.length === 0) {
  if (missingImports && missingImports.length === 0) {
  if (missingImports.length === 0) {
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return { content, "changes": 0 }}
<<<<<<< HEAD
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  let fixedContent = content;
  let changes = 0;
<<<<<<< HEAD
  // Find existing lucide-react import
  const existingImportRegex =
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent.match(existingImportRegex);
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const existingImportRegex =;
=======
        fixedContent.slice(nextLineIndex)} else {  const existingImportRegex =;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent && fixedContent.match(existingImportRegex);
  if (existingImport) {
    // Add missing icons to existing import const existingIcons =
      existingImport[0]
<<<<<<< HEAD
<<<<<<< HEAD
        .match(/{([^}]*)}/)?.[1]    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport);
<<<<<<< HEAD
    changes++} else {
<<<<<<< HEAD
<<<<<<< HEAD

    // Create new import statement
    const newImport = `import { ${missingImports ;\n`;
    // Find the best place to insert the import const importIndex = fixedContent ;

=======
    // Create new import statement;
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
    // Find the best place to insert the import
    const importIndex = fixedContent.indexOf('import');
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        .match(/{([^}]*)}/)?.[1]
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
        fixedContent.slice(nextLineIndex);
    } else {
      fixedContent = newImport + fixedContent;
    }
    changes++;
  }

  return { content: fixedContent, changes };
}
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

        ?.split(',')
        .map(icon => icon ;

        ?.split(',');
        .map(icon => icon.trim()) || [];




    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    if (importIndex !== -1) {
=======
  // Find existing lucide-react import;
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();`
    const newImport = `import { ${allIcons ;`;
    fixedContent = fixedContent && fixedContent.replace(existingImportRegex, newImport);
    changes++} else {}
    if (importIndex !== -1) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const nextLineIndex = fixedContent && fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent && fixedContent.slice(0, nextLineIndex) +'
        '\n' +
        newImport +
<<<<<<< HEAD
        fixedContent && fixedContent.slice(nextLineIndex)} else {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
  const existingImportRegex =
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
        fixedContent && fixedContent.slice(nextLineIndex)} else {}
  const existingImportRegex ='"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g;
  const existingImport = fixedContent.match(existingImportRegex);
  if (existingImport) {}
    // Add missing icons to existing import;
    const existingIcons =
      existingImport[0]
<<<<<<< HEAD
        .match(/{([^}]*)}/)?.[1]
<<<<<<< HEAD

        ?.split(',')
        .map(icon => icon ;

=======
        ?.split(',')
        .map(icon => icon.trim()) || [];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++} else {
<<<<<<< HEAD

    // Create new import statement
    const newImport = `import { ${missingImports ;\n`;
    // Find the best place to insert the import const importIndex = fixedContent ;

=======
    // Create new import statement
=======
        .match(/{([^}]*)}/)?.[1]'
        ?.split(',')
        .map(icon => icon.trim()) || [];
    const allIcons = [...new Set([...existingIcons, ...missingImports])].sort();'`
    const newImport = `import { ${allIcons.join(', ')} } from 'lucide-react';`;
    fixedContent = fixedContent.replace(existingImportRegex, newImport);
    changes++} else {}
    // Create new import statement';`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
    // Find the best place to insert the import'
    const importIndex = fixedContent.indexOf('import');
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (importIndex !== -1) {
=======
    if (importIndex !== -1) {'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      const nextLineIndex = fixedContent.indexOf('\n', importIndex);
      fixedContent =
        fixedContent.slice(0, nextLineIndex) +'
        '\n' +
        newImport +
<<<<<<< HEAD
        fixedContent.slice(nextLineIndex)} else {
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
        fixedContent.slice(nextLineIndex)} else {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      fixedContent = newImport + fixedContent}
    changes++}"
  return { "content": fixedContent, changes }}
<<<<<<< HEAD
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


    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);
    if (result && result.changes > 0) {
      fs && fs.writeFileSync(filePath, result && result.content, 'utf8');
      totalFixes += result && result.changes;
      console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)}
    filesProcessed++} catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    console && console.error(`❌ Error processing ${filePath}:`, error && error.message)}
}
// Main function
async function main() {
  console ;

<<<<<<< HEAD
=======
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
=======
// Process individual file;
function processFile(filePath) {}
  try {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixMissingImports(content, filePath);
    if (result.changes > 0) {'
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes;`
      console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)}
    filesProcessed++} catch (error) {}`
    console.error(`❌ Error processing ${filePath}:`, error.message)}
<<<<<<< HEAD
}
// Main function
async function main() {
  console.log('🔧 Starting missing imports fix...\n');
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  const patterns = ['pages/**/*.{tsx,jsx}',
<<<<<<< HEAD
=======
    changes++} else {  const patterns = ['pages/**/*.{tsx,jsx}',
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

    'src.disabled',
    'pages.disabled',
=======
};
// Main function;
async function main() { return null; }
  const patterns = ['pages/**/*.{tsx,jsx}','
    'src/**/*.{tsx,jsx}','
    'components/**/*.{tsx,jsx}',
  ];'
  const excludeDirs = ['node_modules','
    '.next','
    'build','
    'dist','
    'scripts','
    'automation','
    'automation_backup',



  }"
  console && console.log("\n📊 Missing Imports Fix "Summary": ");`
  console && console.log(`   Files processed: ${filesProcessed}`);"`
  console && console.log(`   Total import "fixes": ${totalFixes}`);"
  console && console.log("\n✨ Missing imports fix completed!")}
// Run the script;
'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);



main().catch(console && console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);



'
    'src.disabled','
    'pages.disabled','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    'components.disabled',
  ];
  for (const pattern of patterns) {}
    const files = await glob(pattern, {"`
      "ignore": excludeDirs.map(dir => `**/${dir}/**`)});
    for (const file of files) {}
      processFile(file)}
  }"
  console.log("\n📊 Missing Imports Fix "Summary": ");`
  console.log(`   Files processed: ${filesProcessed}`);"`
  console.log(`   Total import "fixes": ${totalFixes}`);"
  console.log("\n✨ Missing imports fix completed!")}
// Run the script;
main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);'"`
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    'src && src.disabled',
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    'pages && pages.disabled',
    'components && components.disabled',
<<<<<<< HEAD
  ];
<<<<<<< HEAD
<<<<<<< HEAD
  /**`)});

=======
<<<<<<< HEAD
<<<<<<< HEAD

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      "ignore": excludeDirs && excludeDirs.map(dir => `**/${dir}/**`)});
    for (const file of files) {
      processFile(file)}

=======
  /**`)});
    
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  }
=======
  ];  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  console && console.log("\n📊 Missing Imports Fix "Summary": ");
  console && console.log(`   Files processed: ${filesProcessed}`);
  console && console.log(`   Total import "fixes": ${totalFixes}`);
  console && console.log("\n✨ Missing imports fix completed!")}
<<<<<<< HEAD
<<<<<<< HEAD
// Run the script
<<<<<<< HEAD
<<<<<<< HEAD

=======
main().catch(console.error);

#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
// Run the script
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons && commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content && content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content && content.match(importRegex); if (!existingImport) { missingImports && missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports && missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent && fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon && icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons ;`; fixedContent = fixedContent && fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports ;\n`; const importIndex = fixedContent && fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent && fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent && fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent && fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes; console && console.log(`✅ Fixed ${filePath} (${result && result.changes} import fixes)`)} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console ; const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Missing Imports Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total import fixes: ${totalFixes}`); console && console.log(`\n✨ Missing imports fix completed!`)} main().catch(console && console.error);
<<<<<<< HEAD
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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
  console.log("\n📊 Missing Imports Fix "Summary": ");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total import "fixes": ${totalFixes}`);
  console.log("\n✨ Missing imports fix completed!")}
// Run the script
main().catch(console.error);
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: '0' }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: 'fixedContent',changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import path from 'path'; import { glob } from 'glob'; const commonIcons = [ 'ArrowRight','CheckCircle','Star','Users','Zap','Shield','Globe','TrendingUp','Award','Clock','Brain','Cloud','Database','Network','Target','Phone','Mail','MessageSquare','FileText','Search','Menu','X','ChevronDown','ChevronUp','ChevronLeft','ChevronRight','Plus','Minus','Edit','Trash','Save','Download','Upload','Settings','User','Lock','Unlock','Eye','EyeOff','Heart','Share','Copy','ExternalLink','Home','Info','AlertCircle','Check','XCircle',]; let totalFixes = 0; let filesProcessed = 0; function findMissingImports(content,filePath) { const missingImports = []; commonIcons.forEach(icon => { const iconRegex = new RegExp(`\\b${icon}\\b`,'g'); const matches = content.match(iconRegex); if (matches && matches.length > 0) { const importRegex = new RegExp( `import.*{.*${icon}.*}.*from.*['"]lucide-react['"]`,'g' ); const existingImport = content.match(importRegex); if (!existingImport) { missingImports.push(icon)} } }); return missingImports} function fixMissingImports(content,filePath) { const missingImports = findMissingImports(content,filePath); if (missingImports.length === 0) { return { content,changes: 0 }} let fixedContent = content; let changes = 0; const existingImportRegex = /import\s*{\s*([^}]*)\s*}\s*from\s*['"]lucide-react['"];?/g; const existingImport = fixedContent.match(existingImportRegex); if (existingImport) { const existingIcons = existingImport[0] .match(/{([^}]*)}/)?.[1] ?.split(',') .map(icon => icon.trim()) || []; const allIcons = [...new Set([...existingIcons,...missingImports])].sort(); const newImport = `import { ${allIcons.join(',')} } from 'lucide-react';`; fixedContent = fixedContent.replace(existingImportRegex,newImport); changes++} else { const newImport = `import { ${missingImports.join(',')} } from 'lucide-react';\n`; const importIndex = fixedContent.indexOf('import'); if (importIndex !== -1) { const nextLineIndex = fixedContent.indexOf('\n',importIndex); fixedContent = fixedContent.slice(0,nextLineIndex) + '\n' + newImport + fixedContent.slice(nextLineIndex)} else { fixedContent = newImport + fixedContent} changes++} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixMissingImports(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes; console.log(`✅ Fixed ${filePath} (${result.changes} import fixes)`)} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting missing imports fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build','dist','scripts','automation','automation_backup','src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Missing Imports Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total import fixes: ${totalFixes}`); console.log(`\n✨ Missing imports fix completed!`)} main().catch(console.error);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
// Run the script
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

main


origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
