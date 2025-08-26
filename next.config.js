/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
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
			// Additional fixes
			{ source: '/ai-content-marketing-automation', destination: '/ai-content-generator', permanent: true },
			{ source: '/ai-consciousness-evolution', destination: '/ai-consciousness-evolution-2029', permanent: true },
			{ source: '/ai-autonomous-ecosystem', destination: '/ai-autonomous-ecosystem-manager', permanent: true },
			{ source: '/ai-ethics-governance', destination: '/services/ai-ethics-governance', permanent: true },
			{ source: '/autonomous-it-operations', destination: '/autonomous-it-operations-center', permanent: true },
			{ source: '/autonomous-vehicle-ai', destination: '/autonomous-vehicle-ai-platform', permanent: true },
			{ source: '/blockchain-enterprise-platform', destination: '/blockchain-infrastructure-platform', permanent: true },
			{ source: '/quantum-networking', destination: '/quantum-services', permanent: true },
			{ source: '/quantum-data-center', destination: '/quantum-services', permanent: true },
			{ source: '/quantum-encryption-gateway', destination: '/quantum-internet-security-platform', permanent: true },
			{ source: '/quantum-threat-detection', destination: '/quantum-cybersecurity', permanent: true },
			{ source: '/quantum-identity-verification', destination: '/quantum-cybersecurity', permanent: true },
		];
	},
};

export default nextConfig;
