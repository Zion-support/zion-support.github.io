#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix malformed JSX tags
function fixMalformedTags(content) {
  let fixed = content;
  
  // Fix malformed closing tags like </a>/a> -> </a>
  fixed = fixed.replace(/<\/a>\/a>/g, '</a>');
  fixed = fixed.replace(/<\/div>\/div>/g, '</div>');
  fixed = fixed.replace(/<\/section>\/section>/g, '</section>');
  fixed = fixed.replace(/<\/React\.Fragment>\/React\.Fragment>/g, '</React.Fragment>');
  
  // Fix malformed opening tags
  fixed = fixed.replace(/<</a>/g, '<a');
  fixed = fixed.replace(/<</div>/g, '<div');
  fixed = fixed.replace(/<</section>/g, '<section');
  
  return fixed;
}

// Function to fix missing closing tags
function fixMissingClosingTags(content) {
  let fixed = content;
  
  // Count opening and closing tags
  const openATags = (fixed.match(/<a\s+[^>]*>/g) || []).length;
  const closeATags = (fixed.match(/<\/a>/g) || []).length;
  
  const openDivTags = (fixed.match(/<div\s+[^>]*>/g) || []).length;
  const closeDivTags = (fixed.match(/<\/div>/g) || []).length;
  
  const openSectionTags = (fixed.match(/<section\s+[^>]*>/g) || []).length;
  const closeSectionTags = (fixed.match(/<\/section>/g) || []).length;
  
  const openFragmentTags = (fixed.match(/<React\.Fragment>/g) || []).length;
  const closeFragmentTags = (fixed.match(/<\/React\.Fragment>/g) || []).length;
  
  // Add missing closing tags
  if (openATags > closeATags) {
    const missingATags = openATags - closeATags;
    for (let i = 0; i < missingATags; i++) {
      fixed += '\n              </a>';
    }
  }
  
  if (openDivTags > closeDivTags) {
    const missingDivTags = openDivTags - closeDivTags;
    for (let i = 0; i < missingDivTags; i++) {
      fixed += '\n          </div>';
    }
  }
  
  if (openSectionTags > closeSectionTags) {
    const missingSectionTags = openSectionTags - closeSectionTags;
    for (let i = 0; i < missingSectionTags; i++) {
      fixed += '\n        </section>';
    }
  }
  
  if (openFragmentTags > closeFragmentTags) {
    const missingFragmentTags = openFragmentTags - closeFragmentTags;
    for (let i = 0; i < missingFragmentTags; i++) {
      fixed += '\n    </React.Fragment>';
    }
  }
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificPatterns(content, filePath) {
  let fixed = content;
  
  // Fix about page specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix the malformed closing tags in the hero section
    fixed = fixed.replace(
      /<a\s+href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\s*Get Started\s*<</a>/a>/g,
      '<a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Get Started</a>'
    );
    
    fixed = fixed.replace(
      /<a href="\/services" className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">View All Services<</a>/a>/g,
      '<a href="/services" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">View All Services</a>'
    );
    
    // Fix the CTA section
    fixed = fixed.replace(
      /<a\s+href="\/contact"\s+className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">\s*Start Your Project\s*<</a>/a>/g,
      '<a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">Start Your Project</a>'
    );
    
    fixed = fixed.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*Learn More\s*<</a>/a>/g,
      '<a href="/services" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">Learn More</a>'
    );
  }
  
  // Fix accessibility page specific issues
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing imports
    fixed = fixed.replace(
      /import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';const AccessibilityPage/g,
      `import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, MousePointer, Volume2 } from 'lucide-react';\n\nconst AccessibilityPage`
    );
  }
  
  // Fix chatbot builder specific issues
  if (filePath.includes('ai-chatbot-builder/page.tsx')) {
    // Fix malformed features array
    fixed = fixed.replace(
      /\s*description:\s*'Scale effortlessly across multiple regions with automatic load balancing\.'\s*}\s*description:\s*'Scale effortlessly across multiple regions with automatic load balancing\.'\s*}\s*\]/g,
      '    }'
    );
  }
  
  return fixed;
}

// Main function to process all files
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  for (const filePath of files) {
    try {
      console.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply specific pattern fixes first
      content = fixSpecificPatterns(content, filePath);
      
      // Apply malformed tag fixes
      content = fixMalformedTags(content);
      
      // Apply missing closing tag fixes
      content = fixMissingClosingTags(content);
      
      // Write the fixed content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log('Comprehensive JSX error fixing completed!');
}

main().catch(console.error);