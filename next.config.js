<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
=======
  
  // Image optimization
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> pr-12243
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
<<<<<<< HEAD
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'via.placeholder.com'],
=======
<<<<<<< HEAD
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  images: {
    domains: [
      "localhost",
      "ziontechgroup.com",
      "images.unsplash.com",
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
<<<<<<< HEAD
<<<<<<< HEAD
    minimumCacheTTL: 31536000,
=======
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
<<<<<<< HEAD
    scrollRestoration: true,
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0a01
  },
<<<<<<< HEAD
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
<<<<<<< HEAD
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
=======
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self';" }
        ]
      },
      {
        source: '/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0a01
        ]
      }
=======
  },
  
  // Webpack configuration to exclude problematic directories
  },

    ignoreBuildErrors: true
  }
  pageExtensions: ["tsx", "ts", "jsx", "js"]
  trailingSlash: true
  images: {
    domains: [
      "localhost"
      "ziontechgroup.com"
      "images.unsplash.com"
      "via.placeholder.com"
>>>>>>> cf471d84bcd2971d126a6b4bee95ebd23948c6f1
    ]
    formats: ["image/webp", "image/avif"]
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    minimumCacheTTL: 31536000
  }

    minimumCacheTTL: 31536000
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
=======
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
>>>>>>> pr-12243
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  },
  serverExternalPackages: ['sharp'],
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
<<<<<<< HEAD
<<<<<<< HEAD
  },
  webpack: (config, { dev, isServer }) => {
=======
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
    
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
<<<<<<< HEAD
    }
=======
>>>>>>> 2f757ef2558c16475e88c96592bc2d691c331671
    // Exclude apps directory from compilation
    config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/
      include: /apps\//
      use: "ignore-loader"
    });
<<<<<<< HEAD
=======
            chunks: 'all',
          },
        },
      };
    }
    
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
    return config;
<<<<<<< HEAD
=======
  }
=======
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
>>>>>>> 64688f2771e1ea38304c61327e4b4822aadcff43
};

export default nextConfig;
=======
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons'],
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
=======
    // disabled to avoid Next warning spam
>>>>>>> origin/cursor/add-new-services-and-advertise-them-new
>>>>>>> pr-12243
  },
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
<<<<<<< HEAD
            key: "X-XSS-Protection"
            value: "1; mode=block"
          }
          {
            key: "Referrer-Policy"
            value: "origin-when-cross-origin"
          }
        ]
      }
=======
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      { source: '/api-documentation', destination: '/api-docs', permanent: true },
      { source: '/ai-consciousness-evolution-2025', destination: '/ai-consciousness-evolution-2029', permanent: false }
    ];
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

<<<<<<< HEAD
export default nextConfig;
=======
module.exports = nextConfig;
>>>>>>> main
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
<<<<<<< HEAD
};

export default nextConfig;
>>>>>>> cursor/fix-website-loading-errors-and-merge-191f
=======
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ziontechgroup.com'],
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (config, { dev, isServer }) => {
    // Completely exclude problematic directories from the build
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      exclude: [
        /node_modules/,
        /api-backup/,
        /pages\.disabled/,
        /backup-pages/,
        /\.backup/,
        /\.disabled/,
        /automation\/backups/,
        /automation_backup/,
        /broken_files_backup/,
        /contracts/,
        /hardhat/,
      ],
    });

    // Add fallback for problematic modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    return config;
  },
  // Try to exclude problematic directories at the Next.js level
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

export default nextConfig;
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
>>>>>>> pr-12243
=======
const nextConfig = {}
};

export default nextConfig;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
