<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
/** @type {import('next').NextConfig} */
const nextConfig = {
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({

>>>>>>>> main:corrupted_backup/next.config.optimized.js
/** @type {import('next').NextConfig} */
const nextConfig = {
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js

/** @type {import('next').NextConfig} */
const nextConfig = {
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
:backup-problematic-files/next.config.optimized.js
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<:corrupted_backup/next.config.optimized.js

========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
/** @type {import('next').NextConfig} */
const nextConfig = {
=======
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
:backup-problematic-files/next.config.optimized.js
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
=======

>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true;,
  swcMinify: true;
  compress: true;,
  poweredByHeader: false;
  eslint: { ignoreDuringBuilds: false }
  typescript: { ignoreBuildErrors: false }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // Performance optimizations
  experimental: {
    scrollRestoration: true
    optimizeCss: true
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
},
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
  // Image optimization
  images: {
<<<<<<< HEAD
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,

    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
=======
  }
  // Image optimization
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  // Security headers
=======
  // Performance optimizations;
  experimental: {,
  scrollRestoration: true;
    optimizeCss: true;,
  optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  }
  // Image optimization;
  images: {,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;""
  // Security headers;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  async headers() {
    return [{"
        source: '/(.*),
  headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' }
          { key: 'X-Frame-Options', value: 'DENY' }
          { key: 'X-XSS-Protection', value: '1; mode=block' }
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }']
        ]
    ];
},
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
  // Bundle analyzer
  webpack: (config, { isServer }) => {
    if (!isServer) {

=======
  }
  // Bundle analyzer
=======
  // Bundle analyzer;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  webpack: (config, { isServer }) => {
    if (!isServer) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
const withBundleAnalyzer = require ('@next / bundle - analyzer')({
  enabled: process.env.ANALYZE === 'true',')
});
module.exports = withBundleAnalyzer ({)
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  swc_minify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  page_extensions: ['tsx', 'ts', 'jsx', 'js'],
  // Performance optimizations;
  scroll_restoration: true,
    optimize_css: true,
    optimizePackageImports: ['lucide-react', '@radix - ui / react - icons'];
  },
  // Image optimization;
  domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],""
    formats: ['image / webp', 'image / avif'],
    device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    image_sizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default - src 'self'; script - src 'none'; sandbox;";"
  // Security headers;
  async headers () {
        source: '/(.*)',
        headers: [;
          { key: 'X - Content - Type - Options', value: 'nosniff' },
          { key: 'X - Frame - Options', value: 'DENY' },
          { key: 'X - XSS - Protection', value: '1; mode = block' },
          { key: 'Referrer - Policy', value: 'origin - when - cross - origin' },
          { key: 'Permissions - Policy', value: 'camera=(), microphone=(), geolocation=()' }']
  // Bundle analyzer;
  webpack: (config, { is_server }) => {
    // Check condition;
if ( {) {
$2
}
config.resolve.fallback = {
        ...config.resolve.fallback
        fs: false
        net: false
      config && config.resolve.fallback = {
        ...config && config.resolve.fallback,
        fs: false,
        net: false,
tls: false;
      }
    }
    return config;
  }
};
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
module.exports = nextConfig;
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process.env.ANALYZE === 'true'});
module.exports = withBundleAnalyzer({
  "reactStrictMode": true,
  "swcMinify": true,
  "compress": true,
  "poweredByHeader": false,
  "generateEtags": false,
:backup-problematic-files/next.config.optimized.js
"images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
    domains: ['images.unsplash.com', 'via.placeholder.com'],
=======
<:corrupted_backup/next.config.optimized.js
  "images": {
=======
  generateEtags: false,
  images: {
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
    domains: ['images.unsplash.com', 'via.placeholder.com'],

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>>> main:corrupted_backup/next.config.optimized.js
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
=======
  "images": {
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
    domains: ['images.unsplash.com', 'via.placeholder.com'],
:backup-problematic-files/next.config.optimized.js
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
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
        cache_groups: {
          vendor: {
:backup-problematic-files/next.config.optimized.js

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  "enabled": process.env.ANALYZE === 'true'});
module.exports = withBundleAnalyzer({
  "reactStrictMode": true;""
  "swcMinify": true;""
  "compress": true;""
  "poweredByHeader": false;""
  "generateEtags": false;""
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com']
    formats: ['image/webp', 'image/avif']
module && module.exports = nextConfig;)
  "enabled": process && process.env.ANALYZE === 'true'});
module && module.exports = withBundleAnalyzer({
;
module.exports = next_config;)
const withBundleAnalyzer = require ('@next / bundle - analyzer')({')
module.exports = withBundleAnalyzer ({
  "reactStrictMode": true,""
  "swc_minify": true,""
  "compress": true,""
  "poweredByHeader": false,"
      config && config.optimization.splitChunks = {
    optimize_css: true,"
    optimizePackageImports: ['@mui / material', '@mui / icons - material'],
  },)
  webpack: (config, { dev, is_server }) => {
    // Check condition;
      config.optimization.split_chunks = {
        chunks: 'all',
cache_groups: {
          vendor: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            test: /[\\/]node_modules[\\/]/
name: 'vendors'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            minChunks: 2
            chunks: 'all'
          }
          common: {
            name: 'common',
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
            chunks: 'all',
          },
          common: {
            name: 'common',
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
<<<<<<< HEAD:backup-problematic-files/next.config.optimized.js
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            minChunks: 2,
            minChunks: 2,
name: 'vendors',
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ enabled: process.env.ANALYZE === 'true', }); module.exports = withBundleAnalyzer ({ reactStrictMode: 'true', swc_minify: 'true', compress: 'true', poweredByHeader: 'false', generate_etags: 'false', images: { domains: ['images.unsplash.com', 'via.placeholder.com'], formats: ['image / webp', 'image / avif'], }, experimental: { optimize_css: true, optimizePackageImports: ['@mui / material', '@mui / icons - material'], }, webpack: (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { chunks: 'all', cache_groups: { vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all', }, common: { name: 'common', min_chunks: '2', chunks: 'all', enforce: 'true', }, }, }} return config}, })) {
            min_chunks: 2,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
            chunks: 'all',
            enforce: true,
      }}
    return config},
});

=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52

>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>>> main:corrupted_backup/next.config.optimized.js
=======
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});

            "minChunks": 2,

            "chunks": 'all',
            name: 'common'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            "minChunks": 2
            "chunks": 'all'
            "enforce": true}}}}
    return config}});
:backup-problematic-files/next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
=======
:backup-problematic-files/next.config.optimized.js
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
      };
    }
    return config;
  },
<<<<<<< HEAD
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
>>>>>>>> main:corrupted_backup/next.config.optimized.js
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
=======
});
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
:backup-problematic-files/next.config.optimized.js
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.optimized.js
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
========
>>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6:next.config.optimized.js
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:next.config.optimized.js
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
            "minChunks": 2,
=======
ursor/integrate-build-improve-and-re-verify-8f7d;
            "minChunks": 2,""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            "chunks": 'all',
            "enforce": true}}}}
    return config}});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},})
};
    }
    return config;
  },
});
            "enforce": true}}}}"
    return config}});"
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
      };
pr-12325

}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
