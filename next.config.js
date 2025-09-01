/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Webpack configuration to exclude automation files
  webpack: (config, { isServer }) => {
    // Exclude automation directory from build
    config.module.rules.push({
      test: /automation\/.*\.js$/,
      use: 'ignore-loader',
    });

    // Bundle analyzer (optional)
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new (require('@next/bundle-analyzer'))({
          enabled: true,
        })
      );
    }

    return config;
  },
};

export default nextConfig;