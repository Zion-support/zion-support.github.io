<<<<<<< HEAD
=======
const nextConfig = {reactStrictMode: true,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },pageExtensions: ['tsx', 'ts', 'jsx', 'js'],// Minimal webpack config;
  webpack: (config, { dev, isServer }) => {if (dev) {config.watchOptions = {ignored: [;
          '**/node_modules/**','**/backup*/**','**/disabled*/**','**/temp*/**','**/*.backup*','**/*.disabled*','**/pages_backup*/**','**/src_backup*/**','**/components.disabled*/**','**/pages.disabled*/**','**/src.disabled*/**';
        ];
      }}
    return config;ursor/automate-test-improve-and-merge-code-646c;
ursor/fix-website-loading-errors-and-merge-6662;
/** @type {import ('next').NextConfig} */;
const next_config = {reactStrictMode: true,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },page_extensions: ['tsx', 'ts', 'jsx', 'js'],images: {domains: ["localhost", "ziontechgroup.com"];
  },output: 'standalone',trailing_slash: false,dist_dir: '.next';
}module.exports = next_config;;
  trailingSlash: false,distDir: '.next';
}module.exports = nextConfig;
module.exports = nextConfig;pageExtensions: ["tsx", "ts", "jsx", "js"],images: {domains: ["localhost", "ziontechgroup.com"];
  },output: "standalone",trailingSlash: false,distDir: '.next';
  distDir: '.next';
  distDir: '.next';
}/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode:true,eslint:{ ignoreDuringBuilds:true },typescript:{ ignoreBuildErrors:true },pageExtensions:['tsx', 'ts', 'jsx', 'js'],images:{domains:["localhost", "ziontechgroup.com"]},output:'standalone',trailingSlash:false,distDir:'.next'}module.exports = nextConfig;}}export default nextConfig;
const nextConfig = {,const nextConfig = {reactStrictMode: true,const nextConfig = {reactStrictMode: true,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },pageExtensions: ['tsx', 'ts', 'jsx', 'js'],// Minimal webpack config;
  webpack: (config, { dev, isServer }) => {if (dev) {config.watchOptions = {ignored: [;
          '**/node_modules/**','**/backup*/**','**/disabled*/**','**/temp*/**','**/*.backup*','**/*.disabled*','**/pages_backup*/**','**/src_backup*/**','**/components.disabled*/**','**/pages.disabled*/**','**/src.disabled*/**';
        ];
      }}
    return config;compress: true,poweredByHeader: false,eslint: { ignoreDuringBuilds: true },typescript: { ignoreBuildErrors: true },pageExtensions: ['tsxtsjsxjs'],trailingSlash: true,// Image optimization,images: {,domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],formats: ['image/webpimage/avif'],deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],minimumCacheTTL: 31536000;
  },// Webpack configuration to exclude problematic directories,webpack: (config, { dev, isServer }) => {,if (dev) {,// Exclude problematic directories from file watching,config.watchOptions = {,ignored: [,'**/node_modules/****/.git/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/****/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/**','**/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt';
        ],poll: 1000,aggregateTimeout: 300;
      }}return config;
  },// Headers for security and performance,async headers() {,return [,{,source: '/(.*)',headers: [,{,key: 'X-Frame-Options',value: 'DENY';
          },{,key: 'X-Content-Type-Options',value: 'nosniff';
          },{,key: 'Referrer-Policy',value: 'origin-when-cross-origin';
          }
        ];
      }
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Minimal webpack config
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/backup*/**',
          '**/disabled*/**',
          '**/temp*/**',
          '**/*.backup*',
          '**/*.disabled*',
          '**/pages_backup*/**',
          '**/src_backup*/**',
          '**/components.disabled*/**',
          '**/pages.disabled*/**',
          '**/src.disabled*/**'
        ]
      };
    }
    return config;
