/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  experimental: {
    esmExternals: false,
  },
  webpack: (config, { isServer }) => {
    // Disable PostCSS processing temporarily
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('css')) {
        rule.use = rule.use || [];
        rule.use = rule.use.filter((use) => {
          return !use.loader || !use.loader.includes('postcss-loader');
        });
      }
    });
    return config;
  },
};

export default nextConfig;
