import { Helmet } from 'react-helmet-async';
import React from 'react';
import fs from 'fs';
import path from 'path';
export { fixFileContent, processFile };
#!/usr/bin/env node;
// Function to fix common parsing errors;
function fixFileContent(content) 
  });
  // Fix specific common patterns;
  fixed = fixed.replace(/from-slate-900pt-20/g, 'from-slate-900 pt-20');
  fixed = fixed.replace(/text-whitemb-6/g, 'text-white mb-6');
  fixed = fixed.replace(/text-gray-300mb-8/g, 'text-gray-300 mb-8');
  fixed = fixed.replace(/mx-autow-fit/g, 'mx-auto w-fit');
  fixed = fixed.replace(/w-5 h-5ml-2/g, 'w-5 h-5 ml-2');
  fixed = fixed.replace(/border-tborder-slate-800/g, 'border-t border-slate-800');
  fixed = fixed.replace(/px-4 sm:px-6 lg:px-8py-12/g, 'px-4 sm:px-6 lg:px-8 py-12');
  fixed = fixed.replace(/grid-cols-1 md:grid-cols-4gap-8/g, 'grid-cols-1 md:grid-cols-4 gap-8');
  fixed = fixed.replace(/col-span-1md:col-span-2/g, 'col-span-1 md:col-span-2');
  // Fix malformed JSX - add missing opening tags;
  fixed = fixed.replace(/<div className="[^"]*" \/>/g, (match) => 
    return `<div className="${className}">`;
  });
  // Fix self-closing divs that should be opening tags;
  fixed = fixed.replace(/<div className="([^"]*)" \/>\s*<([^>]+)>/g, '<div className="$1">\n        <$2>');
  // Remove invalid 'use client' directive (this is a Vite project, not Next.js)
  fixed = fixed.replace(/'use client';\s*\n/g, '');
  // Fix JSX expressions that need parent elements;
  fixed = fixed.replace(/<Helmet \/>\s*<title>/g, '<Helmet>\n        <title>');
  fixed = fixed.replace(/<\/title>\s*<meta/g, '</title>\n        <meta');
  fixed = fixed.replace(/<\/meta>\s*<\/Helmet>/g, '</meta>\n      </Helmet>');
  return fixed;
// Function to process a single file;
function processFile(filePath) 
  } catch (error) 
  const files = await glob('**/*.{ts,tsx}', 
  });
  let fixedCount = 0;
    if (processFile(file)) 
  });
  // main().catch(console.error);

export default fixFileContent;
