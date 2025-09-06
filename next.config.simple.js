
/** @type {import ('next').NextConfig} */;
const next_config = {


  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
<<<<<<< HEAD
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
=======
  pageExtensions: ["tsx", "ts", "jsx", "js"],

>>>>>>> main
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
<<<<<<< HEAD
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
=======

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

>>>>>>> main
  // Dist directory
  distDir: ".next",
};

module.exports = nextConfig;

module.exports = nextConfig;

module.exports = nextConfig;
module.exports = nextConfig;
