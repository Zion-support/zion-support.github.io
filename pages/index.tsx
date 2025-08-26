import Head from 'next/head';
import { AppLayout } from '../src/layout/AppLayout';
import Link from 'next/link';

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions';
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.';
	const url = 'https://ziontechgroup.com/';
	const logo = '/favicon.svg';
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Zion Tech Group',
		url,
		logo,
		sameAs: ['https://www.linkedin.com/company/zion-technologies/'],
	};

	return (
		<AppLayout>
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
			
			{/* Hero Section */}
			<section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
				<div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
				
				<div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
						<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
							Autonomous AI, Cloud, and Cybersecurity
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
						We design, build, and operate production-grade platforms leveraging AI agents, serverless cloud, and
						zero-trust security to accelerate outcomes.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:scale-105"
						>
							Request a Quote
						</Link>
						<Link 
							href="/services" 
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105"
						>
							Explore Services
						</Link>
					</div>
				</div>
			</section>

			{/* Services Overview Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
							What We Deliver
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Comprehensive technology solutions designed to transform your business operations
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="group p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">AI Autonomous Systems</h3>
							<p className="text-gray-400 leading-relaxed">
								Multi-agent workflows for sales, support, and operations automation.
							</p>
						</div>
						
						<div className="group p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Cloud Platforms</h3>
							<p className="text-gray-400 leading-relaxed">
								Serverless and container platforms with observability baked in.
							</p>
						</div>
						
						<div className="group p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Cybersecurity</h3>
							<p className="text-gray-400 leading-relaxed">
								Zero-trust architecture, compliance, and incident response.
							</p>
						</div>
						
						<div className="group p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Micro SaaS</h3>
							<p className="text-gray-400 leading-relaxed">
								Targeted products that solve critical workflows fast.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss how our AI-powered solutions can accelerate your digital transformation journey.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
						>
							Get Started Today
						</Link>
						<Link 
							href="/case-studies" 
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
						>
							View Case Studies
						</Link>
					</div>
				</div>
			</section>
		</AppLayout>
	);
}
