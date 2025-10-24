/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation completely
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Disable static generation to avoid serialization issues
  experimental: {
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'framer-motion'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  
  // Disable linting and type checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Generate build ID for better caching
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Headers removed for static export compatibility
  
  
  // Webpack optimizations
  webpack: (config, { isServer, dev }) => {
    // Optimize for production
    if (!dev) {
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

module.exports = nextConfig