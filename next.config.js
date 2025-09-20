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
		scrollRestoration: true
	},
	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization.splitChunks.cacheGroups = {
				...config.optimization.splitChunks.cacheGroups,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			};
		}
		return config;
	},
};

module.exports = nextConfig;
<<<<<<< HEAD
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
	async redirects() {
		return [
			{ source: '/ai-customer-success-platform', destination: '/services/ai-customer-success-platform', permanent: true },
			{ source: '/ai-sales-intelligence-platform', destination: '/services/ai-sales-intelligence-platform', permanent: true },
			{ source: '/ai-financial-planning-platform', destination: '/services/ai-financial-planning-platform', permanent: true },
			{ source: '/ai-powered-decision-engine', destination: '/services/ai-powered-decision-engine', permanent: true },
			{ source: '/intelligent-content-automation-platform', destination: '/services/intelligent-content-automation-platform', permanent: true },
			{ source: '/intelligent-hr-analytics-platform', destination: '/services/intelligent-hr-analytics-platform', permanent: true },
			{ source: '/smart-crm-intelligence-suite', destination: '/services/smart-crm-intelligence-suite', permanent: true },
			{ source: '/affiliate-attribution-suite', destination: '/services/affiliate-attribution-suite', permanent: true }
		];
	},
	// Additional optimizations
	experimental: {
		optimizeCss: true,
		scrollRestoration: true
	},
	// Webpack optimizations
	webpack: (config, { dev, isServer }) => {
		// Optimize bundle size
		if (!dev && !isServer) {
			config.optimization.splitChunks.cacheGroups = {
				...config.optimization.splitChunks.cacheGroups,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			};
		}
		return config;
	},
};

module.exports = nextConfig;
=======
>>>>>>> bfddf44e03d6ba856f66d9723288368815d59582
