/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is a Vite project, not Next.js
  // This file is kept for compatibility but not used
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
