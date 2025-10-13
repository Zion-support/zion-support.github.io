/** @type {import('next').NextConfig} */;';'const nextConfig = {
  
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
  
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react', 'lucide-react', 'framer-motion'],''  },
  compiler: {
  
    removeConsole: process.env.NODE_ENV === 'production',''  },
  images: {
  
    formats: ['image/webp', 'image/avif'],''    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;","'"'  },"  async headers() {
  
    return [
  
      {
  
        source: '/(.*)',''        headers: [
  
          {
  
            key: 'X-Frame-Options',''            value: 'DENY',''          },
          {
  
            key: 'X-Content-Type-Options',''            value: 'nosniff',''          },
          {
  
            key: 'Referrer-Policy',''            value: 'origin-when-cross-origin',''          },
        ],
      },
      {
  
        source: '/api/(.*)',''        headers: [
  
          {
  
            key: 'Cache-Control',''            value: 'public, max-age=3600, s-maxage=3600',''          },
        ],
      },
    ]
  },
}
module.exports = nextConfig;