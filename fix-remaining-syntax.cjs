const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra closing div tags before JSX fragment
    // Pattern: multiple </div> followed by </>
    content = content.replace(/(<\/div>\s*){3,}\s*<\/>/g, (match) => {
      // Count the number of closing divs
      const divCount = (match.match(/<\/div>/g) || []).length;
      // Keep only 3 closing divs (for the standard structure)
      const fixedDivs = '</div>\n'.repeat(3);
      return fixedDivs + '    </>';
    });
    
    // Fix specific patterns where there are too many closing divs
    content = content.replace(/<\/div>\n<\/div>\n<\/div>\n<\/div>\n    <\/>/g, '</div>\n          </div>\n        </div>\n      </div>\n    </>');
    
    // Fix malformed JSX structure
    content = content.replace(/<\/div>\n<\/div>\n<\/div>\n    <\/>/g, '</div>\n          </div>\n        </div>\n      </div>\n    </>');
    
    // Fix any remaining syntax issues
    content = content.replace(/Parsing error: Identifier expected/g, '');
    content = content.replace(/Parsing error: Expression expected/g, '');
    
    // Write the fixed content back if it changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix page files
function fixPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixPageFiles(filePath);
      }
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      fixPageFile(filePath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix remaining syntax errors...');
fixPageFiles('./app');
console.log('Finished fixing syntax errors.');