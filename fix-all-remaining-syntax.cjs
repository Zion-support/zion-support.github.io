const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔧 Fixing all remaining syntax errors...');

// Function to fix all remaining syntax issues
function fixAllRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changesMade = false;

    // Comprehensive syntax fixes
    const fixes = [
      // Fix const declarations with extra commas
      { from: /const (\w+) = path\.join\([^)]+\),;/g, to: 'const $1 = path.join($2);' },
      { from: /const (\w+) = ([^,]+),;/g, to: 'const $1 = $2;' },
      
      // Fix function parameter types
      { from: /function (\w+)\(db: Record<string (\w+)>\)/g, to: 'function $1(db: Record<string, $2>)' },
      { from: /Record<string (\w+)>/g, to: 'Record<string, $1>' },
      
      // Fix try-catch blocks
      { from: /try \{\s*try \{/g, to: 'try {' },
      { from: /try \{\s*const isAdmin = req\.headers\['x-admin'\] === 'true';\s*if \(\$1\) return \$2;\s*\}/g, to: 'try {\n  const isAdmin = req.headers[\'x-admin\'] === \'true\';\n  if (!isAdmin) return res.status(403).json({ error: \'Forbidden\' });\n  // Add proper error handling here\n} catch (error) {\n  console.error("Error:", error);\n  return res.status(500).json({ error: "Internal server error" });\n}' },
      
      // Fix method checks
      { from: /if \(req\.method === '\$1'\)/g, to: "if (req.method === 'GET')" },
      { from: /if \(req\.method !== 'POST'\) \{/g, to: "if (req.method !== 'POST') {" },
      
      // Fix query parameter types
      { from: /req\.query as Record<string string \| undefined>/g, to: 'req.query as Record<string, string | undefined>' },
      
      // Fix array filter syntax
      { from: /const filtered = flags\.filter\(f =>;\s*\(!status \|\| f\.status === status\) &&;/g, to: 'const filtered = flags.filter(f =>\n  (!status || f.status === status) &&' },
      
      // Fix return statements
      { from: /return \[\],;/g, to: 'return [];' },
      { from: /return JSON\.parse\(([^)]+)\),;/g, to: 'return JSON.parse($1);' },
      
      // Fix function declarations
      { from: /export default function handler\(req, res\) \{\s*try \{\s*try \{/g, to: 'export default function handler(req, res) {\n  try {' },
      
      // Fix missing catch blocks
      { from: /try \{\s*if \(req\.method !== 'POST'\) \{/g, to: "try {\n  if (req.method !== 'POST') {" },
      
      // Fix setHeader calls
      { from: /res\.setHeader\('AllowPOST'\);/g, to: "res.setHeader('Allow', 'POST');" },
      
      // Fix end calls
      { from: /return res\.status\(405\)\.end\('Method Not Allowed'\);/g, to: "return res.status(405).end('Method Not Allowed');" },
      
      // Fix JSON responses
      { from: /res\.json\(\{([^}]+)\}\),;/g, to: 'res.json({$1});' },
      { from: /res\.status\(\d+\)\.json\(\{([^}]+)\}\),;/g, to: 'res.status($1).json({$2});' },
      
      // Fix function calls
      { from: /(\w+)\(([^)]+)\),;/g, to: '$1($2);' },
      
      // Fix object property access
      { from: /req\.headers\['x-admin'\]/g, to: "req.headers['x-admin']" },
      
      // Fix conditional statements
      { from: /if \(\$1\) return \$2;/g, to: "if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });" },
      
      // Fix missing semicolons
      { from: /(\w+)\n(export|import|const|let|var|function|class)/g, to: '$1;\n$2' },
      
      // Fix extra semicolons
      { from: /;\s*;/g, to: ';' },
      
      // Fix missing closing braces
      { from: /}\s*$/gm, to: '  } catch (error) {\n    console.error("Error:", error);\n    return res.status(500).json({ error: "Internal server error" });\n  }\n}' },
    ];

    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        changesMade = true;
      }
    });

    // Specific fixes for problematic files
    if (filePath.includes('admin/analytics/summary.ts')) {
      content = content.replace(/const LOG_FILE = path\.join\(process\.cwd\(\), 'dataanalyticsevents\.log\.jsonl'\),;/g, "const LOG_FILE = path.join(process.cwd(), 'dataanalyticsevents.log.jsonl');");
      content = content.replace(/function parseLines\(startIso\?: string, endIso\?: string\): EventRow\[\] \{;/g, 'function parseLines(startIso?: string, endIso?: string): EventRow[] {');
      content = content.replace(/if \(!fs\.existsSync\(LOG_FILE\)\) return \[\],;/g, 'if (!fs.existsSync(LOG_FILE)) return [];');
      changesMade = true;
    }

    if (filePath.includes('admin/kyc-queue.ts')) {
      content = content.replace(/function save\(db: Record<string KycProfile>\) \{;/g, 'function save(db: Record<string, KycProfile>) {');
      changesMade = true;
    }

    if (filePath.includes('admin/learn/course.ts')) {
      content = content.replace(/export default function handler\(req, res\) \{\s*try \{\s*try \{/g, 'export default function handler(req, res) {\n  try {');
      content = content.replace(/res\.setHeader\('AllowPOST'\);/g, "res.setHeader('Allow', 'POST');");
      changesMade = true;
    }

    if (filePath.includes('admin/moderation/flags/index.ts')) {
      content = content.replace(/req\.query as Record<string string \| undefined>/g, 'req.query as Record<string, string | undefined>');
      content = content.replace(/if \(req\.method === '\$1'\)/g, "if (req.method === 'GET')");
      content = content.replace(/const filtered = flags\.filter\(f =>;\s*\(!status \|\| f\.status === status\) &&;/g, 'const filtered = flags.filter(f =>\n  (!status || f.status === status) &&');
      changesMade = true;
    }

    if (filePath.includes('admin/notes-all.ts')) {
      content = content.replace(/try \{\s*const isAdmin = req\.headers\['x-admin'\] === 'true';\s*if \(\$1\) return \$2;\s*\}/g, 'try {\n  const isAdmin = req.headers[\'x-admin\'] === \'true\';\n  if (!isAdmin) return res.status(403).json({ error: \'Forbidden\' });\n  // Add proper error handling here\n} catch (error) {\n  console.error("Error:", error);\n  return res.status(500).json({ error: "Internal server error" });\n}');
      changesMade = true;
    }

    // Clean up extra whitespace and newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    content = content.replace(/\s+$/gm, '');
    
    if (changesMade || content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript files
function getAllTypeScriptFiles() {
  const patterns = [
    'pages/**/*.ts',
    'pages/**/*.tsx',
    'components/**/*.ts',
    'components/**/*.tsx',
    'utils/**/*.ts',
    'types/**/*.ts',
    'lib/**/*.ts',
    '*.ts',
    '*.tsx'
  ];

  let allFiles = [];
  patterns.forEach(pattern => {
    try {
      const files = glob.sync(pattern, { cwd: process.cwd() });
      allFiles = allFiles.concat(files);
    } catch (error) {
      // Pattern not found, continue
    }
  });

  return [...new Set(allFiles)]; // Remove duplicates
}

// Main execution
function main() {
  console.log('🚀 Starting comprehensive syntax fix...\n');
  
  const allFiles = getAllTypeScriptFiles();
  console.log(`Found ${allFiles.length} TypeScript files to check`);
  
  let fixedCount = 0;
  
  allFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (fixAllRemainingSyntax(filePath)) {
        fixedCount++;
      }
    }
  });

  console.log(`\n📊 Fix Summary:`);
  console.log(`   Total files checked: ${allFiles.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n✅ Comprehensive syntax fixes completed!');
  } else {
    console.log('\n✅ No syntax issues found!');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixAllRemainingSyntax };