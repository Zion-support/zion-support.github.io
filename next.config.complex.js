
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

<<<<<<< HEAD
=======
const nextConfig = {;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
  distDir: '.next';
},;
module.exports = nextConfig,;

=======
  dist_dir: '.next';
},
module.exports = next_config,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
