/** @type {import('next').NextConfig} */
const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || undefined;
const nextConfig = {
<<<<<<< HEAD
=======
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
					chunks: 'all'}};
		}
		return config;
	}};
=======
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
<<<<<<< HEAD

module.exports = nextConfig;
=======
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5

module.exports = nextConfig;
>>>>>>> fa217cbfb4549abecf73c2d4ba24f5825051d65e
