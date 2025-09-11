/** @type {import('next').NextConfig} */
const assetPrefix = process.env.ASSET_PREFIX || '';
const nextConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
  async redirects() {
    return [
      { source: '/main', destination: '/', permanent: true },
      { source: '/front', destination: '/main/front', permanent: true },
      { source: '/front/index', destination: '/main/front', permanent: true }
    ];
  },
  typescript: { ignoreBuildErrors: true },
=======
=======
>>>>>>> origin/chore/standardize-pages-router
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	assetPrefix,
	pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
	images: {
		// Using unoptimized to support static hosting/CDN without Next Image optimization
		unoptimized: true
	},
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
<<<<<<< HEAD
	},
	typescript: {
		// Allow builds to pass even if there are type errors; CI can run type-check separately
		ignoreBuildErrors: true
	},
	async redirects() {
		return [
			{ source: '/ai-customer-success-platform', destination: '/services/ai-customer-success-platform', permanent: true },
			{ source: '/ai-sales-intelligence-platform', destination: '/services/ai-sales-intelligence-platform', permanent: true },
			{ source: '/ai-financial-planning-platform', destination: '/services/ai-financial-planning-platform', permanent: true },
			{ source: '/ai-powered-decision-engine', destination: '/services/ai-powered-decision-engine', permanent: true },
			{ source: '/intelligent-content-automation-platform', destination: '/services/intelligent-content-automation-platform', permanent: true },
			{ source: '/intelligent-hr-analytics-platform', destination: '/services/intelligent-hr-analytics-platform', permanent: true },
			{ source: '/smart-crm-intelligence-suite', destination: '/services/smart-crm-intelligence-suite', permanent: true },
			{ source: '/affiliate-attribution-suite', destination: '/services/affiliate-attribution-suite', permanent: true }
		];
=======
>>>>>>> origin/chore/standardize-pages-router
	}
>>>>>>> origin/chore/stabilize-build-minimal-index
};

<<<<<<< HEAD
module.exports = nextConfig;
=======
export default nextConfig;
>>>>>>> origin/chore/standardize-pages-router
