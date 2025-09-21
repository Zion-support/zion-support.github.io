/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // Fix for CSS processing issues with Node.js compatibility
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Disable PostCSS processing to avoid matchAll issues
    config.module.rules.forEach((rule) => {
      if (rule.oneOf) {
        rule.oneOf.forEach((oneOf) => {
          if (oneOf.use && Array.isArray(oneOf.use)) {
            oneOf.use = oneOf.use.filter((use) => {
              return !use.loader || !use.loader.includes('postcss-loader');
            });
          }
        });
      }
    });
    
    return config;
  },
};

module.exports = nextConfig;
