const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  pageExtensions: ['route.tsx', 'route.ts'],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
        ]
      }
    ];
  }
};

export default nextConfig;
