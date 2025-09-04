
// Performance optimizations
const nextConfig = {
  reactStrictMode: false,
  compress: true,
  poweredByHeader: false,
  eslint: { 
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'lib', 'hooks']
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  trailingSlash: true,
  output: 'export',
  generateBuildId: async () => 'build-' + Date.now(),
  // Ensure standard Next.js page extensions are included so existing routes build
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'page.tsx'],
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
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
