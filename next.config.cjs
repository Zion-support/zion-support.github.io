const nextConfig = {
	reactStrictMode: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		domains: ["ziontechgroup.com", "images.unsplash.com", "via.placeholder.com"],
		formats: ["image/webp", "image/avif"],
	},
	headers: async () => [
		{
			source: "/(.*)",
			headers: [
				{ key: "X-Frame-Options", value: "DENY" },
				{ key: "X-Content-Type-Options", value: "nosniff" },
				{ key: "Referrer-Policy", value: "origin-when-cross-origin" },
			],
		},
	],
};

module.exports = nextConfig;
