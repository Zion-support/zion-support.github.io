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
				{/* Hero Section */}
				<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
								Transform Your Business with{' '}
								<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
									AI & Cloud
								</span>
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="/contact"
									className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
								>
									Get Started
									<svg className="ml-2 h-4 w-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
									</svg>
								</a>
								<a
									href="/services"
									className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
								>
									Learn more <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
					
					{/* Background Pattern */}
					<div className="absolute inset-0 -z-10 overflow-hidden">
						<svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
							<defs>
								<pattern id="hero-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
									<path d="M.5 200V.5H200" fill="none" />
								</pattern>
							</defs>
							<rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-pattern)" />
						</svg>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:text-center">
							<h2 className="text-base font-semibold leading-7 text-blue-600">Advanced Technology</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Everything you need to scale your business
							</p>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
							</p>
						</div>
						<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
							<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
								<div className="flex flex-col">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<svg className="h-5 w-5 flex-none text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
										AI Autonomous Systems
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">
											Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
										</p>
										<p className="mt-6">
											<a href="/services#ai" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
												Learn more <span aria-hidden="true">→</span>
											</a>
										</p>
									</dd>
								</div>
								<div className="flex flex-col">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<svg className="h-5 w-5 flex-none text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
										</svg>
										Cloud Platforms
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">
											Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
										</p>
										<p className="mt-6">
											<a href="/services#cloud" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
												Learn more <span aria-hidden="true">→</span>
											</a>
										</p>
									</dd>
								</div>
								<div className="flex flex-col">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<svg className="h-5 w-5 flex-none text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
										</svg>
										Cybersecurity
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">
											Zero-trust architecture, threat detection, and compliance automation for enterprise security.
										</p>
										<p className="mt-6">
											<a href="/services#security" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
												Learn more <span aria-hidden="true">→</span>
											</a>
										</p>
									</dd>
								</div>
							</dl>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-24 sm:py-32 bg-gray-50">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Ready to transform your business?
							</h2>
							<p className="mt-6 text-lg leading-8 text-gray-600">
								Let's discuss how our AI and cloud solutions can accelerate your growth and innovation.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="/request-quote"
									className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
								>
									Get a Quote
								</a>
								<a
									href="/contact"
									className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600"
								>
									Contact Us <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
