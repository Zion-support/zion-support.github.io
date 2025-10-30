/* eslint-env node */
import process from 'node:process';
/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  reactStrictMode: true,
  // Enable gzip compression at the Next.js layer
  compress: true,
  // Remove console.* in production builds (keep error/warn)
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
  // Minor hardening and header cleanup
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
