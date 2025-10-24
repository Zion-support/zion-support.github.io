const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax issues comprehensively
function fixAllSyntax(content) {
  let fixed = content;

  // Fix semicolons in wrong places in JSX
  fixed = fixed.replace(/return\s*\(\s*<div[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<div[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<Head>/gm, '<Head>');
  fixed = fixed.replace(/<title>[^<]*<\/title>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<meta[^>]*\/>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<div[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<p[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<h1[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<h2[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<h3[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<Link[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<button[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<input[^>]*\/>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<img[^>]*\/>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<span[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<a[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<ul[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<li[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<nav[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<header[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<footer[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<main[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<section[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<article[^>]*>;/gm, (match) => match.replace(/;/, ''));
  fixed = fixed.replace(/<aside[^>]*>;/gm, (match) => match.replace(/;/, ''));

  // Fix closing tags with semicolons
  fixed = fixed.replace(/<\/div>;/gm, '</div>');
  fixed = fixed.replace(/<\/p>;/gm, '</p>');
  fixed = fixed.replace(/<\/h1>;/gm, '</h1>');
  fixed = fixed.replace(/<\/h2>;/gm, '</h2>');
  fixed = fixed.replace(/<\/h3>;/gm, '</h3>');
  fixed = fixed.replace(/<\/Link>;/gm, '</Link>');
  fixed = fixed.replace(/<\/button>;/gm, '</button>');
  fixed = fixed.replace(/<\/span>;/gm, '</span>');
  fixed = fixed.replace(/<\/a>;/gm, '</a>');
  fixed = fixed.replace(/<\/ul>;/gm, '</ul>');
  fixed = fixed.replace(/<\/li>;/gm, '</li>');
  fixed = fixed.replace(/<\/nav>;/gm, '</nav>');
  fixed = fixed.replace(/<\/header>;/gm, '</header>');
  fixed = fixed.replace(/<\/footer>;/gm, '</footer>');
  fixed = fixed.replace(/<\/main>;/gm, '</main>');
  fixed = fixed.replace(/<\/section>;/gm, '</section>');
  fixed = fixed.replace(/<\/article>;/gm, '</article>');
  fixed = fixed.replace(/<\/aside>;/gm, '</aside>');

  // Fix function declarations with semicolons
  fixed = fixed.replace(/export default function (\w+)\(\) {;/gm, 'export default function $1() {');
  fixed = fixed.replace(/function (\w+)\(\) {;/gm, 'function $1() {');
  fixed = fixed.replace(/const (\w+) = \(\) => {;/gm, 'const $1 = () => {');

  // Fix import statements with semicolons
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];/gm, 'import { $1 } from \'$2\';');
  fixed = fixed.replace(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"];/gm, 'import $1 from \'$2\';');

  // Fix unterminated strings
  fixed = fixed.replace(/";"$/gm, '"');
  fixed = fixed.replace(/';"$/gm, "'");
  fixed = fixed.replace(/";$/gm, '"');
  fixed = fixed.replace(/';$/gm, "'");

  // Fix specific patterns
  fixed = fixed.replace(/<div className="([^]*)$/gm, '<div className="$1');"
  fixed = fixed.replace(/<p className="([^]*)"$/gm, '<p className="$1');
  fixed = fixed.replace(/<h1 className="([^"]*)"$/gm, '<h1 className="$1');
  fixed = fixed.replace(/<h2 className="([^"]*)"$/gm, '<h2 className="$1');
  fixed = fixed.replace(/<h3 className="([^"]*)"$/gm, '<h3 className="$1');

  // Fix closing tags
  fixed = fixed.replace(/<\/Link">$/gm, '</Link>');
  fixed = fixed.replace(/<\/div>$/gm, '</div>');
  fixed = fixed.replace(/<\/p>$/gm, '</p>');
  fixed = fixed.replace(/<\/h1>$/gm, '</h1>');
  fixed = fixed.replace(/<\/h2>$/gm, '</h2>');
  fixed = fixed.replace(/<\/h3>$/gm, '</h3>');

  // Fix self-closing tags
  fixed = fixed.replace(/<meta[^>]*"$/gm, (match) => match.replace(/"$/, ' />'));
  fixed = fixed.replace(/<link[^>]*"$/gm, (match) => match.replace(/"$/, ' />'));

  // Fix ArrowRight component
  fixed = fixed.replace(/<ArrowRight[^>]*"$/gm, '<ArrowRight className="w-5 h-5 ml-2 /">');"

  // Fix specific patterns
  fixed = fixed.replace(/Contact Us<\/Link>$/gm, 'Contact Us</Link>');
  fixed = fixed.replace(/Learn More<\/Link>$/gm, 'Learn More</Link>');
  fixed = fixed.replace(/Get Started<\/Link>$/gm, 'Get Started</Link>');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllSyntax(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting final comprehensive syntax fixes...');
const fixedCount = processDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);