
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent && fixedContent.includes("import Layout from '../components/Layout'") || fixedContent ;"); const hasLayoutIcon = fixedContent && fixedContent.includes('Layout,') || fixedContent && fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent && fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent && fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent && fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; } return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);


<<<<<<< HEAD
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; } return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} }    } main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; } return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; /**`),});  }    } main().catch(console.error);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
let totalFixes = 0;
let filesProcessed = 0;
// Fix Layout import conflicts
function fixLayoutConflicts(content, filePath) {;

function fixLayoutConflicts(content, filePath) {
function fixLayoutConflicts(content, filePath) {;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  let fixedContent = content;
  let changes = 0;
  // Check if both Layout component and Layout icon are imported
  const hasLayoutComponent =
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


    fixedContent.includes("import Layout from '../components/Layout'") ||;

    fixedContent.includes("import Layout from '../components/Layout'") ||
    fixedContent.includes("import Layout from '../components/Layout'") ||;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    fixedContent.includes("import Layout from '../components/Layout';");
  const hasLayoutIcon =
    fixedContent.includes('Layout,') || fixedContent.includes('Layout }');
  if (hasLayoutComponent && hasLayoutIcon) {
    // Remove Layout from lucide-react import
    fixedContent = fixedContent.replace(/Layout,\s*/g, '');
    fixedContent = fixedContent.replace(/,\s*Layout/g, '');
    fixedContent = fixedContent.replace(/{\s*Layout\s*}/g, '{}');
    changes++;
    console.log(`✅ Fixed Layout conflict in ${filePath}`)}
  return { "content": fixedContent, changes }}
// Process individual file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixLayoutConflicts(content, filePath);
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      totalFixes += result.changes}
    filesProcessed++} catch (error) {
<<<<<<< HEAD
    console.error(`❌ Error processing ${filePath}:`, error.message)}
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    console && console.error(`❌ Error processing ${filePath}:`, error && error.message)}

}




origin/cursor/integrate-build-improve-and-re-verify-c7b5
// Main function
async function main() {
  console.log('🔧 Starting Layout conflicts fix...\n');
  const patterns = ['pages/**/*.{tsx,jsx}',
    'src/**/*.{tsx,jsx}',
    'components/**/*.{tsx,jsx}',
  ];
  const excludeDirs = ['node_modules',
    '.next',
      'build'
    'dist',
      'scripts'
    'automation',
      'automation_backup'
    'src.disabled',
    'pages.disabled',
    'components.disabled',
  ];
<<<<<<< HEAD
  for (const pattern of patterns) {
    const files = await glob(pattern, {
      "ignore": excludeDirs.map(dir => `**/${dir}/**`)});
    for (const file of files) {
      processFile(file)}
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  /**`)});
    

  /**`)});
    
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  }
  console.log("\n📊 Layout Conflicts Fix "Summary": ");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total "fixes": ${totalFixes}`);
  console.log("\n✨ Layout conflicts fix completed!")}
// Run the script
<<<<<<< HEAD
main().catch(console.error);
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Layout Conflicts Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total fixes: ${totalFixes}`); console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Layout Conflicts Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total fixes: ${totalFixes}`); console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console.error);
main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent && fixedContent.includes("import Layout from '../components/Layout'") || fixedContent ;"); const hasLayoutIcon = fixedContent && fixedContent.includes('Layout,') || fixedContent && fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent && fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent && fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent && fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console && console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console && console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Layout Conflicts Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total fixes: ${totalFixes}`); console && console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console && console.error);
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent && fixedContent.includes("import Layout from '../components/Layout'") || fixedContent ;"); const hasLayoutIcon = fixedContent && fixedContent.includes('Layout,') || fixedContent && fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent && fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent && fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent && fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console && console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs && fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result && result.changes > 0) { fs && fs.writeFileSync(filePath,result && result.content,'utf8'); totalFixes += result && result.changes} filesProcessed++} catch (error) { console && console.error(`❌ Error processing ${filePath}:`,error && error.message)} } async function main() { console && console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src && src.disabled','pages && pages.disabled','components && components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs && excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console && console.log(`\n📊 Layout Conflicts Fix Summary:`); console && console.log(` Files processed: ${filesProcessed}`); console && console.log(` Total fixes: ${totalFixes}`); console && console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console && console.error);
<<<<<<< HEAD
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Layout Conflicts Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total fixes: ${totalFixes}`); console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir}/**`),}); for (const file of files) { processFile(file)} } console.log(`\n📊 Layout Conflicts Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total fixes: ${totalFixes}`); console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console.error);
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Layout Conflicts Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total fixes: ${totalFixes}`); console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console.error);
#!/usr/bin/env node import fs from 'fs'; import { glob } from 'glob'; let totalFixes = 0; let filesProcessed = 0; function fixLayoutConflicts(content,filePath) { let fixedContent = content; let changes = 0; const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout';"); const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'); if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''); fixedContent = fixedContent.replace(/,\s*Layout/g,''); fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'); changes++; console.log(`✅ Fixed Layout conflict in ${filePath}`)} return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'); const result = fixLayoutConflicts(content,filePath); if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'); totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() { console.log('🔧 Starting Layout conflicts fix...\n'); const patterns = [ 'pages*.{tsx,jsx}','src*.{tsx,jsx}','components*.{tsx,jsx}',]; const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src.disabled','pages.disabled','components.disabled',]; /**`),});  } console.log(`\n📊 Layout Conflicts Fix Summary:`); console.log(` Files processed: ${filesProcessed}`); console.log(` Total fixes: ${totalFixes}`); console.log(`\n✨ Layout conflicts fix completed!`)} main().catch(console.error);
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/scripts/fix-layout-conflicts.js
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
