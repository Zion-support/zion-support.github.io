/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
compress: true,
poweredByHeader: false,
eslint: {,
ignoreDuringBuilds: true,
}
  typescript: {
webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
    }
    // Exclude apps directory from compilation,
config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
include: /apps\//
      use: "ignore-loader"
    });
    return config;
  }
  async headers() {
    return [
      {
        source: "/(.*)",
headers: [
          {
            key: "X-Content-Type-Options",
value: "nosniff"
          }
          {
            key: "X-Frame-Options",
value: "DENY"
          }
          {
            key: "X-XSS-Protection",
value: "1; mode=block"
          }
          {
            key: "Referrer-Policy",
value: "origin-when-cross-origin"
          }
        ]
      }
    ];
  }
}
export default nextConfig;