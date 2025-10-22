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
  // Fix ai-document-processor page
  if (filePath.includes('ai-document-processor/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix ai-fraud-detection page
  if (filePath.includes('ai-fraud-detection/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix ai-image-recognition page
  if (filePath.includes('ai-image-recognition/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix ai-legal-assistant page
  if (filePath.includes('ai-legal-assistant/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix ai-predictive-maintenance page
  if (filePath.includes('ai-predictive-maintenance/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix ai-social-media-manager page
  if (filePath.includes('ai-social-media-manager/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix ai-video-generator page
  if (filePath.includes('ai-video-generator/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix ai-voice-assistant page
  if (filePath.includes('ai-voice-assistant/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started<\/a>\s*<a href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
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