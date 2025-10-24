import fs from 'fs';
#!/usr/bin/env node;
// Function to fix all remaining JSX issues;
function fixAllJSX(content) {let fixed = content;

  // Fix missing closing div tags - look for patterns where divs are not properly closed;
  // This is a more aggressive approach to fix JSX structure;
  // Fix common patterns where closing divs are missing;
  fixed = fixed.replace(/(\s*)<\/Link>\s*<\/div>\s*<\/div>\s*\);/g, '$1</Link>\n      </div>\n    </div>\n  );');

  // Fix patterns where the main container div is missing its closing tag;
  fixed = fixed.replace(/(\s*)<\/div>\s*\);/g, '$1</div>\n  );');

  // Fix patterns where multiple divs are missing closing tags;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*\);/g, '$1</div>\n    </div>\n  );');

  // Fix specific patterns for 5G pages;
  fixed = fixed.replace(/(\s*)<\/Link>\s*<\/div>\s*\);/g, '$1</Link>\n      </div>\n    </div>\n  );');

  // Fix footer patterns;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/footer>/g, '$1</div>\n      </div>\n    </footer>');

  // Fix patterns where the grid container is missing closing div;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/div>\s*<\/footer>/g, '$1</div>\n          </div>\n        </div>\n      </div>\n    </footer>');

  // Fix patterns where contact section is missing closing div;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/footer>/g, '$1</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </footer>');

  return fixed;

// Function to process a single file;
function processFile(filePath) {
  try {
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllJSX(content);
=======
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    // Fix malformed JSX patterns
    const fixes = [
      // Fix extra closing div tags
      {
        pattern: /<\/div><\/div>/g,
        replacement: '</div>',
      },
      // Fix malformed nav tags
      {
        pattern: /<\/nav><div className="[^"]*">/g,
        replacement: '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">',
      },
      // Fix malformed div tags with extra closing
      {
        pattern: /<div className="[^"]*">\s*<\/div><\/div>/g,
        replacement: (match) => {
          const className = match.match(/className="([^"]*)"/)?.[1]
          return `<div className="${className}">`
        }
      },
      // Fix malformed Link tags
      {
        pattern: /<\/Link><div className="[^"]*">/g,
        replacement: '<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">',
      },
      // Fix malformed span tags
      {
        pattern: /<\/span><br \/>[^<]*<\/span>/g,
        replacement: '</span><br />',
      },
      // Fix malformed h3 tags
      {
        pattern: /<\/h3><div className="[^"]*">\s*<\/div><\/div><Brain[^>]*\/>\s*<\/div>\s*<\/div>\s*AI Services\s*<\/h3>/g,
        replacement: '<h3 className="text-lg font-bold mb-6 text-cyan-400 flex items-center neon-text-enhanced">\n                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">\n                  <Brain className="w-5 h-5 text-white" />\n                </div>\n                AI Services\n              </h3>',
      },
      // Fix malformed button tags
      {
        pattern: /<\/button><div className="[^"]*">/g,
        replacement: '< className="'$2 />
      },
      // Fix malformed section tags
      {
        pattern: /<\/section><div className="[^"]*">/g,
        replacement: '< className="'$2 />
      },
      // Fix malformed main tags
      {
        pattern: /<\/main><div className="[^"]*">/g,
        replacement: '< className="'$2 />
      }
    ]
    for (const fix of fixes) {
      if (typeof fix.replacement === 'function') {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true
        }
      } else {
        const newContent = content.replace(fix.pattern, fix.replacement)
        if (newContent !== content) {
          content = newContent
          modified = true
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed malformed JSX in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error fixing malformed JSX in ${filePath}:`, error.message)
    return false
  }
}
>>>>>>> cursor/delete-records-30ea

    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed all JSX: ${filePath}`);
      return true;
    return false;
  } catch (error) {console.error(`Error processing ${filePath}:`, error.message);
    return false;

// Main function;
async function main() {console.log('Starting to fix all remaining JSX issues...');

  // Get all TypeScript/TSX files;
  const files = await glob('**/*.{ts,tsx}', {ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']});

  let fixedCount = 0;

    if (processFile(file)) {fixedCount++;});

  console.log(`\nFixed all JSX issues in ${fixedCount} files out of ${files.length} total files.`);

main().catch(console.error);