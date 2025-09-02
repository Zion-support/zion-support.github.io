/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  compress: true,
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
=======
  typescript: {
    ignoreBuildErrors: true,
  },
>>>>>>> origin/pr-update-cursor/analyze-improve-and-deploy-application-6fbe
  experimental: {
    esmExternals: false,
    optimizeCss: false,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  output: 'standalone',
  images: {
    domains: ['ziontechgroup.com'],
    formats: ['image/avif', 'image/webp'],
    // Enable Next.js Image Optimization
    unoptimized: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
<<<<<<< HEAD
    // Exclude contracts directory from compilation
=======
    // Exclude problematic directories from the build
>>>>>>> origin/pr-update-cursor/analyze-improve-and-deploy-application-6fbe
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
<<<<<<< HEAD
        /cypress/,
      ],
    });
    
    // Exclude contracts directory specifically
    config.resolve.alias = {
      ...config.resolve.alias,
      'hardhat/config': false,
=======
        /hardhat/,
      ],
    });
    
    // Exclude contracts directory from compilation
    config.resolve.alias = {
      ...config.resolve.alias,
      'hardhat/config': false,
      'hardhat': false,
>>>>>>> origin/pr-update-cursor/analyze-improve-and-deploy-application-6fbe
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
  async headers() {
    const securityHeaders = [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
