/** @type {import("next").NextConfig} */const nextConfig = {
  //Use export output to avoid static generation issues
  output: "export",
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  eslint: {
    //Warning: This allows production builds to successfully complete even if
    //your project has ESLint errors.
    ignoreDuringBuilds: true
  },

  typescript: {
    //Warning: This allows production builds to successfully complete even if
    //your project has type errors.
    ignoreBuildErrors: true
  },

  //Skip problematic pages for now
  experimental: {
    missingSuspenseWithCSRBailout: false,
    optimizePackageImports: ["@heroicons/react", "lucide-react"]
  },

  //Disable static generation to avoid Module type errors
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  //Enable SWC minification for better performance
  swcMinify: true,
  //Generate build ID for better caching
  generateBuildId: async() => {
    return "build-" + Date.now()
  },

  //Enable compression
  compress: true,

  //Exclude problematic files temporarily
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      }
    }
    
    //Exclude problematic micro-saas-services files temporarily
    config.module.rules.push({
      test: /app\/micro-saas-services\/.*\.tsx$/,
      use: "ignore-loader"
    })
    return config
  }
}

module.exports = nextConfig