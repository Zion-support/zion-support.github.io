#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix missing closing tags for anchor elements
  fixed = fixed.replace(
    /<a\s+([^>]*?)href="([^"]*?)"([^>]*?)>([^<]*?)(?!<\/a>)/g,
    (match, before, href, after, text) => {
      if (text.trim() && !match.includes('</a>')) {
        return `<a ${before}href="${href}"${after}>${text}</a>`;
      }
      return match;
    }
  );
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(
    /<div\s+([^>]*?)>([^<]*?)(?!<\/div>)(?=\s*<\/section>|\s*<\/React\.Fragment>|\s*<\/div>|\s*<\/nav>|\s*<\/footer>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</div>')) {
        return `<div ${attrs}>${content}</div>`;
      }
      return match;
    }
  );
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(
    /<section\s+([^>]*?)>([^<]*?)(?!<\/section>)(?=\s*<\/div>|\s*<\/React\.Fragment>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</section>')) {
        return `<section ${attrs}>${content}</section>`;
      }
      return match;
    }
  );
  
  // Fix React.Fragment closing issues
  fixed = fixed.replace(
    /<React\.Fragment>([^<]*?)(?!<\/React\.Fragment>)(?=\s*<\/div>)/g,
    (match, content) => {
      if (content.trim() && !match.includes('</React.Fragment>')) {
        return `<React.Fragment>${content}</React.Fragment>`;
      }
      return match;
    }
  );
  
  // Fix missing closing tags for nav elements
  fixed = fixed.replace(
    /<nav\s+([^>]*?)>([^<]*?)(?!<\/nav>)(?=\s*<\/div>|\s*<\/React\.Fragment>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</nav>')) {
        return `<nav ${attrs}>${content}</nav>`;
      }
      return match;
    }
  );
  
  // Fix missing closing tags for footer elements
  fixed = fixed.replace(
    /<footer\s+([^>]*?)>([^<]*?)(?!<\/footer>)(?=\s*<\/div>|\s*<\/React\.Fragment>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</footer>')) {
        return `<footer ${attrs}>${content}</footer>`;
      }
      return match;
    }
  );
  
  return fixed;
}

// Function to fix specific problematic files
function fixSpecificFile(filePath, content) {
  // Fix blog page
  if (filePath.includes('blog/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\s*Blog\s*<\/h1>\s*<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\s*Stay updated with the latest news and insights\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Blog
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay updated with the latest news and insights
              </p>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix case studies page
  if (filePath.includes('case-studies/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\s*Case Studies\s*<\/h1>\s*<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\s*Real-world examples of our successful projects\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Real-world examples of our successful projects
              </p>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix privacy page
  if (filePath.includes('privacy/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\s*Privacy Policy\s*<\/h1>\s*<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\s*Your privacy is important to us\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us
              </p>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix terms page
  if (filePath.includes('terms/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\s*Terms of Service\s*<\/h1>\s*<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\s*Please read these terms carefully\s*<\/p>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully
              </p>
            </div>
          </div>
        </section>`
    );
  }
  
  return content;
}

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  console.log(`Processing ${files.length} TSX files...`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      let fixedContent = fixSpecificFile(file, originalContent);
      fixedContent = fixJSXStructure(fixedContent);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}