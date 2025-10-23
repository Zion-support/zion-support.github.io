/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  output: 'standalone',
=======
  output: 'export',
>>>>>>> cursor/fix-errors-and-merge-to-main-280f
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig