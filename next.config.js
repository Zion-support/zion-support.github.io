<<<<<<< HEAD
/** @type {import('next').NextConfig,
  "experimental": { optimizeCss: true }
} */
const nextConfig = {
  "reactStrictMode": true,
  "images": {
    domains: ['localhost']},
  "env": {
    CUSTOM_KEY: process.env.CUSTOM_KEY},
  "eslint": {
    ignoreDuringBuilds: true},
  "typescript": {
    ignoreBuildErrors: true},
  async rewrites() {
    return [{
        "source": '/api/:path*',
        "destination": '/api/:path*'},
    ];
  }};

export default nextConfig;
=======
const nextConfig = { reactStrictMode: true,images: { domains: ['localhost'],},env: { CUSTOM_KEY: process.env.CUSTOM_KEY,},eslint: { ignoreDuringBuilds: true,},typescript: { ignoreBuildErrors: true,},async rewrites() { return [ { source: '/api/:path*',destination: '/api/:path*',},]},}; export default nextConfig;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
