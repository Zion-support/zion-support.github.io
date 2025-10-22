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
    
    // Fix duplicate array entries pattern
    const duplicateArrayPattern = /description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*\]/g;
    if (duplicateArrayPattern.test(content)) {
      content = content.replace(duplicateArrayPattern, `description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];`);
      modified = true;
    }
    
    // Fix missing closing tags for features section
    const featuresPattern = /Everything you need for success\s*<\/p>\s*<\/div>\s*<div className="grid/g;
    if (featuresPattern.test(content)) {
      content = content.replace(featuresPattern, 'Everything you need for success\n              </p>\n            </div>\n            <div className="grid');
      modified = true;
    }
    
    // Fix malformed closing tags
    const malformedClosingPattern = /<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (malformedClosingPattern.test(content)) {
      content = content.replace(malformedClosingPattern, '</a>\n            </div>\n          </div>\n        </section>');
      modified = true;
    }
    
    // Fix React.Fragment closing issues
    const fragmentPattern = /<\/div>\s*<\/React\.Fragment>/g;
    if (fragmentPattern.test(content)) {
      content = content.replace(fragmentPattern, '</div>\n    </React.Fragment>');
      modified = true;
    }
    
    // Fix missing closing tags in general structure
    const missingClosingPattern = /<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (missingClosingPattern.test(content)) {
      content = content.replace(missingClosingPattern, '</div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }
    
    // Fix specific about page issue
    if (filePath.includes('about/page.tsx')) {
      const aboutPattern = /<\/div>\s*<\/React\.Fragment>\s*\);\s*\};\s*export default AboutPage;/g;
      if (aboutPattern.test(content)) {
        content = content.replace(aboutPattern, '</div>\n    </React.Fragment>\n  );\n};\n\nexport default AboutPage;');
        modified = true;
      }
    }
    
    // Fix accessibility page issues
    if (filePath.includes('accessibility/page.tsx')) {
      const accessibilityPattern = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\s*{benefits\.map\(\(benefit, index\) => \(\s*<div key={index} className="flex items-center space-x-3">\s*<CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" \/>\s*<span className="text-gray-300">{benefit}<\/span>\s*<\/div>\s*\)\)}\s*<\/div>\s*<\/section>/g;
      if (accessibilityPattern.test(content)) {
        content = content.replace(accessibilityPattern, `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </section>`);
        modified = true;
      }
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