import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],

  images: {
    domains: ['localhost', 'ziontechgroup.com', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },

  distDir: '.next',
  trailingSlash: false,
  basePath: '',
  assetPrefix: undefined,
  generateEtags: true,

  experimental: {
    appDir: false,
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  async redirects() {
    return [{ source: '/home', destination: '/', permanent: true }];
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
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/:path*{png|jpg|jpeg|gif|webp|avif|svg|ico|css|js}',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=604800, s-maxage=604800, stale-while-revalidate=86400' }],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (config.optimization) {
      config.optimization.minimize = false;
    } else {
      config.optimization = { minimize: false } as any;
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
        path: false,
      } as any;
    }
    return config;
  },
};

export default nextConfig;
