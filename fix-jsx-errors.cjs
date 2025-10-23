#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing opening tags for common patterns
  fixed = fixed.replace(/\s*{item}\s*<\/Link>/g, (match) => {
    return `\n                <Link key={item} to={item} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  {item}
                </Link>`;
  });
  
  // Fix missing opening tags for buttons
  fixed = fixed.replace(/\s*<Home className="w-5 h-5 mr-2" \/>\s*Go Home\s*<\/Link>/g, (match) => {
    return `\n            <Link to="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>`;
  });
  
  fixed = fixed.replace(/\s*<ArrowLeft className="w-5 h-5 mr-2" \/>\s*Go Back\s*<\/button>/g, (match) => {
    return `\n            <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>`;
  });
  
  // Fix missing closing tags for sections
  fixed = fixed.replace(/(<section[^>]*>)([^<]*?)(<div[^>]*>)/g, (match, section, content, div) => {
    if (!fixed.includes('</section>')) {
      return match + '</section>';
    }
    return match;
  });
  
  // Fix missing closing tags for divs
  fixed = fixed.replace(/(<div[^>]*>)([^<]*?)(<div[^>]*>)/g, (match, div1, content, div2) => {
    if (!fixed.includes('</div>')) {
      return match + '</div>';
    }
    return match;
  });
  
  // Fix missing closing tags for ul
  fixed = fixed.replace(/(<ul[^>]*>)([^<]*?)(<li[^>]*>)/g, (match, ul, content, li) => {
    if (!fixed.includes('</ul>')) {
      return match + '</ul>';
    }
    return match;
  });
  
  // Fix missing closing tags for React.Fragment
  fixed = fixed.replace(/(<React\.Fragment>)([^<]*?)(<div[^>]*>)/g, (match, fragment, content, div) => {
    if (!fixed.includes('</React.Fragment>')) {
      return match + '</React.Fragment>';
    }
    return match;
  });
  
  // Fix missing closing tags for Helmet
  fixed = fixed.replace(/(<Helmet[^>]*>)([^<]*?)(<title[^>]*>)/g, (match, helmet, content, title) => {
    if (!fixed.includes('</Helmet>')) {
      return match + '</Helmet>';
    }
    return match;
  });
  
  // Fix malformed JSX structure
  fixed = fixed.replace(/\s*{([^}]*)}\s*<\/div>/g, (match, content) => {
    return `\n            <div className="flex flex-wrap gap-2 justify-center">
              {${content}}
            </div>`;
  });
  
  // Fix missing opening tags for common patterns
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/React\.Fragment>\s*<\/section>/g, (match) => {
    return `\n          </div>
        </div>
      </div>
    </React.Fragment>
  </section>`;
  });
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix 404.tsx specific issues
  if (filePath.includes('404.tsx')) {
    // Add missing imports
    if (!fixed.includes('import { Link }')) {
      fixed = fixed.replace(/import React from 'react';/, `import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';`);
    }
    
    // Fix the main structure
    fixed = fixed.replace(/(<div className="min-h-screen[^>]*>)([^<]*?)(<div className="container[^>]*>)/g, (match, outer, content, container) => {
      return `${outer}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {['/', '/about', '/services', '/contact'].map((item) => (
                <Link key={item} to={item} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Link>
            <button onClick={() => window.history.back()} className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>`;
    });
  }
  
  return fixed;
}

// Main function to process all files
function processFiles() {
  const pattern = 'app/**/*.tsx';
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  console.log(`Found ${files.length} files to process...`);
  
  files.forEach(file => {
    try {
      const filePath = path.join(process.cwd(), file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if file is already properly formatted
      if (content.includes('export default') && content.includes('return (') && content.includes('</div>')) {
        return;
      }
      
      let fixed = fixJSXErrors(content);
      fixed = fixSpecificFile(file, fixed);
      
      // Only write if content changed
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log('JSX error fixing completed!');
}

// Run the script
processFiles();