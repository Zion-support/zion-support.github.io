

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
  enabled: process && process.env.ANALYZE === 'true',
});
module && module.exports = withBundleAnalyzer({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
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

    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,

    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
  // Security headers
  async headers() {
    return [{
        source: '/(.*)'
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' }
          { key: 'X-Frame-Options', value: 'DENY' }
          { key: 'X-XSS-Protection', value: '1; mode=block' }
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  }
  // Bundle analyzer
  webpack: (config, { isServer }) => {
    if (!isServer) {

const withBundleAnalyzer = require ('@next / bundle - analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer ({
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
  experimental: {
    scroll_restoration: true,
    optimize_css: true,
    optimizePackageImports: ['lucide-react', '@radix - ui / react - icons'];
  },
  // Image optimization;
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webp', 'image / avif'],
    device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    image_sizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default - src 'self'; script - src 'none'; sandbox;";
  },
  // Security headers;
  async headers () {
    return [{
        source: '/(.*)',
        headers: [;
          { key: 'X - Content - Type - Options', value: 'nosniff' },
          { key: 'X - Frame - Options', value: 'DENY' },
          { key: 'X - XSS - Protection', value: '1; mode = block' },
          { key: 'Referrer - Policy', value: 'origin - when - cross - origin' },
          { key: 'Permissions - Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ];
      }
    ];
  },
  // Bundle analyzer;
  webpack: (config, { is_server }) => {
    // Check condition
if ( {) {
  $2
}

      config.resolve.fallback = {
        ...config.resolve.fallback
        fs: false
        net: false
=======
      config && config.resolve.fallback = {
        ...config && config.resolve.fallback,
        fs: false,
        net: false,

        tls: false;

      }
    }
    return config;
  }


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======



=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process.env.ANALYZE === 'true'});
module.exports = withBundleAnalyzer({
  "reactStrictMode": true
  "swcMinify": true
  "compress": true
  "poweredByHeader": false
  "generateEtags": false
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com']
    formats: ['image/webp', 'image/avif']
  }
=======
};

module && module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process && process.env.ANALYZE === 'true'});
module && module.exports = withBundleAnalyzer({
=======
}
;
module.exports = next_config;
const withBundleAnalyzer = require ('@next / bundle - analyzer')({
  "enabled": process.env.ANALYZE === 'true'});
module.exports = withBundleAnalyzer ({
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  "reactStrictMode": true,
  "swc_minify": true,
  "compress": true,
  "poweredByHeader": false,

  "generate_etags": false,
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image / webp', 'image / avif'],

  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  experimental: {


=======
      config && config.optimization.splitChunks = {
=======
    optimize_css: true,
    optimizePackageImports: ['@mui / material', '@mui / icons - material'],
  },
  webpack: (config, { dev, is_server }) => {
    // Check condition
if ( {) {
  $2
}
      config.optimization.split_chunks = {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        chunks: 'all',
        cache_groups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,




=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            minChunks: 2,
=======
name: 'vendors',
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ enabled: process.env.ANALYZE === 'true', }); module.exports = withBundleAnalyzer ({ reactStrictMode: 'true', swc_minify: 'true', compress: 'true', poweredByHeader: 'false', generate_etags: 'false', images: { domains: ['images.unsplash.com', 'via.placeholder.com'], formats: ['image / webp', 'image / avif'], }, experimental: { optimize_css: true, optimizePackageImports: ['@mui / material', '@mui / icons - material'], }, webpack: (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { chunks: 'all', cache_groups: { vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all', }, common: { name: 'common', min_chunks: '2', chunks: 'all', enforce: 'true', }, }, }} return config}, })) {
  $2
}
            min_chunks: 2,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            chunks: 'all',
            enforce: true,
          },



          common: {
            name: 'common',

            "minChunks": 2,
=======
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ enabled: process.env.ANALYZE === 'true', }); module.exports = withBundleAnalyzer ({ reactStrictMode: 'true', swc_minify: 'true', compress: 'true', poweredByHeader: 'false', generate_etags: 'false', images: { domains: ['images.unsplash.com', 'via.placeholder.com'], formats: ['image / webp', 'image / avif'], }, experimental: { optimize_css: true, optimizePackageImports: ['@mui / material', '@mui / icons - material'], }, webpack: (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { chunks: 'all', cache_groups: { vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all', }, common: { name: 'common', min_chunks: '2', chunks: 'all', enforce: 'true', }, }, }} return config}, })) {
  $2
}
            "min_chunks": 2,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
            "chunks": 'all',
=======
            name: 'common'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            "minChunks": 2
            "chunks": 'all'
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
            "enforce": true}}}}
    return config}});

const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});

=======


=======

=======



>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
      };
    }
    return config;
  },
});



            name: 'common'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            "minChunks": 2
            "chunks": 'all'
            "enforce": true}}}}
    return config}});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> origin/automation-improvements-final
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process && process.env.ANALYZE === 'true',}); module && module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images && images.unsplash.com','via && via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config && config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process && process.env.ANALYZE === 'true',}); module && module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images && images.unsplash.com','via && via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config && config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process && process.env.ANALYZE === 'true',}); module && module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images && images.unsplash.com','via && via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config && config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process && process.env.ANALYZE === 'true',}); module && module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images && images.unsplash.com','via && via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config && config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ enabled: process.env.ANALYZE === 'true', }); module.exports = withBundleAnalyzer ({ reactStrictMode: true, swc_minify: true, compress: true, poweredByHeader: false, generate_etags: false, images: { domains: ['images.unsplash.com', 'via.placeholder.com'], formats: ['image / webp', 'image / avif'], }, experimental: { optimize_css: true, optimizePackageImports: ['@mui / material', '@mui / icons - material'], }, webpack: (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { chunks: 'all', cache_groups: { vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all', }, common: { name: 'common', min_chunks: 2, chunks: 'all', enforce: true, }, }, }} return config}, })) {
  $2
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
