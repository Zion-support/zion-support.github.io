/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
<<<<<<< HEAD
  images: {
    domains: ["localhost"],
=======
  eslint: {
    ignoreDuringBuilds: true,
    dirs: []
>>>>>>> origin/merge-pr-12271
  },
  typescript: {
    ignoreBuildErrors: true,
  },
<<<<<<< HEAD
  eslint: {
    ignoreDuringBuilds: true,
=======
  images: {
    domains: ['ziontechgroup.com', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true
>>>>>>> origin/merge-pr-12271
  },
  async redirects() {
    return [
      { source: '/zion/gitbook', destination: '/docs/gitbook', permanent: true },
    ];
  },
  webpack: (config) => {
    // Support TS path alias '@/...' by mapping it to the project root
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};
<<<<<<< HEAD
=======

export default nextConfig;
>>>>>>> origin/merge-pr-12271
