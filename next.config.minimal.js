/** @type {import('next').NextConfig} */
const nextConfig = $2;
  eslint: { ignoreDuringBuilds: true},
  typescript: { ignoreBuildErrors: true},
  pageExtensions: ['tsxtsjsxjs'],
  images: {
    domains: ["localhost", "ziontechgroup.com"]
  },
  output: 'standalone',
  trailingSlash: false,
  distDir: '.next'
},

module.exports = $2;