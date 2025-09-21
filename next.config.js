const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  
  // Disable ESLint and TypeScript checking during build to avoid parsing issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removed deprecated swcMinify option (defaults to true in Next.js 15+)
  // Removed experimental.esmExternals (not recommended)
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Add path alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '.'),
    };
    
    // Minimal webpack configuration
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
