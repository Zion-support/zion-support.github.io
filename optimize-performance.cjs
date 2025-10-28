const fs = require('fs');
const path = require('path');

// Function to optimize a React component file
function optimizeComponent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add React.memo to functional components that don't have it
    if (content.includes('function ') && !content.includes('React.memo') && !content.includes('export default function')) {
      // Check if it's a component (has JSX return)
      if (content.includes('return (') || content.includes('return <')) {
        content = content.replace(
          /function (\w+)\(/g,
          'const $1 = React.memo(function $1('
        );
        content = content.replace(
          /^export default (\w+);/m,
          'export default $1;'
        );
        modified = true;
      }
    }

    // Add useCallback to event handlers
    if (content.includes('onClick') && !content.includes('useCallback')) {
      // Add useCallback import if not present
      if (!content.includes('useCallback')) {
        content = content.replace(
          /import React, { ([^}]+) } from 'react';/,
          "import React, { $1, useCallback } from 'react';"
        );
      }
      
      // Wrap onClick handlers with useCallback
      content = content.replace(
        /onClick=\{([^}]+)\}/g,
        'onClick={useCallback($1, [])}'
      );
      modified = true;
    }

    // Add useMemo for expensive calculations
    if (content.includes('const ') && content.includes('=') && !content.includes('useMemo')) {
      // Add useMemo import if not present
      if (!content.includes('useMemo')) {
        content = content.replace(
          /import React, { ([^}]+) } from 'react';/,
          "import React, { $1, useMemo } from 'react';"
        );
      }
    }

    // Optimize image loading
    if (content.includes('<img')) {
      content = content.replace(
        /<img([^>]*?)>/g,
        '<img$1 loading="lazy" />'
      );
      modified = true;
    }

    // Add proper alt attributes to images
    if (content.includes('<img') && !content.includes('alt=')) {
      content = content.replace(
        /<img([^>]*?)>/g,
        '<img$1 alt="" />'
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Optimized: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
  return false;
}

// Function to optimize Next.js configuration
function optimizeNextConfig() {
  const configPath = path.join(__dirname, 'next.config.js');
  
  if (!fs.existsSync(configPath)) {
    const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Bundle optimization
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;`;

    fs.writeFileSync(configPath, nextConfig, 'utf8');
    console.log('Created optimized next.config.js');
    return true;
  }
  return false;
}

// Function to create a performance monitoring component
function createPerformanceMonitor() {
  const monitorPath = path.join(__dirname, 'app', 'components', 'PerformanceMonitor.tsx');
  
  if (!fs.existsSync(monitorPath)) {
    const monitorContent = `'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  return null;
}`;

    fs.writeFileSync(monitorPath, monitorContent, 'utf8');
    console.log('Created PerformanceMonitor component');
    return true;
  }
  return false;
}

// Function to recursively process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalOptimized = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Skip node_modules and .next directories
      if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
        totalOptimized += processDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (optimizeComponent(fullPath)) {
        totalOptimized++;
      }
    }
  }

  return totalOptimized;
}

// Main execution
console.log('Starting performance optimization...');

// Optimize Next.js config
optimizeNextConfig();

// Create performance monitor
createPerformanceMonitor();

// Optimize components
const appDir = path.join(__dirname, 'app');
const totalOptimized = processDirectory(appDir);

console.log(`Optimized ${totalOptimized} component files`);
console.log('Performance optimization complete!');