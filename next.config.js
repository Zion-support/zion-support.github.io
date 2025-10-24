/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation completely
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  
  // Disable experimental features that might cause issues
  experimental: {
    // optimizePackageImports: ['@heroicons/react', 'lucide-react', 'framer-motion'],
    // webVitalsAttribution: ['CLS', 'LCP', 'FCP', 'FID', 'TTFB'],
  },
  
  // Disable static optimization
  // generateStaticParams is not a valid Next.js config option
  
  // Disable linting and type checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig