/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
=======
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'via.placeholder.com']
<<<<<<< HEAD
=======
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  },
  eslint: {
    ignoreDuringBuilds: true
  },
<<<<<<< HEAD
=======
  reactStrictMode: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
  experimental: {
<<<<<<< HEAD
<<<<<<< HEAD
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
<<<<<<< HEAD
=======
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  async redirects() {
    return [
      { source: '/api-documentation', destination: '/api-docs', permanent: true },
      { source: '/ai-consciousness-evolution-2025', destination: '/ai-consciousness-evolution-2029', permanent: false }
    ];
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
  },
  webpack: (config, { dev, isServer }) => {
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
          '**/performance-*.txt',
          '**/apps/**',
          '**/temp_conflicts/**'
        ],
        poll: 1000,
        aggregateTimeout: 300
      }
    }
    
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      }
    }

<<<<<<< HEAD
    // Add custom webpack rule to ignore apps directory
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: 'ignore-loader'
    });
    
    return config;
  }
=======
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
  webpack: (config, { isServer }) => {
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
    // Handle problematic files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        /corrupted_backup/,
        /backup/,
        /disabled/
      ],
      use: 'ignore-loader'
    });

    // Add custom webpack rule to ignore apps directory
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: 'ignore-loader'
    });

    // Optimize for production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
<<<<<<< HEAD
<<<<<<< HEAD
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  httpAgentOptions: {
    keepAlive: true,
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  distDir: '.next',
  assetPrefix: '',
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  serverExternalPackages: ['sharp'],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> fc9ad33614067110319e944190e4534fa8fe3115
=======
  serverExternalPackages: ['sharp']
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
};

<<<<<<< HEAD
module.exports = nextConfig;
<<<<<<< HEAD
=======
export default nextConfig;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }
    return config;
  },
};

export default nextConfig;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
