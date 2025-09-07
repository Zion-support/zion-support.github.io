
<<<<<<< HEAD
=======
/** @type {import ('next').NextConfig} */;
const next_config = {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452


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
    domains: [
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
      "via.placeholder.com",
    ],
    formats: ["image/webp", "image/avif"],
  },
  // Output configuration
<<<<<<< HEAD
=======
  // Output configuration
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
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

module.exports = nextConfig;
module.exports = nextConfig;


