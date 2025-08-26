import Head from 'next/head';
import { AppLayout } from '../src/layout/AppLayout';
import Link from 'next/link';

export default function Solutions() {
	return (
		<AppLayout>
			<Head>
				<title>Solutions - Zion Tech Group</title>
				<meta name="description" content="Comprehensive technology solutions tailored for enterprises, SMBs, startups, and government organizations." />
				<meta property="og:title" content="Solutions - Zion Tech Group" />
				<meta property="og:description" content="Comprehensive technology solutions tailored for enterprises, SMBs, startups, and government organizations." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ziontechgroup.com/solutions" />
			</Head>
			
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
				
				<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Tailored <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Solutions</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						Technology solutions designed specifically for your organization's size, industry, and unique challenges.
					</p>
				</div>
			</section>

			{/* Enterprise Solutions */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="mb-6">
								<span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
									Enterprise
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Enterprise Solutions
							</h2>
							<p className="text-lg text-gray-300 mb-6 leading-relaxed">
								Scalable, enterprise-grade solutions designed for large organizations with complex infrastructure needs and compliance requirements.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Multi-cloud architecture and management
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Advanced AI and machine learning platforms
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Enterprise security and compliance
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-cyan-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Legacy system modernization
								</li>
							</ul>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Learn More
							</Link>
						</div>
						<div className="relative">
							<div className="w-full h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl border border-cyan-400/30 flex items-center justify-center">
								<div className="text-center">
									<div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
										</svg>
									</div>
									<p className="text-cyan-400 font-semibold">Enterprise Scale</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SMB Solutions */}
			<section className="py-20 bg-black">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="order-2 lg:order-1">
							<div className="w-full h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl border border-blue-400/30 flex items-center justify-center">
								<div className="text-center">
									<div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
										</svg>
									</div>
									<p className="text-blue-400 font-semibold">SMB Focused</p>
								</div>
							</div>
						</div>
						<div className="order-1 lg:order-2">
							<div className="mb-6">
								<span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/30">
									SMB
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Small & Medium Business Solutions
							</h2>
							<p className="text-lg text-gray-300 mb-6 leading-relaxed">
								Cost-effective technology solutions that help growing businesses compete with larger organizations without the enterprise complexity.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Cloud-based business applications
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Affordable cybersecurity protection
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Scalable infrastructure solutions
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Business process automation
								</li>
							</ul>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Startup Solutions */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<div className="mb-6">
								<span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 text-sm font-medium rounded-full border border-green-500/30">
									Startup
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Startup Solutions
							</h2>
							<p className="text-lg text-gray-300 mb-6 leading-relaxed">
								Innovation-focused solutions that help startups build scalable products, attract investors, and accelerate growth from day one.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									MVP development and rapid prototyping
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									AI-powered product features
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Scalable cloud infrastructure
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Investor-ready technology stack
								</li>
							</ul>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300"
							>
								Learn More
							</Link>
						</div>
						<div className="relative">
							<div className="w-full h-80 bg-gradient-to-br from-green-400/20 to-teal-600/20 rounded-2xl border border-green-400/30 flex items-center justify-center">
								<div className="text-center">
									<div className="w-24 h-24 bg-gradient-to-r from-green-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
										</svg>
									</div>
									<p className="text-green-400 font-semibold">Innovation First</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Government Solutions */}
			<section className="py-20 bg-black">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="order-2 lg:order-1">
							<div className="w-full h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-2xl border border-purple-400/30 flex items-center justify-center">
								<div className="text-center">
									<div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
										</svg>
									</div>
									<p className="text-purple-400 font-semibold">Government Ready</p>
								</div>
							</div>
						</div>
						<div className="order-1 lg:order-2">
							<div className="mb-6">
								<span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full border border-purple-500/30">
									Government
								</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Government Solutions
							</h2>
							<p className="text-lg text-gray-300 mb-6 leading-relaxed">
								Secure, compliant technology solutions designed specifically for government agencies and public sector organizations.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									FedRAMP and FISMA compliance
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Secure citizen services platforms
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Data analytics and reporting
								</li>
								<li className="flex items-center text-gray-300">
									<svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
									</svg>
									Legacy system modernization
								</li>
							</ul>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
							>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Industry Solutions */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Industry-Specific Solutions
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Specialized technology solutions designed for your industry's unique challenges and requirements
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Healthcare</h3>
							<p className="text-gray-400 mb-6">
								HIPAA-compliant solutions for patient care, medical imaging, and healthcare analytics.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Learn More →
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Financial Services</h3>
							<p className="text-gray-400 mb-6">
								Secure, compliant solutions for banking, insurance, and fintech applications.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Learn More →
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Manufacturing</h3>
							<p className="text-gray-400 mb-6">
								IoT and AI solutions for smart factories, predictive maintenance, and quality control.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Learn More →
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Retail & E-commerce</h3>
							<p className="text-gray-400 mb-6">
								Omnichannel solutions, inventory management, and customer experience optimization.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Learn More →
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Education</h3>
							<p className="text-gray-400 mb-6">
								Learning management systems, student analytics, and virtual classroom solutions.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Learn More →
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Energy & Utilities</h3>
							<p className="text-gray-400 mb-6">
								Smart grid solutions, renewable energy management, and predictive maintenance.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Learn More →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
						Ready to Find Your Solution?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss your organization's unique needs and find the perfect technology solution for your challenges.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
						>
							Get Started
						</Link>
						<Link 
							href="/services" 
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
						>
							Explore Services
						</Link>
					</div>
				</div>
			</section>
		</AppLayout>
	);
}