const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },"experimental": {
<<<<<<< HEAD
<<<<<<< HEAD
    optimizeCss: true, optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
=======
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
<<<<<<< HEAD
=======
    optimizeCss: true, optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
/** @type {import('next').NextConfig} */
const nextConfig = {
  "reactStrictMode": true,
  "compress": true,
  "poweredByHeader": false,
  "eslint": { ignoreDuringBuilds: true  },
  "typescript": { ignoreBuildErrors: true  },
  "trailingSlash": true,
  "generateBuildId": async () => {
    return 'build-' + Date.now()},
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  "pageExtensions": ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  "images": {
<<<<<<< HEAD
<<<<<<< HEAD
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    "formats": ['image/webp', 'image/avif'],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"]
    "formats": ['image/webpimage/avif']
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
=======
    optimizeCss: true, optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  "reactStrictMode": true,
  "compress": true,
  "poweredByHeader": false,
  "eslint": { ignoreDuringBuilds: true  },
  "typescript": { ignoreBuildErrors: true  },
  "trailingSlash": true,
  "generateBuildId": async () => {
    return 'build-' + Date.now()},
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  "pageExtensions": ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  "images": {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    "formats": ['image/webp', 'image/avif'],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    "formats": ['image/webp', 'image/avif'],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]
  },
  "experimental": {
    optimizeCss: true,
    "scrollRestoration": true
   },
  async headers() {
    return [{
        "source": '/(.*)',
        "headers": [
          { key: 'X-Content-Type-Options', "value": 'nosniff'  },
          { "key": 'X-Frame-Options', "value": 'DENY'  },
          { "key": 'X-XSS-Protection', "value": '1; mode=block'  },
          { "key": 'Referrer-Policy', "value": 'origin-when-cross-origin'  }
        ]
      }
    ]}
};
export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: 'true' },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  trailingSlash: true,
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
  // Ensure standard Next.js page extensions are recognized alongside any custom route files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  },
  async headers() {
    return [{
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
        ]
      }
    ];
  }
  "experimental": {
    optimizeCss: true
    "scrollRestoration": true
   }
  async headers() {
    return [{
        "source": '/(.*)'
        "headers": [
          { key: 'X-Content-Type-Options', "value": 'nosniff'  }
          { "key": 'X-Frame-Options', "value": 'DENY'  }
          { "key": 'X-XSS-Protection', "value": '1, mode=block'  }
          { "key": 'Referrer-Policy', "value": 'origin-when-cross-origin'  };
        ]
      };
    ]};
};
export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: 'true' },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
=======
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
=======
=======
>>>>>>> origin/main
>>>>>>> 1306cdfc5ab0f8df8cd228e773bcfa58ba294204
