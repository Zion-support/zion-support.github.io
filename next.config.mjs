<<<<<<< HEAD

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@heroicons/react'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compression
  compress: true,
  
  // Bundle analyzer (only in development)
  ...(process.env.ANALYZE === 'true' && {
    webpack: async (config) => {
      const { BundleAnalyzerPlugin } = await import('@next/bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          enabled: true,
        })
      );
      return config;
    },
  }),
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
=======
export default { typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true } };
>>>>>>> 76ac031ee1bd0638dab6f2aa5c6a46ca343d86e9
