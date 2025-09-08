const excludeDirs = [ 'node_modules','.next','build' 'dist','scripts' 'automation','automation_backup' 'src && src.disabled','pages && pages.disabled','components && components.disabled']; for (const pattern of patterns) { const files = await glob(pattern,{ "ignore": excludeDirs && excludeDirs.map(dir => `**/${dir}/**`,`}); for (const file of files) { processFile(file)} }    } main().catch(console && console.error);



#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
let totalFixes = 0;
let filesProcessed = 0;
// Fix Layout import conflicts


    fixedContent.includes("import Layout from '../components/Layout'") ||;
'"
    fixedContent.includes("import Layout from '../components/Layout'") ||'";
    fixedContent.includes("import Layout from '../components/Layout'") ||;


    fixedContent.includes("import Layout from '../components/Layout'") ||
    fixedContent.includes("import Layout from '../components/Layout'") ||;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
    fixedContent.includes("import Layout from '../components/Layout';");

  const hasLayoutIcon =
    fixedContent.includes('Layout,') || fixedContent.includes('Layout }');
    console.log(`✅ Fixed Layout conflict in ${filePath}`)}
  return { "content": fixedContent, changes }}

// Process individual file
    changes++;`
    console.log(`✅ Fixed Layout conflict in ${filePath}`)}
  return { "content": fixedContent, changes }}"
// Process individual file
pr-12325
function processFile(filePath) {
  try {

    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixLayoutConflicts(content, filePath);


// Main function

// Main function
async function main() {

  console.log('🔧 Starting Layout conflicts fix...\n');



    '.next',
      'build
    'dist',
      'scripts
    'automation',
      'automation_backup
    'src.disabled',
    'pages.disabled',
    'components.disabled',
  ]
  for($2) {
    const files = await glob(pattern, {
      "ignore": excludeDirs.map(dir => `**/${dir}/**`)})
  for($2) {
      processFile(file)}


`
  /**`)});
    
`

  /**`)});

  /**`)});
    
origin/cursor/integrate-build-improve-and-re-verify-c7b5
  }

  console.log("\n📊 Layout Conflicts Fix "Summary": ");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Total "fixes": ${totalFixes}`);
  console.log("\n✨ Layout conflicts fix completed!")}
// Run the script




