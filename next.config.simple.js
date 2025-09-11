
/** @type {import ('next').NextConfig} */;
const next_config = {
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ["tsx", "ts", "jsx", "js"],

<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true
  reactStrictMode: true
  compress: true
  poweredByHeader: false
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  // Image optimization
  images: {
    domains: ['localhost'],
  },

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
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
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
  output: 'standalone',
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Trailing slash
  trailingSlash: false,

  // Base path
  basePath: "",

  // Asset prefix
  assetPrefix: "",

  // Generate ETags
  generateEtags: true,

  // Dist directory
<<<<<<< HEAD
  distDir: ".next",
};

module.exports = nextConfig;

module.exports = nextConfig;
=======
  distDir: '.next',
};

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

module.exports = nextConfig;
module.exports = nextConfig;
