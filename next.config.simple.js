const nextConfig = {
  reactStrictMode: true
  compress: true
  poweredByHeader: false
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsxtsjsxjs']
  trailingSlash: true
  // Disable experimental features that might cause issues
  experimental: {
    // Remove problematic features
  }
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"]
    formats: ['image/webpimage/avif']
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    minimumCacheTTL: 31536000, // 1 year
  }
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)'
        headers: [
          {
            key: 'X-Frame-Options'
            value: 'DENY'
          }
          {
            key: 'X-Content-Type-Options'
            value: 'nosniff'
          }
          {
            key: 'Referrer-Policy'
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home'
        destination: '/'
        permanent: true
      }
    ]
  };
};
export default nextConfig;