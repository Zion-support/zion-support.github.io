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
  generateStaticParams: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig