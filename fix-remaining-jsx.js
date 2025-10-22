#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix specific JSX patterns
function fixJSXPatterns(content) {
  let fixed = content;
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/<div\s+([^>]*?)>\s*([^<]+?)\s*<\/section>/g, '<div $1>$2</div>');
  fixed = fixed.replace(/<div\s+([^>]*?)>\s*([^<]+?)\s*<\/div>\s*<\/section>/g, '<div $1>$2</div>');
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(/<section\s+([^>]*?)>\s*([^<]+?)\s*<\/div>/g, '<section $1>$2</section>');
  
  // Fix missing closing tags for a elements
  fixed = fixed.replace(/<a\s+([^>]*?)>\s*([^<]+?)\s*<\/div>/g, '<a $1>$2</a>');
  
  // Fix missing closing tags for React.Fragment
  if (fixed.includes('<React.Fragment>') && !fixed.includes('</React.Fragment>')) {
    fixed = fixed.replace(/(\s*<\/div>\s*<\/div>\s*)$/, '$1\n    </React.Fragment>');
  }
  
  // Fix missing closing tags for main div
  if (fixed.includes('<div className="min-h-screen') && !fixed.includes('</div>')) {
    fixed = fixed.replace(/(\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>)/, '\n      </div>$1');
  }
  
  // Fix common patterns where content is outside of proper JSX structure
  fixed = fixed.replace(
    /<div className="min-h-screen[^>]*><\/div>\s*{\/\* Hero Section \*\/}\s*<section[^>]*><\/section>/g,
    '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        {/* Hero Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">'
  );
  
  // Fix hero section content structure
  fixed = fixed.replace(
    /<div className="max-w-7xl mx-auto text-center"><\/div>\s*<h1[^>]*>([^<]*)<\/h1>\s*<p[^>]*>([^<]*)<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center"><\/div>/g,
    '<div className="max-w-7xl mx-auto text-center">\n            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n              $1\n            </h1>\n            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n              $2\n            </p>\n            <div className="flex flex-col sm:flex-row gap-4 justify-center">'
  );
  
  // Fix button structure
  fixed = fixed.replace(
    /<a\s+href="([^"]*)"\s+className="([^"]*)"><\/a>\s*([^<]+?)\s*<\/a>\s*<a\s+href="([^"]*)"\s+className="([^"]*)"><\/a>\s*([^<]+?)\s*<\/div>/g,
    '<a\n                href="$1"\n                className="$2">\n                $3\n              </a>\n              <a\n                href="$4"\n                className="$5">\n                $6\n              </a>\n            </div>'
  );
  
  // Fix features section structure
  fixed = fixed.replace(
    /<section className="py-20 px-4 sm:px-6 lg:px-8"><\/section>\s*<div className="max-w-7xl mx-auto"><\/div>\s*<div className="text-center mb-16"><\/div>/g,
    '<section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center mb-16">'
  );
  
  // Fix features section content
  fixed = fixed.replace(
    /<h2[^>]*>([^<]*)<\/h2>\s*<p[^>]*>([^<]*)<\/p>\s*<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><\/div>/g,
    '<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">\n                $1\n              </h2>\n              <p className="text-lg text-gray-300">\n                $2\n              </p>\n            </div>\n            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">'
  );
  
  // Fix CTA section structure
  fixed = fixed.replace(
    /<h2[^>]*>([^<]*)<\/h2>\s*<p[^>]*>([^<]*)<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center"><\/div>/g,
    '<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">\n              $1\n            </h2>\n            <p className="text-lg text-gray-300 mb-8">\n              $2\n            </p>\n            <div className="flex flex-col sm:flex-row gap-4 justify-center">'
  );
  
  // Fix duplicate array entries
  fixed = fixed.replace(/\s+description:\s*'[^']*'\s*}\s*}\s*];/g, '  }];');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/\s*}\s*}\s*];\s*const\s+benefits/g, '  }];\n\n  const benefits');
  
  // Fix missing closing tags in JSX maps
  fixed = fixed.replace(/(<div[^>]*>.*?<\/div>)\s*\)\s*}\s*\)\s*<\/div>\s*<\/section>/g, '$1\n                </div>\n              ))}\n            </div>\n          </div>\n        </section>');
  
  // Fix missing closing tags for div elements in specific patterns
  fixed = fixed.replace(/(<div[^>]*>.*?<span[^>]*>.*?<\/span>)\s*\)\s*}\s*\)\s*<\/div>\s*<\/section>/g, '$1\n                </div>\n              ))}\n            </div>\n          </div>\n        </section>');
  
  return fixed;
}

// Main function to process all files
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const fixed = fixJSXPatterns(content);
      
      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('Remaining JSX fixing completed!');
}

main().catch(console.error);