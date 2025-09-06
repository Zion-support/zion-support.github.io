<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  images: {
    domains: ["localhost", "ziontechgroup.com"]
  }
  output: 'standalone'
  trailingSlash: false
  distDir: '.next'
}
module.exports = nextConfig;
=======
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
  trailing_slash: false,
  dist_dir: '.next',
}
;
module.exports = next_config;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
