const nextConfig = {

  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  trailingSlash: true,

  images: {
    domains: [
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com"
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true
  },
  
  // Page extensions
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  
  // Trailing slash
  trailingSlash: true,
  
  // Webpack configuration


module.exports = nextConfig

