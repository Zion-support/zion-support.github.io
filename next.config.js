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
	},
	
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
	
	// Headers for better caching
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'DENY',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
				],
			},
			{
				source: '/static/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},
	
	// TypeScript and ESLint configuration
	typescript: {
		ignoreBuildErrors: false
	},
	eslint: {
		ignoreDuringBuilds: false
	},
};

export default nextConfig;
