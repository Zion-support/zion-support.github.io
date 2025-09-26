/** @type {import('next').NextConfig} */
export default {
  pageExtensions: ['js','jsx'],
  async redirects() {
    return [
      { source: '/InnovativeServicesShowcase2025', destination: '/', permanent: true },
    ];
  },
  typescript: {
    ignoreBuildErrors: true},
  eslint: {
    ignoreDuringBuilds: true}};
