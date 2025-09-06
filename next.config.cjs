<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
=======
<<<<<<< HEAD
/** @type {import(
  'next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
=======
  reactStrictMode: false,
  swcMinify: false,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    forceSwcTransforms: false},
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
  },
  experimental: {
    esmExternals: false,
    newNextLinkBehavior: true},
  typescript: {
    ignoreBuildErrors: true},
  eslint: {
    ignoreDuringBuilds: true},
  typescript: {
    ignoreBuildErrors: true},
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true},
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'},
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
        /^components\//, // Exclude root components directory
      ]});

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false};

    return config;
  },
  // Try to exclude problematic directories at the Next.js level
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  pageExtensions: ['tsxtsjsx', 'js'],
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2}};

module.exports = nextConfig;
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
<<<<<<< HEAD
  },
  experimental: {
    esmExternals: false
  }
};

module.exports = nextConfig;
=======
  }
};

export default nextConfig;
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
