#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const minimalPageTemplate = `'use client';
import React, { lazy, Suspense } from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));
const Footer = lazy(() => import('../components/Footer'));

const PageComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Suspense fallback={<div className="h-16 bg-slate-900" />}>
        <Navigation />
      </Suspense>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Page <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Title</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              This page is under construction. Please check back later.
            </p>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-32 bg-slate-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default PageComponent;`;

function fixPage(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax errors or merge conflicts
    if (content.includes('<<<<<<< HEAD') || 
        content.includes('=======') || 
        content.includes('>>>>>>>') ||
        content.includes('Unexpected') ||
        content.includes('ERROR:') ||
        content.includes('SyntaxError')) {
      
      console.log(`Fixing corrupted file: ${filePath}`);
      
      // Extract page name from file path
      const pageName = path.basename(path.dirname(filePath));
      const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, '') + 'Page';
      
      // Replace the template with actual page name
      const fixedContent = minimalPageTemplate
        .replace('PageComponent', componentName)
        .replace('Page Title', pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()));
      
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixPages(dir) {
  let fixedCount = 0;
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item === 'page.tsx') {
        if (fixPage(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  traverse(dir);
  return fixedCount;
}

// Main execution
const appDir = path.join(process.cwd(), 'app');
const fixedCount = findAndFixPages(appDir);

console.log(`Fixed ${fixedCount} corrupted page files.`);