/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Netlify deployment
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  // Enhanced build settings
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
const path = require('path');

module.exports = {
  images: {
    domains: ["localhost"],
  },

  // Keep default dist directory for Netlify plugin
  distDir: '.next',
  trailingSlash: false,
  basePath: '',
  // Ensure valid non-empty string only when used; leave undefined otherwise
  assetPrefix: undefined,
  generateEtags: true,

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
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

  async redirects() {
    return [
      { source: '/zion/gitbook', destination: '/docs/gitbook', permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      },
      // Cache Next.js build assets for 1 year (immutable)
        source: '/_next/static/(.*)',
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      // Cache common static assets for 7 days
        source: '/:path*{png|jpg|jpeg|gif|webp|avif|svg|ico|css|js}',
          { key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400' }
      }
    ];
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false
      };
    }
  webpack: (config) => {
    // Support TS path alias '@/...' by mapping it to the project root
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
