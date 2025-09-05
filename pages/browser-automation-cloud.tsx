import React from 'react';
import SEO from '../components/SEO';

export default function BrowserAutomationCloudPage() {_return (
		<>
			<Head>
				<title>Browser Automation Cloud | Zion Tech Group</title>
				<meta name="description" content="Scale headless browser flows for testing, _scraping, _and RPA with queues, _concurrency limits, _and smart retries." />
				<link rel="canonical" href="https://ziontechgroup.com/browser-automation-cloud" />
			</Head>
			<div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 text-white bg-black">
				<div className="max-w-5xl mx-auto space-y-8">
					<h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Browser Automation Cloud</h1>
					<p className="text-gray-300">Scale Playwright/Puppeteer workloads with managed proxies, _CAPTCHA handling, _rotating identities, _and budget-aware concurrency. Ideal for QA at scale, _data collection, _and operational RPA.</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="rounded-xl border border-cyan-500/30 p-6">
							<h3 className="text-xl font-bold">Starter</h3>
							<p className="mt-2 text-gray-300">Up to 50k runs/mo, _10 concurrent workers, _shared proxies.</p>
							<p className="mt-4 text-3xl font-bold">$199<span className="text-base font-normal text-gray-300">/mo</span></p>
						</div>
						<div className="rounded-xl border border-purple-500/30 p-6">
							<h3 className="text-xl font-bold">Growth</h3>
							<p className="mt-2 text-gray-300">250k runs/mo, _50 workers, _dedicated proxy pools, _priority queue.</p>
							<p className="mt-4 text-3xl font-bold">$799<span className="text-base font-normal text-gray-300">/mo</span></p>
						</div>
						<div className="rounded-xl border border-emerald-500/30 p-6">
							<h3 className="text-xl font-bold">Enterprise</h3>
							<p className="mt-2 text-gray-300">SAML/SCIM, _VPC deploy, _dedicated subnets, _custom guards & retries.</p>
							<p className="mt-4 text-3xl font-bold">Custom</p>
						</div>
					</div>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a href="/contact" className="px-5 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200">Start from $99/mo</a>
						<a href="/market-pricing" className="px-5 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10">Market Pricing</a>
						<a href="https://playwright.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Playwright
						</a>
						<a href="https://pptr.dev/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
							<ExternalLink className="w-4 h-4" /> Puppeteer
						</a>
					</div>
				</section>
			</main>
		</>
	);}
