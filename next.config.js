/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Disable static export to avoid prerendering issues
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  output: 'standalone'
  // Skip problematic pages during build
}

module.exports = nextConfig