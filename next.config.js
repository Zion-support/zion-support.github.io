/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: false
	},
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	}
};

export default nextConfig;