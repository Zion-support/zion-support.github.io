<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
/** @type {import('next').NextConfig} */
const nextConfig = {
=======
<<<<<<< HEAD
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
/** @type {import('next').NextConfig} */
const nextConfig = {
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
=======
<<<<<<< HEAD
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  // Image optimization
  images: {
<<<<<<< HEAD
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
  // Security headers
  async headers() {
    return [{
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
  // Bundle analyzer
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      };
    }
    return config;
  }
};
module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process.env.ANALYZE === 'true'});
module.exports = withBundleAnalyzer({
  "reactStrictMode": true,
  "swcMinify": true,
  "compress": true,
  "poweredByHeader": false,
  "generateEtags": false,
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
=======
  "images": {
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    domains: ['images.unsplash.com', 'via.placeholder.com'],
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
=======
<<<<<<< HEAD
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}});
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
      };
    }
    return config;
  },
<<<<<<< HEAD
});
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> main
=======
});
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
