/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
    domains: ['images.unsplash.com', 'via.placeholder.com']
=======
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
<<<<<<< HEAD
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  async redirects() {
    return [
      { source: '/api-documentation', destination: '/api-docs', permanent: true },
      { source: '/ai-consciousness-evolution-2025', destination: '/ai-consciousness-evolution-2029', permanent: false }
    ];
=======
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
<<<<<<< HEAD
  webpack: (config, { isServer }) => {
    // Handle problematic files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      include: [
        /corrupted_backup/,
        /backup/,
        /disabled/
      ],
      use: 'ignore-loader'
    });

    // Optimize for production
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },
  serverExternalPackages: ['sharp'],
};

module.exports = nextConfig;
=======
};

export default nextConfig;
>>>>>>> f6b849a806966ab0803a1eba10ab812addf04f56
