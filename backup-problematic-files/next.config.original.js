};
;
,;
export default nextConfig,;
export default nextConfig;
const nextConfig = {,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  // output: 'export', // Commented out to fix middleware and API routes issues,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsxtsjsxjs'],
  // Performance optimizations,
  experimental: {,
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react@radix-ui/react-iconsframer-motion']
  },
  // Exclude problematic directories from file watching,
  webpack: (config, { dev, isServer }) => {,
    if (dev) {,
      config.watchOptions = {,
        ignored: [,
          '**/node_modules/****/backup*/****/disabled*/****/temp*/****/*.backup***/*.disabled***/pages_backup*/****/src_backup*/****/components.disabled*/****/pages.disabled*/****/src.disabled*/****/pages.__backup/****/pages_backup_conflict/****/pages_backup_before_cleanup/****/pages_backup_conflicts/****/src.pages.disabled/**',
          '**/ai-optimization-backups/****/api-backup/****/api-disabled/****/api.disabled*/****/automation_backup/****/broken_files_backup/****/corrupted-files-backup/****/corrupted_files_backup_2/****/cypress_backup/****/cypress.disabled/****/data_backup/****/data.disabled/****/disabled-api/****/hooks.disabled/****/lib_backup/****/lib.disabled/**',
          '**/pages_api.disabled/****/pages-backup/****/pm2-backups/****/solutions.disabled/****/src_backup_temp/****/styles_backup/****/temp-backup/****/temp_backup/****/temp_broken_files/****/temp_working/****/tests.disabled/****/zion-os.disabled/**'
        ]
      };
    };
    // Production optimizations,
    if (!dev && !isServer) {,
      config.optimization.splitChunks = {,
        chunks: 'all',
        cacheGroups: {,
          vendor: {,
            test: /[\/]node_modules[\/]/,
            name: 'vendors',
            chunks: 'all'
          },
          common: {,
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true
          }
        }
      };
    };
    return config
  },
  // Image optimization,
  images: {,
    unoptimized: true,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webpimage/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self', script-src 'none', sandbox,"
  },
  env: {,
    CUSTOM_KEY: process.env.CUSTOM_KEY
  },
  // Headers for security and performance,
  async headers() {,
    return [,
      {,
        source: '/(.*)',
        headers: [,
          {,
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {,
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {,
            key: 'X-XSS-Protection',
            value: '1, mode=block'
          },
          {,
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      },
      {,
        source: '/static/(.*)',
        headers: [,
          {,
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
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
  },
  async rewrites() {,
    return [,
      {,
        source: '/api/:path*',
        destination: '/api/:path*'
      }
    ]
  }
};
,
export default nextConfig,
