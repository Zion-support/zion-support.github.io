import fs from 'fs';
#!/usr/bin/env node;
// Function to fix JSX structure issues;
function fixJSXStructure(content) {
  let fixed = content;
  // Fix common patterns where closing tags are missing;
  // Pattern: </div> followed by </> without proper nesting;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Pattern: </div> followed by </> with different nesting;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Pattern: missing closing divs before fragments;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Fix specific patterns for different nesting levels;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where there are too many closing divs;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n          </div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where there are too few closing divs;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Fix patterns where the main container is missing its closing tag;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where the content div is missing its closing tag;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  // Fix patterns where the text-center div is missing its closing tag;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/div>\s*<\/>/g, '$1</div>\n          </div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where the max-w-7xl div is missing its closing tag;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n        </div>\n      </div>\n    </>');
  // Fix patterns where the min-h-screen div is missing its closing tag;
  fixed = fixed.replace(/(\s*)<\/div>\s*<\/>/g, '$1</div>\n      </div>\n    </>');
  return fixed;
// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
const fixed = fixJSXStructure(content);
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      return true;
    return false;
  } catch (error) {
    return false;
// Main function;
async function main() {
  // Get all TypeScript/TSX files;
  const files = await glob('**/*.{ts,tsx}', {
    ignore: ['node_modules/**', 'dist/**', '.next/**', 'coverage/**'];
  });
  let fixedCount = 0;
    if (processFile(file)) {
      fixedCount++;
  });
  main().catch(console.error);