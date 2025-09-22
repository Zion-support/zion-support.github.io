/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let Netlify's Next.js runtime handle output; do not force standalone
  // output: 'standalone',

  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,

  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['jsx', 'js'],
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
  assetPrefix: '',
  generateEtags: true,

  experimental: {
    optimizePackageImports: ['lucide-react']
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
