const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

console.log('🔧 Fixing final syntax errors...');

// Function to fix specific syntax issues
function fixFinalSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let changesMade = false;

    // Fix specific patterns
    const fixes = [
      // Fix type definitions with extra commas
      { from: /userType\?: string,;/g, to: 'userType?: string;' },
      { from: /properties\?: Record<string any>,;/g, to: 'properties?: Record<string, any>;' },
      
      // Fix const declarations with extra commas
      { from: /const DATA_DIR = path\.join\(process\.cwd\(\), 'datakyc'\),;/g, to: "const DATA_DIR = path.join(process.cwd(), 'datakyc');" },
      { from: /const coursesPath = path\.join\(process\.cwd\(\), 'datalearncourses\.json'\),;/g, to: "const coursesPath = path.join(process.cwd(), 'datalearncourses.json');" },
      
      // Fix try-catch blocks
      { from: /try \{\s*const user = parseUserFromRequest\(req\);\s*try \{ ensureAdmin\(user\) \} catch \(e: any\) \{ return res\.status\(e\.statusCode \|\| 403\)\.json\(\{ error: 'Forbidden' \}\) \}\s*;/g, to: 'try {\n  const user = parseUserFromRequest(req);\n  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: \'Forbidden\' }) }\n' },
      
      // Fix object property definitions
      { from: /approve: 'approved';/g, to: "approve: 'approved'," },
      { from: /remove: 'removed',;/g, to: "remove: 'removed'," },
      { from: /warn: 'warned',;/g, to: "warn: 'warned'," },
      { from: /ban: 'banned'\},;/g, to: "ban: 'banned'\n  };" },
      
      // Fix method checks
      { from: /if \(req\.method !== '\$1'\) \{/g, to: "if (req.method !== 'POST') {" },
      
      // Fix Record type definitions
      { from: /Record<string any>/g, to: 'Record<string, any>' },
      
      // Fix function declarations
      { from: /export default function handler\(req, res\) \{/g, to: 'export default function handler(req, res) {\n  try {' },
      
      // Fix try-catch structure
      { from: /try \{\s*if \(req\.method !== 'POST'\) \{/g, to: "try {\n  if (req.method !== 'POST') {" },
      
      // Fix missing catch blocks
      { from: /try \{\s*const user = parseUserFromRequest\(req\);\s*try \{ ensureAdmin\(user\) \} catch \(e: any\) \{ return res\.status\(e\.statusCode \|\| 403\)\.json\(\{ error: 'Forbidden' \}\) \}\s*$/gm, to: 'try {\n  const user = parseUserFromRequest(req);\n  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: \'Forbidden\' }) }\n  // Add proper error handling here\n} catch (error) {\n  console.error("Error:", error);\n  return res.status(500).json({ error: "Internal server error" });\n}' },
    ];

    fixes.forEach(fix => {
      if (fix.from.test(content)) {
        content = content.replace(fix.from, fix.to);
        changesMade = true;
      }
    });

    // Additional specific fixes for the problematic files
    if (filePath.includes('admin/analytics/summary.ts')) {
      content = content.replace(/userType\?: string,;/g, 'userType?: string;');
      content = content.replace(/properties\?: Record<string any>,;/g, 'properties?: Record<string, any>;');
      changesMade = true;
    }

    if (filePath.includes('admin/kyc-queue.ts')) {
      content = content.replace(/const DATA_DIR = path\.join\(process\.cwd\(\), 'datakyc'\),;/g, "const DATA_DIR = path.join(process.cwd(), 'datakyc');");
      changesMade = true;
    }

    if (filePath.includes('admin/learn/course.ts')) {
      content = content.replace(/const coursesPath = path\.join\(process\.cwd\(\), 'datalearncourses\.json'\),;/g, "const coursesPath = path.join(process.cwd(), 'datalearncourses.json');");
      content = content.replace(/if \(req\.method !== '\$1'\) \{/g, "if (req.method !== 'POST') {");
      changesMade = true;
    }

    if (filePath.includes('admin/moderation/flags/[id].ts')) {
      // Fix the try-catch structure
      content = content.replace(/try \{\s*const user = parseUserFromRequest\(req\);\s*try \{ ensureAdmin\(user\) \} catch \(e: any\) \{ return res\.status\(e\.statusCode \|\| 403\)\.json\(\{ error: 'Forbidden' \}\) \}\s*;/g, 
        'try {\n  const user = parseUserFromRequest(req);\n  try { ensureAdmin(user) } catch (e: any) { return res.status(e.statusCode || 403).json({ error: \'Forbidden\' }) }\n  // Add proper error handling here\n} catch (error) {\n  console.error("Error:", error);\n  return res.status(500).json({ error: "Internal server error" });\n}');
      changesMade = true;
    }

    if (filePath.includes('admin/moderation/flags/[id]/action.ts')) {
      content = content.replace(/approve: 'approved';/g, "approve: 'approved',");
      content = content.replace(/remove: 'removed',;/g, "remove: 'removed',");
      content = content.replace(/warn: 'warned',;/g, "warn: 'warned',");
      content = content.replace(/ban: 'banned'\},;/g, "ban: 'banned'\n  };");
      changesMade = true;
    }

    if (changesMade || content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed final syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('🚀 Starting final syntax fix...\n');
  
  const filesToFix = [
    'pages/api/admin/analytics/summary.ts',
    'pages/api/admin/kyc-queue.ts',
    'pages/api/admin/learn/course.ts',
    'pages/api/admin/moderation/flags/[id].ts',
    'pages/api/admin/moderation/flags/[id]/action.ts'
  ];
  
  let fixedCount = 0;
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      if (fixFinalSyntax(filePath)) {
        fixedCount++;
      }
    }
  });

  console.log(`\n📊 Fix Summary:`);
  console.log(`   Files checked: ${filesToFix.length}`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  if (fixedCount > 0) {
    console.log('\n✅ Final syntax fixes completed!');
  } else {
    console.log('\n✅ No final syntax issues found!');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixFinalSyntax };
