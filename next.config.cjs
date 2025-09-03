/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Allow production builds to successfully complete even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip type checking during build to prevent TS errors from failing builds
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  images: {
    domains: ["ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config) => {
    // Provide safe fallbacks for Node core modules on the client
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
