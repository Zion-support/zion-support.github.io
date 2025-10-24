const fs = require('fs');
const path = require('path');

// List of files with known issues
const filesToFix = [
  'app/ai-email-automation/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-services/page.tsx',
  'app/analytics/page.tsx',
  'app/api/page.tsx',
  'app/automation/page.tsx',
  'app/blockchain/page.tsx',
  'app/cloud-migration-pro/page.tsx'
];

console.log(`Fixing ${filesToFix.length} files...`);

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add Footer import if not present
  if (!content.includes('import Footer')) {
    const importMatch = content.match(/import.*from.*['"];?\s*\n/);
    if (importMatch) {
      const insertPoint = importMatch.index + importMatch[0].length;
      const footerImport = "import Footer from '../components/Footer';\n";
      content = content.slice(0, insertPoint) + footerImport + content.slice(insertPoint);
    }
  }
  
  // Fix JSX structure issues
  // Replace </section> with </div> where appropriate
  if (content.includes('</section>') && content.includes('<div className="min-h-screen')) {
    content = content.replace('</section>', '</div>');
  }
  
  // Add Footer component before closing
  if (!content.includes('<Footer') && content.includes('</>')) {
    content = content.replace('</>', '      <Footer />\n    </>');
  }
  
  // Ensure proper JSX structure
  if (content.includes('</div>') && !content.includes('</>') && content.includes('<>')) {
    content = content.replace('</div>', '</div>\n    </>');
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('All files fixed!');
