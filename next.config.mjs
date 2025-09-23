/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
		dirs: ['app','lib'],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
export default {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
}