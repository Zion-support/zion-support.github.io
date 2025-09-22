import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  
  // Static export configuration
  output: 'export',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Experimental features
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react', 'react-dom'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  
  // Generate unique build ID for better caching
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        path: false,
        crypto: 'crypto-browserify',
        stream: 'stream-browserify',
        util: false,
        buffer: 'buffer',
        process: 'process/browser',
      };
    }
    
    return config;
  },
};

export default nextConfig;