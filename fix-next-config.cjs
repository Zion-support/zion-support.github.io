#!/usr/bin/env node

const fs = require('fs');

// Create a clean next.config.js
const cleanNextConfig = `const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

try {
  let content = fs.readFileSync('next.config.js', 'utf8');
  
  // Remove all merge conflict markers and keep the incoming version (from PRs)
  content = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$2')
    .replace(/^<<<<<<< HEAD$/gm, '')
    .replace(/^=======$/gm, '')
    .replace(/^>>>>>>> [^\n]+$/gm, '');
  
  // Clean up any remaining artifacts
  content = content
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
    .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
    .replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
  
  fs.writeFileSync('next.config.js', content);
  console.log('✅ next.config.js merge conflicts resolved');
  
} catch (error) {
  console.log('❌ Error fixing next.config.js:', error.message);
}