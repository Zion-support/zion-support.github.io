import fs from 'fs';
import path from 'path';

// Get all TSX files in the app directory
function getAllTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...getAllTSXFiles(fullPath));
    } else if (item.name.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate closing tags
    const duplicateTagPattern = /<\/a>\s*<\/div>\s*<\/a>\s*<\/div>/g;
    if (duplicateTagPattern.test(content)) {
      content = content.replace(duplicateTagPattern, '</a>\n            </div>');
      modified = true;
    }
    
    // Fix malformed JSX structure
    const malformedPattern = /<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (malformedPattern.test(content)) {
      content = content.replace(malformedPattern, '</a>\n            </div>\n          </div>\n        </section>');
      modified = true;
    }
    
    // Fix missing closing tags for features section
    const featuresPattern = /Everything you need for success\s*<\/p>\s*<\/div>\s*<div className="grid/g;
    if (featuresPattern.test(content)) {
      content = content.replace(featuresPattern, 'Everything you need for success\n              </p>\n            </div>\n            <div className="grid');
      modified = true;
    }
    
    // Fix React.Fragment closing issues
    const fragmentPattern = /<\/div>\s*<\/React\.Fragment>/g;
    if (fragmentPattern.test(content)) {
      content = content.replace(fragmentPattern, '</div>\n    </React.Fragment>');
      modified = true;
    }
    
    // Fix missing closing tags in general
    const missingClosingPattern = /<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (missingClosingPattern.test(content)) {
      content = content.replace(missingClosingPattern, '</div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TSX files
const tsxFiles = getAllTSXFiles('app');

// Process each file
tsxFiles.forEach(fixJSXFile);

console.log(`Processed ${tsxFiles.length} TSX files`);