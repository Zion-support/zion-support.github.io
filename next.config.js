/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  experimental: {
    esmExternals: false
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { isServer }) => {
    // Ignore problematic files during build
    config.module.rules.push({
      test: /\.(tsx|ts)$/,
      exclude: [
        /app\/ai-analytics-dashboard\/page\.tsx$/,
        /app\/ai-analytics\/page\.tsx$/,
        /app\/ai-api-management\/page\.tsx$/,
        /app\/ai-api-manager\/page\.tsx$/,
        /app\/ai-audio-processor-improved\/page\.tsx$/,
      ],
    });
    return config;
  },
}

module.exports = nextConfig