#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common TypeScript/JSX errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove duplicate description lines
    const duplicateDescPattern = /(\s+description:\s*'[^']*'\s*})\s+description:\s*'[^']*'\s*}\s*];/g;
    if (duplicateDescPattern.test(content)) {
      content = content.replace(duplicateDescPattern, (match, group1) => {
        return group1 + '  ];';
      });
      modified = true;
    }

    // Fix 2: Fix malformed object syntax with extra commas and brackets
    const malformedObjectPattern = /(\s+description:\s*'[^']*'\s*})\s+description:\s*'[^']*'\s*}\s*}\s*];/g;
    if (malformedObjectPattern.test(content)) {
      content = content.replace(malformedObjectPattern, (match, group1) => {
        return group1 + '  ];';
      });
      modified = true;
    }

    // Fix 3: Fix duplicate closing tags
    const duplicateClosingPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>/g;
    if (duplicateClosingPattern.test(content)) {
      content = content.replace(duplicateClosingPattern, '$1\n            </div>\n          </div>');
      modified = true;
    }

    // Fix 4: Fix missing closing div tags
    const missingDivPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (missingDivPattern.test(content)) {
      content = content.replace(missingDivPattern, '$1\n            </div>\n          </div>\n        </section>');
      modified = true;
    }

    // Fix 5: Fix malformed JSX with extra closing tags
    const malformedJSXPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, '$1\n            </div>\n          </div>\n        </section>');
      modified = true;
    }

    // Fix 6: Fix array syntax issues
    const arraySyntaxPattern = /(\s+description:\s*'[^']*'\s*})\s+description:\s*'[^']*'\s*}\s*}\s*];/g;
    if (arraySyntaxPattern.test(content)) {
      content = content.replace(arraySyntaxPattern, (match, group1) => {
        return group1 + '  ];';
      });
      modified = true;
    }

    // Fix 7: Fix missing closing tags in JSX
    const missingJSXClosingPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (missingJSXClosingPattern.test(content)) {
      content = content.replace(missingJSXClosingPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 8: Fix malformed array syntax with extra brackets
    const malformedArrayPattern = /(\s+description:\s*'[^']*'\s*})\s+description:\s*'[^']*'\s*}\s*}\s*];/g;
    if (malformedArrayPattern.test(content)) {
      content = content.replace(malformedArrayPattern, (match, group1) => {
        return group1 + '  ];';
      });
      modified = true;
    }

    // Fix 9: Fix duplicate closing tags in sections
    const duplicateSectionPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (duplicateSectionPattern.test(content)) {
      content = content.replace(duplicateSectionPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 10: Fix malformed object syntax with extra commas
    const malformedCommaPattern = /(\s+description:\s*'[^']*'\s*})\s+description:\s*'[^']*'\s*}\s*}\s*];/g;
    if (malformedCommaPattern.test(content)) {
      content = content.replace(malformedCommaPattern, (match, group1) => {
        return group1 + '  ];';
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Scanning for TypeScript files...');
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TypeScript files`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };