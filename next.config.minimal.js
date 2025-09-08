const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Minimal webpack config
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/backup*/**',
          '**/disabled*/**',
          '**/temp*/**',
          '**/*.backup*',
          '**/*.disabled*',
          '**/pages_backup*/**',
          '**/src_backup*/**',
          '**/components.disabled*/**',
          '**/pages.disabled*/**',
          '**/src.disabled*/**'
        ]
      };
    }
    return config;
  }
};
export default nextConfig;