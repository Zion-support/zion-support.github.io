<<<<<<< HEAD
=======
/** Cleaned Next.js config to allow build to proceed safely */
>>>>>>> origin/feat/add-real-services-2025
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
<<<<<<< HEAD
  compress: true,
  poweredByHeader: false,
  eslint: { 
    ignoreDuringBuilds: true,
    dirs: ['pages', 'components', 'lib', 'hooks']
  },
  typescript: { ignoreBuildErrors: true },
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    scrollRestoration: true
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

module.exports = nextConfig;

=======
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: { optimizeCss: true, scrollRestoration: true },
  images: {
    domains: ["images.unsplash.com", "via.placeholder.com", "ziontechgroup.com"],
    formats: ["image/avif", "image/webp"],
  },
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  webpack: (config) => config,
};

module.exports = nextConfig;
>>>>>>> origin/feat/add-real-services-2025
