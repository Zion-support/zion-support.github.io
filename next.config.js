const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  
<<<<<<< HEAD
  // Minimal webpack config
  webpack: (config, { dev, isServer }) => {
=======
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Exclude problematic directories from file watching in dev mode
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
<<<<<<< HEAD
          '**/backup*/**',
          '**/disabled*/**',
          '**/temp*/**',
          '**/*.backup*',
          '**/*.disabled*',
          '**/pages_backup*/**',
          '**/src_backup*/**',
          '**/components.disabled*/**',
          '**/pages.disabled*/**',
          '**/src.disabled*/**'
        ]
=======
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
        aggregateTimeout: 300,
>>>>>>> 22585ea456adf6ad6cf7b3256318e997f8ac668b
      };
    }
    return config;
<<<<<<< HEAD
  },
  
  // Note: Headers, redirects, and rewrites are not supported with static export
=======
  }
>>>>>>> pr-11934
};

export default nextConfig;