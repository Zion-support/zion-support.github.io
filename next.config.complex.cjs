/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  trailingSlash: true,
<<<<<<< HEAD
  output: 'export',
  images: {,
  unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'via.placeholder.com']
  },
=======
  output: export,
  images: {,
  unoptimized: true,
    formats: [image/webp,image/avif],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [images.unsplash.com,via.placeholder.com]},
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  eslint: {,
  ignoreDuringBuilds: true,
    dirs: []
  typescript: {,
  ignoreBuildErrors: true;
  onDemandEntries: {,
  maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  experimental: {,
  optimizeCss: true,
<<<<<<< HEAD
    optimizePackageImports: ['@radix-ui/react-icons'],
  async redirects() {
    return [
      { source: '/api-documentation', destination: '/api-docs', permanent: true },
      { source: '/ai-consciousness-evolution-2025', destination: '/ai-consciousness-evolution-2029', permanent: false }']
=======
    optimizePackageImports: [@radix-ui/react-icons],},
  async redirects() {
    return [
      { source: /api-documentation, destination: /api-docs, permanent: true },
      { source: /ai-consciousness-evolution-2025, destination: /ai-consciousness-evolution-2029, permanent: false }]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    ];
  async headers() {
<<<<<<< HEAD
      {
        source: '/(.*)',
        headers: [
            key: 'X-Frame-Options',
            value: 'DENY',
            key: 'X-Content-Type-Options',
            value: 'nosniff',
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },]
=======
    return [
      {
        source: /(.*),
        headers: [
          {
            key: X-Frame-Options,
            value: DENY,},
          {
            key: X-Content-Type-Options,
            value: nosniff,},
          {
            key: Referrer-Policy,
            value: origin-when-cross-origin,}]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        ],
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
<<<<<<< HEAD
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
          '**/performance-*.txt',
          '**/apps/**',
          '**/temp_conflicts/**]
=======
          '**/node_modules/**,**/.git/**,**/pages_backup*/**,**/pages.*/**,**/pages-*/**,**/pages_disabled*/**,**/pages.disabled*/**,**/pages.broken*/**,**/pages.corrupted*/**,**/pages.old*/**,**/pages._*/**,**/pages.__*/**,**/backup-pages/**,**/src.pages.disabled/**,**/lib_backup*/**,**/src_backup*/**,**/corrupted-files-backup*/**,**/performance-reports*/**,**/log-analysis-reports*/**,**/link-reports*/**,**/lint-target*/**,**/monitoring*/**,**/pm2-automation*/**,**/automation/logs*/**,**/automation/backup*/**,**/performance-*.json,**/performance-*.js,**/performance-*.cjs,**/performance-*.sh,**/performance-*.html,**/performance-*.md,**/performance-*.txt,**/apps/**,**/temp_conflicts/**]
        ],
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
        poll: 1000,
        aggregateTimeout: 300;
      }
    
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
<<<<<<< HEAD
        chunks: 'all',
        cacheGroups: {,
  vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
=======
        chunks: all,
        cacheGroups: {,
  vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: vendors,
            chunks: all,}
        }
      }
    }
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

    // Handle problematic files;
    config.module.rules.push({)
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        /corrupted_backup/,
        /backup/,
        /disabled/]
<<<<<<< HEAD
      use: 'ignore-loader
=======
      ],
      use: ignore-loader
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    });

    // Add custom webpack rule to ignore apps directory;
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
<<<<<<< HEAD
=======
      use: ignore-loader
    });
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

    // Optimize for production;
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    
    return config;

<<<<<<< HEAD
  serverExternalPackages: ['sharp']
=======
  },
  serverExternalPackages: [sharp]};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

module.exports = nextConfig;


export default nextConfig;
<<<<<<< HEAD
  domains: ['images.unsplash.com', 'via.placeholder.com'],
        source: '/home',
        destination: '/',
        permanent: true,
=======
  reactStrictMode: true,
  experimental: {,
  optimizePackageImports: [@radix-ui/react-icons],},
  images: {,
  domains: [images.unsplash.com,via.placeholder.com],
    formats: [image/webp,image/avif],},
  async headers() {
    return [
      {
        source: /(.*),
        headers: [
          {
            key: X-Frame-Options,
            value: DENY,},
          {
            key: X-Content-Type-Options,
            value: nosniff,},
          {
            key: Referrer-Policy,
            value: origin-when-cross-origin,}]
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: /home,
        destination: /,
        permanent: true,
      }]
    ];
  },
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom webpack configuration here if needed;
  env: {,
  CUSTOM_KEY: process.env.CUSTOM_KEY,
  ignoreBuildErrors: false,
  ignoreDuringBuilds: false,
<<<<<<< HEAD
  output: 'standalone',
  httpAgentOptions: {,
  keepAlive: true,
  distDir: '.next',
  assetPrefix: ,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  serverExternalPackages: ['sharp'],
=======
  },
  output: standalone,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  httpAgentOptions: {,
  keepAlive: true,
  },
  onDemandEntries: {,
  maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  distDir: .next,
  assetPrefix: ,
  generateBuildId: async () => {
    return 'build- + Date.now();
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {,
  optimizePackageImports: [@radix-ui/react-icons],},
  serverExternalPackages: [sharp],};
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a


