/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  images: {
    domains: ['localhost', 'ziontechgroup.com'],
    unoptimized: true,
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ziontechgroup-site' : ,
  basePath: process.env.NODE_ENV === 'production' ? '/ziontechgroup-site' : ,
  experimental: {
    optimizeCss: true,
};

export default nextConfig;