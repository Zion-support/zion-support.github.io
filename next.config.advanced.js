/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  experimental: {,
    optimizeCss: true;
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
    turbo: {,
      rules: {,
        '*.svg': {,
          loaders: ['@svgr/webpack'],
          as: '*.js',
const nextConfig = {/* TODO: Fix JSX expression */}
        }}}},
  compiler: {,
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true;
  },
  images: {,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000;
    dangerouslyAllowSVG: true;
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"},
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [,
          {,
            key: 'X-Frame-Options',
            value: 'DENY',
  compile,
  r: {/* TODO: Fix JSX expression */}
=======
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
>>>>>>> origin/resolve-merge-conflicts
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
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
<<<<<<< HEAD
          {/* TODO: Fix JSX expression */}
          }]},
      {
        source: '/static/(.*)',
        headers: [,
          {,
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
      {/* TODO: Fix JSX expression */}
          }]}];
  }};
=======
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
};
>>>>>>> origin/resolve-merge-conflicts

module.exports = nextConfig;