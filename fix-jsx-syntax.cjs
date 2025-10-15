const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX syntax issues
function fixJSXSyntax(content) {
  // Fix malformed JSX fragments
  content = content.replace(/<>Helmet>/g, '<><Helmet>');
  content = content.replace(/<\/Helmet>/g, '</Helmet>');
  
  // Fix malformed component names
  content = content.replace(/constHomepagePage:/g, 'const HomePage:');
  content = content.replace(/constFooterpagePage:/g, 'const FooterPage:');
  content = content.replace(/constNavigationpagePage:/g, 'const NavigationPage:');
  
  // Fix malformed JSX tags
  content = content.replace(/<Helmet>/g, '<Helmet>');
  content = content.replace(/<\/Helmet>/g, '</Helmet>');
  content = content.replace(/<Link/g, '<Link');
  content = content.replace(/<\/Link>/g, '</Link>');
  content = content.replace(/<div/g, '<div');
  content = content.replace(/<\/div>/g, '</div>');
  content = content.replace(/<section/g, '<section');
  content = content.replace(/<\/section>/g, '</section>');
  content = content.replace(/<h1/g, '<h1');
  content = content.replace(/<\/h1>/g, '</h1>');
  content = content.replace(/<p/g, '<p');
  content = content.replace(/<\/p>/g, '</p>');
  content = content.replace(/<button/g, '<button');
  content = content.replace(/<\/button>/g, '</button>');
  content = content.replace(/<a/g, '<a');
  content = content.replace(/<\/a>/g, '</a>');
  content = content.replace(/<ul/g, '<ul');
  content = content.replace(/<\/ul>/g, '</ul>');
  content = content.replace(/<li/g, '<li');
  content = content.replace(/<\/li>/g, '</li>');
  content = content.replace(/<footer/g, '<footer');
  content = content.replace(/<\/footer>/g, '</footer>');
  content = content.replace(/<nav/g, '<nav');
  content = content.replace(/<\/nav>/g, '</nav>');
  content = content.replace(/<header/g, '<header');
  content = content.replace(/<\/header>/g, '</header>');
  content = content.replace(/<main/g, '<main');
  content = content.replace(/<\/main>/g, '</main>');
  content = content.replace(/<article/g, '<article');
  content = content.replace(/<\/article>/g, '</article>');
  content = content.replace(/<aside/g, '<aside');
  content = content.replace(/<\/aside>/g, '</aside>');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="([^"]*)\s+([^"]*)"/g, (match, first, second) => {
    return `className="${first} ${second}"`;
  });
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*</g, '<>');
  content = content.replace(/<\/>\s*</g, '</>');
  
  // Fix malformed closing tags
  content = content.replace(/<\/>\s*$/g, '</>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting JSX syntax fixes...');

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (processFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);
console.log('JSX syntax fixes completed!');