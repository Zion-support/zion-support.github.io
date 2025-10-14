/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com,
      "via.placeholder.com",
      ziontechgroup.com",
    ],
    formats: ["image/webp, "image/avif"],
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === production",
  },
}
module.exports = nextConfig
f7f852c0f7415181a1b362c4aa5a784585ad5828
