const fs = require('fs');
const path = require('path');
console.log('🚀 Starting Ultimate Comprehensive Final Fix...\n');
const filesToFix = [
  {
    file: 'pages/api/whitepaper/export.ts',
    fixes: [
      {
        search: '    .replace(/>/g, \'&gt;\');\n}',
        replace: '    .replace(/>/g, \'&gt;\');\n}'
      }
    ]
  },
  {
    file: 'utils/devAccess.ts',
    fixes: [
      {
        search: '  return { isAuthenticated: false, roles: [] };\n\nexport function requireRoles(',
        replace: '  return { isAuthenticated: false, roles: [] };\n}\n\nexport function requireRoles('
      }
    ]
  },
  {
    file: 'utils/sourceMap.ts',
    fixes: [
      {
        search: 'export function getSourceMapWithExistence(): SourceNode[] {\n  const nodes = buildZionSourceMap();\n  return nodes.map(markExistenceRecursive);\n}',
        replace: 'export function getSourceMapWithExistence(): SourceNode[] {\n  const nodes = buildZionSourceMap();\n  return nodes.map(markExistenceRecursive);\n}'
      }
    ]
  },
  {
    file: 'utils/token/storage.ts',
    fixes: [
      {
        search: '  config: TokenConfig;\n\nfunction readFromDisk(): TokenStoreData | null {',
        replace: '  config: TokenConfig;\n}\n\nfunction readFromDisk(): TokenStoreData | null {'
      }
    ]
  },
  {
    file: 'components/ErrorBoundary.tsx',
    fixes: [
      {
        search: "import React, { Component, ErrorInfo, ReactNode } from 'react';\n\n}",
        replace: "import React, { Component, ErrorInfo, ReactNode } from 'react';"
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
console.log('\n📊 ULTIMATE COMPREHENSIVE FINAL FIX REPORT');
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
fs.writeFileSync('ultimate-comprehensive-final-fix-report.json', JSON.stringify(report, null, 2));
console.log('\n📄 Report saved to ultimate-comprehensive-final-fix-report.json');