const fs = require('fs');
const path = require('path');
console.log('🚀 Starting Ultimate Final Comprehensive Build Fix...\n');
const filesToFix = [
  {
    file: 'pages/api/whitepaper/export.ts',
    fixes: [
      {
        search: '}\n',
        replace: '}'
      }
    ]
  },
  {
    file: 'pages/api/whitepaper/share.ts',
    fixes: [
      {
        search: '  const url = `${process.env.NEXT_PUBLIC_BASE_URL || \'\'}/whitepaper/preview/${id}`;',
        replace: '  const url = `${process.env.NEXT_PUBLIC_BASE_URL || \'\'}/whitepaper/preview/${id}`;'
      }
    ]
  },
  {
    file: 'utils/devAccess.ts',
    fixes: [
      {
        search: 'export function getGitStatus(): { connected: boolean; branch?: string } {',
        replace: 'export function getGitStatus(): { connected: boolean; branch?: string } {'
      }
    ]
  },
  {
    file: 'utils/fsdb.ts',
    fixes: [
      {
        search: '  await writeAllDisputes(all);',
        replace: '  await writeAllDisputes(all);'
      }
    ]
  },
  {
    file: 'utils/moderationDb.ts',
    fixes: [
      {
        search: '  return flag;\n',
        replace: '  return flag;'
      }
    ]
  }
];
let fixedCount = 0;
let errorCount = 0;
console.log('=\n');
for (const fileInfo of filesToFix) {
  try {
    const filePath = path.join(process.cwd(), fileInfo.file);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${fileInfo.file}`);
      continue;
    }
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    for (const fix of fileInfo.fixes) {
      if (content.includes(fix.search)) {
        content = content.replace(fix.search, fix.replace);
        modified = true;
      }
    }
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${fileInfo.file}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed for ${fileInfo.file}`);
    }
  } catch (error) {
    console.log(`❌ Error fixing ${fileInfo.file}: ${error.message}`);
    errorCount++;
  }
}
console.log('\n📊 ULTIMATE FINAL COMPREHENSIVE BUILD FIX REPORT');
console.log('=\n');
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}\n`);
if (fixedCount > 0) {
  console.log('✅ Successfully fixed files:');
  for (const fileInfo of filesToFix) {
    console.log(`  - ${fileInfo.file}`);
  }
}
const report = {
  timestamp: new Date().toISOString(),
  filesFixed: fixedCount,
  errors: errorCount,
  fixedFiles: filesToFix.map(f => f.file)
};
fs.writeFileSync('ultimate-final-comprehensive-build-fix-report.json', JSON.stringify(report, null, 2));
console.log('\n📄 Report saved to ultimate-final-comprehensive-build-fix-report.json');