/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use static export so Netlify can serve from the `out` directory
  output: 'export',
  images: {
    // Required for static export
    unoptimized: true,
  },
};

export default nextConfig;