// Polyfill for globalThis
if (typeof globalThis === 'undefined') {
  global.globalThis = global;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ["localhost"],
    formats: ['image/webp', 'image/avif'],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Generate unique build ID for better caching
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer'),
        process: require.resolve('process/browser'),
      };
    }
    
    // Configure webpack extensions
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    
    // Add path alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, '.'),
    };
    
    // Exclude problematic directories from compilation
    config.module.rules.push({
      test: /\.ts$/,
      include: require('path').resolve(__dirname, 'contracts'),
      use: 'ignore-loader'
    });
    
    return config;
  },
};

module.exports = nextConfig;