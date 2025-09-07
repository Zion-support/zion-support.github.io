/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ziontechgroup.com', 'localhost', 'images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
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
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;