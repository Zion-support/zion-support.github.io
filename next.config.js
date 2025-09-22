/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Image optimization
  images: {
    domains: [
      "localhost",
      "ziontechgroup.com", 
      "images.unsplash.com",
      "via.placeholder.com"
    ],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true
  },

  // Output configuration
  // Let Netlify Next.js runtime handle output; do not force standalone
  // output: "standalone",
  
  // Trailing slash
  trailingSlash: false,
  
  // Base path
  basePath: "",
  
  // Asset prefix
  assetPrefix: "",
  
  // Generate ETags
  generateEtags: true,
  
  // Dist directory
  distDir: ".next",

  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react']
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        stream: false,
        url: false,
        zlib: false,
        http: false,
        https: false,
        assert: false,
        os: false,
        path: false
      };
    }
    return config;
  }
};

export default nextConfig;