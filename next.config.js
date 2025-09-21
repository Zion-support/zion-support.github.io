
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  // output: 'export',
  trailingSlash: true,
  
  // Disable ESLint and TypeScript checking during build to avoid parsing issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Add path alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '.'),
    };
    return config;
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
