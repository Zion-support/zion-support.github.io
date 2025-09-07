/** @type {import('next').NextConfig} */
const nextConfig = {
compress: true,
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // Image optimization
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost', 'ziontechgroup.com'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  trailingSlash: true,
  images: {
    domains: [
      'localhost',
      'ziontechgroup.com',
      'images.unsplash.com',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
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
      }
    }
    
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
	reactStrictMode: false,
	trailingSlash: true,
	output: 'export',
	images: {
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	async redirects() {
		return [
			{ source: '/api-documentation', destination: '/api-docs', permanent: true },
			{ source: '/ai-consciousness-evolution-2025', destination: '/ai-consciousness-evolution-2029', permanent: false }
		];
	},
	webpack: (config, { isServer }) => {
		// Exclude problematic directories from webpack compilation
		config.watchOptions = {
			...config.watchOptions,
			ignored: ['**/apps/**', '**/temp_conflicts/**', '**/node_modules/**']
		};

		// Add custom webpack rule to ignore apps directory
		config.module.rules.push({
			test: /\.(ts|tsx|js|jsx)$/,
			include: /apps\//,
			use: 'ignore-loader'
		});

		return config;
	}
};

export default nextConfig;

        ],
      };
    }
    return config;
  },
};

export default nextConfig;
  
  // Performance optimizations
  // swcMinify is now default in Next.js 15
  
  // External packages
  serverExternalPackages: ['sharp'],
  
  // Webpack configuration
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom webpack configuration if needed
    return config;
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // ESLint and TypeScript configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Export configuration
  output: 'export',
  distDir: 'dist',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ziontechgroup-site' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/ziontechgroup-site' : '',
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  },
  
  // Trailing slash
  trailingSlash: false,
};

export default nextConfig;
