#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common TSX errors
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Remove duplicate closing tags and malformed JSX
    const duplicateClosingTagRegex = /<\/a>\s*<\/a>/g;
    if (duplicateClosingTagRegex.test(content)) {
      content = content.replace(duplicateClosingTagRegex, '</a>');
      modified = true;
    }

    // Fix 2: Fix malformed closing div tags
    const malformedDivRegex = /<\/a>\s*<\/div>\s*<\/div>/g;
    if (malformedDivRegex.test(content)) {
      content = content.replace(malformedDivRegex, '</a>\n            </div>\n          </div>');
      modified = true;
    }

    // Fix 3: Fix missing section closing tags
    const missingSectionRegex = /<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (missingSectionRegex.test(content)) {
      content = content.replace(missingSectionRegex, '</div>\n        </section>\n      </div>\n    </React.Fragment>');
      modified = true;
    }

    // Fix 4: Fix malformed object properties (duplicate description)
    const duplicateDescriptionRegex = /description:\s*'[^']*'\s*}\s*description:\s*'[^']*'\s*}\s*\]/g;
    if (duplicateDescriptionRegex.test(content)) {
      content = content.replace(duplicateDescriptionRegex, (match) => {
        // Extract the first description and remove the duplicate
        const firstDesc = match.match(/description:\s*'([^']*)'/)[1];
        return `description: '${firstDesc}'\n    }\n  ];`;
      });
      modified = true;
    }

    // Fix 5: Fix missing closing tags in JSX
    const missingClosingTagRegex = /<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (missingClosingTagRegex.test(content)) {
      content = content.replace(missingClosingTagRegex, '</a>\n            </div>\n          </div>\n        </section>');
      modified = true;
    }

    // Fix 6: Fix malformed paragraph closing
    const malformedParagraphRegex = /Everything you need for success\s*<\/p>\s*<\/div>/g;
    if (malformedParagraphRegex.test(content)) {
      content = content.replace(malformedParagraphRegex, 'Everything you need for success\n              </p>\n            </div>');
      modified = true;
    }

    // Fix 7: Fix missing section wrapper for CTA
    const ctaSectionRegex = /<\/section>\s*<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">/g;
    if (ctaSectionRegex.test(content)) {
      content = content.replace(ctaSectionRegex, '</section>\n\n        {/* CTA Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">');
      modified = true;
    }

    // Fix 8: Fix missing closing tags for CTA section
    const ctaClosingRegex = /Learn More\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (ctaClosingRegex.test(content)) {
      content = content.replace(ctaClosingRegex, 'Learn More\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
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

// Function to recursively find all TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to check...`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixTsxFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files.`);