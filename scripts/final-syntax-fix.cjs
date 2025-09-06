<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
=======
console.log('🔧 Final Syntax Fix');
console.log('==================');

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Final Syntax Fix');
<<<<<<< HEAD
console.log('==================');

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
console.log('
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
// Function to fix specific syntax errors
function fixSpecificErrors(content) {
  return content
    // Fix JSX closing tags
    .replace(/<\$1>/g, '>')
    .replace(/<\/\$1>/g, '>')
    .replace(/<\$1/g, '<')
    .replace(/<\/\$1/g, '</')
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
<<<<<<< HEAD
=======
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
<<<<<<< HEAD
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
=======
    
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
<<<<<<< HEAD
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
=======
    
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
// Files to fix
const filesToFix = [
  'pages/about.tsx',
  'pages/blog.tsx',
  'pages/ai-services.tsx',
  'pages/api.tsx',
  'pages/accessibility.tsx',
  'pages/careers.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/Layout.tsx',
  'components/layout/MainLayout.tsx'
];
<<<<<<< HEAD
let totalFixed = 0;

=======

let totalFixed = 0;

<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
for (const file of filesToFix) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️  File not found: ${file}`);
      continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
<<<<<<< HEAD
    content = fixSpecificErrors(content);
=======
    
    content = fixSpecificErrors(content);
    
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
    if (content !== originalContent) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed ${file}`);
      totalFixed++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
}
<<<<<<< HEAD
console.log(`\n✅ Fixed ${totalFixed} files`);
<<<<<<< HEAD

=======
console.log('🎉 Final syntax fix completed!');
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

console.log(`\n✅ Fixed ${totalFixed} files`);

<<<<<<< HEAD
console.log('🎉 Final syntax fix completed!');
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
console.log('🎉 Final syntax fix completed!');
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
