/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: []
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: true
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Exclude problematic directories from webpack compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/src/**',
        '**/pages_backup*/**',
        '**/pages.*/**',
        '**/pages-*/**',
        '**/pages_disabled*/**',
        '**/pages.disabled*/**',
        '**/pages.broken*/**',
        '**/pages.corrupted*/**',
        '**/pages.old*/**',
        '**/pages._*/**',
        '**/pages.__*/**',
        '**/backup-pages/**',
        '**/src.pages.disabled/**',
        '**/lib_backup*/**',
        '**/src_backup*/**',
        '**/corrupted-files-backup*/**',
        '**/performance-reports*/**',
        '**/log-analysis-reports*/**',
        '**/link-reports*/**',
        '**/lint-target*/**',
        '**/monitoring*/**',
        '**/pm2-automation*/**',
        '**/automation/logs*/**',
        '**/automation/backup*/**',
        '**/performance-*.json',
        '**/performance-*.js',
        '**/performance-*.cjs',
        '**/performance-*.sh',
        '**/performance-*.html',
        '**/performance-*.md',
        '**/performance-*.txt'
      ],
      poll: 1000,
      aggregateTimeout: 300
    };

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    };

    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2
  }
};

export default nextConfig;