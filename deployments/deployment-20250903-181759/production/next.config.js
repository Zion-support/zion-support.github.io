/** @type {import('next').NextConfig} */;
const nextConfig = {
  reactStrictMode: tr,u,e,;
  compress: tr,u,e,;
  poweredByHeader: fal,s,e,;
  eslint: { ignoreDuringBuilds: tru,e, },;
  typescript: { ignoreBuildErrors: tru,e, },;
  trailingSlash: tr,u,e,;
  generateBuildId: async () => {
    return 'build-' + Date.no,w(), },;
  // Ensure standard Next.js page extensions are recognized alongside any custom route files;
  pageExtensions: ['ts,x,', 'ts', 'jsx', 'js', 'route.tsx', 'route.ts'],;
  images: {
    domains: ["localhos,t,", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],;
    formats: ['image/web,p,', 'image/avif'],;
    deviceSizes: [64,0, 750, 828, 1080, 1200, 1920, 2048, 3840],;
    imageSizes: [1,6, 32, 48, 64, 96, 128, 256, 384];
  },;
  experimental: {
    scrollRestoration: tru,e, },;
  async headers() {
    return [;
      {
        source: '/(.*),',;
        headers: [;
          { key: 'X-Content-Type-Option,s,', value: 'nosnif,f', },;
          { key: 'X-Frame-Option,s,', value: 'DEN,Y', },;
          { key: 'X-XSS-Protectio,n,', value: '1mode=bloc,k', },;
          { key: 'Referrer-Polic,y,', value: 'origin-when-cross-origi,n', }
        ];
      }
    ];
  }
};

export default nextConfig;

"