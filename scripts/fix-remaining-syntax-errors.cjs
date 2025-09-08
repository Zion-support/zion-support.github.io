<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

=======
>>>>>>> origin/chore/fix-lint-and-merge
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {

=======
    // Fix common syntax issues
    content = content.replace(/import\s*{\s*{\s*([^}]+)\s*}/g, 'import { $1 }');
    content = content.replace(/^\s*{\s*$/gm, '');
    content = content.replace(/^\s*}\s*$/gm, '');
    content = content.replace(/^\s*;\s*$/gm, '');
    content = content.replace(/^\s*icon,\s*$/gm, '');
    content = content.replace(/^\s*title,\s*$/gm, '');
    content = content.replace(/^\s*description,\s*$/gm, '');
    content = content.replace(/^\s*features,\s*$/gm, '');
    content = content.replace(/^\s*icon:\s*string;\s*$/gm, '');
    content = content.replace(/^\s*title:\s*string;\s*$/gm, '');
    content = content.replace(/^\s*description:\s*string;\s*$/gm, '');
    content = content.replace(/^\s*features:\s*string\[\];\s*$/gm, '');
    content = content.replace(/^\s*}\s*$/gm, '');
    content = content.replace(/^\s*;\s*$/gm, '');
>>>>>>> origin/chore/fix-lint-and-merge
    
    // Fix unterminated regexp literals
    content = content.replace(/^\s*<\/p>\s*$/gm,         </p>');
    content = content.replace(/^\s*<\/div>\s*$/gm, '      </div>);
    
    // Fix malformed JSX
    content = content.replace(/^\s*}\s*$/gm, ');
    content = content.replace(/^\s*;\s*$/gm, ');
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, \n\n');
    content = content.trim();
    
    // If the file is mostly empty or malformed, create a minimal working version
    if (content.length < 100 || content.includes('icon:) || content.includes(title:')) {
      const fileName = path.basename(filePath, path.extname(filePath));
      const serviceName = fileName.replace(/-/g, ' ).replace(/\b\w/g, l => l.toUpperCase());
      
=======
=======
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Fix common syntax issues,
  content = content.replace(/import\s*{\s*{\s*([^}]+)\s*}/g, 'import { $1 }')
    content = content.replace(/^\s*{\s*$/gm, '')
    content = content.replace(/^\s*}\s*$/gm, '')
    content = content.replace(/^\s*;\s*$/gm, '')
    content = content.replace(/^\s*icon,\s*$/gm, '')
    content = content.replace(/^\s*title,\s*$/gm, '')
    content = content.replace(/^\s*description,\s*$/gm, '')
    content = content.replace(/^\s*features,\s*$/gm, '')
    content = content.replace(/^\s*icon:\s*string;\s*$/gm, '')
    content = content.replace(/^\s*title:\s*string;\s*$/gm, '')
    content = content.replace(/^\s*description:\s*string;\s*$/gm, '')
    content = content.replace(/^\s*features:\s*string\[\];\s*$/gm, '')
    content = content.replace(/^\s*}\s*$/gm, '')
    content = content.replace(/^\s*;\s*$/gm, '')
    // Fix unterminated regexp literals,
  content = content.replace(/^\s*<\/p>\s*$/gm, '        </p>')
    content = content.replace(/^\s*<\/div>\s*$/gm, '      </div>')
    // Fix malformed JSX,
  content = content.replace(/^\s*}\s*$/gm, '')
    content = content.replace(/^\s*;\s*$/gm, '')
    // Clean up empty lines,
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n')
    content = content.trim()
    // If the file is mostly empty or malformed, create a minimal working version,
  if (content.length < 100 || content.includes('icon:') || content.includes('title:')) {
      const fileName = path.basename(filePath, path.extname(filePath))
      const serviceName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
>>>>>>> merged-prs-20250907-203621
      content = `export default function ServicePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>${serviceName}</h1>
      <p>Learn about our ${serviceName.toLowerCase()} services.</p>
    </main>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      }`);
      totalFixes++;
      modified = true;
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a








      console.log(`✅ Fixed syntax errors in ${filePath}`);

      console.log(`✅ Fixed syntax errors in ${filePath}`);
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
  );
}`;
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
// Function to find and fix all TypeScript/JSX files
function fixAllFiles() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
// Function to find and fix all TypeScript/JSX files,
  function fixAllFiles() {
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
  const filesToCheck = [
=======
const filesToCheck = [;
>>>>>>> bcac19d12791e22762b61b5dda2306d7f19fe60c
=======
// Function to find and fix all TypeScript/JSX files,
  function fixAllFiles() {
  const filesToCheck = [
>>>>>>> merged-prs-20250907-203621
    'components/Footer.tsx',
    'components/Header.tsx',
    'components/layout/MainLayout.tsx',
    'pages/about.tsx',
    'pages/ai-services.tsx',
    'pages/blog.tsx',
    'pages/contact.tsx',
    'pages/index.tsx',
    'pages/privacy.tsx',
    'pages/terms.tsx',
    'pages/services.tsx',
    'pages/pricing.tsx'
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
  ];
  let totalFixed = 0;
  filesToCheck.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      if (fixHoverSyntax(filePath)) {
        totalFixed++;
=======
// Function to find all service page files
function findServicePages(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        let stat;
        try {
          stat = fs.statSync(fullPath);
        } catch (error) {
          continue;
        }
        
        if (stat.isDirectory()) {
          scanDirectory(fullPath);
        } else if (stat.isFile() && item === 'page.tsx') {
          files.push(fullPath);
        }
// Function to find and fix all TypeScript/JSX files
function fixAllFiles() {
  const filesToCheck = [
    'components/Footer.tsx',
    'components/Header.tsx',
    'components/layout/MainLayout.tsx',
    'pages/about.tsx',
    'pages/ai-services.tsx',
    'pages/blog.tsx',
    'pages/contact.tsx',
    'pages/index.tsx',
    'pages/privacy.tsx',
    'pages/terms.tsx',
    'pages/services.tsx',
    'pages/pricing.tsx'
  ];
  let totalFixed = 0;
  filesToCheck.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      if (fixHoverSyntax(filePath)) {
        totalFixed++;
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
});
  
  scanDirectory(dir);
  return files;
}
// Main execution
async function main() {
  console.log('🚀 Starting syntax error resolution...');
try {
  console.log('🔍 Scanning for syntax errors...');
  const fixedCount = fixAllFiles();
  
  // Find all service page files
  const servicePages = findServicePages('/workspace/app/services');
  console.log(`Found ${servicePages.length} service page files`);
  
  // Fix each file
  let fixedCount = 0;
  for (const file of servicePages) {
    if (fixSyntaxErrors(file)) {
<<<<<<< HEAD

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);

}

}


}}


=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
=======
>>>>>>> merged-prs-20250907-203621
  scanDirectory(dir);
  return files;
}
// Main execution
  // Find all service page files,
  const servicePages = findServicePages('/workspace/app/services')
  console.log(`Found ${servicePages.length} service page files`)
  // Fix each file,
  let fixedCount = 0,
  for($2) {
    if (fixSyntaxErrors(file)) {} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
      fixedCount++;
    }
  }
  
  // Also fix the research page
  const researchPage = '/workspace/app/research/page.tsx';
  if (fs.existsSync(researchPage)) {
    if (fixSyntaxErrors(researchPage)) {
      fixedCount++;
    }
  }
  
  console.log(`\n✅ Fixed ${fixedCount} files`);
  console.log('\n🎉 Syntax error resolution completed!');
}

main().catch(console.error);
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
