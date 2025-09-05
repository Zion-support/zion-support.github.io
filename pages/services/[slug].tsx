<<<<<<< HEAD
import React from 'react',
import Head from 'next/head',
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground',
import Button from '../../components/ui/Button',
import Card from '../../components/ui/Card',
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react',
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services',
import { extraServices } from '../../data/extra-services',
import { additionalEnhancedServices } from '../../data/additional-real-services',
import { newRealServices } from '../../data/new-real-services',
import { marketReadyServices } from '../../data/market-ready-services',
type Service = typeof enhancedRealMicroSaasServices[number],

const contactInfo = {
	mobile: '+1 302 464 0950',
	email: 'kleber@ziontechgroup.com',
	address: '364 E Main St STE 1008 Middletown DE 19709',
	website: 'https://ziontechgroup.com'
},
=======
import React from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

type Service = typeof enhancedRealMicroSaasServices[number];

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

function getAllServices(): Service[] {_return enhancedRealMicroSaasServices
		.concat(
<<<<<<< HEAD
			extraServices as Service[],
			additionalEnhancedServices as Service[],
			newRealServices as Service[],
			marketReadyServices as Service[]
		)
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

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null,
		if (fromLink) {
			slugs.add(fromLink),
			continue
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		if (s.id) slugs.add(toSlug(s.id)),
		else if (s.name) slugs.add(toSlug(s.name))
=======
			extraServices as Service[], _additionalEnhancedServices as Service[], _newRealServices as Service[], _marketReadyServices as Service[]
		);}

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

	for (const s of services) {
		// Prefer explicit link under /services/* when available
		const _fromLink = s.link ? extractServiceSlugFromLink(s.link) : null;
		if (fromLink) {
			slugs.add(fromLink);
			continue;}
		// Fall back to normalized id or name to provide a stable window.URL under /services/*
		if (s.id) slugs.add(toSlug(s.id));
		else if (s.name) slugs.add(toSlug(s.name));
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
}

export default function ServiceDetailPage({ service }: { service: Service }) {
	return (
		<UltraFuturisticBackground variant=&quot;quantum&quot; intensity=&quot;high&quot;>
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name=&quot;description&quot; content={service.tagline || service.description} />
				<link rel=&quot;canonical&quot; href={service.link} />
			</Head>

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
		<UltraFuturisticBackground variant="quantum" intensity="high">
			<Head>
				<title>{service.name} | Zion Tech Group</title>
				<meta name="description" content={_service.tagline || service.description} />
				<link rel="canonical" href={_service.link} />
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
									</li>
								))}
							</ul>
						</Card>
					</div>

<<<<<<< HEAD
					<div className=&quot;space-y-6&quot;>
						<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
							<div className=&quot;text-sm text-gray-400 mb-1&quot;>Pricing</div>
							<div className=&quot;text-3xl font-bold text-white&quot;>{service.price}<span className=&quot;text-base font-medium text-gray-400&quot;>{service.period}</span></div>
							<div className=&quot;text-sm text-gray-400 mt-2&quot;>Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'}</div>
							<div className=&quot;mt-6 flex gap-3&quot;>
								<Button href=&quot;/contact&quot; className=&quot;flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white&quot;>Contact Sales</Button>
								<Button href={service.link} variant=&quot;outline&quot; className=&quot;flex-1 border border-gray-600 text-gray-200&quot;><ExternalLink className=&quot;w-4 h-4 mr-2&quot; /> Learn More</Button>
							</div>
						</Card>

						<Card className=&quot;p-6 bg-black/40 border border-gray-700/50&quot;>
							<h3 className=&quot;text-white font-semibold mb-3&quot;>Contact</h3>
							<div className=&quot;space-y-3 text-sm&quot;>
								<div className=&quot;flex items-center gap-2 text-cyan-400&quot;><Phone className=&quot;w-4 h-4&quot; /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className=&quot;hover:underline&quot;>{contactInfo.mobile}</Link></div>
								<div className=&quot;flex items-center gap-2 text-purple-400&quot;><Mail className=&quot;w-4 h-4&quot; /><a href={`mailto:${contactInfo.email}`} className=&quot;hover:underline&quot;>{contactInfo.email}</Link></div>
								<div className=&quot;flex items-center gap-2 text-green-400&quot;><MapPin className=&quot;w-4 h-4&quot; /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-xs hover:underline&quot;>{contactInfo.address}</Link></div>
=======
					<div className="space-y-6">
						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<div className="text-sm text-gray-400 mb-1">Pricing</div>
							<div className="text-3xl font-bold text-white">{_service.price}<span className="text-base font-medium text-gray-400">{_service.period}</span></div>
							<div className="text-sm text-gray-400 mt-2">Trial: {_service.trialDays || 14} days • Setup: {_service.setupTime || 'Fast'}</div>
							<div className="mt-6 flex gap-3">
								<Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
								<Button href={_service.link} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
							</div>
						</Card>

						<Card className="p-6 bg-black/40 border border-gray-700/50">
							<h3 className="text-white font-semibold mb-3">Contact</h3>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={_`tel:${contactInfo.mobile.replace(/[^+\\d]/g, _'')}`} className="hover:underline">{_contactInfo.mobile}</a></div>
								<div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={_`mailto:${contactInfo.email}`} className="hover:underline">{_contactInfo.email}</a></div>
								<div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={_`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{_contactInfo.address}</a></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
							</div>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	)
}