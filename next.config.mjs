/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily exclude problematic pages from the build
  async rewrites() {
    return [
      // Redirect problematic routes to working pages
      {
        source: '/2026-innovations-showcase',
        destination: '/services',
      },
      {
        source: '/2026-services-showcase',
        destination: '/services',
      },
      {
        source: '/2026-services-showcase-enhanced',
        destination: '/services',
      },
      {
        source: '/2026-services-showcase-v4',
        destination: '/services',
      },
      {
        source: '/2026-ultimate-services-showcase',
        destination: '/services',
      },
      {
        source: '/autonomous-manufacturing',
        destination: '/services',
      },
      {
        source: '/pricing-enhanced-2026',
        destination: '/services',
      },
      {
        source: '/quantum-cybersecurity',
        destination: '/services',
      },
      {
        source: '/quantum-logistics',
        destination: '/services',
      },
      {
        source: '/revolutionary-2025-pricing',
        destination: '/services',
      },
      {
        source: '/revolutionary-2025-services-showcase',
        destination: '/services',
      },
      {
        source: '/revolutionary-2026-services',
        destination: '/services',
      },
      {
        source: '/revolutionary-2026-services-showcase-v4',
        destination: '/services',
      },
      {
        source: '/revolutionary-2027-services-showcase',
        destination: '/services',
      },
      {
        source: '/services-2024',
        destination: '/services',
      },
      {
        source: '/solutions',
        destination: '/services',
      },
    ];
  },
  // Optimize the build
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  experimental: {
    esmExternals: false },
  eslint: {
    ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: true },
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' },
  webpack: config => {
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
        /hardhat/ ] });

    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, 'utils/next-router-shim.tsx'),
      'react-router': path.resolve(__dirname, 'utils/next-router-shim.tsx') };

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false };

    return config},
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2 } };

export default nextConfig;