
#!/usr/bin/env node import fs from 'fs', import { glob } from 'glob', let totalFixes = 0, let filesProcessed = 0, function fixLayoutConflicts(content,filePath) { let fixedContent = content, let changes = 0, const hasLayoutComponent = fixedContent.includes("import Layout from '../components/Layout'") || fixedContent.includes("import Layout from '../components/Layout',"), const hasLayoutIcon = fixedContent.includes('Layout,') || fixedContent.includes('Layout }'), if (hasLayoutComponent && hasLayoutIcon) { fixedContent = fixedContent.replace(/Layout,\s*/g,''), fixedContent = fixedContent.replace(/,\s*Layout/g,''), fixedContent = fixedContent.replace(/{\s*Layout\s*}/g,'{}'), changes++, } return { content: fixedContent,changes }} function processFile(filePath) { try { const content = fs.readFileSync(filePath,'utf8'), const result = fixLayoutConflicts(content,filePath), if (result.changes > 0) { fs.writeFileSync(filePath,result.content,'utf8'), totalFixes += result.changes} filesProcessed++} catch (error) { console.error(`❌ Error processing ${filePath}:`,error.message)} } async function main() {  const patterns = [ 'pages*.{tsx,jsx}src*.{tsx,jsx}','components*.{tsx,jsx}'], const excludeDirs = [ 'node_modules.next','build' 'distscripts' 'automationautomation_backup' 'src.disabledpages.disabled','components.disabled'], for (const pattern of patterns) { const files = await glob(pattern,{ ignore: excludeDirs.map(dir => `**/${dir,}/**`)}), for (const file of files) { processFile(file)} }    } main().catch(console.error);
#!/usr/bin/env node,
import fs from 'fs';
import {glob} from 'glob';
let totalFixes = 0;
let filesProcessed = 0;
// Fix Layout import conflicts,
  let fixedContent = content;
  let changes = 0;
  // Check if both Layout component and Layout icon are imported,
  const hasLayoutComponent =,
  return { "content": fixedContent, changes }}
// Process individual file,
function processFile(filePath) {,
  try {,
    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = fixLayoutConflicts(content, filePath);
    if (result && result.changes > 0) {,
      fs && fs.writeFileSync(filePath, result && result.content, 'utf8');
      totalFixes += result && result.changes}
    filesProcessed++} catch (error) {,
  const patterns = ['pages/**/*.{tsx,jsx}src/**/*.{tsx,jsx}';
    'components/**/*.{tsx,jsx}',
  ];
  const excludeDirs = ['node_modules.next';
      'build',
    'distscripts',
    'automationautomation_backup',
    'src && src.disabledpages && pages.disabled';
    'components && components.disabled',
  ];
  }
  console && console.log("\n📊 Layout Conflicts Fix "Summary": ");
  console && console.log(`   Files processed: ${filesProcessed,}`);
  console && console.log(`   Total "fixes": ${totalFixes}`);
  console && console.log("\n✨ Layout conflicts fix completed!")}
// Run the script,