import type { NextConfig } from 'next';

const nextConfig: NextConfig ={
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],

  images: {
    domains: ['localhost', 'ziontechgroup.com', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true},

  distDir: '.next',
  trailingSlash: false,
  basePath: '',
  assetPrefix: undefined,
  generateEtags: true,

