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
    
    // globalThis polyfill is imported at the top level
    
    // Disable PostCSS processing temporarily
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('css')) {
        rule.use = rule.use || [];
        rule.use = rule.use.map((use) => {
          if (typeof use === 'string' && use.includes('postcss')) {
            return 'css-loader';
          }
          return use;
        });
      }
    });
    
    return config;
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
