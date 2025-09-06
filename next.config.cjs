<<<<<<< HEAD
const nextConfig = {
  reactStrictMode: true,
  eslint: {
<<<<<<< HEAD
<<<<<<< HEAD
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
<<<<<<< HEAD
  trailingSlash: true,  images: {
=======
  trailingSlash: true,
=======
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ["localhost", "ziontechgroup.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  eslint: {
>>>>>>> origin/automation-fixes
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
<<<<<<< HEAD
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  exclude: [
    'apps.backup/**',
    'zion-os/**',
    'zion-website/**',
    'zion-academy/**',
    'zion-film/**',
    'zion-ai-assistant/**',
    'backup-merge-conflicts/**',
    'data_backup/**',
    'pages_backup_conflict/**',
    'automation/**',
    'scripts/**',
    'temp_exclude/**',
  ],
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
  images: {
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
<<<<<<< HEAD
<<<<<<< HEAD
      'via.placeholder.com'    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000  },
=======
<<<<<<< HEAD
      'via.placeholder.com'
=======
      'via.placeholder.com',
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
          '**/apps/**'
        ],
        poll: 1000,
<<<<<<< HEAD
<<<<<<< HEAD
        aggregateTimeout: 300
<<<<<<< HEAD
      }    }
=======
      }
=======
        aggregateTimeout: 300,
      };
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: 'ignore-loader'
    });
    
<<<<<<< HEAD
<<<<<<< HEAD
    return config
  }
}

module.exports = nextConfig
=======
    return config;
  },
};

module.exports = nextConfig;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
>>>>>>> origin/automation-fixes
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
