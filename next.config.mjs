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
  // NOTE: output: 'export' does not apply custom headers from next.config.
  // Configure security and cache headers at the hosting/CDN layer.
};

export default nextConfig;
