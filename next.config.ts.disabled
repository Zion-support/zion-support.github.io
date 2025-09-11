import type { NextConfig } from 'next';
const withBundleAnalyzer = require('@next/bundle-analyzer')({enabled: process.env.ANALYZE === 'true',})const nextConfig: NextConfig = {reactStrictMode: true,compress: true,poweredByHeader: false,generateEtags: false,eslint: {ignoreDuringBuilds: true;
  },typescript: {ignoreBuildErrors: true;
  },pageExtensions: ['tsx', 'ts', 'jsx', 'js'],// Performance optimizations;
  experimental: {scrollRestoration: true,optimizeCss: true,optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'];
  },// Image optimization;
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
}module.exports = withBundleAnalyzer(nextConfig)