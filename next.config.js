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
  output: "export",
  
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

  // Security headers are managed by Netlify via netlify.toml during static export

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