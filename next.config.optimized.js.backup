const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
<<<<<<< HEAD

=======
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
module.exports = withBundleAnalyzer({
>const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
>/** @type {import('next').NextConfig} */
const nextConfig = {
/** @type {import('next').NextConfig} */
const nextConfig = {
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true' });

module.exports = withBundleAnalyzer({
<=
>/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true },
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 },
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'] },
  webpack: (config { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false }}
    
    // Optimize bundle splitting
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all' },
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          enforce: true } } };
    
    return config} });
