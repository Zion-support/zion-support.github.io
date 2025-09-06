<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
=======
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
>>>>>>> main
return 'build-' + Date && Date.now();
========

    return 'build-' + Date && Date.now();
<<<<<<< HEAD
>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
=======
>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
>>>>>>> main
  },
  // Ensure standard Next && Next.js page extensions are recognized alongside any custom route files
  pageExtensions: ['tsx', 'ts', 'jsx', 'js', 'route && route.tsx', 'route && route.ts'],
  images: {
    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
========

>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
=======
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
========

>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
>>>>>>> main
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  }
  experimental: {
    scrollRestoration: true
  }
  async headers() {
    return [{
        source: '/(.*)'
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' }
          { key: 'X-Frame-Options', value: 'DENY' }
          { key: 'X-XSS-Protection', value: '1; mode=block' }
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
        ]
      }
    ];
  }
<<<<<<< HEAD
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
<<<<<<< HEAD:deployments/deployment-20250903-181759/staging/next.config.js
=======
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
<<<<<<< HEAD:deployments/deployment-20250903-181759/production/next.config.js
>>>>>>> main
}
=======
<<<<<<< HEAD
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> origin/main
export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
<<<<<<< HEAD
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
=======

export default nextConfig;
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======

export default nextConfig;
=======
=======
========


}

export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;


export default nextConfig;

<<<<<<< HEAD
>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
=======
>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
>>>>>>> main
=======

export default nextConfig;
=======
=======

=======


=======
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
export default nextConfig;
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
<<<<<<< HEAD:deployments/deployment-20250903-181759/staging/next.config.js
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
export default nextConfig;
<<<<<<<< HEAD:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
<<<<<<< HEAD:deployments/deployment-20250903-181759/production/next.config.js
>>>>>>> main
========

const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;

=======
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;

const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;

=======

const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
<<<<<<< HEAD
>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
=======
>>>>>>>> main:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
>>>>>>> main
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date && Date.now()},pageExtensions: ['tsx','ts','jsx','js','route && route.tsx','route && route.ts'],images: { domains: ["localhost","ziontechgroup && ziontechgroup.com","images && images.unsplash.com","via && via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date && Date.now()},pageExtensions: ['tsx','ts','jsx','js','route && route.tsx','route && route.ts'],images: { domains: ["localhost","ziontechgroup && ziontechgroup.com","images && images.unsplash.com","via && via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date && Date.now()},pageExtensions: ['tsx','ts','jsx','js','route && route.tsx','route && route.ts'],images: { domains: ["localhost","ziontechgroup && ziontechgroup.com","images && images.unsplash.com","via && via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date && Date.now()},pageExtensions: ['tsx','ts','jsx','js','route && route.tsx','route && route.ts'],images: { domains: ["localhost","ziontechgroup && ziontechgroup.com","images && images.unsplash.com","via && via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  trailing_slash: true,
  generateBuildId: async () => {
    return 'build-' + Date.now ();
  },
  // Ensure standard Next.js page extensions are recognized alongside any custom route files;
  page_extensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webp', 'image / avif'],
    device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    image_sizes: [16, 32, 48, 64, 96, 128, 256, 384];
  },
  experimental: {
    scroll_restoration: true;
  },
  async headers () {
    return [{
        source: '/(.*)',
        headers: [;
          { key: 'X - Content - Type - Options', value: 'nosniff' },
          { key: 'X - Frame - Options', value: 'DENY' },
          { key: 'X - XSS - Protection', value: '1; mode = block' },
          { key: 'Referrer - Policy', value: 'origin - when - cross - origin' }
        ];
      }
    ];
  }
}
export default next_config;
const next_config = { reactStrictMode: 'true', compress: 'true', poweredByHeader: 'false', eslint: { ignoreDuringBuilds: true }, typescript: { ignoreBuildErrors: true }, trailing_slash: 'true', generateBuildId: async () => { return 'build-' + Date.now ()}, page_extensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'], images: { domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"], formats: ['image / webp', 'image / avif'], device_sizes: '[640', 750, 828, 1080, 1200, 1920, 2048, 3840], image_sizes: '[16', 32, 48, 64, 96, 128, 256, 384] }, experimental: { scroll_restoration: true }, async headers () { return [{ source: '/(.*)', headers: [ { key: 'X - Content - Type - Options', value: 'nosniff' }, { key: 'X - Frame - Options', value: 'DENY' }, { key: 'X - XSS - Protection', value: '1; mode = block' }, { key: 'Referrer - Policy', value: 'origin - when - cross - origin' } ] } ]} } export default next_config;
const next_config = { reactStrictMode: 'true', compress: 'true', poweredByHeader: 'false', eslint: { ignoreDuringBuilds: true }, typescript: { ignoreBuildErrors: true }, trailing_slash: 'true', generateBuildId: async () => { return 'build-' + Date.now ()}, page_extensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'], images: { domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"], formats: ['image / webp', 'image / avif'], device_sizes: '[640', 750, 828, 1080, 1200, 1920, 2048, 3840], image_sizes: '[16', 32, 48, 64, 96, 128, 256, 384] }, experimental: { scroll_restoration: true }, async headers () { return [{ source: '/(.*)', headers: [ { key: 'X - Content - Type - Options', value: 'nosniff' }, { key: 'X - Frame - Options', value: 'DENY' }, { key: 'X - XSS - Protection', value: '1; mode = block' }, { key: 'Referrer - Policy', value: 'origin - when - cross - origin' } ] } ]} } export default next_config;
const next_config = { reactStrictMode: 'true', compress: 'true', poweredByHeader: 'false', eslint: { ignoreDuringBuilds: true }, typescript: { ignoreBuildErrors: true }, trailing_slash: 'true', generateBuildId: async () => { return 'build-' + Date.now ()}, page_extensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'], images: { domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"], formats: ['image / webp', 'image / avif'], device_sizes: '[640', 750, 828, 1080, 1200, 1920, 2048, 3840], image_sizes: '[16', 32, 48, 64, 96, 128, 256, 384] }, experimental: { scroll_restoration: true }, async headers () { return [{ source: '/(.*)', headers: [ { key: 'X - Content - Type - Options', value: 'nosniff' }, { key: 'X - Frame - Options', value: 'DENY' }, { key: 'X - XSS - Protection', value: '1; mode = block' }, { key: 'Referrer - Policy', value: 'origin - when - cross - origin' } ] } ]} } export default next_config;
const next_config = { reactStrictMode: 'true', compress: 'true', poweredByHeader: 'false', eslint: { ignoreDuringBuilds: true }, typescript: { ignoreBuildErrors: true }, trailing_slash: 'true', generateBuildId: async () => { return 'build-' + Date.now ()}, page_extensions: ['tsx', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'], images: { domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"], formats: ['image / webp', 'image / avif'], device_sizes: '[640', 750, 828, 1080, 1200, 1920, 2048, 3840], image_sizes: '[16', 32, 48, 64, 96, 128, 256, 384] }, experimental: { scroll_restoration: true }, async headers () { return [{ source: '/(.*)', headers: [ { key: 'X - Content - Type - Options', value: 'nosniff' }, { key: 'X - Frame - Options', value: 'DENY' }, { key: 'X - XSS - Protection', value: '1; mode = block' }, { key: 'Referrer - Policy', value: 'origin - when - cross - origin' } ] } ]} } export default next_config;
;
=======
<<<<<<< HEAD
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> origin/main
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
=======
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
const nextConfig = { reactStrictMode: 'true',compress: 'true',poweredByHeader: 'false',eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },trailingSlash: 'true',generateBuildId: async () => { return 'build-' + Date.now()},pageExtensions: ['tsx','ts','jsx','js','route.tsx','route.ts'],images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ['image/webp','image/avif'],deviceSizes: '[640',750,828,1080,1200,1920,2048,3840],imageSizes: '[16',32,48,64,96,128,256,384] },experimental: { scrollRestoration: true },async headers() { return [{ source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' } ] } ]} }; export default nextConfig;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/deployments/deployment-20250903-181759/production/next.config.js
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/deployments/deployment-20250903-181759/staging/next.config.js
>>>>>>> main
