#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all JSX issues
function fixAllJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix malformed closing tags
    const malformedClosingPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (malformedClosingPattern.test(content)) {
      content = content.replace(malformedClosingPattern, '$1\n            </div>\n          </div>\n        </section>');
      modified = true;
    }

    // Fix 2: Fix malformed paragraph tags
    const malformedParagraphPattern = /(\s*<p[^>]*>.*?)\s*<\/p>\s*<\/div>/g;
    if (malformedParagraphPattern.test(content)) {
      content = content.replace(malformedParagraphPattern, '$1\n              </p>\n            </div>');
      modified = true;
    }

    // Fix 3: Fix missing closing tags in sections
    const missingSectionPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (missingSectionPattern.test(content)) {
      content = content.replace(missingSectionPattern, '$1\n            </div>\n          </div>\n        </section>');
      modified = true;
    }

    // Fix 4: Fix malformed object syntax in arrays
    const malformedArrayPattern = /(\s+description:\s*'[^']*'\s*})\s+description:\s*'[^']*'\s*}\s*}\s*];/g;
    if (malformedArrayPattern.test(content)) {
      content = content.replace(malformedArrayPattern, (match, group1) => {
        return group1 + '  ];';
      });
      modified = true;
    }

    // Fix 5: Fix missing closing tags in React.Fragment
    const missingFragmentPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (missingFragmentPattern.test(content)) {
      content = content.replace(missingFragmentPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 6: Fix malformed JSX with extra closing tags
    const extraClosingPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraClosingPattern.test(content)) {
      content = content.replace(extraClosingPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 7: Fix missing closing tags in sections with extra divs
    const extraDivsPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraDivsPattern.test(content)) {
      content = content.replace(extraDivsPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 8: Fix malformed object syntax with extra commas and brackets
    const malformedObjectPattern = /(\s+description:\s*'[^']*'\s*})\s+description:\s*'[^']*'\s*}\s*}\s*];/g;
    if (malformedObjectPattern.test(content)) {
      content = content.replace(malformedObjectPattern, (match, group1) => {
        return group1 + '  ];';
      });
      modified = true;
    }

    // Fix 9: Fix missing closing tags in React.Fragment with extra divs
    const extraDivsFragmentPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraDivsFragmentPattern.test(content)) {
      content = content.replace(extraDivsFragmentPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 10: Fix malformed JSX with extra closing tags
    const extraClosingPattern2 = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraClosingPattern2.test(content)) {
      content = content.replace(extraClosingPattern2, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 11: Fix malformed closing tags with extra divs
    const extraDivsClosingPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraDivsClosingPattern.test(content)) {
      content = content.replace(extraDivsClosingPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 12: Fix malformed closing tags with extra sections
    const extraSectionsPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraSectionsPattern.test(content)) {
      content = content.replace(extraSectionsPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 13: Fix malformed closing tags with extra divs and sections
    const extraDivsSectionsPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraDivsSectionsPattern.test(content)) {
      content = content.replace(extraDivsSectionsPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 14: Fix malformed closing tags with extra divs, sections, and fragments
    const extraAllPattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraAllPattern.test(content)) {
      content = content.replace(extraAllPattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 15: Fix malformed closing tags with extra divs, sections, fragments, and more
    const extraAllMorePattern = /(\s*<\/a>\s*)\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (extraAllMorePattern.test(content)) {
      content = content.replace(extraAllMorePattern, '$1\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed all JSX: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing all JSX in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Scanning for TypeScript files with all JSX issues...');
  const files = glob.sync(pattern);
  
  console.log(`Found ${files.length} TypeScript files`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixAllJSX(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed all JSX in ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixAllJSX };