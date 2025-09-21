/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  
  // Disable TypeScript and ESLint during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;