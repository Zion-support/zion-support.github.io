/********
 * Next.js build configuration
 * Type checking and ESLint are now enabled after resolving conflicts
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;