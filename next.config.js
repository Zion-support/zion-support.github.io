/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
    dirs: []
  },
  
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Bundle analyzer
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: ['**/node_modules/**', '**/.next/**'],
      };
    }
    
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: "ignore-loader"
    });
    
    if (!dev && !isServer) {
      // Optimize bundle size
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
  
  // Experimental features for performance
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Redirects are handled by _redirects file for static export compatibility
  async redirects() {
    return [
      { source: '/ai-customer-success-platform', destination: '/services/ai-customer-success-platform', permanent: true },
      { source: '/ai-sales-intelligence-platform', destination: '/services/ai-sales-intelligence-platform', permanent: true },
      { source: '/ai-financial-planning-platform', destination: '/services/ai-financial-planning-platform', permanent: true },
      { source: '/ai-powered-decision-engine', destination: '/services/ai-powered-decision-engine', permanent: true },
      { source: '/intelligent-content-automation-platform', destination: '/services/intelligent-content-automation-platform', permanent: true },
      { source: '/intelligent-hr-analytics-platform', destination: '/services/intelligent-hr-analytics-platform', permanent: true },
      { source: '/smart-crm-intelligence-suite', destination: '/services/smart-crm-intelligence-suite', permanent: true },
      { source: '/affiliate-attribution-suite', destination: '/services/affiliate-attribution-suite', permanent: true }
    ];
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;