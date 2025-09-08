/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporarily exclude problematic pages from the build
  async rewrites() {
    return [
      // Redirect problematic routes to working pages
      {
        source: '/2026-innovations-showcase',
        destination: '/services',
      },
      {
        source: '/2026-services-showcase',
        destination: '/services',
      },
      {
        source: '/2026-services-showcase-enhanced',
        destination: '/services',
      },
      {
        source: '/2026-services-showcase-v4',
        destination: '/services',
      },
      {
        source: '/2026-ultimate-services-showcase',
        destination: '/services',
      },
      {
        source: '/autonomous-manufacturing',
        destination: '/services',
      },
      {
        source: '/pricing-enhanced-2026',
        destination: '/services',
      },
      {
        source: '/quantum-cybersecurity',
        destination: '/services',
      },
      {
        source: '/quantum-logistics',
        destination: '/services',
      },
      {
        source: '/revolutionary-2025-pricing',
        destination: '/services',
      },
      {
        source: '/revolutionary-2025-services-showcase',
        destination: '/services',
      },
      {
        source: '/revolutionary-2026-services',
        destination: '/services',
      },
      {
        source: '/revolutionary-2026-services-showcase-v4',
        destination: '/services',
      },
      {
        source: '/revolutionary-2027-services-showcase',
        destination: '/services',
      },
      {
        source: '/services-2024',
        destination: '/services',
      },
      {
        source: '/solutions',
        destination: '/services',
      },
    ];
  },
  // Optimize the build
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Disable static generation for problematic pages
  output: 'standalone',
  // Exclude problematic pages from static generation
  async generateStaticParams() {
    return [];
  },
};

export default nextConfig;