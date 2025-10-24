/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use export for static generation
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  
  
  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Build optimizations
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true
  },
  
  // Performance optimizations
  staticPageGenerationTimeout: 60,
  swcMinify: true,
  compress: true,
  
  // Generate build ID for better caching
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
  // Headers removed for export compatibility
  
  // Experimental features for better performance
  experimental: {
    missingSuspenseWithCSRBailout: false,
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'framer-motion'],
    webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  
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

module.exports = nextConfig;