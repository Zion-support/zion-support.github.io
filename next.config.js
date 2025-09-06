<<<<<<< HEAD
const nextConfig = {;
  reactStrictMode:true,;
  eslint:{;
    ignoreDuringBuilds:true;
  },;
  typescript:{;
    ignoreBuildErrors:true;
  },;
  pageExtensions:['tsx', 'ts', 'jsx', 'js'],;
  trailingSlash:true,;
  images:{;
    domains:[;
      'localhost',;
      'ziontechgroup.com',;
      'images.unsplash.com',;
      'via.placeholder.com',;
    ],;
    formats:['image/webp', 'image/avif'],;
    deviceSizes:[640, 750, 828, 1080, 1200, 1920, 2048, 3840],;
    imageSizes:[16, 32, 48, 64, 96, 128, 256, 384],;
    minimumCacheTTL:31536000,;
  },;
  webpack:(config, { dev, isServer }) => {;
    if (dev) {;
      config.watchOptions = {;
        ignored:[;
          '**/node_modules/**',;
          '**/.git/**',;
          '**/pages_backup*/**',;
          '**/pages.*/**',;
          '**/pages-*/**',;
          '**/pages_disabled*/**',;
          '**/pages.disabled*/**',;
          '**/pages.broken*/**',;
          '**/pages.corrupted*/**',;
          '**/pages.old*/**',;
          '**/pages._*/**',;
          '**/pages.__*/**',;
          '**/backup-pages/**',;
          '**/src.pages.disabled/**',;
          '**/lib_backup*/**',;
          '**/src_backup*/**',;
          '**/corrupted-files-backup*/**',;
          '**/performance-reports*/**',;
          '**/log-analysis-reports*/**',;
          '**/link-reports*/**',;
          '**/lint-target*/**',;
          '**/monitoring*/**',;
          '**/pm2-automation*/**',;
          '**/automation/logs*/**',;
          '**/automation/backup*/**',;
          '**/performance-*.json',;
          '**/performance-*.js',;
          '**/performance-*.cjs',;
          '**/performance-*.sh',;
          '**/performance-*.html',;
          '**/performance-*.md',;
          '**/performance-*.txt';
        ],;
        poll:1000,;
        aggregateTimeout:300;    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
=======
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  
<<<<<<< HEAD
  // Performance optimizations
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons', 'framer-motion']
  },
  
=======
>>>>>>> origin/resolved-all-conflicts-clean
  // Image optimization
  images: {
    unoptimized: true,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
=======
    minimumCacheTTL: 31536000,
>>>>>>> origin/resolved-all-conflicts-clean
  },
  
  // Webpack configuration to exclude problematic directories
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/****/.git/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/****/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/****/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300
      }
const nextConfig = {_reactStrictMode: true, _eslint: {
    ignoreDuringBuilds: true, },
  typescript: {_ignoreBuildErrors: true, },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  images: {_domains: [
      'localhost', _'ziontechgroup.com', _'images.unsplash.com', _'via.placeholder.com', _], _formats: ['image/webp', _'image/avif'], _deviceSizes: [640, _750, _828, _1080, _1200, _1920, _2048, _3840], _imageSizes: [16, _32, _48, _64, _96, _128, _256, _384], _minimumCacheTTL: 31536000, },
  webpack: (_config, _{_dev, _isServer}) => {_if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**', _'**/.git/**', _'**/pages_backup*/**', _'**/pages.*/**', _'**/pages-*/**', _'**/pages_disabled*/**', _'**/pages.disabled*/**', _'**/pages.broken*/**', _'**/pages.corrupted*/**', _'**/pages.old*/**', _'**/pages._*/**', _'**/pages.__*/**', _'**/backup-pages/**', _'**/src.pages.disabled/**', _'**/lib_backup*/**', _'**/src_backup*/**', _'**/corrupted-files-backup*/**', _'**/performance-reports*/**', _'**/log-analysis-reports*/**', _'**/link-reports*/**', _'**/lint-target*/**', _'**/monitoring*/**', _'**/pm2-automation*/**', _'**/automation/logs*/**', _'**/automation/backup*/**', _'**/performance-*.json', _'**/performance-*.js', _'**/performance-*.cjs', _'**/performance-*.sh', _'**/performance-*.html', _'**/performance-*.md', _'**/performance-*.txt', _], _poll: 1000, _aggregateTimeout: 300, };
    }
    return config;
  }
};
;
export default nextConfig;      };
    }
    return config;
  }
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
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
  }
};

export default nextConfig;
