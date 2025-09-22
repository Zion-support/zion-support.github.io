<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
const withBundleAnalyzer = require('@next/bundle-analyzer')({


<<<<<<< HEAD
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b


<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {

/** @type {import('next').NextConfig} */
const nextConfig = {
:backup-problematic-files/next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
<:corrupted_backup/next.config.optimized.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
:backup-problematic-files/next.config.optimized.js
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true;,
  swcMinify: true;
  compress: true;,
  poweredByHeader: false;
=======



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  swcMinify: true
  compress: true
  poweredByHeader: false
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
  eslint: { ignoreDuringBuilds: false }
  typescript: { ignoreBuildErrors: false }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  // Performance optimizations
  experimental: {
    scrollRestoration: true
    optimizeCss: true
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
<<<<<<< HEAD
},
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
=======
  }
  // Image optimization
  images: {

    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,

    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
<<<<<<< HEAD
  },

  }
  // Image optimization
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
  // Security headers
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
=======
  }
  // Security headers
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
<<<<<<< HEAD
},
=======
  }
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
  // Bundle analyzer
  webpack: (config, { isServer }) => {
    if (!isServer) {

<<<<<<< HEAD
  }
  // Bundle analyzer
  // Bundle analyzer;
  webpack: (config, { isServer }) => {
    if (!isServer) {
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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


      config && config.resolve.fallback = {
        ...config && config.resolve.fallback,
        fs: false,
        net: false,

        tls: false;

      }
    }
    return config;
  }
<<<<<<< HEAD
};
=======

}
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
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
  "reactStrictMode": true
  "swcMinify": true
  "compress": true
  "poweredByHeader": false
  "generateEtags": false
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com']
    formats: ['image/webp', 'image/avif']
  }

};


module && module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  "enabled": process && process.env.ANALYZE === 'true'});
module && module.exports = withBundleAnalyzer({


}
;
module.exports = next_config;
const withBundleAnalyzer = require ('@next / bundle - analyzer')({
  "enabled": process.env.ANALYZE === 'true'});
module.exports = withBundleAnalyzer ({




  "reactStrictMode": true,
  "swc_minify": true,
  "compress": true,
  "poweredByHeader": false,
<<<<<<< HEAD
  "generateEtags": false,
:backup-problematic-files/next.config.optimized.js
"images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
    domains: ['images.unsplash.com', 'via.placeholder.com'],
<:corrupted_backup/next.config.optimized.js
  "images": {
  generateEtags: false,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],

  "images": {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
:backup-problematic-files/next.config.optimized.js
    formats: ['image/webp', 'image/avif'],
=======

  "generate_etags": false,
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image / webp', 'image / avif'],

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
  },



  experimental: {



    optimize_css: true,
    optimizePackageImports: ['@mui / material', '@mui / icons - material'],
  },
  webpack: (config, { dev, is_server }) => {
    // Check condition
if ( {) {
  $2
}
      config.optimization.split_chunks = {


        chunks: 'all',
        cache_groups: {
          vendor: {

<<<<<<< HEAD
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
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
            test: /[\\/]node_modules[\\/]/
name: 'vendors'
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
            minChunks: 2
            chunks: 'all'
          }
          common: {
            name: 'common',
<<<<<<< HEAD
            chunks: 'all',
          },
          common: {
            name: 'common',

            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
            minChunks: 2,
=======

>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
            minChunks: 2,

name: 'vendors',
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ enabled: process.env.ANALYZE === 'true', }); module.exports = withBundleAnalyzer ({ reactStrictMode: 'true', swc_minify: 'true', compress: 'true', poweredByHeader: 'false', generate_etags: 'false', images: { domains: ['images.unsplash.com', 'via.placeholder.com'], formats: ['image / webp', 'image / avif'], }, experimental: { optimize_css: true, optimizePackageImports: ['@mui / material', '@mui / icons - material'], }, webpack: (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { chunks: 'all', cache_groups: { vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all', }, common: { name: 'common', min_chunks: '2', chunks: 'all', enforce: 'true', }, }, }} return config}, })) {
  $2
}
            min_chunks: 2,
<<<<<<< HEAD
=======


>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
            chunks: 'all',
            enforce: true,
          },

        },
      }}
    return config},
});
<<<<<<< HEAD


=======
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d

            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}});




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
<<<<<<< HEAD
:backup-problematic-files/next.config.optimized.js
      };
    }
    return config;
  },
});
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
:backup-problematic-files/next.config.optimized.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true',},},}} return config},});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
            "minChunks": 2,
ursor/integrate-build-improve-and-re-verify-8f7d;
            "minChunks": 2,""
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
=======
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true',}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif'],},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material'],},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all',},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true,},},}} return config},});

<<<<<<< HEAD
}
=======



>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
