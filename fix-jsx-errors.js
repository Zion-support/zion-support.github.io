import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common JSX errors
function fixJsxErrors(content) {
  let fixed = content;
  
  // Fix unclosed <a> tags - add closing </a> tag
  fixed = fixed.replace(/<a\s+[^>]*href="[^"]*"[^>]*>\s*([^<]+)\s*(?!<\/a>)/g, (match, text) => {
    return match + '</a>';
  });
  
  // Fix unclosed <div> tags in specific patterns
  fixed = fixed.replace(/(<div[^>]*>\s*[^<]*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<a[^>]*>.*?<\/a>\s*<a[^>]*>.*?<\/a>\s*)(?!<\/div>)/g, '$1</div>');
  
  // Fix malformed features array - remove duplicate entries
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/(<section[^>]*>\s*<div[^>]*>\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<a[^>]*>.*?<\/a>\s*<a[^>]*>.*?<\/a>\s*<\/div>\s*)(?!<\/section>)/g, '$1</section>');
  
  // Fix React.Fragment closing issues
  fixed = fixed.replace(/(<React\.Fragment>\s*<Helmet>.*?<\/Helmet>\s*<div[^>]*>.*?<\/div>\s*)(?!<\/React\.Fragment>)/g, '$1</React.Fragment>');
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/(<div[^>]*>\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<a[^>]*>.*?<\/a>\s*<a[^>]*>.*?<\/a>\s*)(?!<\/div>)/g, '$1</div>');
  
  // Fix syntax errors in features array
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix missing closing tags for sections that contain CTA
  fixed = fixed.replace(/(<section[^>]*>\s*<div[^>]*>\s*<h2[^>]*>Ready to Get Started\?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<a[^>]*>.*?<\/a>\s*<a[^>]*>.*?<\/a>\s*<\/div>\s*)(?!<\/section>)/g, '$1</section>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJsxErrors(content);
    
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

// Main function
async function main() {
  const appDir = path.join(__dirname, 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Starting JSX error fixes...');
  
  const files = await glob(pattern);
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main();