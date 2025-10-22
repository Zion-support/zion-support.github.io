#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix remaining TSX errors
function fixTsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix missing closing div tags in CTA sections
    const missingDivRegex = /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a[^>]*>Learn More<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (missingDivRegex.test(content)) {
      content = content.replace(missingDivRegex, (match) => {
        return match.replace('Learn More</a>\n            </div>\n          </div>', 'Learn More\n              </a>\n            </div>\n          </div>');
      });
      modified = true;
    }

    // Fix 2: Fix missing closing div tags in features sections
    const missingFeaturesDivRegex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">\s*{features\.map[^}]*}\s*<\/div>\s*<\/div>\s*<\/section>\s*<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">/g;
    if (missingFeaturesDivRegex.test(content)) {
      content = content.replace(missingFeaturesDivRegex, (match) => {
        return match.replace('</div>\n          </div>\n        </section>', '</div>\n            </div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 3: Fix malformed JSX structure in complex files
    const malformedJSXRegex = /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a[^>]*>Get Started<\/a>\s*<a[^>]*>View All Services<\/a>\s*<\/div>\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g;
    if (malformedJSXRegex.test(content)) {
      content = content.replace(malformedJSXRegex, (match) => {
        return match.replace('</a>\n            </div>\n          </div>', '</a>\n            </div>\n          </div>');
      });
      modified = true;
    }

    // Fix 4: Fix missing closing tags in blog and case studies
    const blogFixRegex = /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>\s*<h2[^>]*>Ready to Get Started\?<\/h2>/g;
    if (blogFixRegex.test(content)) {
      content = content.replace(blogFixRegex, (match) => {
        return match.replace('</section>\n            <h2', '</section>\n\n        {/* CTA Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h2');
      });
      modified = true;
    }

    // Fix 5: Fix missing closing tags in complex sections
    const complexSectionRegex = /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>\s*<h2[^>]*>Ready to Get Started\?<\/h2>/g;
    if (complexSectionRegex.test(content)) {
      content = content.replace(complexSectionRegex, (match) => {
        return match.replace('</section>\n            <h2', '</section>\n\n        {/* CTA Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h2');
      });
      modified = true;
    }

    // Fix 6: Fix missing closing tags in features grid
    const featuresGridRegex = /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">\s*{features\.map[^}]*}\s*<\/div>\s*<\/div>\s*<\/section>\s*<h2[^>]*>Ready to Get Started\?<\/h2>/g;
    if (featuresGridRegex.test(content)) {
      content = content.replace(featuresGridRegex, (match) => {
        return match.replace('</div>\n          </div>\n        </section>', '</div>\n            </div>\n          </div>\n        </section>');
      });
      modified = true;
    }

    // Fix 7: Fix missing closing tags in CTA sections
    const ctaSectionRegex = /<h2[^>]*>Ready to Get Started\?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a[^>]*>Start Your Project<\/a>\s*<a[^>]*>Learn More<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g;
    if (ctaSectionRegex.test(content)) {
      content = content.replace(ctaSectionRegex, (match) => {
        return match.replace('Learn More</a>\n            </div>\n          </div>', 'Learn More\n              </a>\n            </div>\n          </div>');
      });
      modified = true;
    }

    // Fix 8: Fix missing closing tags in complex blog structure
    const blogComplexRegex = /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>\s*<h2[^>]*>Ready to Get Started\?<\/h2>/g;
    if (blogComplexRegex.test(content)) {
      content = content.replace(blogComplexRegex, (match) => {
        return match.replace('</section>\n            <h2', '</section>\n\n        {/* CTA Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h2');
      });
      modified = true;
    }

    // Fix 9: Fix missing closing tags in case studies
    const caseStudiesRegex = /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>\s*<h2[^>]*>Ready to Get Started\?<\/h2>/g;
    if (caseStudiesRegex.test(content)) {
      content = content.replace(caseStudiesRegex, (match) => {
        return match.replace('</section>\n            <h2', '</section>\n\n        {/* CTA Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h2');
      });
      modified = true;
    }

    // Fix 10: Fix missing closing tags in careers
    const careersRegex = /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2[^>]*>.*?<\/h2>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<div className="grid[^>]*>.*?<\/div>\s*<\/div>\s*<\/section>\s*<h2[^>]*>Ready to Get Started\?<\/h2>/g;
    if (careersRegex.test(content)) {
      content = content.replace(careersRegex, (match) => {
        return match.replace('</section>\n            <h2', '</section>\n\n        {/* CTA Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto text-center">\n            <h2');
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