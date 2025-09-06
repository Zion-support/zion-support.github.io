/** @type {import('next').NextConfig} */;
<<<<<<< HEAD
const nextConfig = {reactStrictMode: true;
  compress: true;
  poweredByHeader: false;
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsxtsjsxjs'];
=======

const nextConfig = {;
<<<<<<< HEAD
  reactStrictMode: true;
=======
<<<<<<< HEAD
  reactStrictMode: true,;
=======
  reactStrictMode: true;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  compress: true,;
  poweredByHeader: false,;
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;

>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
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
}
module.exports = nextConfig;
