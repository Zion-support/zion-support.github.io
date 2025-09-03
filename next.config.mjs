/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    unoptimized: true,
  },
  pageExtensions: ['route.tsx', 'route.ts'],
}

export default nextConfig;