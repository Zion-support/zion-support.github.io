<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js

<<<<<<<< HEAD:next.config.optimized.js

<:next.config.optimized.js

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({




>>>>>>>> main:corrupted_backup/next.config.optimized.js

const withBundleAnalyzer = require('@next/bundle-analyzer')({

=
>const withBundleAnalyzer = require('@next/bundle-analyzer')({

  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<<<<<<<< HEAD:next.config.optimized.js
========


>>>>>>>> main:corrupted_backup/next.config.optimized.js
/** @type {import('next').NextConfig} */
const nextConfig = {





/** @type {import('next').NextConfig} */
const nextConfig = {


>
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js



========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
/** @type {import('next').NextConfig} */
const nextConfig = {







<:next.config.optimized.js
=
>/** @type {import('next').NextConfig} */
const nextConfig = {
/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,

  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  


  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],




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



  
  // Image optimization
  images: {
  // Image optimization
  images: {

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

    domains: ['images.unsplash.com', 'via.placeholder.com'],

<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js

<<<<<<<< HEAD:next.config.optimized.js
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
========


<:next.config.optimized.js
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
=

  "images": {
  generateEtags: false,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
"images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
>


>>>>>>>> main:corrupted_backup/next.config.optimized.js

  "images": {



    domains: ['images.unsplash.com', 'via.placeholder.com'],



>  "images": {
    domains: ['images.unsplash.com', 'via.placeholder.com'],

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
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js
            name: 'vendors',
========
>


<<<<<<<< HEAD:next.config.optimized.js
========
            name: 'vendors',
>>>>>>>> main:corrupted_backup/next.config.optimized.js

            name: 'vendors',



<:next.config.optimized.js
=
            name: 'vendors',
>            name: 'vendors',

            chunks: 'all',
          },
          common: {
            name: 'common',
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js

<<<<<<<< HEAD:next.config.optimized.js
========

>


>>>>>>>> main:corrupted_backup/next.config.optimized.js

<:next.config.optimized.js
=
>            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },


      }}
    return config},
});
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js

      }}
    return config},
});
<<<<<<<< HEAD:next.config.optimized.js
========





>


>>>>>>>> main:corrupted_backup/next.config.optimized.js





const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});

      }}
    return config},
});
<:next.config.optimized.js
=
>const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});

            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}});


const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
<<<<<<<< HEAD:corrupted_backup/next.config.optimized.js

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
<<<<<<<< HEAD:next.config.optimized.js
========

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});





const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
<:next.config.optimized.js
=
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});

      };
    }
    return config;
  },
});




>>>>>>>> main:corrupted_backup/next.config.optimized.js



});
>});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
});




========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js






