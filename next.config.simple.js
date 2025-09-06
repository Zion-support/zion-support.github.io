
/** @type {import ('next').NextConfig} */;
const next_config = {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
<<<<<<< HEAD
  page_extensions: ['tsx', 'ts', 'jsx', 'js'],
  // Image optimization;
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webp', 'image / avif'],
  },
  // Output configuration;
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  output: 'standalone',

  // Trailing slash
  trailingSlash: false,
  // Base path
  basePath: '',
  // Asset prefix
  assetPrefix: '',
  // Generate ETags
  generateEtags: true,
<<<<<<< HEAD
  // Dist directory
  distDir: '.next',
};

=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

module.exports = nextConfig;
module.exports = nextConfig;
