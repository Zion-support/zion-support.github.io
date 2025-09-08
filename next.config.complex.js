<<<<<<< HEAD


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

=======
/** @type {import('next').NextConfig} */
const nextConfig = $2;
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true},
  typescript: { ignoreBuildErrors: true},
  pageExtensions: ['tsxtsjsxjs'],
  
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webpimage/avif']
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD

  // Generate ETags;



=======
module.exports = $2;
>>>>>>> origin/cursor/delete-old-data-records-6bba
