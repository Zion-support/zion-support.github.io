
,
const withBundleAnalyzer = require('@next/bundle-analyzer')({,
/** @type {import('next').NextConfig} */,
const nextConfig = {,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: false }
  typescript: { ignoreBuildErrors: false }
  pageExtensions: ['tsxtsjsxjs'],
  // Performance optimizations,
  experimental: {,
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react@radix-ui/react-icons']}
  // Image optimization,
  images: {,
    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
    formats: ['image/webpimage/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self', script-src 'none', sandbox,"
  }
  // Security headers,
  async headers() {,
    return [{,
        source: '/(.*)',
        headers: [,
          { key: 'X-Content-Type-Options', value: 'nosniff' }
          { key: 'X-Frame-Options', value: 'DENY' }
          { key: 'X-XSS-Protection', value: '1, mode=block' }
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ],
  }
  // Bundle analyzer,
  webpack: (config, { isServer }) => {,
    if (!isServer) {,
const withBundleAnalyzer = require ('@next / bundle - analyzer')({,
  enabled: process.env.ANALYZE === 'true'}),
module.exports = withBundleAnalyzer ({,
/** @type {import ('next').NextConfig} */,
const next_config = {,
  reactStrictMode: true,
  swc_minify: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: false },
  typescript: { ignoreBuildErrors: false },
  page_extensions: ['tsxtsjsxjs'],
  // Performance optimizations,
  experimental: {,
    scroll_restoration: true,
    optimize_css: true,
    optimizePackageImports: ['lucide-react@radix - ui / react - icons']
  },
  // Image optimization,
  images: {,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webpimage / avif'],
    device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    image_sizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default - src 'self', script - src 'none', sandbox,"
  },
  // Security headers,
  async headers () {,
    return [{,
        source: '/(.*)',
        headers: [,
          { key: 'X - Content - Type - Options', value: 'nosniff' },
          { key: 'X - Frame - Options', value: 'DENY' },
          { key: 'X - XSS - Protection', value: '1, mode = block' },
          { key: 'Referrer - Policy', value: 'origin - when - cross - origin' },
          { key: 'Permissions - Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ],
      }
    ],
  },
  // Bundle analyzer,
  webpack: (config, { is_server }) => {,
    // Check condition,
if ( {) {,
  $2
}
,
      config.resolve.fallback = {,
        ...config.resolve.fallback,
        fs: false,
        net: false,
      config && config.resolve.fallback = {,
        ...config && config.resolve.fallback,
        fs: false,
        net: false,
        tls: false}
    }
    return config,
  }

}
module.exports = nextConfig,
ursor/integrate-build-improve-and-re-verify-8f7d,
ursor/add-new-services-and-deploy-updates-0462,
ursor/fix-syntax-push-and-merge-to-main-40de,
origin/cursor/integrate-build-improve-and-re-verify-c7b5,
ursor/integrate-build-improve-and-re-verify-8f7d,
origin/main,
origin/automation-improvements-final,
const withBundleAnalyzer = require('@next/bundle-analyzer')({,
  "enabled": process.env.ANALYZE === 'true'}),
module.exports = withBundleAnalyzer({,
  "reactStrictMode": true,
  "swcMinify": true,
  "compress": true,
  "poweredByHeader": false,
  "generateEtags": false,
  "images": {    domains: ['images.unsplash.comvia.placeholder.com'],
    formats: ['image/webpimage/avif']}

},
module && module.exports = nextConfig,
const withBundleAnalyzer = require('@next/bundle-analyzer')({,
  "enabled": process && process.env.ANALYZE === 'true'}),
module && module.exports = withBundleAnalyzer({}
,
module.exports = next_config,
const withBundleAnalyzer = require ('@next / bundle - analyzer')({,
  "enabled": process.env.ANALYZE === 'true'}),
module.exports = withBundleAnalyzer ({,
  "reactStrictMode": true,
  "swc_minify": true,
  "compress": true,
  "poweredByHeader": false,
  "generate_etags": false,
  "images": {    domains: ['images.unsplash.comvia.placeholder.com'],
    formats: ['image / webpimage / avif']},
  experimental: {,
    optimize_css: true,
    optimizePackageImports: ['@mui / material@mui / icons - material']},
  webpack: (config, { dev, is_server }) => {,
    // Check condition,
if ( {) {,
  $2
}
      config.optimization.split_chunks = {,
        chunks: 'all',
        cache_groups: {,
          vendor: {,
            test: /[\\/]node_modules[\\/]/,
name: 'vendors',
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}}),
            minChunks: 2,
            chunks: 'all'}
          common: {,
            name: 'common',
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}}),
ursor/add-new-services-and-deploy-updates-0462,
ursor/fix-syntax-push-and-merge-to-main-40de,
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}}),
ursor/fix-syntax-push-and-merge-to-main-40de,
origin/cursor/integrate-build-improve-and-re-verify-c7b5,
            minChunks: 2,
name: 'vendors',
const withBundleAnalyzer = require ('@next / bundle - analyzer')({ enabled: process.env.ANALYZE === 'true' }), module.exports = withBundleAnalyzer ({ reactStrictMode: 'true', swc_minify: 'true', compress: 'true', poweredByHeader: 'false', generate_etags: 'false', images: { domains: ['images.unsplash.comvia.placeholder.com'], formats: ['image / webpimage / avif'] }, experimental: { optimize_css: true, optimizePackageImports: ['@mui / material@mui / icons - material'] }, webpack: (config, { dev, is_server }) => { if ( { config.optimization.split_chunks = { chunks: 'all', cache_groups: { vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all' }, common: { name: 'common', min_chunks: '2', chunks: 'all', enforce: 'true' } } }} return config} })) {,
  $2
}
            min_chunks: 2,
            chunks: 'all',
            enforce: true}

        }
      }}
    return config}
}),
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}}),
ursor/add-new-services-and-deploy-updates-0462,
ursor/fix-syntax-push-and-merge-to-main-40de,
origin/cursor/integrate-build-improve-and-re-verify-c7b5,
ursor/integrate-build-improve-and-re-verify-8f7d,
            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}}),
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}}),
      },
    }
    return config,
  }
}),
            name: 'common',
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}}),
            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}}),
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}}),
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}}),
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}}),
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}), module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.comvia.placeholder.com'],formats: ['image/webpimage/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}}),)