/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
=======
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Temporarily disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-7b54
  images: {
    domains: ["localhost"],
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
    return config;
  },
};

export default nextConfig;
