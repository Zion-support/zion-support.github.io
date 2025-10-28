const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix GlobalErrorBoundary import path
  if (content.includes("from '../components/GlobalErrorBoundary'")) {
    content = content.replace(
      /from ['"]\.\.\/components\/GlobalErrorBoundary['"]/g,
      "from '../../components/GlobalErrorBoundary'"
    );
    modified = true;
  }

  // Fix Navigation import path
  if (content.includes("from '../components/Navigation'")) {
    content = content.replace(
      /from ['"]\.\.\/components\/Navigation['"]/g,
      "from '../../components/Navigation'"
    );
    modified = true;
  }

  // Fix Footer import path
  if (content.includes("from '../components/Footer'")) {
    content = content.replace(
      /from ['"]\.\.\/components\/Footer['"]/g,
      "from '../../components/Footer'"
    );
    modified = true;
  }

  // Fix other component imports that might be in the wrong path
  const componentImports = [
    'SEOHead', 'PageLoader', 'PWAInstaller', 'OptimizedImage', 
    'LazyHomePage', 'ClientComponents', 'LoadingSpinner'
  ];

  componentImports.forEach(component => {
    if (content.includes(`from '../components/${component}'`)) {
      content = content.replace(
        new RegExp(`from ['"]\\.\\./components/${component}['"]`, 'g'),
        `from '../../components/${component}'`
      );
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);