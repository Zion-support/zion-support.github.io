const fs = require('fs');
const path = require('path');

// Function to fix comprehensive JSX issues
function fixJsxIssues(content) {
  let fixed = content;
  
  // Fix malformed JSX text content patterns like </>text<>
  fixed = fixed.replace(/<\/>([^<]+)<>/g, '$1');
  
  // Fix malformed title tags
  fixed = fixed.replace(/<title>\s*([^<]+)\s*<\/title>/g, '<title>$1</title>');
  
  // Fix malformed p tags with </>text<> pattern
  fixed = fixed.replace(/<p([^>]*)>\s*<\/>([^<]+)<>/g, '<p$1>$2');
  
  // Fix malformed h1 tags with </>text<> pattern
  fixed = fixed.replace(/<h1([^>]*)>\s*<\/>([^<]+)<>/g, '<h1$1>$2');
  
  // Fix malformed h2 tags with </>text<> pattern
  fixed = fixed.replace(/<h2([^>]*)>\s*<\/>([^<]+)<>/g, '<h2$1>$2');
  
  // Fix malformed h3 tags with </>text<> pattern
  fixed = fixed.replace(/<h3([^>]*)>\s*<\/>([^<]+)<>/g, '<h3$1>$2');
  
  // Fix malformed div tags with </>text<> pattern
  fixed = fixed.replace(/<div([^>]*)>\s*<\/>([^<]+)<>/g, '<div$1>$2');
  
  // Fix malformed span tags with </>text<> pattern
  fixed = fixed.replace(/<span([^>]*)>\s*<\/>([^<]+)<>/g, '<span$1>$2');
  
  // Fix malformed button tags with </>text<> pattern
  fixed = fixed.replace(/<button([^>]*)>\s*<\/>([^<]+)<>/g, '<button$1>$2');
  
  // Fix malformed a tags with </>text<> pattern
  fixed = fixed.replace(/<a([^>]*)>\s*<\/>([^<]+)<>/g, '<a$1>$2');
  
  // Fix malformed Link tags with </>text<> pattern
  fixed = fixed.replace(/<Link([^>]*)>\s*<\/>([^<]+)<>/g, '<Link$1>$2');
  
  // Fix malformed Layout tags
  fixed = fixed.replace(/<Layout;<\/Layout>\s*<\/Layout>/g, '<Layout');
  fixed = fixed.replace(/<Layout([^>]*)>\s*<\/>([^<]+)<>/g, '<Layout$1>$2');
  
  // Fix duplicate return statements
  fixed = fixed.replace(/return \(\s*return \(/g, 'return (');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<\/>\s*\)\s*<\/div>\s*\);/g, '</>\n    </div>\n  );');
  
  // Fix malformed function declarations
  fixed = fixed.replace(/export default ([^;]+);\s*const ([^:]+): React\.FC = \(\) => {/g, 'const $2: React.FC = () => {');
  
  // Fix malformed closing braces
  fixed = fixed.replace(/}\s*;\s*$/g, '};\n\nexport default $1;');
  
  // Fix malformed JSX structure with nested fragments
  fixed = fixed.replace(/<>\s*<>\s*<title>/g, '<>\n      <title>');
  fixed = fixed.replace(/<\/title>\s*<h1/g, '</title>\n      <h1');
  fixed = fixed.replace(/<\/h1>\s*<p/g, '</h1>\n      <p');
  fixed = fixed.replace(/<\/p>\s*<\/>/g, '</p>\n      </>');
  
  // Fix malformed Link components
  fixed = fixed.replace(/<Link;\s*<\/Link>\s*<\/><\/Link>\s*to="([^"]+)"/g, '<Link to="$1"');
  fixed = fixed.replace(/className="([^"]+)"\s*><\/Link>\s*([^<]+);/g, 'className="$1">$2</Link>');
  
  // Fix malformed ArrowRight components
  fixed = fixed.replace(/<ArrowRight className="([^"]+)" \/>/g, '<ArrowRight className="$1" />');
  
  // Fix malformed Helmet structure
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>\s*<title>([^<]+)<>/g, '<Helmet>\n        <title>$1</title>');
  fixed = fixed.replace(/<\/title>\s*<meta name="([^"]+)" content="([^"]+)" \/>\s*<\/><>\s*<\/meta>\s*<\/Helmet>/g, '</title>\n        <meta name="$1" content="$2" />\n      </Helmet>');
  
  // Fix malformed div structures
  fixed = fixed.replace(/<div className="([^"]+)"\s*><>\s*<\/div>/g, '<div className="$1">\n        $2\n      </div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxIssues(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(processFile);

console.log('Comprehensive JSX fixing completed!');