<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const path = require('path');

=======
/** @type {import(
  'next').NextConfig} */
>>>>>>> origin/main
const nextConfig = {
  reactStrictMode: true,
eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: false,
    newNextLinkBehavior: true,
  },
<<<<<<< HEAD
=======
  typescript: {
    ignoreBuildErrors: true,
  },
>>>>>>> origin/main
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
<<<<<<< HEAD
    ignoreBuildErrors: true,
  },
=======
    ignoreBuildErrors: true,},
>>>>>>> origin/main
  images: {
    domains: [
  'ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV ===
  'production',
  },
  webpack: (config) => {
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

    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, 'utils/next-router-shim.tsx'),
      'react-router': path.resolve(__dirname, 'utils/next-router-shim.tsx'),
    };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
<<<<<<< HEAD
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
=======
  // Try to exclude problematic directories at the Next.js level
  pageExtensions: [
  'tsx',
  'ts',
  'jsx',
  'js'],
>>>>>>> origin/main
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig;

