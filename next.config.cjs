<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
<<<<<<< HEAD
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
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
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
=======
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    esmExternals: false
  },
  images: {
    domains: ['ziontechgroup.com', 'localhost', 'images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
    ignoreDuringBuilds: true,
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
  reactStrictMode: false,
  swcMinify: false,
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
>>>>>>> origin/chore/fix-automation-and-build
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
<<<<<<< HEAD
  experimental: {
    forceSwcTransforms: false},
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
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
        /hardhat/
      ]
    });
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
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
};
  pageExtensions: ['tsxtsjsx', 'js'],
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2}};

module.exports = nextConfig;
<<<<<<< HEAD
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true

  }
};

export default nextConfig;
<<<<<<< HEAD
=======
>>>>>>> d0a9ec4ff3a15c755bf51b53a72e5129849de793
>>>>>>> 91fec3a61bf105731881304ea8d3824dd093e739
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
>>>>>>> 19d1d1ef532f9e4690306331c74cc9ccbd0b556b
=======
  images: {
    domains: ["localhost", "ziontechgroup.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    // Remove optimizePackageImports to satisfy Next 12 validation
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
>>>>>>> origin/chore/fix-automation-and-build
<<<<<<< HEAD
=======
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-2a0c
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-45a7
=======
>>>>>>> 5e6beaf9b7cc8c8eabc253c2e279e8ffb447f8e0
