/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation completely
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Enable new JSX transform
  compiler: {
    reactRemoveProperties: true,
  },
  
  // Disable static generation to avoid serialization issues
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  
  // Generate build ID for better caching
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Note: Headers are not supported with static export
  // Headers should be configured at the server/CDN level for static sites
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    // Optimize for production
    if (!dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      };
      
      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
}

export default nextConfig;