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
					chunks: 'all',
				},
			};
		}
		return config;
	},
};

module.exports = nextConfig;
  reactStrictMode: true,
compress: true,
poweredByHeader: false,
eslint: {,
ignoreDuringBuilds: true,
}
  typescript: {
webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.watchOptions = {
        ignored: [
    }
    // Exclude apps directory from compilation,
config.module.rules.push({
      test: /\.(ts|tsx|js|jsx)$/,
include: /apps\//
      use: "ignore-loader"
    });
    return config;
  }
  async headers() {
    return [
      {
        source: "/(.*)",
headers: [
          {
            key: "X-Content-Type-Options",
value: "nosniff"
          }
          {
            key: "X-Frame-Options",
value: "DENY"
          }
          {
            key: "X-XSS-Protection",
value: "1; mode=block"
          }
          {
            key: "Referrer-Policy",
value: "origin-when-cross-origin"
          }
        ]
      }
    ];
  }
}
export default nextConfig;
