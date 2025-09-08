

/** @type {import('next').NextConfig} */;

/** @type {import('next').NextConfig} */;
const nextConfig = {;



  compress: true,;
  poweredByHeader: false,;
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;'
  pageExtensions: ['tsxtsjsxjs'],;


  // Image optimization;

    formats: ['image / webpimage / avif'];

  },
  
  // Output configuration
  output: 'standalone',
  
  // Trailing slash
  trailingSlash: false,
  
  // Base path
  basePath: '',
  
  // Asset prefix
  assetPrefix: '',
  
  // Generate ETags
  generateEtags: true,
  
  // Dist directory
  distDir: '.next'
},


  // Generate ETags;



