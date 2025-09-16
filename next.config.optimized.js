<<<<<<< HEAD
=======

;
<:corrupted_backup/next.config.optimized.js;
<:next.config.optimized.js;
ursor/automate-test-improve-and-merge-code-646c;
const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true';
})module.exports = withBundleAnalyzer({<=;
>;
/** @type {import('next').NextConfig} */;
>const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true';
})module.exports = withBundleAnalyzer({>/** @type {import('next').NextConfig} */;
const nextConfig = {/** @type {import('next').NextConfig} */;
const nextConfig = {const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true';
})module.exports = withBundleAnalyzer({<:next.config.optimized.js;
/** @type {import('next').NextConfig} */;
const nextConfig = {/** @type {import('next').NextConfig} */;
const nextConfig = {>:next.config.optimized.js;
const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true';
})module.exports = withBundleAnalyzer({<:corrupted_backup/next.config.optimized.js;
=>:next.config.optimized.js;
/** @type {import('next').NextConfig} */;
const nextConfig = {ursor/automate-test-improve-and-merge-code-646c;
<=;
>/** @type {import('next').NextConfig} */;
const nextConfig = {/** @type {import('next').NextConfig} */;
const nextConfig = {/** @type {import('next').NextConfig} */;
const nextConfig = {const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true';
})module.exports = withBundleAnalyzer({/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,domains: ['images.unsplash.com', 'via.placeholder.com'],eslint: { ignoreDuringBuilds: false },typescript: { ignoreBuildErrors: false },pageExtensions: ['tsx', 'ts', 'jsx', 'js'],eslint: { ignoreDuringBuilds: false },typescript: { ignoreBuildErrors: false },pageExtensions: ['tsx', 'ts', 'jsx', 'js'],eslint: { ignoreDuringBuilds: false },typescript: { ignoreBuildErrors: false },pageExtensions: ['tsx', 'ts', 'jsx', 'js'],eslint: { ignoreDuringBuilds: false },typescript: { ignoreBuildErrors: false },pageExtensions: ['tsx', 'ts', 'jsx', 'js'],// Performance optimizations;
  experimental: {scrollRestoration: true,optimizeCss: true,optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'];
  },// Image optimization;
  images: {// Image optimization;
  images: {// Image optimization;
  images: {// Image optimization;
  images: {// Image optimization;
  images: {domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],formats: ['image/webp', 'image/avif'],deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],minimumCacheTTL: 60,dangerouslyAllowSVG: true,contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;";
  },// Security headers;
  async headers() {return [{source: '/(.*)',headers: [;
          { key: 'X-Content-Type-Options', value: 'nosniff' },{ key: 'X-Frame-Options', value: 'DENY' },{ key: 'X-XSS-Protection', value: '1; mode=block' },{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ];
      }
    ];
  },// Bundle analyzer;
  webpack: (config, { isServer }) => {if (!isServer) {config.resolve.fallback = {...config.resolve.fallback,fs: false,net: false,tls: false;
      }}
    return config;
  }
}module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({"enabled": process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({"reactStrictMode": true,"swcMinify": true,"compress": true,"poweredByHeader": false,"generateEtags": false,"images": {domains: ['images.unsplash.com', 'via.placeholder.com'],<:corrupted_backup/next.config.optimized.js;
<:next.config.optimized.js;
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],=  "images": {generateEtags: false,images: {domains: ['images.unsplash.com', 'via.placeholder.com'],=  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],>:next.config.optimized.js;
  "images": {domains: ['images.unsplash.com', 'via.placeholder.com'],ursor/automate-test-improve-and-merge-code-646c;
    formats: ['image/webp', 'image/avif'];
    domains: ['images.unsplash.com', 'via.placeholder.com'],<<  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],=;
    domains: ['images.unsplash.com', 'via.placeholder.com'],"images": {generateEtags: false,images: {domains: ['images.unsplash.com', 'via.placeholder.com'],>  "images": {"images": {domains: ['images.unsplash.com', 'via.placeholder.com'],formats: ['image/webp', 'image/avif'];
  },experimental: {optimizeCss: true,optimizePackageImports: ['@mui/material', '@mui/icons-material'];
  },webpack: (config, { dev, isServer }) => {if (!dev && !isServer) {config.optimization.splitChunks = {chunks: 'all',cacheGroups: {vendor: {test: /[\\/]node_modules[\\/]/,name: 'vendors',<:corrupted_backup/next.config.optimized.js;
            name: 'vendors',=>:next.config.optimized.js;
<:next.config.optimized.js;
            name: 'vendors',ursor/automate-test-improve-and-merge-code-646c;
            chunks: 'all';
          },common: {name: 'common',=;
>;
<:corrupted_backup/next.config.optimized.js;
<:next.config.optimized.js;
==>:next.config.optimized.js;
            minChunks: 2,chunks: 'all',enforce: true;
          }
        }
            name: 'vendors',<=;
            name: 'vendors',>            name: 'vendors',chunks: 'all';
            chunks: 'all';
          },common: {name: 'common',>            minChunks: 2,minChunks: 2,chunks: 'all',enforce: true;
          }
        }
      }}
    return config}
})<:corrupted_backup/next.config.optimized.js;
      }}
    return config}
})<:next.config.optimized.js;
==>:next.config.optimized.js;
ursor/automate-test-improve-and-merge-code-646c;
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}})<      }}
    return config}
})<=;
>const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}})>const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}})const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}})"minChunks": 2,"chunks": 'all',"enforce": true}}}}
    return config}})const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})<:corrupted_backup/next.config.optimized.js;
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})<:next.config.optimized.js;
=const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})ursor/automate-test-improve-and-merge-code-646c;
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})<const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})<const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})<=;
      }}
    return config;
  },>;
})ursor/automate-test-improve-and-merge-code-59d5;
})const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})})const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})})ursor/automate-test-improve-and-merge-code-59d5;
=>:next.config.optimized.js;
ursor/automate-test-improve-and-merge-code-646c;
>})})const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})=;
>;
})const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'})module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
/** @type {import('next').NextConfig} */
const nextConfig = {
/** @type {import('next').NextConfig} */
const nextConfig = {
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer({
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
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
  "images": {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  "images": {    domains: ['images.unsplash.com', 'via.placeholder.com'],
  "images": {
  generateEtags: false,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  "images": {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif']
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mui/material', '@mui/icons-material']
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            name: 'vendors',
            name: 'vendors',
            chunks: 'all'
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true
          }
        }
      }}
    return config}
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}); module.exports = withBundleAnalyzer({ reactStrictMode: 'true',swcMinify: 'true',compress: 'true',poweredByHeader: 'false',generateEtags: 'false',images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: '2',chunks: 'all',enforce: 'true'}}}} return config}});
            "minChunks": 2,
            "chunks": 'all',
            "enforce": true}}}}
    return config}});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}});
      };
    }
    return config;
  }
});
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true'}); module.exports = withBundleAnalyzer({ reactStrictMode: true,swcMinify: true,compress: true,poweredByHeader: false,generateEtags: false,images: { domains: ['images.unsplash.com','via.placeholder.com'],formats: ['image/webp','image/avif']},experimental: { optimizeCss: true,optimizePackageImports: ['@mui/material','@mui/icons-material']},webpack: (config,{ dev,isServer }) => { if (!dev && !isServer) { config.optimization.splitChunks = { chunks: 'all',cacheGroups: { vendor: { test: /[\\/]node_modules[\\/]/,name: 'vendors',chunks: 'all'},common: { name: 'common',minChunks: 2,chunks: 'all',enforce: true}}}} return config}});
>>>>>>> origin/merge-pr-12271
