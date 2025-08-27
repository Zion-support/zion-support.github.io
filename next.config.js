/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	images: { unoptimized: true },
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
	async redirects() {
		return [
			{ source: '/ai-customer-success-platform', destination: '/services/ai-customer-success-platform', permanent: true },
			{ source: '/ai-sales-intelligence-platform', destination: '/services/ai-sales-intelligence-platform', permanent: true },
			{ source: '/ai-financial-planning-platform', destination: '/services/ai-financial-planning-platform', permanent: true },
			{ source: '/ai-powered-decision-engine', destination: '/services/ai-powered-decision-engine', permanent: true },
			{ source: '/intelligent-content-automation-platform', destination: '/services/intelligent-content-automation-platform', permanent: true },
			{ source: '/intelligent-hr-analytics-platform', destination: '/services/intelligent-hr-analytics-platform', permanent: true },
			{ source: '/smart-crm-intelligence-suite', destination: '/services/smart-crm-intelligence-suite', permanent: true },
			{ source: '/affiliate-attribution-suite', destination: '/services/affiliate-attribution-suite', permanent: true },
		];
	},
=======
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  images: {
    unoptimized: true
  },
  pageExtensions: ['page.tsx','page.ts','page.jsx','page.js'],
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },

>>>>>>> 5de4620e97688b5970e7272b9ca46e6d1d512b87
};
module.exports = nextConfig;
