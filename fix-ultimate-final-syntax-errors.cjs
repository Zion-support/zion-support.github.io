const fs = require('fs');
const path = require('path');
console.log('🚀 Starting Ultimate Final Syntax Errors Fix...\n');
const filesToFix = [
  {
    file: 'pages/api/whitepaper/export.ts',
    fixes: [
      {
        search: "    .replace(/>/g, '&gt;');\n}",
        replace: "    .replace(/>/g, '&gt;');\n}",
      },
    ],
  },
  {
    file: 'utils/devAccess.ts',
    fixes: [
      {
        search:
          '  }\n\nexport function getDevIdentity(req: NextApiRequest): DevIdentity {',
        replace:
          '  }\n}\n\nexport function getDevIdentity(req: NextApiRequest): DevIdentity {',
      },
    ],
  },
  {
    file: 'utils/rateLimit.ts',
    fixes: [
      {
        search: '  return true;\n\n',
        replace: '  return true;\n}',
      },
    ],
  },
  {
    file: 'utils/sourceMap.ts',
    fixes: [
      {
        search:
          '  return nodes.map(markExistenceRecursive);\n\nexport interface DeployTemplateResult {',
        replace:
          '  return nodes.map(markExistenceRecursive);\n}\n\nexport interface DeployTemplateResult {',
      },
    ],
  },
  {
    file: 'utils/token/service.ts',
    fixes: [
      {
        search: '  tokenStore.setConfig({ ...current, ...partial });\n\n',
        replace: '  tokenStore.setConfig({ ...current, ...partial });\n}',
      },
    ],
  },
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
console.log('\n📊 ULTIMATE FINAL SYNTAX ERRORS FIX REPORT');
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
  fixedFiles: filesToFix.map(f => f.file),
};
fs.writeFileSync(
  'ultimate-final-syntax-errors-fix-report.json',
  JSON.stringify(report, null, 2)
);
console.log(
  '\n📄 Report saved to ultimate-final-syntax-errors-fix-report.json'
);
