/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["localhost"],
  },
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
  compiler: {
    removeConsole: false,
  },
  webpack: (config, { isServer }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Add path mapping for @ alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    
    // Fix for modern JavaScript syntax support
    config.module.rules.push({
      test: /\.m?js$/,
      resolve: {
        fullySpecified: false,
      },
    });
    
    return config;
  },
};

module.exports = nextConfig;
