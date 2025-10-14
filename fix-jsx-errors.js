import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix unescaped apostrophes
  fixed = fixed.replace(/(?<!&)(?<!&#39;)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)'(?![^<]*>)/g, '&apos;');
  
  // Fix missing closing p tags - look for patterns where p tag is opened but not closed
  // This is a more complex fix that needs to be done carefully
  fixed = fixMissingClosingTags(fixed);
  
  // Fix malformed className attributes with spaces
  fixed = fixed.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1$2"');
  
  // Fix missing semicolons in JSX attributes
  fixed = fixed.replace(/className="([^"]*)"\s*$/gm, 'className="$1"');
  
  // Fix malformed Link components with missing closing tags
  fixed = fixed.replace(/<Link\s+([^>]*?)\s*>\s*([^<]*?)\s*<\/Link>/g, (match, attrs, content) => {
    // Check if attributes are properly formatted
    if (attrs.includes(';')) {
      attrs = attrs.replace(/;/g, '');
    }
    return `<Link ${attrs}>${content}</Link>`;
  });
  
  return fixed;
}

// Function to fix missing closing tags
function fixMissingClosingTags(content) {
  const lines = content.split('\n');
  const fixedLines = [];
  const tagStack = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Track opening tags
    const openTags = line.match(/<(\w+)(?:\s[^>]*)?(?!\/)>/g);
    if (openTags) {
      openTags.forEach(tag => {
        const tagName = tag.match(/<(\w+)/)[1];
        if (tagName !== 'img' && tagName !== 'br' && tagName !== 'hr' && tagName !== 'input' && tagName !== 'meta' && tagName !== 'link') {
          tagStack.push(tagName);
        }
      });
    }
    
    // Track closing tags
    const closeTags = line.match(/<\/(\w+)>/g);
    if (closeTags) {
      closeTags.forEach(tag => {
        const tagName = tag.match(/<\/(\w+)>/)[1];
        const index = tagStack.lastIndexOf(tagName);
        if (index !== -1) {
          tagStack.splice(index, 1);
        }
      });
    }
    
    // Check for unclosed p tags specifically
    if (line.includes('<p') && !line.includes('</p>') && !line.includes('/>')) {
      // Look ahead to see if there's a closing tag in the next few lines
      let foundClosing = false;
      for (let j = i + 1; j < Math.min(i + 5, lines.length); j++) {
        if (lines[j].includes('</p>')) {
          foundClosing = true;
          break;
        }
        if (lines[j].includes('<p') && !lines[j].includes('</p>')) {
          break; // Another p tag opened, stop looking
        }
      }
      
      if (!foundClosing) {
        // Add closing p tag at the end of the line
        line = line.trim() + '</p>';
      }
    }
    
    fixedLines.push(line);
  }
  
  return fixedLines.join('\n');
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix 404 page structure
  if (filePath.includes('404/page.tsx')) {
    fixed = fix404Page(fixed);
  }
  
  // Fix 5G consulting page
  if (filePath.includes('5g-consulting/page.tsx')) {
    fixed = fix5GConsultingPage(fixed);
  }
  
  // Fix 5G data analytics page
  if (filePath.includes('5g-data-analytics/page.tsx')) {
    fixed = fix5GDataAnalyticsPage(fixed);
  }
  
  // Fix 5G edge computing page
  if (filePath.includes('5g-edge-computing/page.tsx')) {
    fixed = fix5GEdgeComputingPage(fixed);
  }
  
  // Fix 5G performance page
  if (filePath.includes('5g-performance/page.tsx')) {
    fixed = fix5GPerformancePage(fixed);
  }
  
  return fixed;
}

function fix404Page(content) {
  return content.replace(
    /<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">[\s\S]*?<\/div>/g,
    `<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of experts delivers cutting-edge solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>
            </div>`
  );
}

function fix5GConsultingPage(content) {
  return content.replace(
    /className="inline-flex items-center text-blue-600 hover: text-blue-800 font-medium"/g,
    'className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"'
  ).replace(
    /className="inline-flex items-center bg-blue-600 hover: bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors";/g,
    'className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"'
  );
}

function fix5GDataAnalyticsPage(content) {
  return content.replace(
    /Let's discuss how our 5G data analytics services can help your business succeed\./g,
    'Let&apos;s discuss how our 5G data analytics services can help your business succeed.'
  );
}

function fix5GEdgeComputingPage(content) {
  return content.replace(
    /<div className="bg-green-50 border border-green-200 rounded-lg p-6">[\s\S]*?<div className="bg-purple-50 border border-purple-200 rounded-lg p-6">[\s\S]*?<\/div>/g,
    `<div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your needs.
                </p>
              </div>`
  );
}

function fix5GPerformancePage(content) {
  return content.replace(
    /5gPerformance Services/g,
    '5G Performance Services'
  ).replace(
    /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g,
    `</div>
        </div>
      </div>
    </div>`
  );
}

// Main function to process all files
async function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process`);
  
  let fixedCount = 0;
  
  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = fixJSXErrors(content);
      fixed = fixSpecificFile(filePath, fixed);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
processFiles().catch(console.error);