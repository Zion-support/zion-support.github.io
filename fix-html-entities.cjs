const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix HTML entities in JSX
function fixHtmlEntities(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unescaped quotes in JSX
    content = content.replace(/([^\\])"/g, '$1&quot;');
    content = content.replace(/^"/g, '&quot;');
    
    // Fix unescaped apostrophes in JSX
    content = content.replace(/([^\\])'/g, '$1&apos;');
    content = content.replace(/^'/g, '&apos;');

    // Fix specific patterns that are common
    content = content.replace(/don't/g, 'don&apos;t');
    content = content.replace(/can't/g, 'can&apos;t');
    content = content.replace(/won't/g, 'won&apos;t');
    content = content.replace(/it's/g, 'it&apos;s');
    content = content.replace(/we're/g, 'we&apos;re');
    content = content.replace(/you're/g, 'you&apos;re');
    content = content.replace(/they're/g, 'they&apos;re');
    content = content.replace(/I'm/g, 'I&apos;m');
    content = content.replace(/I'll/g, 'I&apos;ll');
    content = content.replace(/I've/g, 'I&apos;ve');
    content = content.replace(/I'd/g, 'I&apos;d');

    // Fix quotes in specific contexts
    content = content.replace(/"([^"]*)"([^>]*>)/g, '&quot;$1&quot;$2');
    content = content.replace(/([^=])"([^"]*)"([^>]*>)/g, '$1&quot;$2&quot;$3');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed HTML entities in: ${filePath}`);
      modified = true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript and TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  fixHtmlEntities(fullPath);
});

console.log('HTML entities cleanup completed!');