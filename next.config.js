/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  webpack: (config, { isServer }) => {
    // Disable CSS processing temporarily
    config.module.rules = config.module.rules.filter(rule => {
      if (rule.test && rule.test.toString().includes('css')) {
        return false;
      }
      return true;
    });
    
    return config;
  },
};

export default nextConfig;