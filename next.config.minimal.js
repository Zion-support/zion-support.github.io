<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  images: {
<<<<<<< HEAD
    domains: ["localhost", "ziontechgroup.com"]
  }
  output: 'standalone'
  trailingSlash: false
  distDir: '.next'
}
<<<<<<< HEAD
module.exports = nextConfig;
=======
const nextConfig = {,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsxtsjsxjs'],
  trailingSlash: true,
  // Image optimization,
  images: {,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webpimage/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  // Webpack configuration to exclude problematic directories,
  webpack: (config, { dev, isServer }) => {,
    if (dev) {,
      // Exclude problematic directories from file watching,
      config.watchOptions = {,
        ignored: [,
          '**/node_modules/****/.git/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/****/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/**',
          '**/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300
      };
    };
    return config
  },
  // Headers for security and performance,
  async headers() {,
    return [,
      {,
        source: '/(.*)',
        headers: [,
          {,
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {,
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {,
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  // Redirects for SEO,
  async redirects() {,
    return [,
      {,
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  };
};
,
}

export default nextConfig,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
    domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
  trailingSlash: false,
  distDir: '.next',
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
module.exports = nextConfig;
=======
<<<<<<< HEAD

module.exports = nextConfig;
=======
module.exports = nextConfig;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
