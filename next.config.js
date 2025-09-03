<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
=======
  eslint: {
=======
<<<<<<< HEAD

// Performance optimizations
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
  poweredByHeader: false,
  compress: true,
  
  // Enable proper error handling
  eslint: {
<<<<<<< HEAD
>>>>>>> main
    ignoreDuringBuilds: true,
=======
<<<<<<< HEAD
    ignoreDuringBuild,
    s: true
=======
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'lib', 'utils']
=======
  swcMinify: true,
>>>>>>> main
  compress: true,
  poweredByHeader: false,
  
  eslint: {
<<<<<<< HEAD
    ignoreDuringBuilds: true,
=======
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  },
<<<<<<< HEAD
  experimental: {},
  experimental: {
    esmExternals: false,
<<<<<<< HEAD
    newNextLinkBehavior: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ziontechgroup.com'],
=======
<<<<<<< HEAD
=======
=======
  
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@heroicons/react'],
    optimizeCss: true,
    scrollRestoration: true,
>>>>>>> main
>>>>>>> main
  },
  
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  typescript: {
<<<<<<< HEAD
    ignoreBuildErrors: true,
=======
<<<<<<< HEAD
    ignoreBuildError,
    s: true,
=======
<<<<<<< HEAD
    ignoreBuildErrors: true,
<<<<<<< HEAD
    tsconfigPath: './tsconfig.json'
>>>>>>> main
>>>>>>> main
  },
  
<<<<<<< HEAD
  output: 'standalone',
  
  // Disable static generation
  trailingSlash: false,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  
=======
  // Enhanced image optimization
=======
=======
    ignoreBuildErrors: process.env.NODE_ENV === 'production',
>>>>>>> main
  },
  
>>>>>>> main
>>>>>>> main
>>>>>>> main
  images: {
<<<<<<< HEAD
    format,
    s: ['image/webp', 'image/avif'],
=======
    domains: ['ziontechgroup.com'],
<<<<<<< HEAD
>>>>>>> main
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
<<<<<<< HEAD
=======
=======
    formats: ['image/webp', 'image/avif'],
>>>>>>> main
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
>>>>>>> main
  },
<<<<<<< HEAD
  compiler: {'
    removeConsol,
    e: process.env.NODE_ENV === 'production',
=======
  
<<<<<<< HEAD
  // Enable experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
>>>>>>> main
  },
  
<<<<<<< HEAD
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
>>>>>>> main
  },

=======
>>>>>>> main
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
=======
  // Enhanced compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
=======
<<<<<<< HEAD
=======
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
>>>>>>> main
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
<<<<<<< HEAD
=======
    styledComponents: true,
>>>>>>> main
>>>>>>> main
  },
  
  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Exclude problematic directories
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /pages\/api\.disabled/,
        /backup-pages/,
        /\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
<<<<<<< HEAD
        /src\.disabled/,
        /components\.disabled/,
=======
<<<<<<< HEAD
        /src\.disabled/,
        /components\.disabled/,
        /lib\.disabled/,
        /hooks\.disabled/,
        /backup-pages/,
        /pages_backup/,
        /pages\.__backup/,
        /lib_backup/,
        /api\.disabled/,
=======
<<<<<<< HEAD
>>>>>>> main
>>>>>>> main
      ],
    });
=======
        /__tests__/,
        /tests/,
        /test/,
      ],
    });

    // Performance optimizations
>>>>>>> main
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
<<<<<<< HEAD
        },
      }
    }
    return config},
  
  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]},
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]},
  
  // Rewrites for API routes
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]},
}

module.exports = nextConfig;
=======
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }
>>>>>>> main

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
<<<<<<< HEAD
    };
    
    return config;
=======
<<<<<<< HEAD
    }

    return config
>>>>>>> main
  },
=======
<<<<<<< HEAD
=======
      crypto: false,
      stream: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      assert: false,
      os: false,
      path: false,
>>>>>>> main
    };

    // Bundle analyzer
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }

    return config;
  },
<<<<<<< HEAD
  // Try to exclude problematic directories at the Next.js level'
=======
<<<<<<< HEAD
  
  // Enhanced page extensions
=======
<<<<<<< HEAD
>>>>>>> main
  // Try to exclude problematic directories at the Next.js level
<<<<<<< HEAD
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
=======
>>>>>>> main
>>>>>>> main
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
<<<<<<< HEAD
  // Exclude disabled directories from build
  outputFileTracingExcludes: {
    '*': [
      './pages/api.disabled/**/*',
      './pages.disabled/**/*',
      './src.disabled/**/*',
      './components.disabled/**/*'
    ]
  },
=======
  // Performance optimizations
>>>>>>> main
>>>>>>> main
  onDemandEntries: {
<<<<<<< HEAD
    // period: (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  }
}
=======
<<<<<<< HEAD
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAg,
    e: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
=======
    maxInactiveAge: 25 * 1000,
>>>>>>> main
    pagesBufferLength: 2,
  },
<<<<<<< HEAD
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
=======
=======
  
  // Bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config) => {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      );
      return config;
    },
  }),
>>>>>>> main
>>>>>>> main
};
>>>>>>> main

<<<<<<< HEAD
export default nextConfig;
=======
<<<<<<< HEAD
export default nextConfig;
'
=======
module.exports = nextConfig;
>>>>>>> main
>>>>>>> main
>>>>>>> main
