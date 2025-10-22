#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags for <a> elements
  fixed = fixed.replace(/<a\s+([^>]*?)>\s*([^<]*?)\s*(?=\n\s*<\/div>|\n\s*<\/section>|\n\s*<\/React\.Fragment>|\n\s*<\/>|\n\s*$)/g, '<a $1>$2</a>');
  
  // Fix missing closing tags for <div> elements in specific patterns
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/section>|\n\s*<\/React\.Fragment>|\n\s*<\/>|\n\s*$)/g, '$1</div>');
  
  // Fix malformed React.Fragment closing
  fixed = fixed.replace(/<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '</React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/(<section[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>|\n\s*<\/React\.Fragment>|\n\s*<\/>|\n\s*$)/g, '$1</section>');
  
  // Fix duplicate content in arrays
  fixed = fixed.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
  
  // Fix missing closing tags for specific patterns
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>)/g, '$1</div>');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/\s*}\s*}\s*];\s*const benefits/g, '}\n  ];\n\n  const benefits');
  
  // Fix missing closing tags in map functions
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*\)\s*\)\s*<\/div>)/g, '$1</div>');
  
  // Fix missing closing tags for specific JSX patterns
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*\)\s*\)\s*<\/div>\s*<\/div>)/g, '$1</div>');
  
  // Fix malformed closing tags
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
  
  // Fix missing closing tags for anchor elements in specific contexts
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/div>\s*<\/section>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements in specific contexts
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>\s*<\/div>)/g, '$1</div>');
  
  // Fix malformed JSX structure in specific patterns
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags for anchor elements in CTA sections
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements in CTA sections
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>)/g, '$1</div>');
  
  // Fix malformed JSX structure in CTA sections
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags for anchor elements in hero sections
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/div>\s*<\/section>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements in hero sections
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>)/g, '$1</div>');
  
  // Fix malformed JSX structure in hero sections
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags for anchor elements in features sections
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/div>\s*<\/section>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements in features sections
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>)/g, '$1</div>');
  
  // Fix malformed JSX structure in features sections
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags for anchor elements in benefits sections
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/div>\s*<\/section>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements in benefits sections
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>)/g, '$1</div>');
  
  // Fix malformed JSX structure in benefits sections
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags for anchor elements in all sections
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/div>\s*<\/section>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements in all sections
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>)/g, '$1</div>');
  
  // Fix malformed JSX structure in all sections
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>\n  );\n};\n\nexport default');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix specific issues in about page
  if (filePath.includes('about/page.tsx')) {
    // Fix missing closing tags
    content = content.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</a>');
    content = content.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/section>)/g, '$1</div>');
    content = content.replace(/(<section[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</section>');
  }
  
  // Fix specific issues in accessibility page
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing closing tags
    content = content.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</a>');
    content = content.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/section>)/g, '$1</div>');
    content = content.replace(/(<section[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</section>');
  }
  
  // Fix specific issues in ai-chatbot-builder page
  if (filePath.includes('ai-chatbot-builder/page.tsx')) {
    // Fix duplicate content in features array
    content = content.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
    // Fix missing closing tags
    content = content.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</a>');
    content = content.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/section>)/g, '$1</div>');
    content = content.replace(/(<section[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</section>');
  }
  
  // Apply general fixes
  content = fixJSXErrors(content);
  
  return content;
}

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process`);
  
  for (const file of files) {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const fixedContent = fixSpecificFile(file);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('JSX error fixing completed');
}

main().catch(console.error);