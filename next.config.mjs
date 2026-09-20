/** @type {import('next').NextConfig} */
import path from 'node:path';

const nextConfig = {
  output: 'export',
  // Next.js 16 defaults to Turbopack; empty turbopack config silences the
  // "using Turbopack with a `webpack` config and no `turbopack` config" build error
  turbopack: {},
  outputFileTracingRoot: process.cwd(),
  basePath: '',
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Static export via webpack
  webpack: (config, { isServer }) => {
    const appDir = path.join(process.cwd(), 'app');
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': appDir,
      'ncomponents': path.join(appDir, 'components'),
      'ndata': path.join(appDir, 'data'),
      'nlib': path.join(appDir, 'lib'),
    };
    // Reduce memory usage during build
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 100000,
        },
      };
    }
    // Limit parallelism in webpack
    config.parallelism = 1;
    return config;
  },
  generateBuildId: async () => 'zion-tech-group-v1',
