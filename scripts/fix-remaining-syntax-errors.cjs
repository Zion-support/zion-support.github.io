
const fs = require('fs');
const path = require(path');

// Function to fix hover syntax errors
function fixHoverSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    

    
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
      
      content = `export default function ServicePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>${serviceName}</h1>
      <p>Learn about our ${serviceName.toLowerCase()} services.</p>
    </main>








      console.log(`✅ Fixed syntax errors in ${filePath}`);

      console.log(`✅ Fixed syntax errors in ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find and fix all TypeScript/JSX files
function fixAllFiles() {

  ];
  
  let totalFixed = 0;
  
  filesToCheck.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      if (fixHoverSyntax(filePath)) {
        totalFixed++;
      }
    } catch (error) {
      // Skip directories that cant be read
    }
  }
});
});
  
  scanDirectory(dir);
  return files;
}


try {
  console.log('🔍 Scanning for syntax errors...');
  const fixedCount = fixAllFiles();
try {
  console.log(🔍 Scanning for syntax errors...);
  

  // Find all service page files
  const servicePages = findServicePages('/workspace/app/services');
  console.log(`Found ${servicePages.length} service page files`);
  
  // Fix each file
  let fixedCount = 0;
  for (const file of servicePages) {
    if (fixSyntaxErrors(file)) {

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
