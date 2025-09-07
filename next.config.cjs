/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { 
    ignoreDuringBuilds: true 
  },
  typescript: { 
    ignoreBuildErrors: true 
  },
  experimental: {
    forceSwcTransforms: false
  },
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2
  },
  images: {
    domains: ['ziontechgroup.com', 'localhost', 'images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  // Enable static export for deployment
  output: 'export',
  trailingSlash: true,
  // Disable server-side features for static export
  generateEtags: false,
  // Optimize for static export
  distDir: 'out',
  // Disable features that don't work with static export
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
};

module.exports = nextConfig;