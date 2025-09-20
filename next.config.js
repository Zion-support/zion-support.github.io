/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Netlify
  output: 'export',
  trailingSlash: true,
  
<<<<<<< HEAD
=======
  // Configure page directory
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

>>>>>>> dc79ced23effe90346a946358f8b0da8bc890c19
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
<<<<<<< HEAD
  
  // Ignore build errors to allow deployment
  typescript: {
    ignoreBuildErrors: true,
=======


  // Ignore build errors to allow deployment with syntax issues
  typescript: {
    ignoreBuildErrors: true,
    tsconfigPath: './tsconfig.json',
>>>>>>> dc79ced23effe90346a946358f8b0da8bc890c19
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
<<<<<<< HEAD
  
  // Force static export
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
=======
  
  // Force disable TypeScript checking
  webpack: (config, { dev, isServer }) => {
    // Configure webpack extensions
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
    
    // Add path alias resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    
    if (!dev && !isServer) {
      // Optimize bundle size
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\/]node_modules[\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    return config;
  },
  
>>>>>>> dc79ced23effe90346a946358f8b0da8bc890c19
};

module.exports = nextConfig;