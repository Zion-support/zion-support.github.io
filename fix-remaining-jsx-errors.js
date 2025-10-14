#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX errors in a file
function fixJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing div for container
    const missingContainerClosingRegex = /<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (missingContainerClosingRegex.test(content)) {
      content = content.replace(missingContainerClosingRegex, (match) => {
        return match.replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix missing closing div for min-h-screen wrapper
    const missingMinHeightClosingRegex = /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (missingMinHeightClosingRegex.test(content)) {
      content = content.replace(missingMinHeightClosingRegex, (match) => {
        return match.replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix missing closing div for container in specific pattern
    const containerPatternRegex = /<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (containerPatternRegex.test(content)) {
      content = content.replace(containerPatternRegex, (match) => {
        return match.replace(
          /<div className="container mx-auto px-4 py-16">/,
          '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        <div className="container mx-auto px-4 py-16">'
        ).replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix missing closing div for min-h-screen wrapper in specific pattern
    const minHeightPatternRegex = /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (minHeightPatternRegex.test(content)) {
      content = content.replace(minHeightPatternRegex, (match) => {
        return match.replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix missing closing div for container in specific pattern with Helmet
    const helmetContainerPatternRegex = /<Helmet>[\s\S]*?<\/Helmet>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (helmetContainerPatternRegex.test(content)) {
      content = content.replace(helmetContainerPatternRegex, (match) => {
        return match.replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix missing closing div for container in specific pattern without Helmet
    const noHelmetContainerPatternRegex = /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (noHelmetContainerPatternRegex.test(content)) {
      content = content.replace(noHelmetContainerPatternRegex, (match) => {
        return match.replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix missing closing div for container in specific pattern with Helmet
    const helmetContainerPatternRegex2 = /<Helmet>[\s\S]*?<\/Helmet>\s*<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (helmetContainerPatternRegex2.test(content)) {
      content = content.replace(helmetContainerPatternRegex2, (match) => {
        return match.replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    // Fix missing closing div for container in specific pattern without Helmet
    const noHelmetContainerPatternRegex2 = /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\s*<div className="container mx-auto px-4 py-16">\s*<div className="text-center">\s*<h1[^>]*>.*?<\/h1>\s*<p[^>]*>.*?<\/p>\s*<\/div>\s*<\/div>\s*<\/>\s*\);\s*};/gs;
    if (noHelmetContainerPatternRegex2.test(content)) {
      content = content.replace(noHelmetContainerPatternRegex2, (match) => {
        return match.replace(
          /<\/div>\s*<\/div>\s*<\/>/,
          '</div>\n        </div>\n      </div>\n    </>'
        );
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting remaining JSX error fixes...');
  
  // Find all page.tsx files
  const pageFiles = await glob('app/**/page.tsx', { cwd: process.cwd() });
  
  let fixedCount = 0;
  
  for (const file of pageFiles) {
    if (fixJSXErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed JSX errors in ${fixedCount} files`);
  
  // Also fix the main App.tsx file
  if (fixJSXErrors('app/App.tsx')) {
    fixedCount++;
    console.log('Fixed App.tsx');
  }
  
  console.log(`Total files fixed: ${fixedCount}`);
}

main().catch(console.error);