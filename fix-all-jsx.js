import fs from 'fs';
#!/usr/bin/env node;
// Function to fix all remaining JSX issues;
function fixAllJSX(content) {
  let fixed = content;
  
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
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllJSX(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed all JSX: ${filePath}`);
      return true;
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;

// Main function;
async function main() {
  console.log('Starting to fix all remaining JSX issues...');
  
  // Get all TypeScript/TSX files;
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**'])
  });
  
  let fixedCount = 0;
  
    if (processFile(file)) {
      fixedCount++;
  });
  
  console.log(`\nFixed all JSX issues in ${fixedCount} files out of ${files.length} total files.`);

main().catch(console.error);