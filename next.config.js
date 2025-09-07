/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    unoptimized: true
  },
  reactStrictMode: false,
  trailingSlash: true,
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig
