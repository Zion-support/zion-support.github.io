/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ziontechgroup.com', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
<<<<<<< HEAD
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
=======
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
  },
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
<<<<<<< HEAD
      tls: false,
=======
      tls: false
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
    };

    return config;
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
<<<<<<< HEAD
    pagesBufferLength: 2,
  },
=======
    pagesBufferLength: 2
  }
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
};

export default nextConfig;