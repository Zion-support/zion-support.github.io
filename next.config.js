/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ["ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true
  },
  experimental: { optimizePackageImports: ["@heroicons/react"] },
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false, net: false, tls: false };
    return config;
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  onDemandEntries: { maxInactiveAge: 25 * 1000, pagesBufferLength: 2 }
};

export default nextConfig;