<<<<<<< HEAD
/** @type {import('next').NextConfig} */
=======
/** @type {import(
  'next').NextConfig} */
>>>>>>> main
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
<<<<<<< HEAD
<<<<<<< HEAD:next.config.js
  typescript: {
    // Allow production builds to successfully complete even if
    // there are type errors.
=======
  experimental: {
    // Removed deprecated options
  },
  typescript: {
>>>>>>> main
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
<<<<<<< HEAD
<<<<<<< HEAD:next.config.js
    // Keep default TS/JS handling; we already ignore build errors via config
=======
>>>>>>> main
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
      ],
    });
<<<<<<< HEAD
    
=======

>>>>>>> main
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
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

<<<<<<< HEAD
export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif']
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

=======
>>>>>>> main
module.exports = nextConfig;
