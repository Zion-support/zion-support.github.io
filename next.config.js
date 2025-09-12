// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
	images: {
		unoptimized: true,
		domains: ['localhost']
	},
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		// Allow builds to pass even if there are type errors; CI can run type-check separately
		ignoreBuildErrors: true
	},
};

export default nextConfig;
