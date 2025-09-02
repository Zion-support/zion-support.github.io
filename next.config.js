/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: false,
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-icons'],
    scrollRestoration: true,
  },
  output: 'standalone',
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Exclude contracts directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [
        /src/,
        /pages/,
        /components/,
      ],
      exclude: [
        /node_modules/,
        /contracts/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
        /\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /cypress/,
      ],
    });
    
    // Exclude contracts directory specifically
    config.resolve.alias = {
      ...config.resolve.alias,
      'hardhat/config': false,
    };
    
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

export default nextConfig;
