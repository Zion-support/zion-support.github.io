const fs = require('fs');
const path = require('path');

// Find all page.tsx files with JSX closing tag errors
const appDir = './app';
const filesToFix = [];

function findFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath);
    } else if (file === 'page.tsx') {
      const content = fs.readFileSync(filePath, 'utf8');
      // Check for common JSX issues
      if (content.includes('<div') && !content.includes('</div>') && content.includes('</section>')) {
        filesToFix.push(filePath);
      }
    }
  }
}

findFiles(appDir);

console.log(`Found ${filesToFix.length} files to fix:`);
filesToFix.forEach(file => console.log(file));

// Fix each file
filesToFix.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add Footer import if not present
  if (content.includes('<Footer') && !content.includes('import Footer')) {
    const importMatch = content.match(/import.*from.*['"];?\s*\n/);
    if (importMatch) {
      const insertPoint = importMatch.index + importMatch[0].length;
      const footerImport = "import Footer from '../components/Footer';\n";
      content = content.slice(0, insertPoint) + footerImport + content.slice(insertPoint);
    }
  }
  
  // Fix JSX structure - replace </section> with </div> and add Footer
  if (content.includes('</section>') && !content.includes('</div>')) {
    content = content.replace('</section>', '</div>');
    if (!content.includes('<Footer')) {
      content = content.replace('</div>', '</div>\n      <Footer />');
    }
  }
  
  // Ensure proper closing
  if (!content.includes('</>') && content.includes('<>')) {
    content = content.replace('</div>', '</div>\n    </>');
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('All JSX errors fixed!');
