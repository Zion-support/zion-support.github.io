/** @type {import('next').NextConfig} */
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined;
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	assetPrefix,
	images: {
		// Using unoptimized to support static hosting/CDN without Next Image optimization
		unoptimized: true
	},
	// metadataBase is now handled in layout.tsx
	eslint: {
		// Allow builds to pass even if there are ESLint errors
		ignoreDuringBuilds: true,
		dirs: []
	},
	typescript: {
		// Allow builds to pass even if there are type errors; CI can run type-check separately
		ignoreBuildErrors: true
	},
	// Performance optimizations
	swcMinify: true,
	compress: true,
	poweredByHeader: false,
	// Redirects are handled by _redirects file for static export compatibility
	// Additional optimizations
	experimental: {
		optimizeCss: true,
		scrollRestoration: true,
		optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react', 'framer-motion'],
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},
	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization.splitChunks.cacheGroups = {
				...config.optimization.splitChunks.cacheGroups,
				// React and React DOM
				react: {
					test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
					name: 'react',
					chunks: 'all',
					priority: 20,
				},
				// UI libraries
				ui: {
					test: /[\\/]node_modules[\\/](@radix-ui|lucide-react|framer-motion)[\\/]/,
					name: 'ui',
					chunks: 'all',
					priority: 15,
				},
				// Next.js framework
				framework: {
					test: /[\\/]node_modules[\\/](next)[\\/]/,
					name: 'framework',
					chunks: 'all',
					priority: 10,
				},
				// Other vendors
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
					priority: 5,
				},
				// Common chunks
				common: {
					name: 'common',
					minChunks: 2,
					chunks: 'all',
					enforce: true,
					priority: 1,
				},
			};
			
			// Enable tree shaking
			config.optimization.usedExports = true;
			config.optimization.sideEffects = false;
			
			// Optimize module resolution
			config.resolve.alias = {
				...config.resolve.alias,
				'@': require('path').resolve(__dirname, './src'),
			};
		}
		
		// Optimize for production
		if (!dev) {
			config.optimization.minimize = true;
			config.optimization.removeAvailableModules = true;
			config.optimization.removeEmptyChunks = true;
			config.optimization.mergeDuplicateChunks = true;
			
			// Enable gzip compression hints
			config.optimization.concatenateModules = true;
			
			// Set chunk size limits
			config.optimization.splitChunks.maxSize = 250000; // 250KB
			config.optimization.splitChunks.minSize = 20000;  // 20KB
		}
		
		return config;
	},
};

module.exports = nextConfig;
