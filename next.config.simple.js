<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {

module.exports = nextConfig;
=======

/** @type {import ('next').NextConfig} */;
const next_config = {
=======


  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsx', 'ts', 'jsx', 'js'],
  // Image optimization;
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webp', 'image / avif'],
  },
  // Output configuration;
  output: 'standalone',

  // Trailing slash
  trailingSlash: false,
  // Base path
  basePath: '',
  // Asset prefix
  assetPrefix: '',
  // Generate ETags
  generateEtags: true,
  // Dist directory
  distDir: '.next',
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

