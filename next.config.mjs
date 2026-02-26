/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  distDir: 'dist',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Trailing slashes for better static hosting
  trailingSlash: true,
  reactStrictMode: true,
  // Enable gzip compression at the Next.js layer
  compress: true,
  // Remove the X-Powered-By header for minor security hardening
  poweredByHeader: false,
  // Avoid shipping client source maps in production by default
  productionBrowserSourceMaps: false,
  // Disable ESLint during builds (we run it separately)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during builds (we run it separately)
  typescript: {
    ignoreBuildErrors: false,
  },
  // Strip console.* in production builds to reduce bundle noise; keep error/warn
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  async headers() {
    // Apply common, safe security headers to all routes
    const baseSecurityHeaders = [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ];

    // Combine security headers with strong caching for static assets
    return [
      { source: '/:path*', headers: baseSecurityHeaders },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif|ico|ttf|otf|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
