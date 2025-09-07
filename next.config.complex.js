/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsxtsjsxjs'],

/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode: true;
  compress: true;
  poweredByHeader: false;
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsxtsjsxjs'];
  // Image optimization;
  images: {domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"];
    formats: ['image/webpimage/avif'];
  }
  // Output configuration;
  output: 'standalone';
  // Trailing slash;
  trailingSlash: false;
  // Base path;
  basePath: '';
  // Asset prefix;
  assetPrefix: '';
  // Generate ETags;
  generateEtags: true;
  // Dist directory;
  distDir: '.next';
module.exports = nextConfig;
const nextConfig = {;

  compress: true,;
  poweredByHeader: false,;
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;

  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webpimage / avif'];
  },
  output: 'standalone',
  trailing_slash: false,
  base_path: '',
  asset_prefix: '',
  generate_etags: true,
},;
module.exports = nextConfig,;
