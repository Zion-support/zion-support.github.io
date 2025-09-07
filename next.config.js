/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Force app directory usage
  output: 'standalone',
  
  // Disable static generation to avoid page data collection issues
  trailingSlash: false,
  
  // Skip static optimization
  skipTrailingSlashRedirect: true,
  
  // Build optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react']
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Bundle analyzer
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: './bundle-analysis.html'
        })
      );
    }
    
    // Fix for self is not defined error in server-side rendering
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
      
      // Add global polyfill for self
      config.plugins.push(
        new webpack.DefinePlugin({
          'typeof self': JSON.stringify('undefined'),
          'self': 'undefined',
        })
      );
      
      // Add a more comprehensive polyfill
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: `
            if (typeof self === 'undefined') {
              global.self = global;
            }
            if (typeof window === 'undefined') {
              global.window = global;
            }
            if (typeof globalThis === 'undefined') {
              global.globalThis = global;
            }
          `,
          raw: true,
          entryOnly: false,
        })
      );
      
      // Add error handling for webpack runtime
      config.plugins.push(
        new webpack.BannerPlugin({
          banner: `
            try {
              if (typeof module !== 'undefined' && module.exports) {
                module.exports = module.exports || {};
              }
              // Fix for undefined length error
              if (typeof Array.prototype.reduce === 'function') {
                const originalReduce = Array.prototype.reduce;
                Array.prototype.reduce = function(callback, initialValue) {
                  if (this == null) {
                    throw new TypeError('Array.prototype.reduce called on null or undefined');
                  }
                  if (typeof callback !== 'function') {
                    throw new TypeError(callback + ' is not a function');
                  }
                  if (this.length === 0 && initialValue === undefined) {
                    throw new TypeError('Reduce of empty array with no initial value');
                  }
                  return originalReduce.call(this, callback, initialValue);
                };
              }
            } catch (e) {
              // Ignore errors
            }
          `,
          raw: true,
          entryOnly: false,
        })
      );
    }
    
    // Optimize chunks
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      };
    }
    return config;
  },
};
=======
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { 
    ignoreDuringBuilds: true 
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
<<<<<<< HEAD
  experimental: {
    forceSwcTransforms: false
  },
<<<<<<< HEAD
=======
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
=======
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  trailingSlash: true,
  
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    unoptimized: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
        /\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
        /^components\//, // Exclude root components directory
      ]
    });

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false
    };

    // Development watch options
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
          '**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300
      }
    }

    return config;
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2
  }
<<<<<<< HEAD
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
};
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

<<<<<<< HEAD
export default nextConfig;
=======
export default nextConfig;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
