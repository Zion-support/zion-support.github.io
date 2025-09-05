import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

type Service = typeof enhancedRealMicroSaasServices[number];

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

function getPriceValue(_price: Service['price']): string {_if (price && typeof price === 'object' && 'monthly' in price) {
		return price.monthly.toString();}
	if (typeof price === 'string') {_return price;}
	return '99';
}

function getAllServices(): Service[] {_return enhancedRealMicroSaasServices
		.concat(extraServices as Service[], _additionalEnhancedServices as Service[])
		.concat(newlyAddedServices as unknown as Service[])
		.concat(curatedMarketServices as Service[])
		.concat(new2025Services as unknown as Service[])
		.concat(marketValidatedServices as unknown as Service[])
		.concat(moreRealServices2025 as unknown as Service[])
		.concat(verified2025Additions as unknown as Service[])
		.concat(realServicesQ12025 as unknown as Service[])
		.concat(realServicesQ32025 as unknown as Service[]);
		.concat(newVerifiedServicesQ22025 as unknown as Service[]);}

function toSlug(_value: string): string {_return value.toLowerCase().replace(/[^a-z0-9]+/g, _'-').replace(/(^-|-$)/g, _'');}

function extractServiceSlugFromLink(_link: string): string | null {_try {
		const _url = new window.URL(link);
		const _path = url.pathname.replace(/^\/+|\/+$/g, _'');
		if (path.startsWith('services/')) {
			return path.substring('services/'.length);}
		return null;
	} catch {_return null;}
}

export async function getStaticPaths() {_const _services = getAllServices();
	const _slugs = new Set<string>();

	// Define static service slugs that should not be handled by this dynamic route
	const _staticServiceSlugs = [
		'ai-evaluation-orchestrator', _'ai-support-triage-router', _'ai-code-review-assistant-pro', _'ai-revenue-forecasting-copilot'
	];

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const _fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink && !staticServiceSlugs.includes(fromLink)) {
			slugs.add(fromLink);
			continue;}
		// Fall back to normalized id or name to provide a stable window.URL under /services/*
		const _idSlug = s.id ? toSlug(s.id) : '';
		const _nameSlug = s.name ? toSlug(s.name) : '';
		
		if (idSlug && !staticServiceSlugs.includes(idSlug)) {_slugs.add(idSlug);}
		if (nameSlug && !staticServiceSlugs.includes(nameSlug)) {_slugs.add(nameSlug);}
	}

	return {_paths: Array.from(slugs).map(_(slug) => ({ params: { slug} })),
		fallback: false
	};
}

export async function getStaticProps(_{_params}: {_params: { slug: string} }) {_const _services = getAllServices();
	const _incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, _'');

	let service: Service | undefined = services.find(_(s) => {
		if (!s.link) return false;
		const _fromLink = extractServiceSlugFromLink(s.link);
		return fromLink === incomingSlug;});

	if (!service) {_service = services.find(_(s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug);}

	if (!service) {_return { notFound: true};
	}

	return {_props: { service}
	};
}

