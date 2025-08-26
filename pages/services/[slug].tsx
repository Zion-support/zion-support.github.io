import React from 'react';
import Head from 'next/head';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
import { realQ4Services2025, } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Additions } from '../../data/real-2026-additions';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';
import { real2029Q1Additions } from '../../data/real-2029-q1-additions';

import { real2029Q1Additions } from '../../data/real-2029-q1-additions';
import { realMarketServices } from '../../data/real-market-services';
import { real2029Q2Additions } from '../../data/real-2029-q2-additions';
import { real2029Q3Additions } from '../../data/real-2029-q3-additions';
import { newInnovativeServices2029 } from '../../data/new-innovative-services-2029';

type Service = typeof enhancedRealMicroSaasServices[number];

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

function getAllServices(): Service[] {
	return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], additionalEnhancedServices as Service[])
		.concat(newlyAddedServices as unknown as Service[])
		.concat(curatedMarketServices as Service[])
		.concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[])
		.concat(moreRealServices2025 as unknown as Service[])
		.concat(verified2025Additions as unknown as Service[])
		.concat(realServicesQ12025 as unknown as Service[])
		.concat(realEnterpriseServices2025 as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[])
		.concat(realMarketAugmentations2025 as unknown as Service[])
		.concat(additionalLiveServices2025 as unknown as Service[])
		.concat(real2025Q2Additions as unknown as Service[])
		.concat(augmentedServicesBatch3 as unknown as Service[])
		.concat(realServicesQ22025 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[])
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		.concat(realMarketServicesExtended as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[])
		.concat(real2026Additions as unknown as Service[])
		.concat(added2026Q2Services as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
		.concat(real2027Q2Additions as unknown as Service[])
		.concat(real2028ServiceExpansions as unknown as Service[])
		.concat(real2029Q1Additions as unknown as Service[]);
}

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function extractServiceSlugFromLink(link: string): string | null {
	try {
		const url = new URL(link);
		const path = url.pathname.replace(/^\/+|\/+$/g, '');
		if (path.startsWith('services/')) {
			return path.substring('services/'.length);
		}
		return null;
	} catch {
		return null;
	}
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'test-service' } }
		],
		fallback: false
	};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	// Mock service data for now
	const service = {
		id: 'test-service',
		name: 'Test Service',
		description: 'This is a test service for debugging purposes.',
		features: ['Feature 1', 'Feature 2', 'Feature 3'],
		pricing: {
			starter: { price: 99, period: 'month' },
			professional: { price: 199, period: 'month' },
			enterprise: { price: 399, period: 'month' }
		},
		category: 'Test',
		website: 'https://ziontechgroup.com'
	};

	return {
		props: {
			service
		}
	};
}

export default function ServicePage({ service }: { service: any }) {
	return (
		<>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={service.description} />
			</Head>
			
			<div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white">
				<div className="container mx-auto px-6 py-12">
					<div className="max-w-4xl mx-auto">
						<header className="mb-12 text-center">
							<h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
								{service.name}
							</h1>
							<p className="text-xl text-gray-300 max-w-3xl mx-auto">
								{service.description}
							</p>
						</header>
						
						<div className="grid md:grid-cols-2 gap-8 mb-12">
							<div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
								<h3 className="text-2xl font-semibold mb-4 text-cyan-400">Features</h3>
								<ul className="space-y-3">
									{service.features.map((feature: string, index: number) => (
										<li key={index} className="flex items-center space-x-3">
											<Check className="w-5 h-5 text-green-400 flex-shrink-0" />
											<span className="text-gray-300">{feature}</span>
										</li>
									))}
								</ul>
							</div>
							
							<div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-700/50">
								<h3 className="text-2xl font-semibold mb-4 text-blue-400">Pricing</h3>
								<div className="space-y-4">
									{Object.entries(service.pricing).map(([plan, details]: [string, any]) => (
										<div key={plan} className="border border-gray-700/50 rounded-xl p-4">
											<h4 className="text-lg font-semibold text-white capitalize mb-2">{plan}</h4>
											<p className="text-3xl font-bold text-cyan-400">
												${details.price}
												<span className="text-lg text-gray-400">/{details.period}</span>
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
						
						<div className="text-center">
							<a
								href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
								className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
							>
								<Mail className="w-5 h-5" />
								<span>Get Started</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}