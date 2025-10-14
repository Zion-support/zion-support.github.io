const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'ziontechgroup.com'
    ],
    formats: ['image/webp', 'image/avif'],
  },
  contentSecurityPolicy: "default-src 'self'; script-src 'none';",
};

module.exports = withBundleAnalyzer(nextConfig);