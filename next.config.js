import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {

  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,

  },
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom webpack configuration here if needed
    return config;
  },
  
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
  
  // Output configuration
  output: 'standalone',
  
  // Trailing slash
  trailingSlash: false,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  images: {
    domains: ['localhost', 'ziontechgroup.com'],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ziontechgroup-site' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ziontechgroup-site' : '',
  experimental: {
    optimizeCss: true,
  },
};


export default nextConfig;

