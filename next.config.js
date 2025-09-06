const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  eslint: {
    ignoreDuringBuilds: true
=======
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  eslint: {
    ignoreDuringBuilds: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
  },
  typescript: {
    ignoreBuildErrors: true
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
<<<<<<< HEAD
=======
  
  // Performance optimizations
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
<<<<<<< HEAD
      'via.placeholder.com'],
=======
      'via.placeholder.com',
    ],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
<<<<<<< HEAD
    minimumCacheTTL: 31536000},
=======
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
  },
  
  // Headers for security and performance
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
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Webpack configuration
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
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
<<<<<<< HEAD
          '**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300};
=======
          '**/performance-*.txt',
<<<<<<< HEAD
        ],
        poll: 1000,
        aggregateTimeout: 300,
=======
          '**/apps/**'
        ],
        poll: 1000,
        aggregateTimeout: 300
      }
    }
    
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: 'ignore-loader'
    });
    
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-8943
      };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-91d8
    }
    
    return config;
  },
};

export default nextConfig;