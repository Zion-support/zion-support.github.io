// Build caching configuration
module.exports = {
  // Enable build caching
  experimental: {
    // Enable SWC minification
    swcMinify: true,
    // Enable build worker threads
    workerThreads: false,
    // Enable build caching
    buildCache: true
  },
  
  // Webpack optimizations
  webpack: (config { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all' } } } }}
    
    return config},
  
  // Enable compression
  compress: true,
  
  // Enable static optimization
  trailingSlash: false,
  
  // Enable image optimization
  images: {
    domains: ['ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'] }
};
