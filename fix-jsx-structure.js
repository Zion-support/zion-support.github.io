#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix JSX structure issues
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix missing closing div tags in hero sections
    const heroSectionRegex = /<div className="max-w-7xl mx-auto text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a[^>]*>Get Started<\/a>\s*<a[^>]*>View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (heroSectionRegex.test(content)) {
      content = content.replace(heroSectionRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 2: Fix missing closing div tags in features sections
    const featuresSectionRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (featuresSectionRegex.test(content)) {
      content = content.replace(featuresSectionRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 3: Fix missing closing div tags in benefits sections
    const benefitsSectionRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (benefitsSectionRegex.test(content)) {
      content = content.replace(benefitsSectionRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 4: Fix missing closing div tags in CTA sections
    const ctaSectionRegex = /<div className="max-w-7xl mx-auto text-center">\s*<h2[^>]*>Ready to Get Started\?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a[^>]*>Start Your Project<\/a>\s*<a[^>]*>Learn More<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (ctaSectionRegex.test(content)) {
      content = content.replace(ctaSectionRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 5: Fix missing closing div tags in complex structures
    const complexStructureRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (complexStructureRegex.test(content)) {
      content = content.replace(complexStructureRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 6: Fix missing closing div tags in blog structure
    const blogStructureRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (blogStructureRegex.test(content)) {
      content = content.replace(blogStructureRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 7: Fix missing closing div tags in case studies
    const caseStudiesRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (caseStudiesRegex.test(content)) {
      content = content.replace(caseStudiesRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 8: Fix missing closing div tags in careers
    const careersRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (careersRegex.test(content)) {
      content = content.replace(careersRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 9: Fix missing closing div tags in accessibility
    const accessibilityRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (accessibilityRegex.test(content)) {
      content = content.replace(accessibilityRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 10: Fix missing closing div tags in cookies
    const cookiesRegex = /<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>/g;
    if (cookiesRegex.test(content)) {
      content = content.replace(cookiesRegex, (match) => {
        return match.replace('</div>\n        </section>', '</div>\n          </div>\n        </section>');
      });
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