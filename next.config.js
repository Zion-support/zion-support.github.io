<<<<<<< HEAD
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Disable linting during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Webpack configuration to handle TypeScript and JSX
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Handle TypeScript files
    config.module.rules.push({
      test: /\.tsx?$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              jsx: 'preserve',
            },
          },
        },
      ],
    });
    
    return config;
  },
  
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Security headers
=======

const nextConfig = {
  // Security configurations
  poweredByHeader: false,
  compress: true,
  
  // Headers for security
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-94b9
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
<<<<<<< HEAD
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
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
  
  // Output configuration
  output: 'standalone',
  
  // Trailing slash
  trailingSlash: false,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default withBundleAnalyzer(nextConfig);
=======
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          }
        ]
      }
    ];
  },
  
  // Environment variables
  env: {
    NODE_ENV: 'production',
    NEXT_TELEMETRY_DISABLED: '1'
  }
};

module.exports = nextConfig;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-94b9
