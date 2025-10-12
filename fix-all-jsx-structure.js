#!/usr/bin/env node
import fs from 'fs';
import { glob } from 'glob';
// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  // Fix common patterns where closing tags are missing
  // Pattern: </div> followed by </> without proper nesting
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Pattern: </div> followed by </> with different nesting
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Pattern: missing closing divs before fragments
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Fix specific patterns for different nesting levels
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where there are too many closing divs
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n          </div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where there are too few closing divs
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Fix patterns where the main container is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where the content div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Fix patterns where the text-cent-e-r div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n          </div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where the max-w-7xl div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where the min-h-screen div is missing its closing tag
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  return fixed;
}
// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixJSXStructure(content);
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed JSX structure: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}
// Main function
async function main() {
}
  console.log('Starting to fix all JSX structure issues...');
  // Get all TypeScript/TSX files
}
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**']
  });
  let fixedCount = 0;
  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });
  console.log(`\nFixed JSX structure in ${fixedCount} files out of ${files.length} total files.`);
}
main().catch(console.error);