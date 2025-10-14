import fs from 'fs';
import path from 'path';

const pageFiles = [
  'app/pages/DemoPage.tsx',
  'app/pages/MicroSaaSPage.tsx', 
  'app/pages/PricingPage.tsx',
  'app/pages/PrivacyPage.tsx',
  'app/pages/SupportPage.tsx',
  'app/pages/TermsPage.tsx',
  'app/pages/TutorialsPage.tsx'
];

const fixPageFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the common pattern where Helmet is not properly closed
    content = content.replace(
      /(\s+<meta name="keywords"[^>]*\/>\s+)(<div className="min-h-screen)/g,
      '$1</Helmet>\n      $2'
    );
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Fix all page files
pageFiles.forEach(fixPageFile);
console.log('Page JSX errors fixed');