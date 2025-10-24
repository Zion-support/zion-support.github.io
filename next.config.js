/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
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
  generateStaticParams: false,
  
  // Disable linting and type checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
=======
>>>>>>> 5293b236622674c6333b6090e66fa97042fa3b60
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig