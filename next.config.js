const os = require('os');

const nextConfig = {
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_ASSET_PREFIX || '' : '',
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
