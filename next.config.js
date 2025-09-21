// Polyfill for globalThis
if (typeof globalThis === 'undefined') {
  global.globalThis = global;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
    domains: ["localhost"],
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
};

module.exports = nextConfig;