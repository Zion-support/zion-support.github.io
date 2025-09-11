const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;


=======


const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup && ziontechgroup.com","images && images.unsplash.com","via && via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;


    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
    "formats": ["image/webp", "image/avif"],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
=======

    domains: ["localhost", "ziontechgroup && ziontechgroup.com", "images && images.unsplash.com", "via && via.placeholder.com"],
    "formats": ["image/webp", "image/avif"],
    "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
ursor/fix-lint-push-and-merge-to-main-ae4e
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/automation-improvements-final
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
=======
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const nextConfig = { reactStrictMode: true,compress: true,poweredByHeader: false,images: { domains: ["localhost","ziontechgroup.com","images.unsplash.com","via.placeholder.com"],formats: ["image/webp","image/avif"],deviceSizes: [640,750,828,1080,1200,1920,2048,3840],imageSizes: [16,32,48,64,96,128,256,384] },experimental: { optimizeCss: true,scrollRestoration: true },typescript: { ignoreBuildErrors: true },eslint: { ignoreDuringBuilds: true },async headers() { return [ { source: '/(.*)',headers: [ { key: 'X-Content-Type-Options',value: 'nosniff' },{ key: 'X-Frame-Options',value: 'DENY' },{ key: 'X-XSS-Protection',value: '1; mode=block' },{ key: 'Referrer-Policy',value: 'origin-when-cross-origin' },{ key: 'Permissions-Policy',value: 'camera=(),microphone=(),geolocation=()' } ] } ]},async redirects() { return [ { source: '/home',destination: '/',permanent: true } ]} }; export default nextConfig;
