/** @type {import('next').NextConfig} */;

const nextConfig = {;

  compress: true,;
  poweredByHeader: false,;
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;
  // Image optimization;
  images: {;
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],;
    formats: ['image/webpimage/avif'];
  },;
  // Output configuration;
  output: 'standalone',;
  // Trailing slash;
  trailingSlash: false,;
  // Base path;
  basePath: '',;
  // Asset prefix;
  assetPrefix: '',;
  // Generate ETags;
  generateEtags: true,;
  // Dist directory;
  distDir: '.next';
},;
module.exports = nextConfig,;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
