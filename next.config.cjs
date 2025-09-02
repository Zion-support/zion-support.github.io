/** @type {import(
  'next').NextConfig} */
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
<<<<<<< HEAD:next.config.js
=======
  typescript: {
    ignoreBuildErrors: true,},
>>>>>>> origin/main:next.config.cjs
  images: {
    domains: ['ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV ===
  'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
<<<<<<< HEAD:next.config.js
    // Keep default TS/JS handling; we already ignore build errors via config
=======
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
>>>>>>> origin/main:next.config.cjs
    
    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    
    return config;
  },
  // Try to exclude problematic directories at the Next.js level
  pageExtensions: [
  'tsx',
  'ts',
  'jsx',
  'js'],
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;
