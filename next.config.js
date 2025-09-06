<<<<<<< HEAD
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
=======
  reactStrictMode: true
  compress: true
  poweredByHeader: false
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  eslint: {
    ignoreDuringBuilds: true
  }
  typescript: {
<<<<<<< HEAD
// Image optimization
  page_extensions: ["tsx", "ts", "jsx", "js"],
  trailing_slash: true,
=======
<<<<<<< HEAD
    ignoreBuildErrors: true,
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  trailingSlash: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  
<<<<<<< HEAD
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion']
  },
  
=======
>>>>>>> origin/resolved-all-conflicts-clean
  // Image optimization
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  images: {
<<<<<<< HEAD
    unoptimized: true,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
=======
    domains: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
      'via.placeholder.com'
<<<<<<< HEAD
    ],
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
<<<<<<< HEAD
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  images: {
    domains: [;
      "localhost",
<<<<<<< HEAD
      "ziontechgroup && ziontechgroup.com",
      "images && images.unsplash.com",
      "via && via.placeholder.com",
    ],
    formats: ["image / webp", "image / avif"],
    device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    image_sizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
=======
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com",
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
    minimumCacheTTL: 31536000,
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-all-conflicts-clean
<<<<<<< HEAD
=======
<<<<<<< HEAD
    minimumCacheTTL: 31536000,
=======
    minimumCacheTTL: 31536000
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },
  
  // Webpack configuration to exclude problematic directories
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
<<<<<<< HEAD
  reactStrictMode: true
  compress: true
  poweredByHeader: false
  eslint: {
    ignoreDuringBuilds: true
  }
  typescript: {
=======
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
  },
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
    minimumCacheTTL: 31536000
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config && config.watchOptions = {
        ignored: [
<<<<<<< HEAD
  webpack: (config, { dev, is_server }) => {
    // Check condition
if ( {) {
  $2
}
      config.watch_options = {
        ignored: [;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
          "**/backup - pages/**",
          "**/src.pages.disabled/**",
          "**/lib_backup*/**",
          "**/src_backup*/**",
          "**/corrupted - files - backup*/**",
          "**/performance - reports*/**",
          "**/log - analysis - reports*/**",
          "**/link - reports*/**",
          "**/lint - target*/**",
          "**/monitoring*/**",
          "**/pm2 - automation*/**",
          "**/automation / logs*/**",
          "**/automation / backup*/**",
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          "**/performance-*.json",
          "**/performance-*.js",
          "**/performance-*.cjs",
          "**/performance-*.sh",
          "**/performance-*.html",
          "**/performance-*.md",
          "**/performance-*.txt",
          "**/apps/**",
        ],
<<<<<<< HEAD
        poll: 1000,
        aggregate_timeout: 300,
      }
=======
poll: 1000,
        aggregateTimeout: 300,
      };
    }
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

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

<<<<<<< HEAD
export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
  },
  webpack: (config, { dev, isServer }) => {
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
      };
=======
>>>>>>> origin/main
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    }
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
        source: "/(.*)"
        headers: [
          {
            key: "X-Content-Type-Options"
            value: "nosniff"
          }
          {
            key: "X-Frame-Options"
            value: "DENY"
          }
          {
            key: "X-XSS-Protection"
            value: "1; mode=block"
          }
          {
            key: "Referrer-Policy"
            value: "origin-when-cross-origin"
          }
        ]
      }
    ];
  }
}
export default nextConfig;
<<<<<<< HEAD
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
=======
=======
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
        aggregateTimeout: 300
      }
    }
    return config
  }
}
export default nextConfig
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
