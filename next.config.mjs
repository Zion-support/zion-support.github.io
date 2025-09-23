/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
		dirs: ['app', 'lib'],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
