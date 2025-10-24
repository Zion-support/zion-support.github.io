const fs = require('fs');
const path = require('path');
;
// Function to fix missing imports in micro-saas-services files;
function fixMicroSaasImports() {
  const microSaasDir = '/workspace/app/micro-saas-services'
;
  try {;
    const files = fs.readdirSync(microSaasDir);
    let fixedCount = 0;
;
    for (const file of files) {;
      if (file.endsWith('.tsx')) {;
        const filePath = path.join(microSaasDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
;
        // Check if file uses Link but doesn't import it;
        if (content.includes('<Link') && !content.includes("import Link from 'next/link")) {;'
          console.log(`Fixing imports in: ${file}`);
;
          // Add Link import after Head import;"
          content = content.replace(";'"
            "import Head from 'next/head",";'"
            "import Head from 'next/head;\nimport Link from 'next/link'");
          );
;
          fs.writeFileSync(filePath, content, 'utf8');
          fixedCount++}
      }
    }`
    console.log(`Fixed ${fixedCount} micro-saas-services files`);
    return true} catch (error) {;
    console.error('Error fixing micro-saas-services files:', error.message);
    return false}
}
// Run the fix;"
fixMicroSaasImports()";`'"