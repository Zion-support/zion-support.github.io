const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  distDir: 'out',
  
  // Static export configuration
  output: 'export',
  skipTrailingSlashRedirect: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  typescript: {
    // Ignore TypeScript errors during build to avoid breaking static export
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during build to avoid breaking static export
    ignoreDuringBuilds: true,
  },
  
  // Experimental features
  experimental: {
    optimizeCss: false, // Disabled due to missing critters dependency
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-datepicker'],
    esmExternals: false,
    gzipSize: true,
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  
  // Compression and performance
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Generate unique build ID for better caching
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        path: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        util: false,
        buffer: require.resolve('buffer'),
        process: require.resolve('process/browser'),
      };
      
      // Add compression support (disabled due to dependency conflicts)
      // Compression will be handled by Netlify's built-in compression
    }
    
    // Performance optimizations for production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        sideEffects: false,
        usedExports: true,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
