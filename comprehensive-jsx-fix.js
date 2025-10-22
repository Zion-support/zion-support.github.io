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
      return `<a ${before}href="${href}"${after}>${text}</a>`;
    }
  );
  
  // Fix missing closing tags for div elements
  fixed = fixed.replace(
    /<div\s+([^>]*?)>([^<]*?)(?!<\/div>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</div>')) {
        return `<div ${attrs}>${content}</div>`;
      }
      return match;
    }
  );
  
  // Fix missing closing tags for section elements
  fixed = fixed.replace(
    /<section\s+([^>]*?)>([^<]*?)(?!<\/section>)/g,
    (match, attrs, content) => {
      if (content.trim() && !match.includes('</section>')) {
        return `<section ${attrs}>${content}</section>`;
      }
      return match;
    }
  );
  
  // Fix React.Fragment closing issues
  fixed = fixed.replace(
    /<React\.Fragment>([^<]*?)(?!<\/React\.Fragment>)/g,
    (match, content) => {
      if (content.trim() && !match.includes('</React.Fragment>')) {
        return `<React.Fragment>${content}</React.Fragment>`;
      }
      return match;
    }
  );
  
  return fixed;
}

// Function to fix specific problematic files
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix about page
  if (filePath.includes('about/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto text-center">\s*<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\s*About Zion Tech Group\s*<\/h1>\s*<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\s*We are a leading provider of advanced AI and IT solutions, helping businesses transform through cutting-edge technology\.\s*<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a\s+href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\s*Get Started\s*<\/a>\s*<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*View All Services\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are a leading provider of advanced AI and IT solutions, helping businesses transform through cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    
    // Fix the features section
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto">\s*<div className="text-center mb-16">\s*<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">\s*Powerful Features\s*<\/h2>\s*<p className="text-lg text-gray-300">\s*Everything you need for success\s*<\/p>\s*<\/div>\s*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">\s*{features\.map\(\(feature, index\) => \(\s*<div key={index} className="bg-white\/5 rounded-2xl p-8 backdrop-blur-lg border border-white\/10 text-center">\s*<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">\s*<feature\.icon className="w-8 h-8 text-white" \/>\s*<\/div>\s*<h3 className="text-xl font-semibold text-white mb-3">{feature\.title}<\/h3>\s*<p className="text-gray-300">{feature\.description}<\/p>\s*<\/div>\s*\)\)}\s*<\/div>\s*<\/div>\s*<\/section>/g,
      `<section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
  
  // Fix accessibility page
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing imports
    content = content.replace(
      /import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';const AccessibilityPage/g,
      `import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, MousePointer, Volume2 } from 'lucide-react';

const AccessibilityPage`
    );
  }
  
  // Apply general JSX fixes
  content = fixJSXStructure(content);
  
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

export { fixJSXStructure, fixSpecificFile };