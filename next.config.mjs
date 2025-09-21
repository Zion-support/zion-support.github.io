/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: false,
  experimental: {
    esmExternals: false,
  },
  cssModules: false,
  cssLoaderOptions: {
    url: false,
  },
  postcssLoaderOptions: {
    postcssOptions: false,
  },
  webpack: (config, { isServer }) => {
    // Minimal webpack configuration
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
};

export default nextConfig;
