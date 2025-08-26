import Head from 'next/head'
import React from 'react'
import { innovativeRealMicroSaasServices2025 } from '../data/2025-innovative-real-micro-saas-services'
import { advancedITServices } from '../data/advanced-it-services'
import { innovativeAIServices } from '../data/innovative-ai-services'
import { addedMicroSaaS2025 } from '../data/2025-added-micro-saas'
import { addedITServices2025 } from '../data/2025-added-it-services'
import { addedAIServices2025 } from '../data/2025-added-ai-services'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	const microSaaS = innovativeRealMicroSaasServices2025.slice(0, 12).concat(addedMicroSaaS2025)
	const itServices = advancedITServices.slice(0, 12).concat(addedITServices2025)
	const aiServices = innovativeAIServices.slice(0, 12).concat(addedAIServices2025)

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<main className="mx-auto min-h-screen max-w-5xl px-6 py-12">
				<h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Services</h1>
				<p className="mt-3 max-w-2xl text-gray-700">From strategy to production, we deliver outcomes fast.</p>

				<div className="mt-10 grid gap-6 sm:grid-cols-2">
					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">AI Autonomous Systems</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Sales/CS multi-agent copilots</li>
							<li>RAG and workflow orchestration</li>
							<li>Observability and guardrails</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Cloud Platforms</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Serverless and Kubernetes</li>
							<li>Data pipelines and ML ops</li>
							<li>FinOps and SRE practices</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Cybersecurity</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Zero-trust frameworks</li>
							<li>Compliance and threat modeling</li>
							<li>Incident response playbooks</li>
						</ul>
					</section>

					<section className="rounded-lg border p-6">
						<h2 className="text-xl font-medium">Micro SaaS</h2>
						<ul className="mt-2 list-disc pl-5 text-gray-700">
							<li>Rapid product delivery</li>
							<li>Billing, auth, and analytics</li>
							<li>Growth experiments</li>
						</ul>
					</section>
				</div>

				<div className="mt-10">
					<a className="rounded bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" href="/contact">
						Get in touch
					</a>
				</div>

				{/* Expanded Catalog Sections */}
				<section className="mt-16">
					<h2 className="text-2xl font-semibold">Featured Micro SaaS</h2>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
						{microSaaS.map((item) => (
							<article key={item.id} className="rounded-lg border p-4">
								<div className="text-lg font-semibold">{item.icon} {item.name}</div>
								<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
								<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
								<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
									{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
								</ul>
								<a href={item.link} className="mt-3 inline-block text-blue-600 underline">Learn more</a>
							</article>
						))}
					</div>
				</section>

				<section className="mt-16">
					<h2 className="text-2xl font-semibold">Advanced IT Services</h2>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
						{itServices.map((item) => (
							<article key={item.id} className="rounded-lg border p-4">
								<div className="text-lg font-semibold">{item.icon} {item.name}</div>
								<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
								<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
								<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
									{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
								</ul>
								<a href={item.link} className="mt-3 inline-block text-blue-600 underline">Learn more</a>
							</article>
						))}
					</div>
				</section>

				<section className="mt-16">
					<h2 className="text-2xl font-semibold">Innovative AI Services</h2>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
						{aiServices.map((item) => (
							<article key={item.id} className="rounded-lg border p-4">
								<div className="text-lg font-semibold">{item.icon} {item.name}</div>
								<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
								<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
								<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
									{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
								</ul>
								<a href={item.link} className="mt-3 inline-block text-blue-600 underline">Learn more</a>
							</article>
						))}
					</div>
				</section>

				<section className="mt-16 rounded-lg border bg-gray-50 p-6">
					<h2 className="text-xl font-medium">Why Zion Tech Group</h2>
					<ul className="mt-2 list-disc pl-5 text-gray-700">
						<li>Real, battle-tested implementations (no mockups)</li>
						<li>Transparent pricing and fast onboarding</li>
						<li>Enterprise-grade security and compliance</li>
						<li>ROI-focused delivery and measurable outcomes</li>
					</ul>
					<p className="mt-3 text-sm text-gray-700">Average market prices (monthly): Micro SaaS $99–$999, AI Services $499–$4,999, Enterprise IT $2,000–$15,000. We price competitively based on scope.</p>
					<p className="mt-1 text-sm text-gray-700">Call <a className="text-blue-600 underline" href="tel:+13024640950">+1 302 464 0950</a>, email <a className="text-blue-600 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>, or visit <a className="text-blue-600 underline" href="https://ziontechgroup.com">ziontechgroup.com</a>.</p>
				</section>
			</main>
		</>
	)
}
