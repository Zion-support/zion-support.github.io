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
import { newSaasItAiServices2025 } from '../../data/new-saas-it-ai-services-2025';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9479

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
		.concat(newSaasItAiServices2025 as unknown as Service[]);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-9479
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
				</main>
			</div>
		</>
	);
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8a5d
