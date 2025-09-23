/********
 * Next.js build configuration
 * Type checking and ESLint are now enabled after resolving conflicts
 */

/** @type {import('next').NextConfig} */
const nextConfig ={
  typescript: {
    ignoreBuildErrors: false},
  eslint: {
    ignoreDuringBuilds: false}}

export default nextConfig