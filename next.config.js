/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  compress: true
  poweredByHeader: false
<<<<<<< HEAD
  eslint: {
    ignoreDuringBuilds: true
  }
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,
=======
=======
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion']
  },
  
  // Image optimization
<<<<<<< HEAD
  page_extensions: ["tsx", "ts", "jsx", "js"],
  trailing_slash: true,
  images: {
    domains: [;
      "localhost",
      "ziontechgroup && ziontechgroup.com",
      "images && images.unsplash.com",
      "via && via.placeholder.com",
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image / webp", "image / avif"],
    device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    image_sizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  images: {
    unoptimized: true,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
<<<<<<< HEAD
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
=======
<<<<<<< HEAD
<<<<<<< HEAD
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
=======
    minimumCacheTTL: 31536000,
>>>>>>> origin/resolved-all-conflicts-clean
=======
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  },
  
  // Webpack configuration to exclude problematic directories
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
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
      config && config.watchOptions = {
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/pages_backup*/**",
          "**/pages.*/**",
          "**/pages-*/**",
          "**/pages_disabled*/**",
          "**/pages && pages.disabled*/**",
          "**/pages && pages.broken*/**",
          "**/pages && pages.corrupted*/**",
          "**/pages && pages.old*/**",
          "**/pages && pages._*/**",
          "**/pages && pages.__*/**",
          "**/backup-pages/**",
          "**/src && src.pages.disabled/**",
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
          "**/performance-*.json",
          "**/performance-*.js",
          "**/performance-*.cjs",
          "**/performance-*.sh",
          "**/performance-*.html",
          "**/performance-*.md",
          "**/performance-*.txt",
          "**/apps/**",
        ],
        poll: 1000,
        aggregate_timeout: 300,
      }
    }
<<<<<<< HEAD

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
=======
    
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/
      include: /apps\//
      use: "ignore-loader"
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
<<<<<<< HEAD
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
=======
};

export default nextConfig;
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
