// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
	
	// Completely disable SWC to avoid binary download issues
	swcMinify: false,
	swcLoader: false,
	
	// Performance optimizations
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	
	// Image optimization
	images: {
		unoptimized: true,
		domains: ['localhost'],
		formats: ['image/webp', 'image/avif'],
		minimumCacheTTL: 60,
	},
	
	// Bundle optimization
	experimental: {
		optimizeCss: true,
		optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
		// Disable SWC completely to avoid download issues
		swcMinify: false,
		swcLoader: false,
	},
	
	// SWC configuration
	swcMinify: true,
	
	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Force use of Terser instead of SWC
		if (!dev) {
			config.optimization.minimizer = config.optimization.minimizer || [];
			// Remove SWC minifier if present
			config.optimization.minimizer = config.optimization.minimizer.filter(
				(plugin) => plugin.constructor.name !== 'SwcMinifyWebpackPlugin'
			);
		}
		
		// Production optimizations
		if (!dev && !isServer) {
			config.optimization.splitChunks = {
				chunks: 'all',
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
					common: {
						name: 'common',
						minChunks: 2,
						chunks: 'all',
						enforce: true,
					},
				},
			};
		}
		
		return config;
	},
	
	// TypeScript and ESLint configuration
	typescript: {
		ignoreBuildErrors: false
	},
	eslint: {
		ignoreDuringBuilds: false
	},
};

module.exports = nextConfig;