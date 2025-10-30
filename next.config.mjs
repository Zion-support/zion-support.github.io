/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable gzip compression at the Next.js layer
  compress: true,
  // Remove the X-Powered-By header for minor security hardening
  poweredByHeader: false,
  // Avoid shipping client source maps in production by default
  productionBrowserSourceMaps: false,
  // Strip console.* in production builds to reduce bundle noise
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    // Apply common, safe security headers to all routes
    const securityHeaders = [
      { key: 'X-DNS-Prefetch-Control', value: 'on' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      // A relaxed but helpful default CSP; adjust as needed for external assets
      // Note: Uses report-only style directives to avoid breaking existing pages unexpectedly
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: blob:",
          "font-src 'self' data:",
          "connect-src 'self'",
          "frame-ancestors 'self'",
          "base-uri 'self'",
          "form-action 'self'",
        ].join('; '),
      },
    ];

    // Combine security headers with strong caching for static assets
    return [
      { source: '/:path*', headers: securityHeaders },
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
