/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { 
    ignoreDuringBuilds: true 
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  experimental: {
    esmExternals: false,
    newNextLinkBehavior: true,
    forceSwcTransforms: false
  },
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
=======
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Removed deprecated options
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
>>>>>>> e9bffd582428846eb99e83f178ef637a17a2ec8a
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
<<<<<<< HEAD
        /^components\//, // Exclude root components directory
      ]
    });

=======
      ],
    });
>>>>>>> e9bffd582428846eb99e83f178ef637a17a2ec8a
    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
<<<<<<< HEAD
      tls: false
    };

    return config;
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2
  }
};

export default nextConfig;
=======
      tls: false,
    };
    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};
export default nextConfig;
>>>>>>> e9bffd582428846eb99e83f178ef637a17a2ec8a
