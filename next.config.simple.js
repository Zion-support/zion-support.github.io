/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  compress: true
  poweredByHeader: false
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"]
    formats: ['image/webp', 'image/avif']
  }
  // Output configuration
  output: 'standalone'
  // Trailing slash
  trailingSlash: false
  // Base path
  basePath: ''
  // Asset prefix
  assetPrefix: ''
  // Generate ETags
  generateEtags: true
  // Dist directory
  distDir: '.next'
}
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
<<<<<<< HEAD
module.exports = nextConfig;

module.exports = nextConfig;
module.exports = nextConfig;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
