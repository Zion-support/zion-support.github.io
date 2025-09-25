/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for modern Next.js deployment
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  // Next 15 removes swcMinify; rely on optimization.minimize in webpack hook
  
  // Enhanced build settings - stricter settings from remote
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
    formats: ['image/webp', 'image/avif'],
    // Netlify image CDN can be used; keep unoptimized true to avoid server image optimization
    unoptimized: true
  },

  // Keep default dist directory for Netlify plugin
  distDir: '.next',

  trailingSlash: false,
  basePath: '',
  // Ensure valid non-empty string only when used; leave undefined otherwise
  assetPrefix: undefined,
  generateEtags: true,

  // Modern experimental features for Next.js 14
  experimental: {
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

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
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
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
        ]
      },
      // Cache common static assets for 7 days
      {
        source: '/:path*{png|jpg|jpeg|gif|webp|avif|svg|ico|css|js}',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400' }
        ]
      }
    ];
  },

  webpack: (config, { isServer }) => {
    // Disable minification to avoid WebpackError from minify plugin with mismatched versions
    if (config.optimization) {
      config.optimization.minimize = false;
    } else {
      config.optimization = { minimize: false };
    }
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
    return config;
  }
};

module.exports = nextConfig;
