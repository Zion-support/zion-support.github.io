#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in React/JSX files
function fixSyntaxErrors(content, filePath) {
  let fixed = content;
  
  // Fix unterminated string literals in meta descriptions
  fixed = fixed.replace(/content="([^"]*?)(?:\s*\/>|$)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `content="${content}" />`;
    }
    return match;
  });
  
  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/\w+><\w+>/g, '');
  fixed = fixed.replace(/<\/\w+>;\s*<\/\w+>/g, '');
  
  // Fix multiple closing braces and semicolons
  fixed = fixed.replace(/}\s*;\s*}\s*;\s*}\s*;\s*}\s*;\s*}\s*;\s*}/g, '}');
  fixed = fixed.replace(/}\s*;\s*}\s*;\s*}\s*;\s*}\s*;\s*}/g, '}');
  fixed = fixed.replace(/}\s*;\s*}\s*;\s*}\s*;\s*}/g, '}');
  fixed = fixed.replace(/}\s*;\s*}\s*;\s*}/g, '}');
  fixed = fixed.replace(/}\s*;\s*}/g, '}');
  
  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<[^>]*>\s*\)\s*;\s*<[^>]*>/g, (match) => {
    const openTag = match.match(/<(\w+)[^>]*>/);
    const closeTag = match.match(/<\/(\w+)>/);
    if (openTag && closeTag && openTag[1] === closeTag[1]) {
      return match.replace(/\)\s*;\s*/, '');
    }
    return match;
  });
  
  // Fix JSX expressions that need parent elements
  fixed = fixed.replace(/(<[^>]*>)\s*;\s*(<[^>]*>)/g, '$1$2');
  
  // Fix missing closing tags by adding proper structure
  if (fixed.includes('export default function') && !fixed.includes('</div>')) {
    // Try to fix common patterns
    fixed = fixed.replace(/(<div[^>]*>)([^<]*?)(<\/div>)/g, '$1$2$3');
  }
  
  // Fix malformed Helmet tags
  fixed = fixed.replace(/<Helmet>\s*<title>([^<]*)<\/title>\s*<meta[^>]*content="([^"]*)"[^>]*>\s*<\/Helmet>/g, 
    '<Helmet>\n        <title>$1</title>\n        <meta name="description" content="$2" />\n      </Helmet>');
  
  // Fix React.Fragment issues
  fixed = fixed.replace(/<React\.Fragment>\s*\)\s*;\s*<\/React\.Fragment>/g, '<React.Fragment>');
  
  // Fix missing closing div tags
  if (fixed.includes('<div') && !fixed.includes('</div>')) {
    fixed = fixed.replace(/(<div[^>]*>)([^<]*?)(<\/[^>]*>)/g, '$1$2$3</div>');
  }
  
  // Clean up extra semicolons and braces
  fixed = fixed.replace(/;\s*;\s*/g, ';');
  fixed = fixed.replace(/}\s*}\s*/g, '}');
  
  return fixed;
}

// Function to fix specific file patterns
function fixSpecificFile(content, filePath) {
  let fixed = content;
  
  // Fix 404.tsx
  if (filePath.includes('404.tsx')) {
    fixed = `// 404 - Basic implementation
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-300 text-xl mb-8">Page not found</p>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Go Home
        </a>
      </div>
    </div>
  );
}`;
  }
  
  // Fix App.tsx
  if (filePath.includes('App.tsx')) {
    fixed = `import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/BlogPage";
import DemoPage from "./pages/DemoPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/demo" element={<DemoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;`;
  }
  
  return fixed;
}

// Main function to process files
async function processFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'app/**/*.jsx',
    'app/**/*.js'
  ];
  
  let totalFiles = 0;
  let fixedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    
    for (const file of files) {
      totalFiles++;
      const filePath = path.join(process.cwd(), file);
      
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Apply specific fixes first
        content = fixSpecificFile(content, file);
        
        // Apply general syntax fixes
        content = fixSyntaxErrors(content, file);
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content, 'utf8');
          fixedFiles++;
          console.log(`Fixed: ${file}`);
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

// Run the fix
processFiles().catch(console.error);