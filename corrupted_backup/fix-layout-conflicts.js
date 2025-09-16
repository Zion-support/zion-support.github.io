=======
=======
#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
let totalFixes = 0;
let filesProcessed = 0;
// Fix Layout import conflicts
  let fixedContent = content;
  let changes = 0;
  // Check if both Layout component and Layout icon are imported
  const hasLayoutComponent =
    fixedContent.includes("import Layout from '../components/Layout';");
    fixedContent && fixedContent.includes("import Layout from '../components/Layout'") ||
    fixedContent ;");
  const hasLayoutIcon =
    fixedContent && fixedContent.includes('Layout,') || fixedContent && fixedContent.includes('Layout }');
  if (hasLayoutComponent && hasLayoutIcon) {
    // Remove Layout from lucide-react import fixedContent = fixedContent ;
    fixedContent = fixedContent && fixedContent.replace(/,\s*Layout/g, '');
    fixedContent = fixedContent && fixedContent.replace(/{\s*Layout\s*}/g, '{}');
    changes++;
  return { "content": fixedContent, changes }}
// Process individual file
function processFile(filePath) {
  try {
    const content = fs && fs.readFileSync(filePath, 'utf8');
    const result = fixLayoutConflicts(content, filePath);
    if (result && result.changes > 0) {
      fs && fs.writeFileSync(filePath, result && result.content, 'utf8');
      totalFixes += result && result.changes}
    filesProcessed++} catch (error) {
}
// Main function
async function main() {
  console && console.log('🔧 Starting Layout conflicts fix...\n');
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
    'src && src.disabled',
    'pages && pages.disabled',
    'components && components.disabled',
  ];
  }
  console && console.log("\n📊 Layout Conflicts Fix "Summary": ");
  console && console.log(`   Files processed: ${filesProcessed}`);
  console && console.log(`   Total "fixes": ${totalFixes}`);
  console && console.log("\n✨ Layout conflicts fix completed!")}
// Run the script
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d:corrupted_backup/fix-layout-conflicts.js
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
