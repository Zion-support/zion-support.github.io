/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  images: {
    unoptimized: true,
    domains: ["localhost"]
  },
  pageExtensions: ['page.tsx','page.ts','page.jsx','page.js'],
  typescript: {
    ignoreBuildErrors: process.env.SKIP_TYPE_CHECK === 'true' || true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  // Note: redirects don't work with output: 'export'
  // These are handled by Netlify via _redirects files
};

// Note: headers, redirects, and rewrites don't work with output: 'export'
// These are handled by Netlify via _headers and _redirects files

module.exports = nextConfig;