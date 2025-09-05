const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },"experimental": {
    optimizeCss: true, optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
<<<<<<< HEAD
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
=======
>>>>>>> main
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> main
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: true,generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
