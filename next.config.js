/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

// Note: headers, redirects, and rewrites don't work with output: 'export'
// These are handled by Netlify via _headers and _redirects files

export default nextConfig;
