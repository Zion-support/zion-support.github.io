// Polyfill for globalThis
if (typeof globalThis === 'undefined') {
  global.globalThis = global;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  trailingSlash: true,
  distDir: '.next',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ["localhost"],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
    // tsconfigPath: './tsconfig.json',
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },
  
  // Typed routes configuration
  typedRoutes: false,
  
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
        cacheGroups: {
          vendor: {
            test: /[/]node_modules[/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
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
  
  // Headers are handled by netlify.toml for static export
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'origin-when-cross-origin',
  //         },
  //         {
  //           key: 'Permissions-Policy',
  //           value: 'camera=(), microphone=(), geolocation=()',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;