export default function ServiceDetailPage(_{_service}: {_service: Service}) {_return (
		<Layout>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={_service.tagline || service.description} />
				<link rel="canonical" href={_service.link} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={_{
						__html: JSON.stringify(
							{
								"@context": "https://schema.org", _"@type": "Service", _name: service.name, _description: service.tagline || service.description, _url: service.link, _provider: {
									"@type": "Organization", _name: "Zion Tech Group", _url: "https://ziontechgroup.com"},
								offers: {_"@type": "Offer", _price: "99", _priceCurrency: "USD", _availability: "https://schema.org/InStock"}
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
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
							<p className="text-gray-300 leading-relaxed">{_service.description}</p>
						</div>

						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
							<ul className="space-y-2 text-gray-300">
								{_(service.features || []).slice(0, _12).map(_(f: string) => (
									<li key={f} className="flex items-start gap-2">
										<Check className="w-4 h-4 mt-0.5 text-emerald-400" />
										<span>{_f}</span>
									</li>
								))}
							</ul>
						</div>

						{_/* Use Cases & Integrations */}
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
								<div>
									<div className="text-sm text-gray-400 mb-2">Use Cases</div>
									<ul className="list-disc list-inside space-y-1">
										{_(service.useCases || []).slice(0, _8).map(_(u: string) => (
											<li key={u}>{_u}</li>
										))}
									</ul>
								</div>
								<div>
									<div className="text-sm text-gray-400 mb-2">Integrations</div>
									<div className="flex flex-wrap gap-2">
										{_(service.integrations || []).slice(0, _10).map(_(i: string) => (
											<span key={i} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">{_i}</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">${_getPriceValue(service.price)}<span className="text-base font-medium text-gray-400">{_service.period || '/month'}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {_service.trialDays || 14} days • Setup: {_service.setupTime || 'Fast'} • Competitors: {_(service.competitors || []).slice(0, _3).join(', _')}</div>
							<div className="mt-6 flex gap-3">
								<a href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">Contact Sales</a>
								<a href={_service.link} className="flex-1 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition-all duration-300"><ExternalLink className="w-4 h-4 mr-2 inline" /> Learn More</a>
							</div>
						</div>

						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={_`tel:${contactInfo.mobile.replace(/[^+\\d]/g, _'')}`} className="hover:underline">{_contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={_`mailto:${contactInfo.email}`} className="hover:underline">{_contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={_`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="hover:underline">{_contactInfo.address}</a></div>
							</div>
						</div>

						{_/* Market Position & ROI */}
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h3 className="text-white font-semibold mb-3">Market & ROI</h3>
							<div className="space-y-3 text-sm text-gray-300">
								{_service.marketPosition && <p className="leading-relaxed"><span className="text-gray-400">Position:</span> {service.marketPosition}</p>}
								{_service.roi && <p className="leading-relaxed"><span className="text-gray-400">ROI:</span> {service.roi}</p>}
								{_service.competitors?.length ? (
									<p className="leading-relaxed"><span className="text-gray-400">Competitors:</span> {service.competitors.slice(0, _6).join(', _')}</p>
								) : null}
								<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover:text-cyan-200">See average market prices →</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
import type {_NextPage} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import services from '@/data/services/services.json';

const ServiceDetail: NextPage = () => {_const _router = useRouter();
  const { slug} = router.query as {_slug?: string};
  const _items = services as any[];
  const _service = items.find(_(s) => s.slug === slug);

  if (!service) {_return (
      <EnhancedLayout>
        <Head>
          <title>Service Not Found - Zion Tech Solutions</title>
        </Head>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Service not found</h1>
          <Link href="/services"><a className="text-blue-600 hover:underline">Back to Services</a></Link>
        </div>
      </EnhancedLayout>
    );}

  const _priceRange = `$${_service.priceRangeUSD[0]} - $${_service.priceRangeUSD[1]}`;

  return (
    <EnhancedLayout>
      <Head>
        <title>{_service.name} - Zion Tech Solutions</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <img src={_`https://picsum.photos/seed/${encodeURIComponent(service.slug)}/1200/600`} alt={_service.name} className="w-full rounded-lg border border-gray-200 dark:border-gray-800" />
          <div>
            <h1 className="text-2xl font-semibold">{_service.name}</h1>
            <p className="opacity-80">Category: {_service.category}</p>
          </div>
          <p className="leading-relaxed">{_service.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{_service.category}</span>
          </div>
        </div>
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">
          <div className="text-sm opacity-70">Price Range</div>
          <div className="text-xl font-semibold">{_priceRange}</div>
          <Link href={_`/contact?subject=${encodeURIComponent('Quote request: ' + service.name)}`}>
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Request Quote</a>
          </Link>
          <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>
        </aside>
      </div>
    </EnhancedLayout>
  );
};

export default ServiceDetail;
}
