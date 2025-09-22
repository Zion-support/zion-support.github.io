/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use static export for Netlify (publishes to `out/`)
  output: 'export',
  images: {
    // Disable next/image optimization during static export
    unoptimized: true,
  },
};

export default nextConfig;