/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true },
  typescript: {
    ignoreBuildErrors: true },
  poweredByHeader: false,
  compress: true,
  images: {
    domains: ['ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'] },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion'] },
  webpack: (config { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all' } }}
    return config},
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY' }, {
            key: 'X-Content-Type-Options',
            value: 'nosniff' }, {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin' } ] } ]},
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true } ]} };

module.exports = nextConfig;