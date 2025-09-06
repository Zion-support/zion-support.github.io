/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  images: {
<<<<<<< HEAD
    domains: ["localhost", "ziontechgroup.com"]
  }
  output: 'standalone'
  trailingSlash: false
  distDir: '.next'
}
=======
    domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
  trailingSlash: false,
  distDir: '.next',
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
module.exports = nextConfig;