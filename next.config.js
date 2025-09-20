/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
<<<<<<< HEAD
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://ziontechgroup.com' : '',
=======
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
<<<<<<< HEAD
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
    dirs: []
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Bundle analyzer
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: ['**/node_modules/**', '**/.next/**'],
      };
    }
    
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: "ignore-loader"
    });
    
    if (!dev && !isServer) {
      // Optimize bundle size
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
    return config;
  },
  
  // Experimental features for performance
=======

  // Experimental features
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
<<<<<<< HEAD
  
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig
=======
};

module.exports = nextConfig;
>>>>>>> 3354b621683b5dbd53991e6ca60f957ffccef787
