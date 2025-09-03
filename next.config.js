/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-53eb
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif']
  },
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-53eb
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': new URL('./src', import.meta.url).pathname,
        '@': new URL('./src', import.meta.url).pathname
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-53eb
      };
    }
    return config},
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
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ]
      },
    ]
  }
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-53eb
};

export default nextConfig;