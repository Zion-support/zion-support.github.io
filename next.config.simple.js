
<<<<<<< HEAD
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
  pageExtensions: ["tsx", "ts", "jsx", "js"],

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Dist directory
  distDir: ".next",
};

module.exports = nextConfig;

module.exports = nextConfig;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

module.exports = nextConfig;
module.exports = nextConfig;


