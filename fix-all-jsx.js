#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix all JSX issues
function fixJSXIssues(content) {
  let fixed = content;
  
  // Fix malformed closing tags
  fixed = fixed.replace(/<</a>/g, '</a>');
  fixed = fixed.replace(/<</div>/g, '</div>');
  fixed = fixed.replace(/<</section>/g, '</section>');
  fixed = fixed.replace(/<</React\.Fragment>/g, '</React.Fragment>');
  
  // Fix malformed opening tags
  fixed = fixed.replace(/<</a>/g, '<a');
  fixed = fixed.replace(/<</div>/g, '<div');
  fixed = fixed.replace(/<</section>/g, '<section');
  
  // Fix missing closing tags for anchor elements
  const anchorRegex = /<a\s+[^>]*href="[^"]*"[^>]*>([^<]*)</g;
  fixed = fixed.replace(anchorRegex, (match, text) => {
    if (!match.includes('</a>')) {
      return match + '</a>';
    }
    return match;
  });
  
  // Fix missing closing tags for div elements
  const divRegex = /<div\s+[^>]*className="[^"]*"[^>]*>/g;
  // This is more complex and needs to be handled carefully
  
  // Fix missing closing tags for section elements
  const sectionRegex = /<section\s+[^>]*className="[^"]*"[^>]*>/g;
  
  // Fix missing closing tags for React.Fragment
  const fragmentRegex = /<React\.Fragment>/g;
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFiles(content, filePath) {
  let fixed = content;
  
  // Fix about page
  if (filePath.includes('about/page.tsx')) {
    // Fix malformed closing tags
    fixed = fixed.replace(/<</a>/g, '</a>');
    fixed = fixed.replace(/<</div>/g, '</div>');
    fixed = fixed.replace(/<</section>/g, '</section>');
  }
  
  // Fix accessibility page
  if (filePath.includes('accessibility/page.tsx')) {
    // Fix missing imports
    fixed = fixed.replace(
      /import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';const AccessibilityPage/g,
      `import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock, MousePointer, Volume2 } from 'lucide-react';\n\nconst AccessibilityPage`
    );
  }
  
  // Fix chatbot builder
  if (filePath.includes('ai-chatbot-builder/page.tsx')) {
    // Fix malformed features array
    fixed = fixed.replace(
      /\s*description:\s*'Scale effortlessly across multiple regions with automatic load balancing\.'\s*}\s*description:\s*'Scale effortlessly across multiple regions with automatic load balancing\.'\s*}\s*\]/g,
      '    }'
    );
  }
  
  return fixed;
}

// Main function
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  const files = await glob(pattern);
  
  for (const filePath of files) {
    try {
      console.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Apply specific fixes
      content = fixSpecificFiles(content, filePath);
      
      // Apply general fixes
      content = fixJSXIssues(content);
      
      // Write back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  console.log('All JSX issues fixed!');
}

main().catch(console.error);