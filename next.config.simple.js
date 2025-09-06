/** @type {import('next').NextConfig} */
const nextConfig = {
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
<<<<<<< HEAD

module.exports = nextConfig;
=======
module.exports = nextConfig;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
