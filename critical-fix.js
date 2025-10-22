#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix critical JSX patterns
function fixCriticalPatterns(content) {
  let fixed = content;
  
  // Fix malformed features array with duplicate content
  fixed = fixed.replace(/\s*description:\s*'[^']*?'\s*}\s*}\s*];/g, '}\n  ];');
  
  // Fix missing closing tags for anchor elements
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/section>)/g, '$1</div>');
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(/(<section[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>)/g, '$1</section>');
  
  // Fix malformed React.Fragment closing
  fixed = fixed.replace(/<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '</React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags in specific patterns
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>)/g, '$1</div>');
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/\s*\)\s*\)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>\s*\)\s*;\s*}\s*;\s*export default/g, '\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>\n  );\n};\n\nexport default');
  
  // Fix missing closing tags for anchor elements in CTA sections
  fixed = fixed.replace(/(<a[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/div>\s*<\/section>)/g, '$1</a>');
  
  // Fix missing closing tags for div elements in CTA sections
  fixed = fixed.replace(/(<div[^>]*?>\s*[^<]*?)\s*(?=\n\s*<\/div>\s*<\/section>)/g, '$1</div>');
  
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

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process`);
  
  for (const file of files) {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const fixedContent = fixCriticalPatterns(originalContent);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('Critical JSX error fixing completed');
}

main().catch(console.error);