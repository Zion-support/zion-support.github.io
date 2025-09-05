const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
  },
};

export default nextConfig;
