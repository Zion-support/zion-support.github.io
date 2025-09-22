/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  
  // Image optimization
  images: {
    domains: ["localhost"],
  },
  
  // Disable CSS processing
  webpack: (config, { isServer }) => {
    config.module.rules = config.module.rules.filter(rule => {
      if (rule.test && rule.test.toString().includes('css')) {
        return false;
      }
      return true;
    });
    
    return config;
  },
};

module.exports = nextConfig;