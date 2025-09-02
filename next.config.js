/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['page.tsx', 'page.jsx', 'page.ts', 'page.js'],

  // Exclude problematic files from build
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.js$/,
      include: /automation/,
      use: 'ignore-loader'
    });

    // Exclude backup directory and problematic pages
    config.module.rules.push({
      test: /\.(tsx|ts)$/,
      include: [
        /pages\/backup/,
        /pages\/advanced-cybersecurity\.tsx$/,
        /pages\/careers\.tsx$/,
        /pages\/case-studies\.page\.tsx$/,
        /pages\/case-studies\.tsx$/,
        /pages\/contact\.tsx$/
      ],
      use: 'ignore-loader'
    });

    // Exclude backup directory from page processing
    config.resolve.alias = {
      ...config.resolve.alias,
      '/pages/backup': false
    };

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
  
  // Image optimization
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
        /components\//,
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
};

export default nextConfig;
