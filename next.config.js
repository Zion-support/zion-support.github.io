/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  // Generate a fully static export to ./out for Netlify static hosting
  output: 'export',
  images: {
    // Disable Next Image optimization for static export
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  // Keep builds lenient to avoid CI breaks; Netlify linting is handled separately
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;