#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags for <a> elements
  fixed = fixed.replace(/<a\s+([^>]*?)href="([^"]*?)"([^>]*?)>([^<]*?)<\/a>/g, (match, before, href, after, text) => {
    // Check if it's already properly closed
    if (match.includes('</a>')) {
      return match;
    }
    return `<a ${before}href="${href}"${after}>${text}</a>`;
  });
  
  // Fix unclosed <a> tags that should be self-closing or properly closed
  fixed = fixed.replace(/<a\s+([^>]*?)href="([^"]*?)"([^>]*?)>([^<]*?)(?!<\/a>)/g, (match, before, href, after, text) => {
    return `<a ${before}href="${href}"${after}>${text}</a>`;
  });
  
  // Fix malformed object definitions with duplicate properties
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*\}\s*description:\s*'[^']*'\s*\}\s*\]/g, (match) => {
    // Extract the first description and close properly
    const firstDesc = match.match(/description:\s*'([^']*)'/);
    if (firstDesc) {
      return `description: '${firstDesc[1]}'\n    }\n  ];`;
    }
    return match;
  });
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(/<div\s+([^>]*?)>([^<]*?)(?!<\/div>)/g, (match, attrs, content) => {
    if (content.trim() && !match.includes('</div>')) {
      return `<div ${attrs}>${content}</div>`;
    }
    return match;
  });
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(/<section\s+([^>]*?)>([^<]*?)(?!<\/section>)/g, (match, attrs, content) => {
    if (content.trim() && !match.includes('</section>')) {
      return `<section ${attrs}>${content}</section>`;
    }
    return match;
  });
  
  // Fix React.Fragment closing issues
  fixed = fixed.replace(/<React\.Fragment>([^<]*?)(?!<\/React\.Fragment>)/g, (match, content) => {
    if (content.trim() && !match.includes('</React.Fragment>')) {
      return `<React.Fragment>${content}</React.Fragment>`;
    }
    return match;
  });
  
  // Fix missing closing tags in general
  fixed = fixed.replace(/<(\w+)([^>]*?)>([^<]*?)(?!<\/(\1)>)/g, (match, tag, attrs, content) => {
    // Skip self-closing tags and already closed tags
    if (match.endsWith('/>') || match.includes(`</${tag}>`)) {
      return match;
    }
    
    // Only fix if content is not empty and doesn't contain nested tags
    if (content.trim() && !content.includes('<')) {
      return `<${tag}${attrs}>${content}</${tag}>`;
    }
    
    return match;
  });
  
  return fixed;
}

// Function to fix specific file issues
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix about page specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix the malformed closing tag issue
    content = content.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*View All Services\s*<\/div>/g,
      '<a href="/services" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">View All Services</a>'
    );
    
    // Fix the missing closing tag for the section
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-4xl mx-auto text-center">\s*<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">\s*Ready to Get Started\?\s*<\/h2>\s*<p className="text-lg text-gray-300 mb-8">\s*Let us help you implement this solution for your business\.\s*<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a\s+href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\s*Start Your Project\s*<\/a>\s*<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*Learn More\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </section>`
    );
  }
  
  // Fix accessibility page specific issues
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing imports
    content = content.replace(
      /import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';const AccessibilityPage/g,
      `import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, MousePointer, Volume2 } from 'lucide-react';

const AccessibilityPage`
    );
    
    // Fix missing closing tags
    content = content.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*View All Services\s*<\/div>/g,
      '<a href="/services" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">View All Services</a>'
    );
    
    // Fix the malformed closing structure
    content = content.replace(
      /<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">\s*{features\.map\(\(feature, index\) => \(\s*<div key={index} className="bg-white\/5 rounded-2xl p-8 backdrop-blur-lg border border-white\/10 text-center">\s*<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">\s*<feature\.icon className="w-8 h-8 text-white" \/>\s*<\/div>\s*<h3 className="text-xl font-semibold text-white mb-3">{feature\.title}<\/h3>\s*<p className="text-gray-300">{feature\.description}<\/p>\s*<\/div>\s*\)\)}\s*<\/div>\s*<\/section>/g,
      `<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>`
    );
  }
  
  // Apply general JSX fixes
  content = fixJSXErrors(content);
  
  return content;
}

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  console.log(`Found ${files.length} TSX files to process...`);
  
  let fixedCount = 0;
  
  files.forEach(file => {
    try {
      const originalContent = fs.readFileSync(file, 'utf8');
      const fixedContent = fixSpecificFile(file);
      
      if (originalContent !== fixedContent) {
        fs.writeFileSync(file, fixedContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\nFixed ${fixedCount} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixJSXErrors, fixSpecificFile };