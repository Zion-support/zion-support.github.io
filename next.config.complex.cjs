/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  trailingSlash: true,

  eslint: {,
  ignoreDuringBuilds: true,
    dirs: []
  typescript: {,
  ignoreBuildErrors: true;
  onDemandEntries: {,
  maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  experimental: {,
  optimizeCss: true,

    ];
  async headers() {

        ],
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [

        poll: 1000,
        aggregateTimeout: 300;
      }
    if (!dev && !isServer) {
      config.optimization.splitChunks = {


    // Handle problematic files;
    config.module.rules.push({)
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        /corrupted_backup/,
        /backup/,
        /disabled/]

    });

    // Add custom webpack rule to ignore apps directory;
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,


    // Optimize for production;
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    return config;



module.exports = nextConfig;


export default nextConfig;

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom webpack configuration here if needed;
  env: {,
  CUSTOM_KEY: process.env.CUSTOM_KEY,
  ignoreBuildErrors: false,
  ignoreDuringBuilds: false,



