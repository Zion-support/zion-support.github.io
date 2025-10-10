#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common syntax error patterns and their fixes
const fixes = [
  // Fix missing closing braces in map functions
  {
    pattern: /(\s+)\)\);\s*<\/ul>\s*\);\s*<\/div>\s*\)\);\s*<\/div>/g,
    replacement: '$1))}\n                    </ul>\n                  )}\n                </div>\n              ))}\n            </div>'
  },
  
  // Fix missing closing braces in JSX fragments
  {
    pattern: /<>\s*<Helmet>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*<\/Helmet>\s*<div[^>]*>\s*<\/div>\s*;\s*\/\* Hero Section \*\/\s*<section/g,
    replacement: '<>\n      <Helmet>\n        <title>$1</title>\n        <meta name="description" content="Advanced AI and IT solutions" />\n      </Helmet>\n\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        {/* Hero Section */}\n        <section'
  },
  
  // Fix malformed function declarations
  {
    pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/g,
    replacement: 'const $1: React.FC = () => {\n  const $2 = ['
  },
  
  // Fix missing closing braces in try-catch blocks
  {
    pattern: /}\s*}\s*catch\s*\([^)]+\)\s*{/g,
    replacement: '  }\n} catch (error) {'
  },
  
  // Fix malformed JSX closing tags
  {
    pattern: /<\/div>\s*\);\s*<\/div>\s*\);\s*<\/div>\s*\);\s*<\/section>/g,
    replacement: '</div>\n              ))}\n            </div>\n          </div>\n        </section>'
  },
  
  // Fix missing closing braces in array maps
  {
    pattern: /\.map\(\([^)]+\)\s*=>\s*\([^)]+\)\s*\);\s*<\/div>/g,
    replacement: '.map(($1) => (\n                    $2\n                  ))}\n                </div>'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    // Additional specific fixes for common patterns
    if (content.includes(')));') && content.includes('</ul>);')) {
      content = content.replace(/\)\);\s*<\/ul>\s*\);\s*<\/div>\s*\)\);\s*<\/div>/g, '))}\n                    </ul>\n                  )}\n                </div>\n              ))}\n            </div>');
      modified = true;
    }
    
    if (content.includes('</div>);') && content.includes('</div>);')) {
      content = content.replace(/<\/div>\s*\);\s*<\/div>\s*\);\s*<\/div>\s*\);\s*<\/section>/g, '</div>\n              ))}\n            </div>\n          </div>\n        </section>');
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

function main() {
  const patterns = [
    'app/ai-*/page.tsx',
    'app/components/*.tsx',
    'app/*/page.tsx'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: '/workspace' });
    files.forEach(file => {
      const fullPath = path.join('/workspace', file);
      if (fixFile(fullPath)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();