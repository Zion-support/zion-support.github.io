const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
ursor/fix-syntax-push-and-merge-to-main-40de
origin/automation-improvements-final
/** @type {import('next').NextConfig} */
const nextConfig = {
  "reactStrictMode": true
  "compress": true
  "poweredByHeader": false
  "images": {

    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
    "formats": ["image/webp", "image/avif"],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]
  }
  "experimental": {
    optimizeCss: true
    "scrollRestoration": true
  }
  "typescript": { ignoreBuildErrors: true }
  "eslint": { ignoreDuringBuilds: true }
  async headers() {
    return [{
        "source": '/(.*)'
        "headers": [
          { key: 'X-Content-Type-Options', "value": 'nosniff' }
          { "key": 'X-Frame-Options', "value": 'DENY' }
          { "key": 'X-XSS-Protection', "value": '1; mode=block' }
          { "key": 'Referrer-Policy', "value": 'origin-when-cross-origin' }
          { "key": 'Permissions-Policy', "value": 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ]}
  async redirects() {
    return [{ "source": '/home', "destination": '/', "permanent": true }
    ]}
}
export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup && ziontechgroup.com","images && images.unsplash.com","via && via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
const next_config = { reactStrictMode: true, compress: true, poweredByHeader: false, images: { domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"], formats: ["image / webp", "image / avif"], device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], image_sizes: [16, 32, 48, 64, 96, 128, 256, 384] }, experimental: { optimize_css: true, scroll_restoration: true }, typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true }, async headers () { return [ { source: '/(.*)', headers: [ { key: 'X - Content - Type - Options', value: 'nosniff' }, { key: 'X - Frame - Options', value: 'DENY' }, { key: 'X - XSS - Protection', value: '1; mode = block' }, { key: 'Referrer - Policy', value: 'origin - when - cross - origin' }, { key: 'Permissions - Policy', value: 'camera=(), microphone=(), geolocation=()' } ] } ]}, async redirects () { return [ { source: '/home', destination: '/', permanent: true } ]} } export default next_config;
/** @type {import ('next').NextConfig} */;
const next_config = {
  "reactStrictMode": true,
  "compress": true,
  "poweredByHeader": false,
  "images": {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    "formats": ["image / webp", "image / avif"],
    "device_sizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    "image_sizes": [16, 32, 48, 64, 96, 128, 256, 384];
  },
  "experimental": {
    optimize_css: true,
    "scroll_restoration": true;
  },
  "typescript": { ignoreBuildErrors: true },
  "eslint": { ignoreDuringBuilds: true },
  async headers () {
    return [{
        "source": '/(.*)',
        "headers": [;
          { key: 'X - Content - Type - Options', "value": 'nosniff' },
          { "key": 'X - Frame - Options', "value": 'DENY' },
          { "key": 'X - XSS - Protection', "value": '1; mode = block' },
          { "key": 'Referrer - Policy', "value": 'origin - when - cross - origin' },
          { "key": 'Permissions - Policy', "value": 'camera=(), microphone=(), geolocation=()' }
        ];
      }
    ]},
  async redirects () {
    return [{ "source": '/home', "destination": '/', "permanent": true }
    ]}
}
export default next_config;
const next_config = { reactStrictMode: true, compress: true, poweredByHeader: false, images: { domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"], formats: ["image / webp", "image / avif"], device_sizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], image_sizes: [16, 32, 48, 64, 96, 128, 256, 384] }, experimental: { optimize_css: true, scroll_restoration: true }, typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true }, async headers () { return [ { source: '/(.*)', headers: [ { key: 'X - Content - Type - Options', value: 'nosniff' }, { key: 'X - Frame - Options', value: 'DENY' }, { key: 'X - XSS - Protection', value: '1; mode = block' }, { key: 'Referrer - Policy', value: 'origin - when - cross - origin' }, { key: 'Permissions - Policy', value: 'camera=(), microphone=(), geolocation=()' } ] } ]}, async redirects () { return [ { source: '/home', destination: '/', permanent: true } ]} } export default next_config;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
