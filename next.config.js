// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
	
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
		// Force SWC to use JavaScript fallback if native binary fails
		swcMinify: true,
		swcLoader: true,
		// Disable SWC binary download to force JavaScript fallback
		forceSwcTransforms: true,
	},
	
	// SWC configuration - force JavaScript fallback
	swcMinify: true,
	// Disable SWC binary to force JavaScript fallback
	swcLoader: true,
	
	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
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
