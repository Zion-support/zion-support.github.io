/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
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
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
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
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true
        }
      }
    };
    
    return config;
  }
};

module.exports = {
  ...nextConfig,
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
};