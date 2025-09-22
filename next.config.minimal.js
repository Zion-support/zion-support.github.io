<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/** @type {import('next').NextConfig} */
const nextConfig = {
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  // Minimal webpack config;
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
          '**/src.disabled*/**]
        ]
      };
    }
    return config;

/** @type {import ('next').NextConfig} */;
const next_config = {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

/** @type {import ('next').NextConfig} */;
const next_config = {}
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
page_extensions: ['tsx', 'ts', 'jsx', 'js'],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  images: {
    domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
  trailing_slash: false,
  dist_dir: '.next',
;
module.exports = next_config;

=======
domains: ["localhost", "ziontechgroup.com"],
  },
  output: 'standalone',
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  trailingSlash: false,
  distDir: '.next',

module.exports = nextConfig;
<<<<<<< HEAD
=======
module.exports = nextConfig;

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

  trailingSlash: false,'
  distDir: '.next',
};

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: {"
    domains: ["localhost", "ziontechgroup.com"],
  },"
  output: "standalone",
  trailingSlash: false,
distDir: '.next',
};

export default nextConfig;
const nextConfig = {,
  reactStrictMode: true,
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  compress: true,
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
<<<<<<< HEAD
<<<<<<< HEAD
  pageExtensions: ['tsxtsjsxjs'],
  trailingSlash: true,
  // Image optimization,
  images: {,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webpimage/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  // Webpack configuration to exclude problematic directories,
  webpack: (config, { dev, isServer }) => {,
    if (dev) {,
      // Exclude problematic directories from file watching,
      config.watchOptions = {,
        ignored: [,
          '**/node_modules/****/.git/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/****/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/**',
          '**/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300
      }
};
    return config
  },
  // Headers for security and performance,
  async headers() {,
    return [,
      {,
        source: '/(.*)',
        headers: [,
          {,
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {,
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {,
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  // Redirects for SEO,
  async redirects() {,
    return [,
      {,
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  }
};
,
export default nextConfig,
/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  images: {
domains: ["localhost", "ziontechgroup.com"]
  }
  output: 'standalone'
  trailingSlash: false
  distDir: '.next'
}
module.exports = nextConfig;

module.exports = nextConfig;

module.exports = nextConfig;

module.exports = nextConfig;
module.exports = nextConfig;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  images: {
    domains: ["localhost", "ziontechgroup.com"],
  },
  output: "standalone",
  trailingSlash: false,
  distDir: '.next',
};
module.exports = nextConfig;

  pageExtensions: ["tsx", "ts", "jsx", "js"],"
  images: {,"
  output: "standalone","
  trailingSlash: false,"
/** @type {import('next').NextConfig} */;
const nextConfig = {;
  reactStrictMode:true,;
  eslint:{ ignoreDuringBuilds:true },;
  typescript:{ ignoreBuildErrors:true },;
  pageExtensions:['tsx', 'ts', 'jsx', 'js'],;
  images: {;,
  domains:["localhost", "ziontechgroup.com"],;"
  },;"
  output:'standalone',;
  trailingSlash:false,;
  distDir:'.next',;
module.exports = nextConfig;};
export default nextConfig;
const nextConfig = {,
  reactStrictMode: true,

module.exports = nextConfig;
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
module.exports = nextConfig;
module.exports = nextConfig;

  distDir: ".next",
};

=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  // Minimal webpack config;

  compress: true,
  poweredByHeader: false,

  distDir: ".next","
"
  trailingSlash: true,

  // Image optimization;
images: {"
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],'
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // Webpack configuration to exclude problematic directories;
webpack: (config, { dev, isServer }) => {}
    if (dev) {}
      // Exclude problematic directories from file watching;
      config.watchOptions = {}
        ignored: ['
          '**/node_modules/**','
          '**/.git/**','
          '**/pages_backup*/**','
          '**/pages.*/**','
          '**/pages-*/**','
          '**/pages_disabled*/**','
          '**/pages.disabled*/**','
          '**/pages.broken*/**','
          '**/pages.corrupted*/**','
          '**/pages.old*/**','
          '**/pages._*/**','
          '**/pages.__*/**','
          '**/backup-pages/**','
          '**/src.pages.disabled/**','
          '**/lib_backup*/**','
          '**/src_backup*/**','
          '**/corrupted-files-backup*/**','
          '**/performance-reports*/**','
          '**/log-analysis-reports*/**','
          '**/link-reports*/**','
          '**/lint-target*/**','
          '**/monitoring*/**','
          '**/pm2-automation*/**','
          '**/automation/logs*/**','
          '**/automation/backup*/**','
          '**/performance-*.json','
          '**/performance-*.js','
          '**/performance-*.cjs','
          '**/performance-*.sh','
          '**/performance-*.html','
          '**/performance-*.md','
          '**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300,

  // Headers for security and performance;
async headers() {}
    return []
      {'
        source: '/(.*)',
        headers: []
          {'
            key: 'X-Frame-Options','
            value: 'DENY',
          },
          {'
            key: 'X-Content-Type-Options','
            value: 'nosniff',
          },
          {'
            key: 'Referrer-Policy','
            value: 'origin-when-cross-origin',
          },]
    ];

  // Redirects for SEO;
async redirects() {}
    return []
      {'
        source: '/home','
        destination: '/',
        permanent: true,
      },
    ];

  }
};

export default nextConfig;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  trailingSlash: true,
  // Image optimization,
  images: {,
    domains: ["localhost", "ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
    formats: ['image/webpimage/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000
  },
  // Webpack configuration to exclude problematic directories,
  webpack: (config, { dev, isServer }) => {,
    if (dev) {,
      // Exclude problematic directories from file watching,
      config.watchOptions = {,
        ignored: [,
          '**/node_modules/****/.git/****/pages_backup*/****/pages.*/****/pages-*/****/pages_disabled*/****/pages.disabled*/****/pages.broken*/****/pages.corrupted*/****/pages.old*/****/pages._*/****/pages.__*/****/backup-pages/****/src.pages.disabled/****/lib_backup*/****/src_backup*/**',
          '**/corrupted-files-backup*/****/performance-reports*/****/log-analysis-reports*/****/link-reports*/****/lint-target*/****/monitoring*/****/pm2-automation*/****/automation/logs*/****/automation/backup*/****/performance-*.json**/performance-*.js**/performance-*.cjs**/performance-*.sh**/performance-*.html**/performance-*.md**/performance-*.txt'
        ],
        poll: 1000,
        aggregateTimeout: 300
      };
    };
    return config
  },
  // Headers for security and performance,
  async headers() {,
    return [,
      {,
        source: '/(.*)',
        headers: [,
          {,
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {,
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {,
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  },
  // Redirects for SEO,
  async redirects() {,
    return [,
      {,
        source: '/home',
        destination: '/',
        permanent: true
      }
    ]
  };
};
,
export default nextConfig,
/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true
  eslint: { ignoreDuringBuilds: true }
  typescript: { ignoreBuildErrors: true }
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
  images: {
domains: ["localhost", "ziontechgroup.com"]
  }
  output: 'standalone'
  trailingSlash: false
  distDir: '.next'
}
module.exports = nextConfig;

module.exports = nextConfig;

module.exports = nextConfig;

module.exports = nextConfig;
module.exports = nextConfig;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
module.exports = nextConfig;
module.exports = nextConfig;

>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
module.exports = nextConfig;
module.exports = nextConfig;

module.exports = nextConfig;
module.exports = nextConfig;

module.exports = nextConfig;
module.exports = nextConfig;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
