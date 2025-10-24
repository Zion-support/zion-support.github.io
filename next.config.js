/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Force all pages to be dynamic
  generateStaticParams: false,
  // Disable static optimization
  staticPageGenerationTimeout: 1000,
  // Force dynamic rendering
  dynamicParams: true,
}

module.exports = nextConfig