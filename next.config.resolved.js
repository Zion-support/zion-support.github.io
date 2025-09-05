<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> origin/main

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
/** @type {import('next').NextConfig} */
const nextConfig = {
  "reactStrictMode": true,
  "compress": true,
  "poweredByHeader": false,
  "images": {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    "formats": ["image/webp", "image/avif"],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384]
  },
  "experimental": {
    optimizeCss: true,
    "scrollRestoration": true
  },
  "typescript": { ignoreBuildErrors: true },
  "eslint": { ignoreDuringBuilds: true },
  async headers() {
    return [{
        "source": '/(.*)',
        "headers": [
          { key: 'X-Content-Type-Options', "value": 'nosniff' },
          { "key": 'X-Frame-Options', "value": 'DENY' },
          { "key": 'X-XSS-Protection', "value": '1; mode=block' },
          { "key": 'Referrer-Policy', "value": 'origin-when-cross-origin' },
          { "key": 'Permissions-Policy', "value": 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ]},
  async redirects() {
    return [{ "source": '/home', "destination": '/', "permanent": true }
    ]}
};
export default nextConfig;
<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> origin/main
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
>>>>>>> origin/main
