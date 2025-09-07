/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true},
<<<<<<< HEAD
  typescript: { 
    ignoreBuildErrors: true 
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  trailingSlash: true,
  
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  
  // Image optimization
=======
  typescript: {
    ignoreBuildErrors: true},
>>>>>>> 716160b064bcc2ca60645a7e5c009cf722f6fb29
  images: {
    domains: ['ziontechgroup.com', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
<<<<<<< HEAD
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Security headers
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
=======
    unoptimized: true,
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"},
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
>>>>>>> 716160b064bcc2ca60645a7e5c009cf722f6fb29
  },
  experimental: {
    optimizePackageImports: ['@heroicons/react']},
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'}}},
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  webpack: (config, { dev, isServer }) => {
    // Exclude problematic directories from webpack compilation
    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
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
<<<<<<< HEAD
    
    // Development watch options
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
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
      }
    }
    return config;
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
=======

    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
>>>>>>> 716160b064bcc2ca60645a7e5c009cf722f6fb29
    pagesBufferLength: 2
  }
};

export default nextConfig;