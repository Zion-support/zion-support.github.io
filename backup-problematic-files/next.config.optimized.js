<<<<<<< HEAD
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({

>
/** @type {import('next').NextConfig} */
const nextConfig = {

/** @type {import('next').NextConfig} */
const nextConfig = {

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<

/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,

  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

=======


<<<<<<< HEAD
const withBundleAnalyzer = require('@next/bundle-analyzer')({





ursor/integrate-build-improve-and-re-verify-8f7d
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process && process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
=======
>>>>>>> origin/automation-improvements-final
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const withBundleAnalyzer = require('@next/bundle-analyzer')({


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======



=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  swcMinify: true
  compress: true
  poweredByHeader: false
  eslint: { ignoreDuringBuilds: false }
  typescript: { ignoreBuildErrors: false }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  // Performance optimizations
  experimental: {
    scrollRestoration: true
    optimizeCss: true
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  }
  // Image optimization
  images: {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  // Security headers

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

  // Bundle analyzer
  webpack: (config, { isServer }) => {
    if (!isServer) {
<<<<<<< HEAD
=======

<<<<<<< HEAD
  webpack: (config, { isServer }) => {
    if (!isServer) {

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======
  $2
}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      config.resolve.fallback = {
        ...config.resolve.fallback
        fs: false
        net: false
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      config && config.resolve.fallback = {
        ...config && config.resolve.fallback,
        fs: false,
        net: false,
<<<<<<< HEAD
        tls: false;
=======

<<<<<<< HEAD
=======
        tls: false;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      }
    }
    return config;
  }
<<<<<<< HEAD
<<<<<<< HEAD
const withBundleAnalyzer = require('@next/bundle-analyzer')({'
  "enabled": process.env.ANALYZE === 'true'});'
=======


<<<<<<< HEAD

}
module.exports = nextConfig;
ursor/integrate-build-improve-and-re-verify-8f7d
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======



=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process.env.ANALYZE === 'true'});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
module.exports = withBundleAnalyzer({
  "reactStrictMode": true"
  "swcMinify": true"
  "compress": true"
  "poweredByHeader": false"
  "generateEtags": false"
  "images": {    "domains": ['images.unsplash.com', 'via.placeholder.com']'
    }
    "formats": ['image/webp', 'image/avif']'
  }
<<<<<<< HEAD
=======
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
module && module.exports = nextConfig;
  "enabled": process && process.env.ANALYZE === 'true'});'
module && module.exports = withBundleAnalyzer({
}
;
module.exports = next_config;
  "enabled": process.env.ANALYZE === 'true'});'
module.exports = withBundleAnalyzer ({
<<<<<<< HEAD
  "reactStrictMode": true,"
  "swc_minify": true,"
  "compress": true,"
  "poweredByHeader": false,"
      }
      config && config.optimization.splitChunks = {
    }
    "optimize_css": true,
    "optimizePackageImports": ['@mui / material', '@mui / icons - material'],'
=======
  "reactStrictMode": true,
  "swc_minify": true,
  "compress": true,
  "poweredByHeader": false,
<<<<<<< HEAD
  "generate_etags": false,
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image / webp', 'image / avif'],
  },
  experimental: {
=======

  "generate_etags": false,
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image / webp', 'image / avif'],

  },
  experimental: {


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      config && config.optimization.splitChunks = {
    optimize_css: true,
    optimizePackageImports: ['@mui / material', '@mui / icons - material'],
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  },
  "webpack": (config, { dev, is_server }) => {
    // Check condition
}
if ( {) {
  $2
}
      config.optimization.split_chunks = {
<<<<<<< HEAD
        }
        "chunks": 'all','
        "cache_groups": {
          }
          "vendor": {
            }
            "test": /[\\/]node_modules[\\/]/
"name": 'vendors''
const withBundleAnalyzer = require('@next/bundle-analyzer')({ "enabled": process.env.ANALYZE === 'true'}); module.exports = withBundleAnalyzer({ "reactStrictMode": 'true',"swcMinify": 'true',"compress": 'true',"poweredByHeader": 'false',"generateEtags": 'false',"images": { "domains": ['images.unsplash.com','via.placeholder.com'],"formats": ['image/webp','image/avif']},"experimental": { "optimizeCss": true,"optimizePackageImports": ['@mui/material','@mui/icons-material']},"webpack": (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { "chunks": 'all',"cacheGroups": { "vendor": { "test": /[\\/]node_modules[\\/]/,"name": 'vendors',"chunks": 'all'},"common": { "name": 'common',"minChunks": '2',"chunks": 'all',"enforce": 'true'}}}} return config}});'
            "minChunks": 2,
"chunks": 'all''
          }
          "common": {
            }
            "name": 'common','
ursor/add-new-services-and-deploy-updates-0462,
ursor/fix-syntax-push-and-merge-to-main-40de,
ursor/fix-syntax-push-and-merge-to-main-40de,
origin/cursor/integrate-build-improve-and-re-verify-c7b5,
"minChunks": 2,
"name": 'vendors','
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ "enabled": process.env.ANALYZE === 'true' }); module.exports = withBundleAnalyzer ({ "reactStrictMode": 'true', "swc_minify": 'true', "compress": 'true', "poweredByHeader": 'false', "generate_etags": 'false', "images": { "domains": ['images.unsplash.com', 'via.placeholder.com'], "formats": ['image / webp', 'image / avif'] }, "experimental": { "optimize_css": true, "optimizePackageImports": ['@mui / material', '@mui / icons - material'] }, "webpack": (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { "chunks": 'all', "cache_groups": { "vendor": { "test": /[\\/]node_modules[\\/]/, "name": 'vendors', "chunks": 'all' }, "common": { "name": 'common', "min_chunks": '2', "chunks": 'all', "enforce": 'true' } } }} return config} })) {'
  $2
}
            "min_chunks": 2,"chunks": 'all',"enforce": true}}}}'
    return config}})const withBundleAnalyzer = require('@next/bundle-analyzer')({ "enabled": process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ "reactStrictMode": 'true',"swcMinify": 'true',"compress": 'true',"poweredByHeader": 'false',"generateEtags": 'false',"images": { "domains": ['images.unsplash.com','via.placeholder.com'],"formats": ['image/webp','image/avif']},"experimental": { "optimizeCss": true,"optimizePackageImports": ['@mui/material','@mui/icons-material']},"webpack": (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { "chunks": 'all',"cacheGroups": { "vendor": { "test": /[\\/]node_modules[\\/]/,"name": 'vendors',"chunks": 'all'},"common": { "name": 'common',"minChunks": '2',"chunks": 'all',"enforce": 'true'}}}} return config}})ursor/add-new-services-and-deploy-updates-0462;'
