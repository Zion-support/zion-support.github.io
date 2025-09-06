<<<<<<< HEAD:backup-problematic-files/next.config.cjs
/** @type {import('next').NextConfig} */;
const nextConfig = {;
	reactStrictMode:false,;
	trailingSlash:true,;
	output:'export',;
	images:{;
		unoptimized:true;
	},;
	eslint:{;
		ignoreDuringBuilds:true;
	},;
	async redirects() {;
		return [;
			{ source:'/api-documentation', destination:'/api-docs', permanent:true },;
			{ source:'/ai-consciousness-evolution-2025', destination:'/ai-consciousness-evolution-2029', permanent:false }		];
	}
};
;
module.exports = nextConfig;
=======
/** @type {import('next').NextConfig} */
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.cjs
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  exclude: [
    'apps.backup/**',
    'zion-os/**',
    'zion-website/**',
    'zion-academy/**',
    'zion-film/**',
    'zion-ai-assistant/**',
    'backup-merge-conflicts/**',
    'automation/**',
    'scripts/**',
  ],
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
<<<<<<< HEAD:backup-problematic-files/next.config.cjs
      'via.placeholder.com',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
=======
      'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000},
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.cjs
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/apps/**',
          '**/apps.backup/**',
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
<<<<<<< HEAD:backup-problematic-files/next.config.cjs
        aggregateTimeout: 300,
      };
    }
    
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
      include: /apps\//,
      use: 'ignore-loader'
    });
    
    return config;
  },
};

<<<<<<< HEAD
module.exports = nextConfig
=======
module.exports = nextConfig;
>>>>>>> 3e0b5e734e328fa6b9be04237a4c9f63bf064ddb
=======
        aggregateTimeout: 300};
    }
    return config;
  }
};

module.exports = nextConfig;
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:next.config.cjs
