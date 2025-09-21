// Polyfill for globalThis
if (typeof globalThis === 'undefined') {
  global.globalThis = global;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Experimental features
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    esmExternals: false,
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
  webpack: (config, { isServer }) => {
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
    
    return config;
  },
};

module.exports = nextConfig;