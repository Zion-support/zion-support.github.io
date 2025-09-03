/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { domains: ['images.unsplash.com', 'via.placeholder.com', 'ziontechgroup.com'] },
};

module.exports = config;