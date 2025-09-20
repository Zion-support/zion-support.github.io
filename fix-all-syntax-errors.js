#!/usr/bin/env node,
import fs from 'fs';
import path from 'path';
console.log('🔧 Fixing all syntax errors...');
// Fix accessibility.tsx,
const fixAccessibility = () => {,
  try {,
    let content = fs.readFileSync('pages/accessibility.tsxutf8');
    // Fix the malformed JSX structure,
    content = content.replace(,
      /<h2 className="text-3xl font-bold text-gray-900 mb-6">\s*<\/div>\s*<\/div>\s*<\/section>\s*<section className="py-20 bg-white">/g;
      '<h2 className="text-3xl font-bold text-gray-900 mb-6">\n                  Accessibility Standards\n                </h2>\n                <p className="text-lg text-gray-600 max-w-3xl mx-auto">\n                  We follow international accessibility standards to ensure our platform is usable by everyone.\n                </p>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section className="py-20 bg-white">',
    );
    fs.writeFileSync('pages/accessibility.tsx', content);
    console.log('✅ Fixed accessibility.tsx');
    return true;
  } catch (error) {,
    console.error('❌ Error fixing accessibility.tsx:', error.message);
    return false;
  }
};
// Fix api.tsx,
const fixApi = () => {,
  try {,
    let content = fs.readFileSync('pages/api.tsxutf8');
    // Ensure proper closing structure,
    if (!content.includes('export default')) {,
      content += '\n\nexport default function API() {\n  return (\n    <div>\n      <h1>API Documentation</h1>\n    </div>\n  ),\n}';
    }
,
    fs.writeFileSync('pages/api.tsx', content);
    console.log('✅ Fixed api.tsx');
    return true;
  } catch (error) {,
    console.error('❌ Error fixing api.tsx:', error.message);
    return false;
  }
};
// Fix careers.tsx,
const fixCareers = () => {,
  try {,
    let content = fs.readFileSync('pages/careers.tsxutf8');
    // Fix malformed JSX structure,
    content = content.replace(,
      /<\/motion\.div>\s*))}\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g;
      '</motion.div>\n                ))}\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>',
    );
    fs.writeFileSync('pages/careers.tsx', content);
    console.log('✅ Fixed careers.tsx');
    return true;
  } catch (error) {,
    console.error('❌ Error fixing careers.tsx:', error.message);
    return false;
  }
};
// Fix support.tsx,
const fixSupport = () => {,
  try {,
    let content = fs.readFileSync('pages/support.tsxutf8');
    // Fix malformed JSX structure,
    content = content.replace(,
      /<\/motion\.div>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*),\s*}/g;
      '</motion.div>\n          </div>\n        </div>\n      </section>\n    </div>\n  ),\n}',
    );
    fs.writeFileSync('pages/support.tsx', content);
    console.log('✅ Fixed support.tsx');
    return true;
  } catch (error) {,
    console.error('❌ Error fixing support.tsx:', error.message);
    return false;
  }
};
// Fix webinars.tsx,
const fixWebinars = () => {,
  try {,
    let content = fs.readFileSync('pages/webinars.tsxutf8');
    // Fix malformed JSX structure,
    content = content.replace(,
      /<\/Link>\s*<\/div>\s*),\s*}/g;
      '</Link>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n      </div>\n    ),\n  }\n}',
    );
    fs.writeFileSync('pages/webinars.tsx', content);
    console.log('✅ Fixed webinars.tsx');
    return true;
  } catch (error) {,
    console.error('❌ Error fixing webinars.tsx:', error.message);
    return false;
  }
};
// Main execution,
const main = () => {,
  console.log('Starting comprehensive syntax fixes...');
  const fixes = [,
    fixAccessibility;
    fixApi;
    fixCareers;
    fixSupport;
    fixWebinars,
  ];
  let successCount = 0;
  for (const fix of fixes) {,
    if (fix()) {,
      successCount++;
    }
  }
,
  console.log(`\n✅ Fixed ${successCount}/${fixes.length} files`);
  if (successCount > 0) {,
    console.log('\n📝 Adding fixed files...');
    try {,
      const { execSync } = require('child_process');
      execSync('git add .', { stdio: 'inherit' ,});
      console.log('✅ Files added to staging area');
    } catch (error) {,
      console.error('❌ Error adding files:', error.message);
    }
  }
};
main();