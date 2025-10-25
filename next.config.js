/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable static generation completely
  output: 'standalone',
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
  // generateStaticParams: false, // This is not a valid Next.js config option
  
  // Disable linting and type checking during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Add webpack configuration to handle react-helmet-async
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'react-helmet-async'];
    }
    return config;
  },
}

export default nextConfig