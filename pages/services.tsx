import Head from 'next/head'
import { AppLayout } from '../src/layout/AppLayout'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	return (
		<AppLayout>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href="https://ziontechgroup.com/services"/>
				<meta property="og:title" content="Services - Zion Tech Group"/>
				<meta property="og:description" content="End-to-end technology solutions: Micro SaaS, IT services, and applied AI."/>
				<meta property="og:type" content="website"/>
				<meta property="og:url" content="https://ziontechgroup.com/services"/>
				<meta property="og:image" content="/assets/og-default.jpg"/>
			</Head>
			<div className="mx-auto min-h-screen max-w-6xl px-6 py-12">
				<div className="text-center mb-12">
					<h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">We deliver end-to-end technology solutions: micro SaaS products, IT consulting, and applied AI—tailored for startups, SMBs, and enterprises.</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
					<div className="bg-gray-900 rounded-lg p-6 border border-gray-700 text-center">
						<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						</div>
						<h2 className="text-xl font-semibold text-white mb-3">AI Autonomous Systems</h2>
						<ul className="text-gray-300 space-y-2">
							<li>Sales/CS multi-agent copilots</li>
							<li>RAG and workflow orchestration</li>
							<li>Observability and guardrails</li>
						</ul>
					</div>

					<div className="bg-gray-900 rounded-lg p-6 border border-gray-700 text-center">
						<div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
							</svg>
						</div>
						<h2 className="text-xl font-semibold text-white mb-3">Cloud Platforms</h2>
						<ul className="text-gray-300 space-y-2">
							<li>Serverless and Kubernetes</li>
							<li>Data pipelines and ML ops</li>
							<li>FinOps and SRE practices</li>
						</ul>
					</div>

					<div className="bg-gray-900 rounded-lg p-6 border border-gray-700 text-center">
						<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
							</svg>
						</div>
						<h2 className="text-xl font-semibold text-white mb-3">Cybersecurity</h2>
						<ul className="text-gray-300 space-y-2">
							<li>Zero-trust frameworks</li>
							<li>Compliance and threat modeling</li>
							<li>Incident response playbooks</li>
						</ul>
					</div>

					<div className="bg-gray-900 rounded-lg p-6 border border-gray-700 text-center">
						<div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
							</svg>
						</div>
						<h2 className="text-xl font-semibold text-white mb-3">Micro SaaS</h2>
						<ul className="text-gray-300 space-y-2">
							<li>Rapid product delivery</li>
							<li>Billing, auth, and analytics</li>
							<li>Growth experiments</li>
						</ul>
					</div>
				</div>

				<div className="text-center mb-16">
					<a href="/contact" 
					   className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
						Get in Touch
						<svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</a>
				</div>

				{/* Service Categories */}
				<div className="grid gap-12">
					<section className="bg-gray-900 rounded-lg p-8 border border-gray-700">
						<h2 className="text-3xl font-bold text-white mb-6 text-center">AI & Machine Learning</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">AI Consulting</h3>
								<p className="text-gray-300 mb-4">Strategic AI implementation and optimization for your business needs.</p>
								<a href="/services/ai" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
								<p className="text-gray-300 mb-4">Custom ML models and data science solutions.</p>
								<a href="/services/ai" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">AI Integration</h3>
								<p className="text-gray-300 mb-4">Seamless AI integration with existing systems.</p>
								<a href="/services/ai" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
						</div>
					</section>

					<section className="bg-gray-900 rounded-lg p-8 border border-gray-700">
						<h2 className="text-3xl font-bold text-white mb-6 text-center">Cloud & Infrastructure</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">Cloud Migration</h3>
								<p className="text-gray-300 mb-4">Smooth transition to cloud infrastructure.</p>
								<a href="/services/cloud" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">DevOps</h3>
								<p className="text-gray-300 mb-4">Automated deployment and infrastructure management.</p>
								<a href="/services/infrastructure" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">Kubernetes</h3>
								<p className="text-gray-300 mb-4">Container orchestration and management.</p>
								<a href="/services/infrastructure" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
						</div>
					</section>

					<section className="bg-gray-900 rounded-lg p-8 border border-gray-700">
						<h2 className="text-3xl font-bold text-white mb-6 text-center">Cybersecurity</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">Security Audit</h3>
								<p className="text-gray-300 mb-4">Comprehensive security assessment and recommendations.</p>
								<a href="/services/cybersecurity" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">Compliance</h3>
								<p className="text-gray-300 mb-4">GDPR, HIPAA, SOC 2, and industry compliance.</p>
								<a href="/services/cybersecurity" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
							<div className="bg-gray-800 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-white mb-3">Incident Response</h3>
								<p className="text-gray-300 mb-4">24/7 security monitoring and response.</p>
								<a href="/services/cybersecurity" className="text-blue-400 hover:text-blue-300">Learn more →</a>
							</div>
						</div>
					</section>
				</div>

				{/* Why Choose Us */}
				<section className="mt-16 bg-gray-900 rounded-lg p-8 border border-gray-700">
					<h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Zion Tech Group</h2>
					<div className="grid gap-6 md:grid-cols-2">
						<div>
							<ul className="text-gray-300 space-y-3">
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Real, battle-tested implementations (no mockups)
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Transparent pricing and fast onboarding
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Enterprise-grade security and compliance
								</li>
								<li className="flex items-center">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									ROI-focused delivery and measurable outcomes
								</li>
							</ul>
						</div>
						<div className="bg-gray-800 rounded-lg p-6">
							<h3 className="text-xl font-semibold text-white mb-4">Pricing Overview</h3>
							<p className="text-gray-300 mb-4">Average market prices (monthly):</p>
							<ul className="text-gray-300 space-y-2">
								<li>• Micro SaaS: $99–$999</li>
								<li>• AI Services: $499–$4,999</li>
								<li>• Enterprise IT: $2,000–$15,000</li>
							</ul>
							<p className="text-gray-300 mt-4">We price competitively based on scope and deliver measurable ROI.</p>
						</div>
					</div>
					
					<div className="mt-8 text-center">
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href="/pricing" className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-200">
								See Pricing Guidance
							</a>
							<a href="/request-quote" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200">
								Request Custom Quote
							</a>
						</div>
					</div>
				</section>
			</div>
		</AppLayout>
	)
}
