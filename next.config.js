/** @type {import('next').NextConfig} */
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined;
const nextConfig = {
  assetPrefix,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
  webpack: (config) => {
    // Exclude problematic files from compilation
    config.module.rules.push({
      test: /\.(js|ts|tsx)$/,
      include: [
        /src\/data\/disabled/,
        /src\/hooks\/use-mobile\.ts$/,
        /src\/hooks\/use-toast\.ts$/,
        /src\/hooks\/useScrollToTop\.ts$/,
      ],
      use: 'ignore-loader',
    });
    return config;
  },
};

module.exports = nextConfig;
