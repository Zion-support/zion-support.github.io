/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
<<<<<<< HEAD
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
=======
  output: 'standalone'
  // Skip problematic pages during build
>>>>>>> cursor/fix-errors-and-merge-to-main-f6f2
}

module.exports = nextConfig