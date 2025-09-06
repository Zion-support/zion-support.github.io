
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsxtsjsxjs'],
=======
/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode: true;
  compress: true;
  poweredByHeader: false;
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsxtsjsxjs'];
  // Image optimization;
  images: {domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"];
    formats: ['image/webpimage/avif'];
  }
  // Output configuration;
  output: 'standalone';
  // Trailing slash;
  trailingSlash: false;
  // Base path;
  basePath: '';
  // Asset prefix;
  assetPrefix: '';
  // Generate ETags;
  generateEtags: true;
  // Dist directory;
  distDir: '.next';
}
module.exports = nextConfig;
const nextConfig = {;
<<<<<<< HEAD
  reactStrictMode: true;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  reactStrictMode: true,;
  reactStrictMode: true;
=======
<<<<<<< HEAD
  reactStrictMode: true;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  compress: true,;
  poweredByHeader: false,;
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;

  // Image optimization;
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webpimage / avif'];
  },
  // Output configuration;
  output: 'standalone',
  // Trailing slash;
  trailing_slash: false,
  // Base path;
  base_path: '',
  // Asset prefix;
  asset_prefix: '',
  // Generate ETags;
  generate_etags: true,
  // Dist directory;
  distDir: '.next';
},;
module.exports = nextConfig,;
