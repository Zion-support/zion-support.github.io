<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import Layout from '../../components/layout/Layout',
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react',
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services',
import { extraServices } from '../../data/extra-services',
import { additionalEnhancedServices } from '../../data/additional-real-services',
import { newlyAddedServices } from '../../data/newly-added-services',
import { curatedMarketServices } from '../../data/curated-market-services',
import { new2025Services } from '../../data/new-2025-services',
import { marketValidatedServices } from '../../data/market-validated-services',
import { moreRealServices2025 } from '../../data/more-real-services-2025',
import { verified2025Additions } from '../../data/verified-2025-additions',
import { realServicesQ12025 } from '../../data/real-services-q1-2025',
import { newVerifiedServicesQ22025 } from '../../data/real-verified-services-q2-2025',
type Service = typeof enhancedRealMicroSaasServices[number],

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
},

function getPriceValue(price: Service['price']): string {
	if (price && typeof price === 'object' && 'monthly' in price) {
		return price.monthly.toString()
	}
	if (typeof price === 'string') {
		return price
	}
	return '99'
=======
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout/Layout';

type Service = typeof enhancedRealMicroSaasServices[number];

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

function getPriceValue(_price: Service['price']): string {_if (price && typeof price === 'object' && 'monthly' in price) {
		return price.monthly.toString();}
	if (typeof price === 'string') {_return price;}
	return '99';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
		.concat(realServicesQ32025 as unknown as Service[]),
		.concat(newVerifiedServicesQ22025 as unknown as Service[])
}

function toSlug(value: string): string {
	return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function extractServiceSlugFromLink(link: string): string | null {
	try {
		const url = new URL(link),
		const path = url.pathname.replace(/^\/+|\/+$/g, ''),
		if (path.startsWith('services/')) {
			return path.substring('services/'.length)
		}
		return null
	} catch {
		return null
	}
}

export async function getStaticPaths() {
	const services = getAllServices(),
	const slugs = new Set<string>(),

	// Define static service slugs that should not be handled by this dynamic route
	const staticServiceSlugs = [
		'ai-evaluation-orchestratorai-support-triage-routerai-code-review-assistant-proai-revenue-forecasting-copilot'
	],

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null,
		if (fromLink && !staticServiceSlugs.includes(fromLink)) {
			slugs.add(fromLink),
			continue
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		const idSlug = s.id ? toSlug(s.id) : '',
		const nameSlug = s.name ? toSlug(s.name) : '',
		
		if (idSlug && !staticServiceSlugs.includes(idSlug)) {
			slugs.add(idSlug)
		}
		if (nameSlug && !staticServiceSlugs.includes(nameSlug)) {
			slugs.add(nameSlug)
		}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
	}

	return {_paths: Array.from(slugs).map(_(slug) => ({ params: { slug} })),
		fallback: false
	}
}

<<<<<<< HEAD
export async function getStaticProps({ params }: { params: { slug: string } }) {
	const services = getAllServices(),
	const incomingSlug = (params?.slug || '').replace(/^\/+|\/+$/g, ''),

	let service: Service | undefined = services.find((s) => {
		if (!s.link) return false,
		const fromLink = extractServiceSlugFromLink(s.link),
		return fromLink === incomingSlug
	}),

	if (!service) {
		service = services.find((s) => toSlug(s.id || '') === incomingSlug || toSlug(s.name || '') === incomingSlug)
	}

	if (!service) {
		return { notFound: true }
	}

	return {
		props: { service }
	}
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}

export default function ServiceDetailPage(_{_service}: {_service: Service}) {_return (
		<Layout>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
<<<<<<< HEAD
				<meta name=&quot;description&quot; content={service.tagline || service.description} />
				<link rel=&quot;canonical&quot; href={service.link} />
				<script
					type=&quot;application/ld+json&quot;
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(
							{
								&quot;@context&quot;: &quot;https://schema.org&quot;,
								&quot;@type&quot;: &quot;Service&quot;,
								name: service.name,
								description: service.tagline || service.description,
								url: service.link,
								provider: {
									&quot;@type&quot;: &quot;Organization&quot;,
									name: &quot;Zion Tech Group&quot;,
									url: &quot;https://ziontechgroup.com&quot;
								},
								offers: {
									&quot;@type&quot;: &quot;Offer&quot;,
									        price: &quot;99&quot;,
									priceCurrency: &quot;USD&quot;,
									availability: &quot;https://schema.org/InStock&quot;
								}
=======
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
						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<h2 className=&quot;text-white text-xl font-semibold mb-3&quot;>Overview</h2>
							<p className=&quot;text-gray-300 leading-relaxed&quot;>{service.description}</p>
						</div>

						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
									</li>
								))}
							</ul>
						</div>

<<<<<<< HEAD
						{/* Use Cases & Integrations */}
						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<h3 className=&quot;text-white text-lg font-semibold mb-4&quot;>Use Cases & Integrations</h3>
							<div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300&quot;>
								<div>
									<div className=&quot;text-sm text-gray-400 mb-2&quot;>Use Cases</div>
									<ul className=&quot;list-disc list-inside space-y-1&quot;>
										{(service.useCases || []).slice(0, 8).map((u: string) => (
											<li key={u}>{u}</li>
=======
						{_/* Use Cases & Integrations */}
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
								<div>
									<div className="text-sm text-gray-400 mb-2">Use Cases</div>
									<ul className="list-disc list-inside space-y-1">
										{_(service.useCases || []).slice(0, _8).map(_(u: string) => (
											<li key={u}>{_u}</li>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
										))}
									</ul>
								</div>
								<div>
<<<<<<< HEAD
									<div className=&quot;text-sm text-gray-400 mb-2&quot;>Integrations</div>
									<div className=&quot;flex flex-wrap gap-2&quot;>
										{(service.integrations || []).slice(0, 10).map((i: string) => (
											<span key={i} className=&quot;px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs&quot;>{i}</span>
=======
									<div className="text-sm text-gray-400 mb-2">Integrations</div>
									<div className="flex flex-wrap gap-2">
										{_(service.integrations || []).slice(0, _10).map(_(i: string) => (
											<span key={i} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">{_i}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

<<<<<<< HEAD
					<div className="space-y-6">
						<div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
<<<<<<< HEAD
							<div className="text-3xl font-bold text-white">${getPriceValue(service.price)}<span className="text-base font-medium text-gray-400">{service.period || '/month'}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'} • Competitors: {(service.competitors || []).slice(0,3).join()}</div>
							<div className="mt-6 flex gap-3">
								<a href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">Contact Sales</a>
								<a href={service.link} className="flex-1 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition-all duration-300"><ExternalLink className="w-4 h-4 mr-2 inline" /> Learn More</a>
=======
					<div className=&quot;space-y-6&quot;>
						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<div className=&quot;text-sm text-gray-400 mb-1&quot;>Pricing</div>
							<div className=&quot;text-3xl font-bold text-white&quot;>${getPriceValue(service.price)}<span className=&quot;text-base font-medium text-gray-400&quot;>{service.period || '/month'}</span></div>
							<div className=&quot;text-sm text-gray-400 mt-2&quot;>Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'} • Competitors: {(service.competitors || []).slice(0,3).join(', ')}</div>
							<div className=&quot;mt-6 flex gap-3&quot;>
								<a href=&quot;/contact&quot; className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&quot;>Contact Sales</a>
								<a href={service.link} className=&quot;flex-1 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg text-center hover:bg-gray-600 transition-all duration-300&quot;><ExternalLink className=&quot;w-4 h-4 mr-2 inline&quot; /> Learn More</a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
							</div>
						</div>

						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<h3 className=&quot;text-white font-semibold mb-3&quot;>Contact</h3>
							<div className=&quot;space-y-3 text-sm&quot;>
								<div className=&quot;flex items-center gap-2 text-cyan-400&quot;><Phone className=&quot;w-4 h-4&quot; /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className=&quot;hover:underline&quot;>{contactInfo.mobile}</a></div>
								<div className=&quot;flex items-center gap-2 text-purple-400&quot;><Mail className=&quot;w-4 h-4&quot; /><a href={`mailto:${contactInfo.email}`} className=&quot;hover:underline&quot;>{contactInfo.email}</a></div>
								<div className=&quot;flex items-center gap-2 text-green-400&quot;><MapPin className=&quot;w-4 h-4&quot; /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;hover:underline&quot;>{contactInfo.address}</a></div>
							</div>
						</div>

						{/* Market Position & ROI */}
						<div className=&quot;p-6 bg-black/40 border border-gray-700/50 rounded-lg&quot;>
							<h3 className=&quot;text-white font-semibold mb-3&quot;>Market & ROI</h3>
							<div className=&quot;space-y-3 text-sm text-gray-300&quot;>
								{service.marketPosition && <p className=&quot;leading-relaxed&quot;><span className=&quot;text-gray-400&quot;>Position:</span> {service.marketPosition}</p>}
								{service.roi && <p className=&quot;leading-relaxed&quot;><span className=&quot;text-gray-400&quot;>ROI:</span> {service.roi}</p>}
								{service.competitors?.length ? (
<<<<<<< HEAD
									<p className="leading-relaxed"><span className="text-gray-400">Competitors:</span> {service.competitors.slice(0,6).join()}</p>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
								) : null}
								<a href="/market-pricing" className="inline-block mt-2 text-cyan-300 hover: text-cyan-200">See average market prices →</a>
=======
									<p className=&quot;leading-relaxed&quot;><span className=&quot;text-gray-400&quot;>Competitors:</span> {service.competitors.slice(0,6).join(', ')}</p>
								) : null}
								<a href=&quot;/market-pricing&quot; className=&quot;inline-block mt-2 text-cyan-300 hover:text-cyan-200&quot;>See average market prices →</a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
<<<<<<< HEAD
	),
import type { NextPage } from 'next',
import Head from 'next/head',
import { useRouter } from 'next/router',
import Link from 'next/link',
import EnhancedLayout from '@/components/layout/EnhancedLayout',
import services from '@/data/services/services.json',
const ServiceDetail: NextPage = () => {
  const router = useRouter(),
  const { slug } = router.query as { slug?: string },
  const items = services as any[],
  const service = items.find((s) => s.slug === slug),
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  if (!service) {_return (
      <EnhancedLayout>
        <Head>
          <title>Service Not Found - Zion Tech Solutions</title>
        </Head>
<<<<<<< HEAD
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Service not found</h1>
          <Link href="/services"><a className="text-blue-600 hover: underline">Back to Services</a></Link>
=======
        <div className=&quot;space-y-4&quot;>
          <h1 className=&quot;text-xl font-semibold&quot;>Service not found</h1>
          <Link href=&quot;/services&quot;><a className=&quot;text-blue-600 hover:underline&quot;>Back to Services</a></a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </div>
      </EnhancedLayout>
<<<<<<< HEAD
    )
  }

  const priceRange = `$${service.priceRangeUSD[0]} - $${service.priceRangeUSD[1]}`,
=======
    );}

  const _priceRange = `$${_service.priceRangeUSD[0]} - $${_service.priceRangeUSD[1]}`;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <EnhancedLayout>
      <Head>
        <title>{_service.name} - Zion Tech Solutions</title>
      </Head>
<<<<<<< HEAD
      <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6&quot;>
        <div className=&quot;md:col-span-2 space-y-4&quot;>
          <img src={`https://picsum.photos/seed/${encodeURIComponent(service.slug)}/1200/600`} alt={service.name} className=&quot;w-full rounded-lg border border-gray-200 dark:border-gray-800&quot; />
          <div>
            <h1 className=&quot;text-2xl font-semibold&quot;>{service.name}</h1>
            <p className=&quot;opacity-80&quot;>Category: {service.category}</p>
          </div>
          <p className=&quot;leading-relaxed&quot;>{service.description}</p>
          <div className=&quot;flex flex-wrap gap-2&quot;>
            <span className=&quot;text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700&quot;>{service.category}</span>
          </div>
        </div>
        <aside className=&quot;md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max&quot;>
          <div className=&quot;text-sm opacity-70&quot;>Price Range</div>
          <div className=&quot;text-xl font-semibold&quot;>{priceRange}</div>
          <Link href={`/contact?subject=${encodeURIComponent('Quote request: ' + service.name)}`}>
<<<<<<< HEAD
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover: bg-blue-700">Request Quote</a>
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </Link>
          <Link href="/services"><a className="text-sm text-blue-600 hover:underline">Back to Services</a></Link>
=======
            <a className=&quot;inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700&quot;>Request Quote</a>
          </a>
          <Link href=&quot;/services&quot;><a className=&quot;text-sm text-blue-600 hover:underline&quot;>Back to Services</a></a>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
        </aside>
      </div>
    </EnhancedLayout>
  )
},

export default ServiceDetail
}
