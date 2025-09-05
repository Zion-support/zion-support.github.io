const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY
  }
};

export default nextConfig;