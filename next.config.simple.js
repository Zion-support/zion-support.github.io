<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Output configuration
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

module.exports = nextConfig;
=======
/** @type {import('next').NextConfig} */;
const nextConfig = {;
  reactStrictMode: true,;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
