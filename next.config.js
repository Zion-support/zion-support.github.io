/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  images: {
    domains: ["localhost"],
  },
};

export default nextConfig;
