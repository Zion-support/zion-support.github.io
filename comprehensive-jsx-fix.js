#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to fix JSX structure issues
function fixJSXStructure(content) {
  let fixed = content;
  
  // Fix self-closing div tags that were incorrectly closed
  fixed = fixed.replace(/<div\s+([^>]*?)><\/div>/g, '<div $1>');
  
  // Fix self-closing section tags that were incorrectly closed
  fixed = fixed.replace(/<section\s+([^>]*?)><\/section>/g, '<section $1>');
  
  // Fix self-closing a tags that were incorrectly closed
  fixed = fixed.replace(/<a\s+([^>]*?)><\/a>/g, '<a $1>');
  
  // Fix missing closing tags for a elements
  fixed = fixed.replace(/<a\s+([^>]*?)>\s*([^<]+?)\s*<\/div>/g, '<a $1>$2</a>');
  
  // Fix missing closing tags for div elements in specific patterns
  fixed = fixed.replace(/<div\s+([^>]*?)>\s*([^<]+?)\s*<\/section>/g, '<div $1>$2</div>');
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(/<section\s+([^>]*?)>\s*([^<]+?)\s*<\/div>/g, '<section $1>$2</section>');
  
  // Fix JSX structure for features map
  fixed = fixed.replace(
    /<div\s+key={index}\s+className="[^"]*">\s*<div\s+className="[^"]*">\s*<feature\.icon[^>]*\/>\s*<\/div>\s*<h3[^>]*>{feature\.title}<\/h3>\s*<p[^>]*>{feature\.description}<\/p>\s*<\/div>\s*\)\s*}\s*\)\s*<\/div>/g,
    '<div key={index} className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center">\n                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">\n                    <feature.icon className="w-8 h-8 text-white" />\n                  </div>\n                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>\n                  <p className="text-gray-300">{feature.description}</p>\n                </div>\n              ))}\n            </div>'
  );
  
  // Fix benefits section structure
  fixed = fixed.replace(
    /<div\s+key={index}\s+className="[^"]*">\s*<CheckCircle[^>]*\/>\s*<span[^>]*>{benefit}<\/span>\s*<\/div>\s*\)\s*}\s*\)\s*<\/div>/g,
    '<div key={index} className="flex items-center space-x-3">\n                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />\n                  <span className="text-gray-300">{benefit}</span>\n                </div>\n              ))}\n            </div>'
  );
  
  // Fix missing closing tags for React.Fragment
  if (fixed.includes('<React.Fragment>') && !fixed.includes('</React.Fragment>')) {
    fixed = fixed.replace(/(\s*<\/div>\s*<\/div>\s*)$/, '$1\n    </React.Fragment>');
  }
  
  // Fix missing closing tags for main div
  if (fixed.includes('<div className="min-h-screen') && !fixed.includes('</div>')) {
    fixed = fixed.replace(/(\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>)/, '\n      </div>$1');
  }
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath, content) {
  let fixed = content;
  
  // Fix about page specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix the main structure
    fixed = fixed.replace(
      /<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><\/div>\s*{\/\* Hero Section \*\/}\s*<section className="py-20 px-4 sm:px-6 lg:px-8"><\/section>/g,
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n        {/* Hero Section */}\n        <section className="py-20 px-4 sm:px-6 lg:px-8">'
    );
    
    // Fix hero section content
    fixed = fixed.replace(
      /<div className="max-w-7xl mx-auto text-center"><\/div>\s*<h1[^>]*>About Zion Tech Group<\/h1>\s*<p[^>]*>We are a leading provider[^<]*<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center"><\/div>/g,
      '<div className="max-w-7xl mx-auto text-center">\n            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\n              About Zion Tech Group\n            </h1>\n            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\n              We are a leading provider of advanced AI and IT solutions, helping businesses transform through cutting-edge technology.\n            </p>\n            <div className="flex flex-col sm:flex-row gap-4 justify-center">'
    );
    
    // Fix hero section buttons
    fixed = fixed.replace(
      /<a\s+href="\/contact"\s+className="[^"]*"><\/a>\s*Get Started\s*<\/a>\s*<a\s+href="\/services"\s+className="[^"]*"><\/a>\s*View All Services\s*<\/div>/g,
      '<a\n                href="/contact"\n                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\n                Get Started\n              </a>\n              <a\n                href="/services"\n                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">\n                View All Services\n              </a>\n            </div>'
    );
    
    // Fix features section
    fixed = fixed.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8"><\/section>\s*<div className="max-w-7xl mx-auto"><\/div>\s*<div className="text-center mb-16"><\/div>/g,
      '<section className="py-20 px-4 sm:px-6 lg:px-8">\n          <div className="max-w-7xl mx-auto">\n            <div className="text-center mb-16">'
    );
    
    // Fix features section content
    fixed = fixed.replace(
      /<h2[^>]*>Powerful Features<\/h2>\s*<p[^>]*>Everything you need for success<\/p>\s*<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"><\/div>/g,
      '<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">\n                Powerful Features\n              </h2>\n              <p className="text-lg text-gray-300">\n                Everything you need for success\n              </p>\n            </div>\n            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">'
    );
    
    // Fix CTA section
    fixed = fixed.replace(
      /<h2[^>]*>Ready to Get Started\?<\/h2>\s*<p[^>]*>Let us help you implement[^<]*<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center"><\/div>/g,
      '<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">\n              Ready to Get Started?\n            </h2>\n            <p className="text-lg text-gray-300 mb-8">\n              Let us help you implement this solution for your business.\n            </p>\n            <div className="flex flex-col sm:flex-row gap-4 justify-center">'
    );
    
    // Fix CTA buttons
    fixed = fixed.replace(
      /<a\s+href="\/contact"\s+className="[^"]*"><\/a>\s*Start Your Project\s*<\/a>\s*<a\s+href="\/services"\s+className="[^"]*"><\/a>\s*Learn More\s*<\/div>/g,
      '<a\n                href="/contact"\n                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\n                Start Your Project\n              </a>\n              <a\n                href="/services"\n                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">\n                Learn More\n              </a>\n            </div>'
    );
  }
  
  return fixed;
}

// Main function to process all files
async function main() {
  const pattern = 'app/**/*.tsx';
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} files to process...`);
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let fixed = fixJSXStructure(content);
      fixed = fixSpecificFile(file, fixed);
      
      if (content !== fixed) {
        fs.writeFileSync(file, fixed, 'utf8');
        console.log(`Fixed: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log('Comprehensive JSX fixing completed!');
}

main().catch(console.error);