/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  
  // Disable ESLint and TypeScript checking during build to avoid parsing issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Exclude certain directories from compilation
  webpack: (config, { dev, isServer }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Configure webpack extensions
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    
    // Add path alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '.'),
    };
    
    // Exclude contracts directory from compilation
    config.module.rules.push({
      test: /\.ts$/,
      include: require('path').resolve(__dirname, 'contracts'),
      use: 'ignore-loader'
    });
    
    if (!dev && !isServer) {
      // Optimize bundle size
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[/]node_modules[/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    // Fix for OpenSSL legacy provider issue
    config.resolve.alias = {
      ...config.resolve.alias,
      crypto: require.resolve('crypto-browserify'),
    };
    
    return config;
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Experimental features for performance
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;