ursor/fix-syntax-push-and-merge-to-main-40de;
origin/cursor/integrate-build-improve-and-re-verify-c7b5;
ursor/integrate-build-improve-and-re-verify-8f7d;
            "minChunks": 2,"chunks": 'all',"enforce": true}}}}"
    return config}})const withBundleAnalyzer = require('@next/bundle-analyzer')({ "enabled": process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ "reactStrictMode": true,"swcMinify": true,"compress": true,"poweredByHeader": false,"generateEtags": false,"images": { "domains": ['images.unsplash.com','via.placeholder.com'],"formats": ['image/webp','image/avif']},"experimental": { "optimizeCss": true,"optimizePackageImports": ['@mui/material','@mui/icons-material']},"webpack": (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { "chunks": 'all',"cacheGroups": { "vendor": { "test": /[\\/]node_modules[\\/]/,"name": 'vendors',"chunks": 'all'},"common": { "name": 'common',"minChunks": 2,"chunks": 'all',"enforce": true}}}} return config}})}}'
            "min_chunks": 2,
            "chunks": 'all','
            "enforce": true
          }
        }
      }}
return config},;
});
ursor/add-new-services-and-deploy-updates-0462,
ursor/fix-syntax-push-and-merge-to-main-40de,
origin/cursor/integrate-build-improve-and-re-verify-c7b5,
=======

module.exports = nextConfig;
>>>>>>> origin/chore/fix-lint-and-merge
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

    domains: ['images.unsplash.com', 'via.placeholder.com'],

    domains: ['images.unsplash.com', 'via.placeholder.com'],

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
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        chunks: 'all',
        cache_groups: {
          vendor: {

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

<<<<<<< HEAD
=======




<<<<<<< HEAD
        chunks: 'all',
        cache_groups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/
name: 'vendors'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            minChunks: 2
            chunks: 'all'
          }
          common: {
            name: 'common',
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            minChunks: 2,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            chunks: 'all',
          },
<<<<<<< HEAD
          common: {
            name: 'common',

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5

            minChunks: 2,
name: 'vendors',
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ enabled: process.env.ANALYZE === 'true', }); module.exports = withBundleAnalyzer ({ reactStrictMode: 'true', swc_minify: 'true', compress: 'true', poweredByHeader: 'false', generate_etags: 'false', images: { domains: ['images.unsplash.com', 'via.placeholder.com'], formats: ['image / webp', 'image / avif'], }, experimental: { optimize_css: true, optimizePackageImports: ['@mui / material', '@mui / icons - material'], }, webpack: (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { chunks: 'all', cache_groups: { vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all', }, common: { name: 'common', min_chunks: '2', chunks: 'all', enforce: 'true', }, }, }} return config}, })) {
            min_chunks: 2,

            enforce: true,
      }}
    return config},

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});

            "minChunks": 2,

=======
<<<<<<< HEAD
        },
      }}
    return config},
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======



          common: {
            name: 'common',

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}});
<<<<<<< HEAD
origin/automation-improvements-final
            "minChunks": 2,
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            "chunks": 'all',
            name: 'common'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            "minChunks": 2
            "chunks": 'all'
            "enforce": true}}}}
    return config}});
<<<<<<< HEAD

=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
ursor/integrate-build-improve-and-re-verify-8f7d
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});



<<<<<<< HEAD
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
ursor/fix-lint-push-and-merge-to-main-ae4e
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
=======
=======

=======



>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      };
    }
    return config;
  },
<<<<<<< HEAD
=======
});
<<<<<<< HEAD
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>

<<<<<<< HEAD
            "chunks": 'all',
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            name: 'common'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            "minChunks": 2
            "chunks": 'all'
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
      };
pr-12325
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
<<<<<<< HEAD
origin/main
origin/automation-improvements-final
=======


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});

}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
