import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { innovativeRealMicroSaasServices2025 } from '../../data/2025-innovative-real-micro-saas-services'
import { advancedITServices } from '../../data/advanced-it-services'
import { innovativeAIServices } from '../../data/innovative-ai-services'
import { addedMicroSaaS2025 } from '../../data/2025-added-micro-saas'
import { addedITServices2025 } from '../../data/2025-added-it-services'
import { addedAIServices2025 } from '../../data/2025-added-ai-services'

interface ServiceItem {
	id: string
	name: string
	tagline: string
	price: string
	period: string
	description?: string
	features: string[]
	icon?: string
	color?: string
	textColor?: string
}

function collectAllServices(): ServiceItem[] {
	const arrays: any[] = [
		innovativeRealMicroSaasServices2025,
		advancedITServices,
		innovativeAIServices,
		addedMicroSaaS2025,
		addedITServices2025,
		addedAIServices2025,
	]
	const map = new Map<string, ServiceItem>()
	for (const arr of arrays) {
		for (const item of arr) {
			if (item && item.id && !map.has(item.id)) {
				map.set(item.id, {
					id: item.id,
					name: item.name,
					tagline: item.tagline,
					price: item.price,
					period: item.period,
					description: item.description,
					features: Array.isArray(item.features) ? item.features : [],
					icon: item.icon,
					color: item.color,
					textColor: item.textColor,
				})
			}
		}
	}
	return Array.from(map.values())
}

export const getStaticPaths: GetStaticPaths = async () => {
	const services = collectAllServices()
	const paths = services.map((s) => ({ params: { id: s.id } }))
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id as string
	const services = collectAllServices()
	const service = services.find((s) => s.id === id) || null
	if (!service) {
		return { notFound: true }
	}
	return { props: { service } }
}

export default function ServiceDetail({ service }: { service: ServiceItem }) {
	const title = `${service.name} — Zion Tech Group`
	const description = service.tagline || 'Zion Tech Group Service'
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="mx-auto min-h-screen max-w-3xl px-6 py-12">
				<nav className="text-sm text-gray-500"><Link href="/services/">Services</Link> / <span className="text-gray-700">{service.name}</span></nav>
				<h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{service.icon ? `${service.icon} ` : ''}{service.name}</h1>
				<p className="mt-3 max-w-2xl text-gray-700">{service.tagline}</p>
				<div className="mt-5 text-sm"><span className="font-semibold">{service.price}</span> <span className="text-gray-500">{service.period}</span></div>
				{service.description && (<p className="mt-6 text-gray-700">{service.description}</p>)}
				{service.features?.length > 0 && (
					<section className="mt-8">
						<h2 className="text-xl font-medium">Key features</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							{service.features.slice(0, 10).map((f, idx) => (<li key={idx}>{f}</li>))}
						</ul>
					</section>
				)}
				<div className="mt-10 flex gap-3">
					<Link href="/request-quote/" className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Request a quote</Link>
					<Link href="/contact/" className="inline-block rounded border px-4 py-2 text-blue-700 hover:bg-blue-50">Contact us</Link>
				</div>
			</main>
		</>
	)
}