/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		optimizeCss: true,
		scrollRestoration: true,
		// Removed optimizePackageImports to avoid invalid option warnings
	},
	images: {
		domains: ['ziontechgroup.com', 'images.unsplash.com', 'via.placeholder.com'],
		formats: ['image/webp', 'image/avif'],
		unoptimized: true,
	},
	compress: true,
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production',
	},
	webpack: (config, { dev, isServer }) => {
		// Add fallbacks for Node built-ins on client
		config.resolve.fallback = {
			...config.resolve.fallback,
			fs: false,
			net: false,
			tls: false,
		};
		return config;
	},
};

module.exports = nextConfig;
