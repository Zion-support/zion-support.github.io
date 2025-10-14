const fs = require('fs');
const path = require('path');

// Function to fix all remaining syntax errors comprehensively
function fixFinalComprehensive(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed closing tags - extra closing div
    if (content.includes('          </div>\n        </div>\n      </div>')) {
      content = content.replace(/          <\/div>\n        <\/div>\n      <\/div>/g, '        </div>\n      </div>');
      modified = true;
    }

    // Fix missing closing tags for fragments
    if (content.includes('  );\n};') && !content.includes('</>')) {
      content = content.replace(/  \);\n\};/g, '    </>\n  );\n};');
      modified = true;
    }

    // Fix malformed JSX structure
    if (content.includes('        </div>\n      </div>\n    </>')) {
      content = content.replace(/        <\/div>\n      <\/div>\n    <\/>/g, '        </div>\n      </div>\n    </>');
      modified = true;
    }

    // Fix extra closing div tags
    if (content.includes('          </div>\n        </div>\n      </div>\n    </>')) {
      content = content.replace(/          <\/div>\n        <\/div>\n      <\/div>\n    <\/>/g, '        </div>\n      </div>\n    </>');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed comprehensive issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix TSX files
function findAndFixTSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += findAndFixTSXFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixFinalComprehensive(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting final comprehensive fix...');
const fixedCount = findAndFixTSXFiles('./app');
console.log(`Fixed comprehensive issues in ${fixedCount} files.`);