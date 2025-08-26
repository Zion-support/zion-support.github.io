import Head from 'next/head'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

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

				{/* Featured Services */}
				<section className="mt-16">
					<h2 className="text-2xl font-semibold">Featured Services</h2>
					<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
						<article className="rounded-lg border p-4">
							<div className="text-lg font-semibold">🚀 AI-Powered Analytics</div>
							<p className="mt-1 text-sm text-gray-600">Intelligent insights and predictive analytics</p>
							<div className="mt-2 text-sm"><span className="font-semibold">$499</span> <span className="text-gray-500">/month</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								<li>Real-time data processing</li>
								<li>Machine learning models</li>
								<li>Custom dashboards</li>
							</ul>
							<a href="/services/ai" className="mt-3 inline-block text-blue-600 underline">Learn more</a>
						</article>

						<article className="rounded-lg border p-4">
							<div className="text-lg font-semibold">☁️ Cloud Migration</div>
							<p className="mt-1 text-sm text-gray-600">Seamless transition to cloud infrastructure</p>
							<div className="mt-2 text-sm"><span className="font-semibold">$2,000</span> <span className="text-gray-500">/project</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								<li>Infrastructure assessment</li>
								<li>Migration planning</li>
								<li>Post-migration support</li>
							</ul>
							<a href="/services/cloud" className="mt-3 inline-block text-blue-600 underline">Learn more</a>
						</article>

						<article className="rounded-lg border p-4">
							<div className="text-lg font-semibold">🔒 Cybersecurity Audit</div>
							<p className="mt-1 text-sm text-gray-600">Comprehensive security assessment</p>
							<div className="mt-2 text-sm"><span className="font-semibold">$1,500</span> <span className="text-gray-500">/audit</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								<li>Vulnerability scanning</li>
								<li>Penetration testing</li>
								<li>Compliance review</li>
							</ul>
							<a href="/services/cybersecurity" className="mt-3 inline-block text-blue-600 underline">Learn more</a>
						</article>
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
					<div className="mt-4 grid gap-3 sm:grid-cols-2">
						<a href="/pricing" className="inline-block rounded border px-4 py-2 text-blue-700 hover:bg-blue-50">See pricing guidance</a>
						<a href="/request-quote" className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Request a custom quote</a>
					</div>
				</section>
			</main>
		</>
	)
}
