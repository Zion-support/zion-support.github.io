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
    /<div\s+([^>]*?)>([^<]*?)(?!<\/div>)(?=\s*<\/section>|\s*<\/React\.Fragment>|\s*<\/div>)/g,
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
  
  return fixed;
}

// Function to fix specific problematic files
function fixSpecificFile(filePath, content) {
  // Fix about page
  if (filePath.includes('about/page.tsx')) {
    // Fix the malformed structure
    content = content.replace(
      /<section className="py-20 px-4 sm:px-6 lg:px-8">\s*<div className="max-w-7xl mx-auto text-center">\s*<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">\s*About Zion Tech Group\s*<\/h1>\s*<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">\s*We are a leading provider of advanced AI and IT solutions, helping businesses transform through cutting-edge technology\.\s*<\/p>\s*<div className="flex flex-col sm:flex-row gap-4 justify-center">\s*<a\s+href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\s*Get Started\s*<\/a>\s*<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*View All Services\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g,
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
  
  // Fix database management page
  if (filePath.includes('database-management/page.tsx')) {
    // Fix the malformed object structure
    content = content.replace(
      /const features = \[\s*{\s*icon: Database,\s*title: 'Database Design',\s*description: 'Custom database architecture and design services\.'\s*},\s*{\s*icon: Shield,\s*title: 'Security',\s*description: 'Advanced security measures and compliance\.'\s*},\s*{\s*icon: Zap,\s*title: 'Performance',\s*description: 'Optimized performance and scalability\.'\s*}\s*\];/g,
      `const features = [
    {
      icon: Database,
      title: 'Database Design',
      description: 'Custom database architecture and design services.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Advanced security measures and compliance.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized performance and scalability.'
    }
  ];`
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