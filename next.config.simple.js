
<<<<<<< HEAD
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
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
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


  // Output configuration
  output: "standalone",

  // Trailing slash
  trailingSlash: false,

  // Base path
  basePath: "",

  // Asset prefix
  assetPrefix: "",

  // Generate ETags
  generateEtags: true,

  // Dist directory
  distDir: ".next",
};


module.exports = nextConfig;
>>>>>>> origin/main

module.exports = nextConfig;
module.exports = nextConfig;

<<<<<<< HEAD
=======

>>>>>>> origin/main
