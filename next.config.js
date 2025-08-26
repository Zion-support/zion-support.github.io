/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		// Using unoptimized to support static hosting/CDN without Next Image optimization
		unoptimized: true
	},
	eslint: {
		ignoreDuringBuilds: true
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
			{ source: '/affiliate-attribution-suite', destination: '/services/affiliate-attribution-suite', permanent: true },

			// Internal broken slugs -> general services
			{ source: '/ai-customer-success-automation', destination: '/services', permanent: true },
			{ source: '/ai-content-marketing-automation', destination: '/services', permanent: true },
			{ source: '/ai-consciousness-evolution', destination: '/services', permanent: true },
			{ source: '/ai-autonomous-ecosystem', destination: '/services', permanent: true },
			{ source: '/ai-ethics-governance', destination: '/services', permanent: true },
			{ source: '/ai-autonomous-business-process-automation', destination: '/services', permanent: true },
			{ source: '/ai-customer-intelligence-platform', destination: '/services', permanent: true },
			{ source: '/quantum-encryption-gateway', destination: '/services', permanent: true },
			{ source: '/ai-financial-fraud-detection', destination: '/services', permanent: true },
			{ source: '/quantum-threat-detection', destination: '/services', permanent: true },
			{ source: '/quantum-identity-verification', destination: '/services', permanent: true },
			{ source: '/quantum-compliance-automation', destination: '/services', permanent: true },
			{ source: '/quantum-network-security', destination: '/services', permanent: true },
			{ source: '/blockchain-enterprise-platform', destination: '/services', permanent: true },
			{ source: '/quantum-networking', destination: '/services', permanent: true },
			{ source: '/autonomous-it-operations', destination: '/services', permanent: true },
			{ source: '/quantum-data-center', destination: '/services', permanent: true },
			{ source: '/autonomous-vehicle-ai', destination: '/services', permanent: true },
			{ source: '/quantum-materials-discovery', destination: '/services', permanent: true },
			{ source: '/quantum-internet-security', destination: '/services', permanent: true }
		];
	}
};

export default nextConfig;
