/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use standalone output for better compatibility
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true
  },
  // Skip problematic pages for now
  experimental: {
    missingSuspenseWithCSRBailout: false
  },
  // Optimize static generation
  staticPageGenerationTimeout: 60,
  // Enable SWC minification for better performance
  swcMinify: true,
  // Generate build ID for better caching
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  // Enable compression
  compress: true,
  // Enable experimental features for better performance
  experimental: {
    missingSuspenseWithCSRBailout: false,
    optimizePackageImports: ['@heroicons/react', 'lucide-react']
  },
  // Exclude problematic files temporarily
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      }
    }
    return config
  }
}
module.exports = nextConfig;