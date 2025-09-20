/** @type {import('next').NextConfig} */
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined;
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix,
  distDir: 'out',
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  experimental: {
    esmExternals: 'loose',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    // Exclude problematic files from compilation
    config.module.rules.push({
      test: /\.(js|ts|jsx|tsx)$/,
      include: [
        /src\/data\/disabled/,
        /src\/hooks\/.*\.(js|ts)$/,
        /src\/lib\/.*\.(js|ts)$/,
        /src\/types\/.*\.(js|ts)$/,
        /src\/services\/.*\.(js|ts)$/,
        /src\/routes\/.*\.(js|ts)$/,
        /src\/store\/.*\.(js|ts)$/,
        /src\/integrations\/.*\.(js|ts)$/,
        /src\/layout\/.*\.(js|ts)$/,
        /src\/legal\/.*\.(js|ts)$/,
        /src\/mobile\/.*\.(js|ts)$/,
        /src\/hoc\/.*\.(js|ts)$/,
        /src\/stories\/.*\.(js|ts)$/,
        /src\/stubs\/.*\.(js|ts)$/,
      ],
      use: 'ignore-loader'
    });
    
    return config;
  },
};

module.exports = nextConfig;
