/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

export default nextConfig;
