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
	// Redirects are handled by _redirects file for static export compatibility
};

module.exports = nextConfig;
