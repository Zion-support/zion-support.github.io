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

function getAllServices(): Service[] {_return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], _additionalEnhancedServices as Service[])
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
	}
	return slugs;
}

export async function getStaticPaths() {_const _services = getAllServices();
	const _slugs = new Set<string>();
	for (const s of services) {
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));}
	const _existing = getExistingRootPageSlugs();
	const _filtered = Array.from(slugs).filter(_(slug) => !existing.has(slug));
	return {_paths: filtered.map(_(slug) => ({ params: { slug} })),
		fallback: false
	};
}

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
	return (
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
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
							},
							null,
							2
							)
						}}
				/>
			</Head>

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
									</li>
								))}
							</ul>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-4">Integrations</h3>
							<div className="flex flex-wrap gap-2">
								{_(service.integrations || []).slice(0, _12).map(_(i: string) => (
									<span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200">{_i}</span>
								))}
							</div>
						</Card>
					</div>

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
								</div>
							</div>
							<div className="mt-6">
								<Button href="/contact" className="w-full">Talk to Sales</Button>
							</div>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white text-lg font-semibold mb-3">Learn More</h3>
							<a href={_service.link || canonical} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
								Open canonical page <ExternalLink className="w-4 h-4" />
							</a>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	);
}
