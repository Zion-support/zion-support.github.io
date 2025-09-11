/** @type {import ('next').NextConfig} */;
const next_config = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  page_extensions: ['tsxtsjsxjs'],
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  compress: true,;
  poweredByHeader: false,;
  eslint: { ignoreDuringBuilds: true },;
  typescript: { ignoreBuildErrors: true },;
  pageExtensions: ['tsxtsjsxjs'],;
<<<<<<< HEAD
<<<<<<< HEAD
  dist_dir: '.next';
},
module.exports = next_config,
/** @type {import('next').NextConfig} */;
const nextConfig = {;
  reactStrictMode:true,;
  compress:true,;
  poweredByHeader:false,;
  eslint:{ ignoreDuringBuilds:true },;
  typescript:{ ignoreBuildErrors:true },;
  pageExtensions:['tsx', 'ts', 'jsx', 'js'],;
  ;
  // Image optimization;
  images:{;
    domains:["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],;
    formats:['image/webp', 'image/avif'],;
  },;
  ;
  // Output configuration;
  output:'standalone',;
  ;
  // Trailing slash;
  trailingSlash:false,;
  ;
  // Base path;
  basePath:'',;
  ;
  // Asset prefix;
  assetPrefix:'',;
  ;
  // Generate ETags;
  generateEtags:true,;
  ;
  // Dist directory;
  distDir:'.next',;
};
;
module.exports = nextConfig;
  // Image optimization;
  images: {;
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],;
    formats: ['image/webpimage/avif'];
  },;
  // Output configuration;
  output: 'standalone',;
  // Trailing slash;
  trailingSlash: false,;
  // Base path;
  basePath: '',;
  // Asset prefix;
  assetPrefix: '',;
  // Generate ETags;
  generateEtags: true,;
  // Dist directory;
  distDir: '.next';
},;
module.exports = nextConfig,;
=======
=======
  // Image optimization;
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image / webpimage / avif'];
  },
  // Output configuration;
  output: 'standalone',
  // Trailing slash;
  trailing_slash: false,
  // Base path;
  base_path: '',
  // Asset prefix;
  asset_prefix: '',
  // Generate ETags;
  generate_etags: true,
  // Dist directory;
<<<<<<< HEAD
  dist_dir: '.next';
},
module.exports = next_config,>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  distDir: '.next';
},;
module.exports = nextConfig,;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
