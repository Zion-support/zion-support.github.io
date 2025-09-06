<<<<<<< HEAD
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

=======
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
  // Image optimization
  images: {
    domains: [
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com",
    ],
    formats: ["image/webp", "image/avif"],
  },
// Output configuration
  output: 'standalone',
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Trailing slash
  trailingSlash: false,
  // Base path
  basePath: '',
  // Asset prefix
  assetPrefix: '',
  // Generate ETags
  generateEtags: true,
  // Dist directory
<<<<<<< HEAD
  distDir: '.next',
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  distDir: ".next",
};

module.exports = nextConfig;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

