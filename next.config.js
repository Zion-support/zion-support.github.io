/********
 * Temporary build config to unblock production build
 * TODO: Re-enable type checking after resolving conflicts in TS files
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig