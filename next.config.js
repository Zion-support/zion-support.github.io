/** @type {import('next').NextConfig} */
const nextConfig = {
  // Experimental features
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP'],
    optimizePackageImports: ['@/components', '@/utils', '@/hooks']
  },
  
  // Redirects for better SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Output configuration
  output: 'standalone',
  
  // Enable compression
  compress: true,
  
  // Power by header
  poweredByHeader: false,
  
  // React strict mode
  reactStrictMode: true,
  
  // SWC minification is enabled by default in Next.js 13+
};

export default nextConfig;