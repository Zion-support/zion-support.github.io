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
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-datepicker'],
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
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
        crypto: false,
      };
    }
    
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
    
    if (!dev && !isServer) {
      // Optimize bundle size
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[/]node_modules[/]/,
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
          react: {
            test: /[/]node_modules[/](react|react-dom)[/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
        },
      };
      
      // Add compression
      config.optimization.minimize = true;
    }
    
    // Add globalThis polyfill
    config.plugins = config.plugins || [];
    config.plugins.push(
      new (require('webpack')).DefinePlugin({
        'globalThis': 'global',
      })
    );
    
    return config;
  },
  
  // Headers for better security and performance
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
        ],
      },
    ];
  },
};

module.exports = nextConfig;