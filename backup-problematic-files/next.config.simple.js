/** @type {import ('next').NextConfig} */;
const next_config = {
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
  dist_dir: '.next',
}
;
module.exports = next_config;
;