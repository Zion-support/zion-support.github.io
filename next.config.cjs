const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
	experimental: { optimizeCss: true, scrollRestoration: true },
	images: {
		domains: ["images.unsplash.com", "via.placeholder.com", "ziontechgroup.com"],
		formats: ["image/avif", "image/webp"],
	},
	webpack: (config) => {
		config.resolve.alias = {
			...(config.resolve.alias || {}),
			"@": path.join(__dirname, 'src'),
		};
		return config;
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{ key: 'X-Frame-Options', value: 'DENY' },
					{ key: 'X-Content-Type-Options', value: 'nosniff' },
					{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
				],
			},
		];
	},
};

module.exports = nextConfig;
