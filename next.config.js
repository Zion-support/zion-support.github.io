/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  }
  typescript: {
  // Image optimization
  page_extensions: ["tsx", "ts", "jsx", "js"],
  trailing_slash: true,
  images: {
    domains: [
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com"
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image / webp", "image / avif"],
    device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    image_sizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  },

    ignoreBuildErrors: true
  }
  pageExtensions: ["tsx", "ts", "jsx", "js"]
  trailingSlash: true
  images: {
    domains: [
      "localhost"
      "ziontechgroup.com"
      "images.unsplash.com"
      "via.placeholder.com"
    ]
    formats: ["image/webp", "image/avif"]
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    minimumCacheTTL: 31536000
  }

  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
  webpack: (config, { dev, is_server }) => {
    // Check condition
if ( {) {
  $2
}
      config.watch_options = {
        ignored: [;
          "**/node_modules/**",
          "**/.git/**",
          "**/pages_backup*/**",
          "**/pages.*/**",
          "**/pages-*/**",
          "**/pages_disabled*/**",
          "**/pages.disabled*/**",
          "**/pages.broken*/**",
          "**/pages.corrupted*/**",
          "**/pages.old*/**",
          "**/pages._*/**",
          "**/pages.__*/**",
          "**/backup-pages/**",
          "**/src.pages.disabled/**",
          "**/lib_backup*/**",
          "**/src_backup*/**",
          "**/corrupted-files-backup*/**",
          "**/performance-reports*/**",
          "**/log-analysis-reports*/**",
          "**/link-reports*/**",
          "**/lint-target*/**",
          "**/monitoring*/**",
          "**/pm2-automation*/**",
          "**/automation/logs*/**",
          "**/automation/backup*/**",
          "**/performance-*.json",
          "**/performance-*.js",
          "**/performance-*.cjs",
          "**/performance-*.sh",
          "**/performance-*.html",
          "**/performance-*.md",
          "**/performance-*.txt",
          "**/apps/**"
        ],
        poll: 1000,
        aggregate_timeout: 300,
      }
    }

          "**/node_modules/**"
          "**/.git/**"
          "**/pages_backup*/**"
          "**/pages.*/**"
          "**/pages-*/**"
          "**/pages_disabled*/**"
          "**/pages.disabled*/**"
          "**/pages.broken*/**"
          "**/pages.corrupted*/**"
          "**/pages.old*/**"
          "**/pages._*/**"
          "**/pages.__*/**"
          "**/backup-pages/**"
          "**/src.pages.disabled/**"
          "**/lib_backup*/**"
          "**/src_backup*/**"
          "**/corrupted-files-backup*/**"
          "**/performance-reports*/**"
          "**/log-analysis-reports*/**"
          "**/link-reports*/**"
          "**/lint-target*/**"
          "**/monitoring*/**"
          "**/pm2-automation*/**"
          "**/automation/logs*/**"
          "**/automation/backup*/**"
          "**/performance-*.json"
          "**/performance-*.js"
          "**/performance-*.cjs"
          "**/performance-*.sh"
          "**/performance-*.html"
          "**/performance-*.md"
          "**/performance-*.txt"
          "**/apps/**"
        ]
        poll: 1000
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
            chunks: 'all'
          }
        }
      }
    }

    // Exclude apps directory from compilation
    config && config.module.rules && rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: "ignore-loader",
    });
    return config;
  }
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          }
        ]
      }
    ]
  }
}
export default nextConfig;
    // Exclude apps directory from compilation;
    config.module.rules.push ({
      test: /\.(ts | tsx | js | jsx)$/,
      include: /apps\//,
      use: "ignore - loader",
    });
;
    return config;
  },
  async headers () {
    return [;
      {
        source: "/(.*)",
        headers: [;
          {
            key: "X - Content - Type - Options",
            value: "nosniff",
          },
          {
            key: "X - Frame - Options",
            value: "DENY",
          },
          {
            key: "X - XSS - Protection",
            value: "1; mode = block",
          },
          {
            key: "Referrer - Policy",
            value: "origin - when - cross - origin",
          },
        ],
      },
    ];
  },
}
;
export default next_config;
;
