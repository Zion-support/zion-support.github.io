#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting final comprehensive syntax error fixing...');

// Fix specific issues
const fixes = [
  {
    file: 'pages/docs/api-quick-start.tsx',
    search: "  }`\n}`}",
    replace: "  }\n}`}"
  },
  {
    file: 'pages/docs/api-quick-start.tsx',
    search: "display: 'alignItems', 'center' gap: 12,",
    replace: "display: 'flex', alignItems: 'center', gap: 12,"
  },
  {
    file: 'pages/docs/api-quick-start.tsx',
    search: "background: 'borderRadius', 8",
    replace: "background: '#1e293b', borderRadius: 8"
  },
  {
    file: 'pages/docs/sdk.tsx',
    search: "background: 'borderRadius', 8,",
    replace: "background: '#1e293b', borderRadius: 8,"
  },
  {
    file: 'pages/enterprise.tsx',
    search: "industries.map((industry index) =>",
    replace: "industries.map((industry, index) =>"
  },
  {
    file: 'pages/marketplace.tsx',
    search: "            }",
    replace: "            }>"
  },
  {
    file: 'pages/schedule-demo.tsx',
    search: "    name: '';",
    replace: "    name: '',"
  },
  {
    file: 'pages/schedule-demo.tsx',
    search: "    email: '';",
    replace: "    email: '',"
  },
  {
    file: 'pages/schedule-demo.tsx',
    search: "    company: '';",
    replace: "    company: '',"
  },
  {
    file: 'pages/schedule-demo.tsx',
    search: "    phone: '';",
    replace: "    phone: '',"
  }
];

let fixedCount = 0;
let errorCount = 0;

// Apply fixes
fixes.forEach(({ file, search, replace }) => {
  try {
    const filePath = path.join(process.cwd(), file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${file}`);
      return}
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes(search)) {
      content = content.replace(search, replace);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed issue in ${file}`);
      fixedCount++}
    
  } catch (error) {
    console.error(`❌ Error fixing ${file}:`, error.message);
    errorCount++}
});

console.log(`\n🎉 Final syntax error fixing complete!`);
console.log(`✅ Files fixed: ${fixedCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log(`\n💡 Run 'npm run build' to test the fixes.`);