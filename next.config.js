import path from 'path';
import { fileURLToPath } from 'url';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure CDN asset prefix when running in production
const isProd = process.env.NODE_ENV === 'production';
const isNetlify = process.env.NETLIFY === 'true';
const isPreviewBuild = process.env.CONTEXT !== 'production';

// Only use CDN if:
// 1. In production mode
// 2. CDN URL is provided and not a placeholder
// 3. Not a Netlify preview build (unless it's the main domain)
// 4. CDN URL is a valid HTTPS URL
const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;
const isValidCDN =
  cdnUrl &&
  cdnUrl.startsWith('https://') &&
  !cdnUrl.includes('yourdomain.com') &&
  !cdnUrl.includes('example.com') &&
  !cdnUrl.includes('localhost');

const shouldUseCDN = isProd && isValidCDN && (!isNetlify || !isPreviewBuild);

const assetPrefix = shouldUseCDN ? cdnUrl : '';

// Log configuration for debugging
if (process.env.NODE_ENV === 'development') {
  console.log('Next.js Configuration:', {
    isProd,
    isNetlify,
    isPreviewBuild,
    cdnUrl: cdnUrl || 'Not set',
    isValidCDN,
    shouldUseCDN,
    assetPrefix: assetPrefix || 'Disabled (serving from origin)',
    imageOptimization: !(isNetlify && isPreviewBuild)
      ? 'Enabled'
      : 'Disabled for Netlify preview',
  });
}
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	output: 'export',
	assetPrefix,
	images: {
		unoptimized: true
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true
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
	}
};

export default nextConfig;
