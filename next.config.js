/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },

  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;