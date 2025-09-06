const nextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
<<<<<<< HEAD
  compress: true,
  poweredByHeader: false,
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion']
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
=======
  // Image optimization
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
  images: {
    domains: [
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com"
    ],
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
<<<<<<< HEAD
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
  },
=======
=======
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
        ],
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
<<<<<<< HEAD
    
=======

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
    }

>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
<<<<<<< HEAD
      use: 'ignore-loader'
    });
    
    return config;
<<<<<<< HEAD
  }
};

module.exports = nextConfig
=======
  }
};
=======
      use: "ignore-loader"
    });

    return config;
  },
  
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
    ];
  }
}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571

export default nextConfig;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
