/**
 * This repository builds with Vite, not Next.js.
 * This file remains only to avoid merge conflicts in branches that still expect it.
 * It is not used by the build or deploy pipelines.
 */
const nextConfig = {
  // Explicitly minimal to avoid accidental Next.js usage
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true }
};

module.exports = nextConfig;
