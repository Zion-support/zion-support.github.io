
/** @type {import ('next').NextConfig} */;
const next_config = {


  reactStrictMode: true,
/** @type {import('next').NextConfig} */
const nextConfig = $2;
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true},
  typescript: { ignoreBuildErrors: true},
  pageExtensions: ['tsxtsjsxjs'],
  
  // Image optimization
  images: {
    domains: ['localhost', 'ziontechgroup.com', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webpimage/avif']
  },
  // Output configuration
  // Output configuration
  output: 'standalone',

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
},

module.exports = $2;