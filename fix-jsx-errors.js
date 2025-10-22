#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix JSX syntax errors
function fixJSXErrors(content) {
  let fixed = content;
  
  // Fix missing closing tags for <a> elements
  fixed = fixed.replace(/<a\s+[^>]*href="[^"]*"[^>]*>([^<]*)</g, (match, text) => {
    if (!match.includes('</a>')) {
      return match + '</a>';
    }
    return match;
  });
  
  // Fix missing closing tags for <div> elements
  fixed = fixed.replace(/<div\s+[^>]*className="[^"]*"[^>]*>/g, (match) => {
    // This is a complex fix that needs to be handled more carefully
    return match;
  });
  
  // Fix malformed object syntax in features array
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*description:\s*'[^']*'\s*}\s*\]/g, (match) => {
    return match.replace(/\s*description:\s*'[^']*'\s*}\s*description:\s*'[^']*'\s*}/, '}');
  });
  
  // Fix missing closing tags for React.Fragment
  fixed = fixed.replace(/<React\.Fragment>/g, '<React.Fragment>');
  fixed = fixed.replace(/<\/React\.Fragment>/g, '</React.Fragment>');
  
  // Fix missing closing tags for sections
  const sectionMatches = fixed.match(/<section[^>]*>/g);
  if (sectionMatches) {
    const openSections = (fixed.match(/<section[^>]*>/g) || []).length;
    const closeSections = (fixed.match(/<\/section>/g) || []).length;
    
    if (openSections > closeSections) {
      // Add missing closing section tags
      const missingSections = openSections - closeSections;
      for (let i = 0; i < missingSections; i++) {
        fixed += '\n        </section>';
      }
    }
  }
  
  // Fix missing closing tags for divs
  const divMatches = fixed.match(/<div[^>]*>/g);
  if (divMatches) {
    const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
    const closeDivs = (fixed.match(/<\/div>/g) || []).length;
    
    if (openDivs > closeDivs) {
      // Add missing closing div tags
      const missingDivs = openDivs - closeDivs;
      for (let i = 0; i < missingDivs; i++) {
        fixed += '\n      </div>';
      }
    }
  }
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = content;
  
  // Fix about page specific issues
  if (filePath.includes('about/page.tsx')) {
    // Fix missing closing tag for the second <a> element
    fixed = fixed.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*View All Services\s*<\/div>/g,
      '<a href="/services" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">View All Services</a>\n            </div>'
    );
    
    // Fix missing closing tag for the second <a> element in CTA section
    fixed = fixed.replace(
      /<a\s+href="\/services"\s+className="border border-white\/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white\/10 transition-all duration-300">\s*Learn More\s*<\/div>/g,
      '<a href="/services" className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">Learn More</a>\n            </div>'
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
  files.forEach(filePath => {
    try {
      console.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply specific fixes first
      content = fixSpecificFile(filePath);
      
      // Apply general JSX fixes
      content = fixJSXErrors(content);
      
      // Write the fixed content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log('JSX error fixing completed!');
}

main().catch(console.error);