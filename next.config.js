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
<<<<<<< HEAD
=======
  generateStaticParams: false,
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  experimental: {
    missingSuspenseWithCSRBailout: false,
  }
}

module.exports = nextConfig