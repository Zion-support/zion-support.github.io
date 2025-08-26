import React from 'react';
import Head from 'next/head';

export default function ServiceSlugPage(props: { params?: { slug?: string } }) {
	const slug = props?.params?.slug || 'service';
	const title = slug
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (c) => c.toUpperCase());

	const contact = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
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
}
