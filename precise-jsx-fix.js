import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix specific JSX errors
function fixPreciseJsxErrors(content) {
  let fixed = content;
  
  // Fix malformed features array - remove duplicate description and fix syntax
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix specific syntax errors in features array
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix missing closing tags for React.Fragment
  fixed = fixed.replace(/(<React\.Fragment>\s*<Helmet>.*?<\/Helmet>\s*<div[^>]*>.*?)(?!<\/React\.Fragment>)(?=\s*\);\s*};)/g, '$1      </div>\n    </React.Fragment>');
  
  // Fix missing closing tags for main container div
  fixed = fixed.replace(/(<div[^>]*min-h-screen[^>]*>.*?)(?!<\/div>)(?=\s*<\/React\.Fragment>)/g, '$1      </div>');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/(<section[^>]*>\s*<div[^>]*>\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<div[^>]*>.*?<\/div>\s*<\/div>\s*)(?!<\/section>)/g, '$1        </section>');
  
  // Fix missing closing tags for sections with CTA
  fixed = fixed.replace(/(<section[^>]*>\s*<div[^>]*>\s*<h2[^>]*>Ready to Get Started\?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<a[^>]*>.*?<\/a>\s*<a[^>]*>.*?<\/a>\s*<\/div>\s*)(?!<\/section>)/g, '$1        </section>');
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/(<div[^>]*>\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<div[^>]*>.*?<\/div>\s*)(?!<\/div>)/g, '$1          </div>');
  
  // Fix missing closing tags for CTA div elements
  fixed = fixed.replace(/(<div[^>]*>\s*<h2[^>]*>Ready to Get Started\?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<a[^>]*>.*?<\/a>\s*<a[^>]*>.*?<\/a>\s*)(?!<\/div>)/g, '$1          </div>');
  
  // Fix specific accessibility page issues
  fixed = fixed.replace(/(<div[^>]*>\s*<h2[^>]*>Accessibility Features<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<div[^>]*>.*?<\/div>\s*)(?!<\/div>)/g, '$1          </div>');
  
  // Fix missing closing tags for sections with features grid
  fixed = fixed.replace(/(<section[^>]*>\s*<div[^>]*>\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<div[^>]*>.*?<\/div>\s*)(?!<\/section>)/g, '$1        </section>');
  
  // Fix missing closing tags for sections with CTA buttons
  fixed = fixed.replace(/(<section[^>]*>\s*<div[^>]*>\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div[^>]*>\s*<a[^>]*>.*?<\/a>\s*<a[^>]*>.*?<\/a>\s*)(?!<\/section>)/g, '$1        </section>');
  
  // Fix missing closing tags for main container
  fixed = fixed.replace(/(<div[^>]*min-h-screen[^>]*>.*?)(?!<\/div>)(?=\s*<\/React\.Fragment>)/g, '$1      </div>');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixPreciseJsxErrors(content);
    
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
  
  console.log('Starting precise JSX error fixes...');
  
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