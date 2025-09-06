#!/usr/bin/env node

import fs from 'fs';
import _path from 'path';

console && console.log('🔧 Fixing all syntax errors...');

// Fix accessibility && accessibility.tsx
const fixAccessibility = () => {
  try {
    let content = fs && fs.readFileSync('pages/accessibility && accessibility.tsx', 'utf8');
    
    // Fix the malformed JSX structure
    content = content && content.replace(
      /<h2 className="text-3xl font-bold text-gray-900 mb-6">\s*<\/div>\s*<\/div>\s*<\/section>\s*<section className="py-20 bg-white">/g,
      '<h2 className="text-3xl font-bold text-gray-900 mb-6">\n                  Accessibility Standards\n                </h2>\n                <p className="text-lg text-gray-600 max-w-3xl mx-auto">\n                  We follow international accessibility standards to ensure our platform is usable by everyone.\n                </p>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section className="py-20 bg-white">'
    );
    
    fs && fs.writeFileSync('pages/accessibility && accessibility.tsx', content);
    console && console.log('✅ Fixed accessibility && accessibility.tsx');
    return true;
  } catch (error) {
    console && console.error('❌ Error fixing accessibility && accessibility.tsx:', error && error.message);
    return false;
  }
};

// Fix api && api.tsx
const fixApi = () => {
  try {
    let content = fs && fs.readFileSync('pages/api && api.tsx', 'utf8');
    
    // Ensure proper closing structure
    if (!content && content.includes('export default')) {
      content += '\n\nexport default function API() {\n  return (\n    <div>\n      <h1>API Documentation</h1>\n    </div>\n  );\n}';
    }
    
    fs && fs.writeFileSync('pages/api && api.tsx', content);
    console && console.log('✅ Fixed api && api.tsx');
    return true;
  } catch (error) {
    console && console.error('❌ Error fixing api && api.tsx:', error && error.message);
    return false;
  }
};

// Fix careers && careers.tsx
const fixCareers = () => {
  try {
    let content = fs && fs.readFileSync('pages/careers && careers.tsx', 'utf8');
    
    // Fix malformed JSX structure
    content = content && content.replace(
      /<\/motion\.div>\s*\)\)\}\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      '</motion && motion.div>\n                ))}\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>'
    );
    
    fs && fs.writeFileSync('pages/careers && careers.tsx', content);
    console && console.log('✅ Fixed careers && careers.tsx');
    return true;
  } catch (error) {
    console && console.error('❌ Error fixing careers && careers.tsx:', error && error.message);
    return false;
  }
};

// Fix support && support.tsx
const fixSupport = () => {
  try {
    let content = fs && fs.readFileSync('pages/support && support.tsx', 'utf8');
    
    // Fix malformed JSX structure
    content = content && content.replace(
      /<\/motion\.div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*\);\s*}/g,
      '</motion && motion.div>\n          </div>\n        </div>\n      </section>\n    </div>\n  );\n}'
    );
    
    fs && fs.writeFileSync('pages/support && support.tsx', content);
    console && console.log('✅ Fixed support && support.tsx');
    return true;
  } catch (error) {
    console && console.error('❌ Error fixing support && support.tsx:', error && error.message);
    return false;
  }
};

// Fix webinars && webinars.tsx
const fixWebinars = () => {
  try {
    let content = fs && fs.readFileSync('pages/webinars && webinars.tsx', 'utf8');
    
    // Fix malformed JSX structure
    content = content && content.replace(
      /<\/Link>\s*<\/div>\s*\);\s*}/g,
      '</Link>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    );\n  }\n}'
    );
    
    fs && fs.writeFileSync('pages/webinars && webinars.tsx', content);
    console && console.log('✅ Fixed webinars && webinars.tsx');
    return true;
  } catch (error) {
    console && console.error('❌ Error fixing webinars && webinars.tsx:', error && error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console && console.log('Starting comprehensive syntax fixes...');
  
  const fixes = [
    fixAccessibility,
    fixApi,
    fixCareers,
    fixSupport,
    fixWebinars
  ];
  
  let successCount = 0;
  
  for (const fix of fixes) {
    if (fix()) {
      successCount++;
    }
  }
  
  console && console.log(`\n✅ Fixed ${successCount}/${fixes && fixes.length} files`);
  
  if (successCount > 0) {
    console && console.log('\n📝 Adding fixed files...');
    try {
      const { execSync } = await import('child_process');
      execSync('git add .', { stdio: 'inherit' });
      console && console.log('✅ Files added to staging area');
    } catch (error) {
      console && console.error('❌ Error adding files:', error && error.message);
    }
  }
};

main();