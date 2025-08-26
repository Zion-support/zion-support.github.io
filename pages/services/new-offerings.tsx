import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { realMarketServices } from '../../data/real-market-services';

export default function NewOfferingsPage() {
	const contactInfo = {
		mobile: '+1 302 464 0950',
		email: 'kleber@ziontechgroup.com',
		address: '364 E Main St STE 1008 Middletown DE 19709',
		website: 'https://ziontechgroup.com'
	};

	const curated = [...additionalEnhancedServices.slice(-12), ...realMarketServices.slice(0, 12)];

	return (
		<>
			<Head>
				<title>New Offerings | Zion Tech Group</title>
				<meta name="description" content="Explore new micro-SaaS, IT and AI services from Zion Tech Group with real pricing, capabilities, and fast onboarding." />
				<link rel="canonical" href="https://ziontechgroup.com/services/new-offerings" />
				<meta property="og:title" content="New Offerings | Zion Tech Group" />
				<meta property="og:description" content="Real, production-ready services with transparent pricing and quick time-to-value." />
				<meta property="og:url" content="https://ziontechgroup.com/services/new-offerings" />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white">
				<header className="container mx-auto px-6 py-12 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Newest Services & Solutions</h1>
					<p className="mt-4 text-white/80 max-w-3xl mx-auto">Real micro-SaaS, IT and AI solutions with average market pricing, clear benefits, and easy engagement.</p>
					<div className="mt-6 flex items-center justify-center gap-3 text-sm text-white/70">
						<span>Phone: <a className="underline" href="tel:+13024640950">+1 302 464 0950</a></span>
						<span>•</span>
						<span>Email: <a className="underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></span>
						<span>•</span>
						<span><a className="underline" href="https://ziontechgroup.com/contact">Contact form</a></span>
					</div>
					<div className="mt-4 text-xs text-white/60">Address: {contactInfo.address}</div>
					<div className="mt-6 flex flex-wrap gap-3 justify-center">
						<Link href="/services" className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400/50 bg-white/10">All Services</Link>
						<Link href="/revolutionary-2025-pricing" className="px-4 py-2 rounded-lg border border-white/20 hover:border-fuchsia-400/50 bg-white/10">Pricing</Link>
					</div>
				</header>

				<main className="container mx-auto px-6 pb-20">
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{curated.map((svc) => (
							<article key={`${svc.id}-${svc.link}`} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
								<div className="text-3xl mb-3">{(svc as any).icon || '✨'}</div>
								<h2 className="text-xl font-semibold mb-1">{svc.name}</h2>
								<p className="text-white/70 text-sm mb-3">{svc.tagline}</p>
								<p className="text-white/80 text-sm mb-4">{svc.description}</p>
								<div className="flex items-center justify-between mb-4">
									<div className="text-cyan-300 font-bold text-lg">{svc.price}<span className="text-white/60 text-sm">{svc.period}</span></div>
									{(svc as any).popular ? <span className="text-xs px-2 py-1 rounded bg-fuchsia-600/30 border border-fuchsia-400/30">Popular</span> : <span />}
								</div>
								<ul className="text-sm text-white/70 space-y-1 mb-5 list-disc list-inside">
									{svc.features.slice(0, 5).map((f, i) => <li key={i}>{f}</li>)}
								</ul>
								<div className="flex gap-3">
									<a href={svc.link} className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600">Learn more</a>
									<Link href="/contact" className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40">Talk to us</Link>
								</div>
							</article>
						))}
					</section>

					<section className="mt-16 bg-white/5 rounded-2xl p-6 border border-white/10">
						<h3 className="text-2xl font-bold mb-2 text-cyan-400">Average market prices</h3>
						<p className="text-white/75 text-sm mb-4">Transparent, market-aligned pricing helps you budget and evaluate ROI quickly. Typical ranges:</p>
						<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-white/80">
							<li className="bg-white/5 rounded-lg p-3">AI Assistants & RAG: <strong>$99–$499/month</strong></li>
							<li className="bg-white/5 rounded-lg p-3">Cloud Cost/FinOps: <strong>$99–$399/month</strong></li>
							<li className="bg-white/5 rounded-lg p-3">Security Hardening/SSPM: <strong>$149–$599/month</strong></li>
							<li className="bg-white/5 rounded-lg p-3">Dev Tools & QA: <strong>$49–$299/month</strong></li>
							<li className="bg-white/5 rounded-lg p-3">Compliance & PrivacyOps: <strong>$199–$699/month</strong></li>
							<li className="bg-white/5 rounded-lg p-3">Observability & SLO: <strong>$79–$349/month</strong></li>
						</ul>
						<p className="text-white/60 text-xs mt-3">Exact pricing may vary by scale, data volume, and integrations. Yearly discounts available.</p>
					</section>
				</main>

				<footer className="container mx-auto px-6 py-12 text-center text-white/70">
					<p>© {new Date().getFullYear()} Zion Tech Group • <a className="underline" href="https://ziontechgroup.com">ziontechgroup.com</a></p>
				</footer>
			</div>
		</>
	);
}