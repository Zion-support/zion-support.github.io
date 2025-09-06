const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
=======
<<<<<<< HEAD
  compress: true,
  poweredByHeader: false,
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
<<<<<<< HEAD
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif']
  },
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
    ]
  }
}
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
<<<<<<< HEAD
      'via.placeholder.com'
=======
      'via.placeholder.com',
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
    minimumCacheTTL: 31536000
=======
    minimumCacheTTL: 31536000,
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
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
<<<<<<< HEAD
          '**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300
      }
    }
    return config
  }
}

export default nextConfig
=======
          '**/performance-*.txt',
          '**/apps/**'
        ],
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: 'ignore-loader'
    });
    
    return config;
  }
};
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b

module.exports = nextConfig
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
