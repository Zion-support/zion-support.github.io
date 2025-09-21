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
    
    // Fix for globalThis compatibility issues
    if (isServer) {
      config.plugins.push(
        new (require('webpack')).DefinePlugin({
          globalThis: 'global',
        })
      );
    }
    
    return config;
  },
};

module.exports = nextConfig;
