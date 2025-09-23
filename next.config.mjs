/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    // Ignore type errors during build; we run type-check separately on app code
    ignoreBuildErrors: true,
  },
  eslint: {
    // Lint is run separately; do not block builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'dist',
  assetPrefix: '',
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;