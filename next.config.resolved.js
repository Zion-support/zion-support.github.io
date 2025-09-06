<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
=======
<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
/** @type {import('next').NextConfig} */
const nextConfig = {
  "reactStrictMode": true
  "compress": true
  "poweredByHeader": false
  "images": {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"]
    "formats": ["image/webp", "image/avif"]
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
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
<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
<<<<<<< HEAD
<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ae4e
=======
<<<<<<< HEAD
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/automation-improvements-final
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
