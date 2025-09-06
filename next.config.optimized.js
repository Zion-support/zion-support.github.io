<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
========
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
/** @type {import('next').NextConfig} */
const nextConfig = {
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
<<<<<<< HEAD
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
/** @type {import('next').NextConfig} */
const nextConfig = {
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
<<<<<<< HEAD
<<<<<<< HEAD
=======
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
=======
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
<<<<<<< HEAD
  // Image optimization
  images: {
<<<<<<< HEAD
=======
  
  // Image optimization
  images: {
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },
<<<<<<< HEAD
=======
  
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
<<<<<<< HEAD
=======
  
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
<<<<<<< HEAD
=======

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process.env.ANALYZE === 'true'});
module.exports = withBundleAnalyzer({
  "reactStrictMode": true,
  "swcMinify": true,
  "compress": true,
  "poweredByHeader": false,
  "generateEtags": false,
<<<<<<< HEAD
  "images": {
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    domains: ['images.unsplash.com', 'via.placeholder.com'],
=======
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
  "images": {
=======
  generateEtags: false,
  images: {
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
    domains: ['images.unsplash.com', 'via.placeholder.com'],
========
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
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
<<<<<<< HEAD
            name: 'vendors',
=======
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
            name: 'vendors',
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
            chunks: 'all',
          },
          common: {
            name: 'common',
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
      }}
    return config},
});
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
=======
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}});
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
<<<<<<< HEAD
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
      };
    }
    return config;
  },
<<<<<<< HEAD
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
=======
});
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
