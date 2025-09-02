/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: false,
    newNextLinkBehavior: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,},
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
/\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
      ],
    });
    
    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  // Only treat TypeScript pages as routes to avoid SSR issues from JSX pages using react-router-dom
  pageExtensions: ['tsx', 'ts'],
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;