>>>>>>> origin/merge-pr-12271

  };
};
<<<<<<< HEAD
,
export default nextConfig,
=======

  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: {
    domains: ["localhost", "ziontechgroup.com"]
  },
  output: "standalone",
  trailingSlash: false,
  distDir: '.next'
};
/** @type {import('next').NextConfig} */;
const nextConfig = {;
  reactStrictMode:true,;
  eslint:{ ignoreDuringBuilds:true },;
  typescript:{ ignoreBuildErrors:true },;
  pageExtensions:['tsx', 'ts', 'jsx', 'js'],;
  images:{;
    domains:["localhost", "ziontechgroup.com"],;
  },;
  output:'standalone',;
  trailingSlash:false,;
  distDir:'.next',;
};
;
module.exports = nextConfig;};
};
;
export default nextConfig;
const nextConfig = {,
  reactStrictMode: true,
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Minimal webpack config
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/backup*/**',
          '**/disabled*/**',
          '**/temp*/**',
          '**/*.backup*',
          '**/*.disabled*',
          '**/pages_backup*/**',
          '**/src_backup*/**',
          '**/components.disabled*/**',
          '**/pages.disabled*/**',
          '**/src.disabled*/**'
        ]
      };
    }
    return config;
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
module.exports = nextConfig;
module.exports = nextConfig;

  distDir: ".next"
};

  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  
  // Image optimization
  images: {
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  
  // Webpack configuration to exclude problematic directories
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Exclude problematic directories from file watching
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/pages_backup*/**',
          '**/pages.*/**',
          '**/pages-*/**',
          '**/pages_disabled*/**',
          '**/pages.disabled*/**',
          '**/pages.broken*/**',
          '**/pages.corrupted*/**',
          '**/pages.old*/**',
          '**/pages._*/**',
          '**/pages.__*/**',
          '**/backup-pages/**',
          '**/src.pages.disabled/**',
          '**/lib_backup*/**',
          '**/src_backup*/**',
          '**/corrupted-files-backup*/**',
          '**/performance-reports*/**',
          '**/log-analysis-reports*/**',
          '**/link-reports*/**',
          '**/lint-target*/**',
          '**/monitoring*/**',
          '**/pm2-automation*/**',
          '**/automation/logs*/**',
          '**/automation/backup*/**',
          '**/performance-*.json',
          '**/performance-*.js',
          '**/performance-*.cjs',
          '**/performance-*.sh',
          '**/performance-*.html',
          '**/performance-*.md',
          '**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300
      };
    }
    return config;
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },// Redirects for SEO,async redirects() {,return [,{,source: '/home',destination: '/',permanent: true;
      }
    ];
  }},export default nextConfig,/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode: true;
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'];
  images: {domains: ["localhost", "ziontechgroup.com"];
  }
  output: 'standalone';
  trailingSlash: false;
  distDir: '.next';
}
module.exports = nextConfig;module.exports = nextConfig;module.exports = nextConfig;module.exports = nextConfig;
module.exports = nextConfig;
module.exports = nextConfig;
module.exports = nextConfig;distDir: ".next";
}ursor/fix-website-loading-errors-and-merge-6662;
module.exports = nextConfig;
module.exports = nextConfig;distDir: ".next";
}pageExtensions: ['tsx', 'ts', 'jsx', 'js'],trailingSlash: true,// Image optimization;
  images: {domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],formats: ['image/webp', 'image/avif'],deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],minimumCacheTTL: 31536000;
  },// Webpack configuration to exclude problematic directories;
  webpack: (config, { dev, isServer }) => {if (dev) {// Exclude problematic directories from file watching;
      config.watchOptions = {ignored: [;
          '**/node_modules/**','**/.git/**','**/pages_backup*/**','**/pages.*/**','**/pages-*/**','**/pages_disabled*/**','**/pages.disabled*/**','**/pages.broken*/**','**/pages.corrupted*/**','**/pages.old*/**','**/pages._*/**','**/pages.__*/**','**/backup-pages/**','**/src.pages.disabled/**','**/lib_backup*/**','**/src_backup*/**','**/corrupted-files-backup*/**','**/performance-reports*/**','**/log-analysis-reports*/**','**/link-reports*/**','**/lint-target*/**','**/monitoring*/**','**/pm2-automation*/**','**/automation/logs*/**','**/automation/backup*/**','**/performance-*.json','**/performance-*.js','**/performance-*.cjs','**/performance-*.sh','**/performance-*.html','**/performance-*.md','**/performance-*.txt';
        ],poll: 1000,aggregateTimeout: 300;
      }}
    return config;
  },// Headers for security and performance;
  async headers() {return [;
      {source: '/(.*)',headers: [;
          {key: 'X-Frame-Options',value: 'DENY';
          },{key: 'X-Content-Type-Options',value: 'nosniff';
          },{key: 'Referrer-Policy',value: 'origin-when-cross-origin';
          }
        ];
      }
    ];
  },// Redirects for SEO;
  async redirects() {return [;
      {source: '/home',destination: '/',permanent: true;
      }
    ];
ursor/automate-test-improve-and-merge-code-646c;
  }
}export default nextConfig;pageExtensions: ['tsxtsjsxjs'],trailingSlash: true,// Image optimization,images: {,domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],formats: ['image/webpimage/avif'],deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],minimumCacheTTL: 31536000;
  },// Webpack configuration to exclude problematic directories,webpack: (config, { dev, isServer }) => {,if (dev) {,// Exclude problematic directories from file watching,config.watchOptions = {,ignored: [,'**/node_modules/****/.git/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/****/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/**','**/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt';
        ],poll: 1000,aggregateTimeout: 300;
      }}return config;
  },// Headers for security and performance,async headers() {,return [,{,source: '/(.*)',headers: [,{,key: 'X-Frame-Options',value: 'DENY';
          },{,key: 'X-Content-Type-Options',value: 'nosniff';
          },{,key: 'Referrer-Policy',value: 'origin-when-cross-origin';
          }
        ];
      }
    ];
  },// Redirects for SEO,async redirects() {,return [,{,source: '/home',destination: '/',permanent: true;
      }
    ];
  }},export default nextConfig,/** @type {import('next').NextConfig} */;
const nextConfig = {reactStrictMode: true;
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'];
  images: {domains: ["localhost", "ziontechgroup.com"];
  }
  output: 'standalone';
  trailingSlash: false;
  distDir: '.next';
}
module.exports = nextConfig;module.exports = nextConfig;module.exports = nextConfig;module.exports = nextConfig;
module.exports = nextConfig;
module.exports = nextConfig;
module.exports = nextConfig;ursor/automate-test-improve-and-merge-code-646c;
module.exports = nextConfig;
module.exports = nextConfig;
>>>>>>> origin/merge-pr-12271
