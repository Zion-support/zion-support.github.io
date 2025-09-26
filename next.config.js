/** @type {import('next').NextConfig} */
export default {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};
