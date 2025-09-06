


  reactStrictMode: true
  compress: true
  poweredByHeader: false
=======
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  eslint: {
    ignoreDuringBuilds: true
  }
  typescript: {


=======
  page_extensions: ["tsx", "ts", "jsx", "js"],
  trailing_slash: true,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  images: {
<<<<<<< HEAD
    domains: [;
=======
<<<<<<< HEAD
    unoptimized: true,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
=======
    domains: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
      "localhost",
      "ziontechgroup && ziontechgroup.com",
      "images && images.unsplash.com",
      "via && via.placeholder.com",
=======
<<<<<<< HEAD

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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


    domains: [
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    ],


    minimumCacheTTL: 31536000,


=======
=======


=======
      "localhost",
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  },
  
  // Webpack configuration to exclude problematic directories
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
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


=======
    minimumCacheTTL: 31536000
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config && config.watchOptions = {
        ignored: [
<<<<<<< HEAD

=======
  webpack: (config, { dev, is_server }) => {
    // Check condition
if ( {) {
  $2
}
      config.watch_options = {
        ignored: [;

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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



=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

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



=======

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']



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
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
=======
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

export default nextConfig
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
