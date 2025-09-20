/** @type {import('next').NextConfig} */
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined;
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;