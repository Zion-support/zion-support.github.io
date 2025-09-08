


  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true},
  typescript: { ignoreBuildErrors: true},
  pageExtensions: ['tsxtsjsxjs'],
  
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webpimage/avif']
  },


  output: 'standalone',


  trailingSlash: false,
  // Base path'
  basePath: '',
  // Asset prefix'
  assetPrefix: '',
  // Generate ETags;
  generateEtags: true,

  // Dist directory

  distDir: '.next',
};



