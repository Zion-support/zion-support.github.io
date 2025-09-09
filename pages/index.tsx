import Head from 'next/head'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'
	const url = 'https://ziontechgroup.com/'
	const logo = '/favicon.svg'
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Zion Tech Group',
		url,
		logo,
		sameAs: ['https://www.linkedin.com/company/zion-technologies/'],
	}

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={url} />
				<meta property="og:image" content="/og-image.svg" />
				<meta name="twitter:card" content="summary_large_image" />
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			</Head>
			<main className="min-h-screen bg-white text-gray-900">
				<section className="mx-auto max-w-5xl px-6 py-16">
					<h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Autonomous AI, Cloud, and Cybersecurity</h1>
					<p className="mt-4 max-w-2xl text-lg text-gray-700">
						We design, build, and operate production-grade platforms leveraging AI agents, serverless cloud, and
						zero-trust security to accelerate outcomes.
					</p>
					<div className="mt-8 flex gap-4">
						<a className="rounded bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700" href="/request-quote/">
							Request a quote
						</a>
						<a className="rounded border border-gray-300 px-5 py-2.5 text-gray-900 hover:bg-gray-50" href="/services">
							Explore services
						</a>
					</div>
				</section>
				<section className="mx-auto max-w-5xl px-6 pb-16">
					<h2 className="text-2xl font-semibold">What we deliver</h2>
					<ul className="mt-4 grid gap-6 sm:grid-cols-2">
						<li className="rounded-lg border p-6">
							<h3 className="font-medium">AI Autonomous Systems</h3>
							<p className="mt-2 text-gray-700">Multi-agent workflows for sales, support, and operations.</p>
						</li>
						<li className="rounded-lg border p-6">
							<h3 className="font-medium">Cloud Platforms</h3>
							<p className="mt-2 text-gray-700">Serverless and container platforms with observability baked in.</p>
						</li>
						<li className="rounded-lg border p-6">
							<h3 className="font-medium">Cybersecurity</h3>
							<p className="mt-2 text-gray-700">Zero-trust architecture, compliance, and incident response.</p>
						</li>
						<li className="rounded-lg border p-6">
							<h3 className="font-medium">Micro SaaS</h3>
							<p className="mt-2 text-gray-700">Targeted products that solve critical workflows fast.</p>
						</li>
					</ul>
				</section>
			</main>
		</>
	)
}
