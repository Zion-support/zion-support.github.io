/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
  // Image optimization
=======
  reactStrictMode: true,
<<<<<<< HEAD
=======
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  images: {
    domains: [
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com"
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true
  },
  
  // Page extensions
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  
  // Trailing slash
  trailingSlash: true,
  
  // Webpack configuration
=======
  reactStrictMode: true,
<<<<<<< HEAD
  compress: true,
  poweredByHeader: false,
=======
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
=======
    minimumCacheTTL: 31536000,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },
>>>>>>> main
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
        ],
=======
          '**/performance-*.txt',
          '**/apps/**'
>>>>>>> main
        ],
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
<<<<<<< HEAD

    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
<<<<<<< HEAD
            chunks: 'all',
          },
        },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      };
=======
            chunks: 'all'
          }
        }
      }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    }

    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: "ignore-loader"
    })

    return config
  },
<<<<<<< HEAD
=======
  
  // Security headers
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

<<<<<<< HEAD
export default nextConfig;
=======
export default nextConfig
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: 'ignore-loader'
    });
    
    return config;
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
};

<<<<<<< HEAD
export default nextConfig;
=======
module.exports = nextConfig
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
