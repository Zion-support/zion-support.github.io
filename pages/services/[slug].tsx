import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
=======
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { extraServices } from '../../data/extra-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
<<<<<<< HEAD
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
<<<<<<< HEAD
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../../data/real-services-q2-2025';
import { realServicesQ32025 } from '../../data/real-services-q3-2025';
<<<<<<< HEAD
<<<<<<< HEAD
import { realServicesQ42025 } from '../../data/real-services-q4-2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-757c
=======
import { realQ4Services2025, } from '../../data/real-2025-q4-additions';
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
<<<<<<< HEAD
import { realMarketServicesExtended } from '../../data/real-market-services-extended';
import { real2026Additions } from '../../data/real-2026-additions';
import { real2026Q1Additions } from '../../data/real-2026-q1-additions';
<<<<<<< HEAD
import { real2026Q2Additions } from '../../data/real-2026-q2-additions';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7684
=======
import { real2025Q4Additions } from '../../data/real-2025-q4-additions';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8790
=======
import { newRealServices } from '../../data/new-real-services';
import { marketReadyServices } from '../../data/market-ready-services';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
=======
import { added2026Q2Services } from '../../data/added-2026-q2-services';
import { real2026Q3Additions } from '../../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../../data/real-2027-q1-additions';
<<<<<<< HEAD
import { newSaasItAiServices2025 } from '../../data/new-saas-it-ai-services-2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9479
=======
import { real2027Q2Additions } from '../../data/real-2027-q2-additions';
import { real2028ServiceExpansions } from '../../data/real-2028-service-expansions';
import { real2029ServiceAdditions } from '../../data/real-2029-service-additions';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-aaa8
=======
import { newRealServices2025 } from '../../data/new-real-services-2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cb67
=======
import { real2025Q4AdditionsBatch2 } from '../../data/real-2025-q4-additions-batch2';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d80e

export default function ServiceSlugPage(props: { params?: { slug?: string } }) {
	const slug = props?.params?.slug || 'service';
	const title = slug
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (c) => c.toUpperCase());

<<<<<<< HEAD
	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
=======
const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
};

function getAllServices(): Service[] {
	return enhancedRealMicroSaasServices
<<<<<<< HEAD
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
<<<<<<< HEAD
		.concat(additionalLiveServices2025 as unknown as Service[])
		.concat(real2025Q2Additions as unknown as Service[])
		.concat(augmentedServicesBatch3 as unknown as Service[])
		.concat(realServicesQ22025 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[])
<<<<<<< HEAD
<<<<<<< HEAD
		.concat(realServicesQ42025 as unknown as Service[]);
=======
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
<<<<<<< HEAD
		.concat(realMarketServicesExtended as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[])
<<<<<<< HEAD
		.concat(real2026Q2Additions as unknown as Service[])
		.concat(real2026Additions as unknown as Service[]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7684
=======
		.concat(real2025Q4Additions as unknown as Service[]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8790
=======
		.concat(
			extraServices as Service[],
			additionalEnhancedServices as Service[],
			newRealServices as Service[],
			marketReadyServices as Service[]
		);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
=======
		.concat(real2026Additions as unknown as Service[])
		.concat(added2026Q2Services as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
<<<<<<< HEAD
		.concat(newSaasItAiServices2025 as unknown as Service[]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9479
=======
		.concat(real2027Q2Additions as unknown as Service[])
		.concat(real2028ServiceExpansions as unknown as Service[])
		.concat(real2029ServiceAdditions as unknown as Service[]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-aaa8
=======
		.concat(newRealServices2025 as unknown as Service[]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cb67
=======
		.concat(real2025Q4AdditionsBatch2 as unknown as Service[]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d80e
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
	const services = getAllServices();
	const slugs = new Set<string>();

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink) {
			slugs.add(fromLink);
			continue;
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));
	}

	return {
		paths: Array.from(slugs).map((slug) => ({ params: { slug } })),
		fallback: false
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-757c
	};

	return (
		<>
			<Head>
				<title>{title} | Zion Tech Group</title>
				<meta name="description" content={`${title} by Zion Tech Group. Get pricing, features, and a live demo.`} />
				<link rel="canonical" href={`https://ziontechgroup.com/services/${slug}`} />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<main className="container mx-auto px-6 py-16">
					<section className="text-center mb-10">
						<h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							{title}
						</h1>
						<p className="mt-4 text-lg text-white/80">Real micro SaaS and IT solutions. Production-ready, with fast onboarding.</p>
					</section>
					<div className="max-w-3xl mx-auto bg-white/10 border border-white/10 rounded-2xl p-8">
						<h2 className="text-2xl font-semibold text-cyan-400 mb-3">Get Started</h2>
						<p className="text-white/80 mb-6">Request a live demo, pricing, and architecture overview tailored to your stack.</p>
						<div className="grid sm:grid-cols-3 gap-4 text-sm">
							<a href="/contact" className="text-center px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 text-white">Contact Sales</a>
							<a href="/services-advertising" className="text-center px-4 py-3 rounded-lg border border-white/20 text-white/90 hover:border-cyan-400/50">Capabilities</a>
							<a href="/pricing-2033" className="text-center px-4 py-3 rounded-lg border border-white/20 text-white/90 hover:border-fuchsia-400/50">Pricing</a>
						</div>
						<div className="mt-6 text-sm space-y-2 text-white/80">
							<div>Mobile: <a className="underline text-cyan-300" href={`tel:${contact.mobile.replace(/[^+\d]/g, '')}`}>{contact.mobile}</a></div>
							<div>E-mail: <a className="underline text-fuchsia-300" href={`mailto:${contact.email}`}>{contact.email}</a></div>
							<div>Address: <a className="underline text-emerald-300" href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`} target="_blank" rel="noopener noreferrer">{contact.address}</a></div>
						</div>
					</div>
<<<<<<< HEAD
				</main>
=======

					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">{service.price}<span className="text-base font-medium text-gray-400">{service.period}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'} • Competitors: {(service.competitors || []).slice(0,3).join(', ')}</div>
							<div className="mt-6 flex gap-3">
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href={service.link || `/services/${(service.id || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
							</div>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
							</div>
						</Card>

						{/* Market Position & ROI */}
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Market & ROI</h3>
							<div className="space-y-3 text-sm text-gray-300">
								{service.marketPosition && <p className="leading-relaxed"><span className="text-gray-400">Position:</span> {service.marketPosition}</p>}
								{service.roi && <p className="leading-relaxed"><span className="text-gray-400">ROI:</span> {service.roi}</p>}
								{service.competitors?.length ? (
									<p className="leading-relaxed"><span className="text-gray-400">Competitors:</span> {service.competitors.slice(0,6).join(', ')}</p>
								) : null}
								<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover:text-cyan-200">See average market prices →</a>
							</div>
						</Card>
					</div>
				</div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-cb67
			</div>
		</>
	);
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
