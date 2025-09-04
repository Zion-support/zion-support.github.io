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
  typescript: {
    ignoreBuildErrors: true,},
  images: {
    domains: [
  'ziontechgroup.com'],
    unoptimized: true,
    formats: ['image/webp', 'image/avif']
  },
  compress: true,
  compiler: {
<<<<<<< HEAD:next.config.js
    removeConsole: process.env.NODE_ENV === 'production',
=======
    removeConsole: process.env.NODE_ENV ===
  'production',
>>>>>>> origin/main:next.config.cjs
  },
  webpack: (config, { dev, isServer }) => {
    // Exclude problematic directories from the build
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
<<<<<<< HEAD:next.config.js
        /\.backup/,
=======
/\.backup/,
>>>>>>> origin/main:next.config.cjs
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
<<<<<<< HEAD:next.config.js
        /contracts_backup/,
        /cypress/,
=======
        /hardhat/,
>>>>>>> origin/main:next.config.cjs
      ],
    });

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
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
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
