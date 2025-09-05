<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground',
import Button from '../components/ui/Button',
import Card from '../components/ui/Card',
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react',
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services',
import { extraServices } from '../data/extra-services',
import { additionalEnhancedServices } from '../data/additional-real-services',
import { newlyAddedServices } from '../data/newly-added-services',
import { curatedMarketServices } from '../data/curated-market-services',
import { new2025Services } from '../data/new-2025-services',
import { marketValidatedServices } from '../data/market-validated-services',
import { moreRealServices2025 } from '../data/more-real-services-2025',
import { verified2025Additions } from '../data/verified-2025-additions',
import { realServicesQ12025 } from '../data/real-services-q1-2025',
import { realEnterpriseServices2025 } from '../data/real-enterprise-services-2025',
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2',
import { realMarketAugmentations2025 } from '../data/real-market-augmentations-2025',
import { additionalLiveServices2025 } from '../data/additional-live-services-2025',
import { real2025Q2Additions } from '../data/real-2025-q2-additions',
import { augmentedServicesBatch3 } from '../data/real-augmented-services-2025-batch3',
import { realServicesQ22025 } from '../data/real-services-q2-2025',
import { realServicesQ32025 } from '../data/real-services-q3-2025',
import { realQ4Services2025, real2025Q4Additions } from '../data/real-2025-q4-additions',
import { realMarketServicesExtended } from '../data/real-market-services-extended',
import { real2026Additions } from '../data/real-2026-additions',
import { real2026Q1Additions } from '../data/real-2026-q1-additions',
import { added2026Q2Services } from '../data/added-2026-q2-services',
import { real2026Q3Additions } from '../data/real-2026-q3-additions',
import { real2026Q4Additions } from '../data/real-2026-q4-additions',
import { real2026Q4NewServices } from '../data/real-2026-q4-new-services',
import { real2027Q1Additions } from '../data/real-2027-q1-additions',
import { newSaasItAiServices2025 } from '../data/new-saas-it-ai-services-2025',
import fs from 'fs',
import path from 'path',
type Service = typeof enhancedRealMicroSaasServices[number],

  const service = useMemo(() => {
    if (!slug) return undefined,
    const all: any[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any,
        extraServices as any,
        additionalEnhancedServices as any,
        innovativeAIServices as any,
        quantumSpaceServices as any,
        enterpriseITServices as any,
        newRealServices as any,
        marketReadyServices as any,
        realMarketServices as any,
        new2025Services as any,
        newRealInnovations as any,
        emergingTechnologyServices as any,
        comprehensiveITSolutions as any,
        marketValidatedServices as any,
        curatedMarketServices as any,
        cuttingEdgeITServices as any,
        nextGenerationAIServices as any,
        nextGenAIServices as any,
        industryRealServices as any,
        professionalServices as any,
        realEnterpriseServices2025 as any,
        augmentedServicesBatch3 as any,
        real2025Q3Additions as any,
        realQ4Services2025 as any,
        require('../data/real-2025-q4-additions-batch2').real2025Q4AdditionsBatch2 as any
      ),
    const byLink = all.find(s => {
      try {
        const url = new URL(s.link),
        return url.pathname.replace(/^\/+|\/+$/g, '') === slug.replace(/^\/+|\/+$/g, '')
      } catch {
        return false
      }
    }),
    if (byLink) return byLink,
=======
import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import fs from 'fs';
import path from 'path';

type Service = typeof enhancedRealMicroSaasServices[number];

  const _service = useMemo__(() => {_if (!slug) return undefined;
    const all: unknown[] = ([] as any[])
      .concat(
        enhancedRealMicroSaasServices as any, _extraServices as any, _additionalEnhancedServices as any, _innovativeAIServices as any, _quantumSpaceServices as any, _enterpriseITServices as any, _newRealServices as any, _marketReadyServices as any, _realMarketServices as any, _new2025Services as any, _newRealInnovations as any, _emergingTechnologyServices as any, _comprehensiveITSolutions as any, _marketValidatedServices as any, _curatedMarketServices as any, _cuttingEdgeITServices as any, _nextGenerationAIServices as any, _nextGenAIServices as any, _industryRealServices as any, _professionalServices as any, _realEnterpriseServices2025 as any, _augmentedServicesBatch3 as any, _real2025Q3Additions as any, _realQ4Services2025 as any, _require('../data/real-2025-q4-additions-batch2').real2025Q4AdditionsBatch2 as any
      );
    const _byLink = all.find(s => {
      try {
        const _url = new window.URL(s.link);
        return url.pathname.replace(/^\/+|\/+$/g, _'') === slug.replace(/^\/+|\/+$/g, _'');} catch {_return false;}
    });
    if (byLink) return byLink;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function getAllServices(): Service[] {_return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], _additionalEnhancedServices as Service[])
		.concat(newlyAddedServices as unknown as Service[])
		.concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[])
		.concat(verifiedRealServices2025Batch2 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[])
		.concat(realQ4Services2025 as unknown as Service[])
		.concat(real2025Q4Additions as unknown as Service[])
		.concat(real2026Q1Additions as unknown as Service[])
		.concat(real2026Additions as unknown as Service[])
		.concat(added2026Q2Services as unknown as Service[])
		.concat(real2026Q3Additions as unknown as Service[])
		.concat(real2026Q4Additions as unknown as Service[])
		.concat(real2026Q4NewServices as unknown as Service[])
		.concat(real2027Q1Additions as unknown as Service[])
<<<<<<< HEAD
		.concat(newSaasItAiServices2025 as unknown as Service[])
}

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function getExistingRootPageSlugs(): Set<string> {
	const pagesDir = path.join(process.cwd(), 'pages'),
	const entries = fs.readdirSync(pagesDir, { withFileTypes: true }),
	const reserved = new Set<string>(['apireportsservices']),
	const slugs = new Set<string>(),
	for (const entry of entries) {
		if (entry.name.startsWith('_')) continue,
		if (reserved.has(entry.name)) continue,
		// Files at root
		if (entry.isFile()) {
			const m = entry.name.match(/^(.*)\.(tsx|ts|jsx|js)$/),
			if (m) {
				const base = m[1],
				if (base !== 'index' && base !== '404' && base !== '500' && base !== '[slug]') {
					slugs.add(base)
				}
			}
		}
		// Directories at root (folder routes)
		if (entry.isDirectory()) {
			slugs.add(entry.name)
		}
=======
		.concat(newSaasItAiServices2025 as unknown as Service[]);}

function toSlug(_value: string): string {_return value.toLowerCase().replace(/[^a-z0-9]+/g, _'-').replace(/(^-|-$)/g, _'');}

function getExistingRootPageSlugs(): Set<string> {_const _pagesDir = path.join(process.cwd(), _'pages');
	const _entries = fs.readdirSync(pagesDir, _{ withFileTypes: true});
	const _reserved = new Set<string>(['api', 'reports', 'services']);
	const _slugs = new Set<string>();
	for (const entry of entries) {_if (entry.name.startsWith('_')) continue;
		if (reserved.has(entry.name)) continue;
		// Files at root
		if (entry.isFile()) {
			const _m = entry.name.match(/^(.*)\.(tsx|ts|jsx|js)$/);
			if (m) {
				const _base = m[1];
				if (base !== 'index' && base !== '404' && base !== '500' && base !== '[slug]') {
					slugs.add(base);}
			}
		}
		// Directories at root (folder routes)
		if (entry.isDirectory()) {_slugs.add(entry.name);}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
	}
	return slugs
}

<<<<<<< HEAD
export async function getStaticPaths() {
	const services = getAllServices(),
	const slugs = new Set<string>(),
	for (const s of services) {
		if (s.id) slugs.add(toSlug(s.id)),
		else if (s.name) slugs.add(toSlug(s.name))
	}
	const existing = getExistingRootPageSlugs(),
	const filtered = Array.from(slugs).filter((slug) => !existing.has(slug)),
	return {
		paths: filtered.map((slug) => ({ params: { slug } })),
=======
export async function getStaticPaths() {_const _services = getAllServices();
	const _slugs = new Set<string>();
	for (const s of services) {
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));}
	const _existing = getExistingRootPageSlugs();
	const _filtered = Array.from(slugs).filter(_(slug) => !existing.has(slug));
	return {_paths: filtered.map(_(slug) => ({ params: { slug} })),
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
		fallback: false
	}
}

<<<<<<< HEAD
export async function getStaticProps({ params }: { params: { slug: string } }) {
	const services = getAllServices(),
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, ''),
	let service: Service | undefined = services.find((s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug),
	if (!service) {
		return { notFound: true }
	}
	return {
		props: { service }
	}
}

export default function RootServiceDetailPage({ service }: { service: Service }) {
	const canonical = `https://ziontechgroup.com/${toSlug(service.id || service.name || '')}`,
=======
export async function getStaticProps(_{_params}: {_params: { slug: string} }) {_const _services = getAllServices();
	const _incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, _'');
	let service: Service | undefined = services.find(_(s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug);
	if (!service) {
		return { notFound: true};
	}
	return {_props: { service}
	};
}

export default function RootServiceDetailPage(_{_service}: {_service: Service}) {_const _canonical = `https://ziontechgroup.com/${toSlug(service.id || service.name || '')}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
	return (
		<UltraFuturisticBackground variant=&quot;quantum&quot; intensity=&quot;high&quot;>
			<Head>
<<<<<<< HEAD
				<title>{service.name} | Zion Tech Group</title>
				<meta name=&quot;description&quot; content={service.tagline || service.description} />
				<link rel=&quot;canonical&quot; href={canonical} />
				<script
					type=&quot;application/ld+json&quot;
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								&quot;@context&quot;: &quot;https://schema.org&quot;,
								&quot;@type&quot;: &quot;Service&quot;,
								name: service.name,
								description: service.tagline || service.description,
								url: canonical,
								provider: {
									&quot;@type&quot;: &quot;Organization&quot;,
									name: &quot;Zion Tech Group&quot;,
									url: &quot;https://ziontechgroup.com&quot;
								},
								offers: {
									&quot;@type&quot;: &quot;Offer&quot;,
									price: (service.price || '').replace(/[^0-9.]/g, ''),
									priceCurrency: &quot;USD&quot;,
									availability: &quot;https://schema.org/InStock&quot;
								}
=======
				<title>{_service.name} | Zion Tech Group</title>
				<meta name="description" content={_service.tagline || service.description} />
				<link rel="canonical" href={_canonical} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={_{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org", _"@type": "Service", _name: service.name, _description: service.tagline || service.description, _url: canonical, _provider: {
									"@type": "Organization", _name: "Zion Tech Group", _url: "https://ziontechgroup.com"},
								offers: {_"@type": "Offer", _price: (service.price || '').replace(/[^0-9.]/g, _''), _priceCurrency: "USD", _availability: "https://schema.org/InStock"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
							},
							null,
							2
							)
						}}
				/>
			</Head>

<<<<<<< HEAD
			<div className=&quot;container mx-auto px-4 py-16&quot;>
				<div className=&quot;text-center mb-10&quot;>
					<h1 className=&quot;text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4&quot;>
						{service.name}
					</h1>
					<p className=&quot;text-gray-300 text-lg max-w-3xl mx-auto&quot;>{service.tagline || service.description}</p>
				</div>

				<div className=&quot;grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12&quot;>
					<div className=&quot;lg:col-span-2 space-y-6&quot;>
						<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
							<h2 className=&quot;text-white text-xl font-semibold mb-3&quot;>Overview</h2>
							<p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}</p>
						</Card>

						<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
							<h3 className=&quot;text-white text-lg font-semibold mb-4&quot;>Key Features</h3>
							<ul className=&quot;space-y-2 text-gray-300&quot;>
								{(service.features || []).slice(0, 12).map((f: string) => (
									<li key={f} className=&quot;flex items-start gap-2&quot;>
										<Check className=&quot;w-4 h-4 mt-0.5 text-emerald-400&quot; />
										<span>{f}</span>
=======
			<div className="container mx-auto px-4 py-16">
				<div className="text-center mb-10">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
						{_service.name}
					</h1>
					<p className="text-gray-300 text-lg max-w-3xl mx-auto">{_service.tagline || service.description}</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
					<div className="lg:col-span-2 space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{_service.description}</p>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{_(service.features || []).slice(0, _12).map(_(f: string) => (
									<li key={f} className="flex items-start gap-2">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
										<span>{_f}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
									</li>
								))}
							</ul>
						</Card>

<<<<<<< HEAD
						<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
							<h3 className=&quot;text-white text-lg font-semibold mb-4&quot;>Integrations</h3>
							<div className=&quot;flex flex-wrap gap-2&quot;>
								{(service.integrations || []).slice(0, 12).map((i: string) => (
									<span key={i} className=&quot;px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200&quot;>{i}</span>
=======
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Integrations</h3>
							<div className="flex flex-wrap gap-2">
								{_(service.integrations || []).slice(0, _12).map(_(i: string) => (
									<span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">{_i}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
								))}
							</div>
						</Card>
					</div>

<<<<<<< HEAD
					<div className=&quot;space-y-6&quot;>
						<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
							<div className=&quot;text-3xl font-bold text-white&quot;>{service.price} <span className=&quot;text-base text-gray-400&quot;>{service.period}</span></div>
							<p className=&quot;text-gray-400 text-sm mt-1&quot;>Transparent pricing with market references</p>
							<div className=&quot;mt-4 space-y-3&quot;>
								<a href=&quot;/contact&quot; className=&quot;inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200&quot;>
									<Phone className=&quot;w-4 h-4&quot; /> +1 302 464 0950
								</Link>
								<a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200&quot;>
									<Mail className=&quot;w-4 h-4&quot; /> kleber@ziontechgroup.com
								</Link>
								<div className=&quot;flex items-start gap-2 text-gray-300&quot;>
									<MapPin className=&quot;w-4 h-4 mt-1&quot; /> 364 E Main St STE 1008 Middletown DE 19709
=======
					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-3xl font-bold text-white">{_service.price} <span className="text-base text-gray-400">{_service.period}</span></div>
							<p className="text-gray-400 text-sm mt-1">Transparent pricing with market references</p>
							<div className="mt-4 space-y-3">
								<a href="/contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
									<Phone className="w-4 h-4" /> +1 302 464 0950
								</a>
								<a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
									<Mail className="w-4 h-4" /> kleber@ziontechgroup.com
								</a>
								<div className="flex items-start gap-2 text-gray-300">
									<MapPin className="w-4 h-4 mt-1" /> 364 E Main St STE 1008 Middletown DE 19709
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
								</div>
							</div>
							<div className=&quot;mt-6&quot;>
								<Button href=&quot;/contact&quot; className=&quot;w-full&quot;>Talk to Sales</Button>
							</div>
						</Card>

<<<<<<< HEAD
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-3">Learn More</h3>
<<<<<<< HEAD
							<a href={service.link || canonical} className="inline-flex items-center gap-2 text-cyan-300 hover: text-cyan-200">
=======
							<a href={_service.link || canonical} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
								Open canonical page <ExternalLink className="w-4 h-4" />
							</a>
=======
						<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
							<h3 className=&quot;text-white text-lg font-semibold mb-3&quot;>Learn More</h3>
							<a href={service.link || canonical} className=&quot;inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200&quot;>
								Open canonical page <ExternalLink className=&quot;w-4 h-4&quot; />
							</Link>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	)
}
