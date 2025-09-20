import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function MarketPricing() {
	return (
		<>
			<Head>
				<title>Market Pricing | Zion Tech Group</title>
				<meta name="description" content="High-level market pricing overview across AI, cloud, cybersecurity, and more." />
			</Head>
			<section className="mx-auto max-w-5xl px-4 py-12">
				<h1 className="text-3xl font-bold mb-4">Market Pricing Overview</h1>
				<p className="text-gray-700 mb-6">
					Explore indicative ranges for common solution categories. Contact us for a tailored quote.
				</p>
				<div className="grid gap-6 md:grid-cols-2">
					<div className="rounded-lg border p-6 bg-white">
						<h2 className="text-xl font-semibold">AI & Machine Learning</h2>
						<ul className="mt-2 list-disc ml-5 text-gray-700">
							<li>Advisory and discovery: $5k – $25k</li>
							<li>Pilot/POC: $20k – $150k</li>
							<li>Production build: $100k+</li>
						</ul>
					</div>
					<div className="rounded-lg border p-6 bg-white">
						<h2 className="text-xl font-semibold">Cloud & Data</h2>
						<ul className="mt-2 list-disc ml-5 text-gray-700">
							<li>Cloud migration: $15k – $250k</li>
							<li>Data pipelines: $20k – $120k</li>
							<li>Platform hardening: $10k – $80k</li>
						</ul>
					</div>
					<div className="rounded-lg border p-6 bg-white">
						<h2 className="text-xl font-semibold">Cybersecurity</h2>
						<ul className="mt-2 list-disc ml-5 text-gray-700">
							<li>Risk assessment: $7k – $40k</li>
							<li>Zero Trust rollout: $60k – $300k</li>
							<li>Managed security: $3k+/mo</li>
						</ul>
					</div>
					<div className="rounded-lg border p-6 bg-white">
						<h2 className="text-xl font-semibold">Infrastructure & DevOps</h2>
						<ul className="mt-2 list-disc ml-5 text-gray-700">
							<li>Observability setup: $10k – $60k</li>
							<li>Kubernetes platform: $40k – $200k</li>
							<li>Cost optimization: $5k – $50k</li>
						</ul>
					</div>
				</div>
				<div className="mt-10 flex flex-wrap gap-3">
					<Link href="/contact" className="px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">Request a Quote</Link>
					<Link href="/services" className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-50">Explore Services</Link>
				</div>
			</section>
		</>
	);
}