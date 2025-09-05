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
function getAllServices(): Service[] {return enhancedRealMicroSaasServices
		.concat(
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
		// Prefer explicit link under /services/* when available,
const fromLink = s.link ? extractServiceSlugFromLink(s.link) : null,
		if (fromLink) {
			slugs.add(fromLink),
			continue
		}
		// Fall back to normalized id or name to provide a stable URL under /services/*
		if (s.id) slugs.add(toSlug(s.id)),
		else if (s.name) slugs.add(toSlug(s.name))	}

	return {paths: Array.from(slugs).map(_(slug) => ({ params: { slug} })),
		fallback: false
	}
}

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
										<span>{f}</span>									</li>
								))}
							</ul>
						</Card>
					</div>

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
								<div className=&quot;flex items-center gap-2 text-green-400&quot;><MapPin className=&quot;w-4 h-4&quot; /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target=&quot;blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-xs hover:underline&quot;>{contactInfo.address}</Link></div>							</div>
						</Card>
					</div>
				</div>
			</div>
		</UltraFuturisticBackground>
	)
}