/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Add polyfill for globalThis
    require('globalthis/shim');
    
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
};

module.exports = nextConfig;
