import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
	return (
		<>
			<Head>
				<title>Our Services | Zion Tech Group - AI, Cybersecurity, Cloud & Enterprise Solutions</title>
				<meta name="description" content="Discover Zion Tech Group's comprehensive technology services. From AI solutions and cybersecurity to cloud infrastructure and enterprise automation, we deliver cutting-edge technology services." />
				<link rel="canonical" href="https://ziontechgroup.com/services" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Our Services
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Comprehensive technology services designed to transform your business. From AI and machine learning to cybersecurity and cloud infrastructure, we deliver cutting-edge solutions that drive innovation and growth.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
								Get Started
							</Link>
							<Link href="/case-studies" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								View Case Studies
							</Link>
						</div>
					</section>

					{/* Featured Services */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Services</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full mb-2">AI & ML</span>
									<h3 className="text-2xl font-semibold mb-3 text-cyan-400">AI Solutions</h3>
								</div>
								<p className="text-white/70 mb-4">
									Transform your business with cutting-edge artificial intelligence solutions. From custom AI development to autonomous systems, we deliver intelligent solutions that drive innovation.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-cyan-400">Custom AI</div>
										<div className="text-sm text-white/60">Development</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">Autonomous</div>
										<div className="text-sm text-white/60">Systems</div>
									</div>
								</div>
								<Link href="/services/ai-solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors">
									Explore AI Services →
								</Link>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full mb-2">Security</span>
									<h3 className="text-2xl font-semibold mb-3 text-fuchsia-400">Cybersecurity</h3>
								</div>
								<p className="text-white/70 mb-4">
									Protect your digital assets with enterprise-grade cybersecurity solutions. From threat detection to compliance automation, we provide comprehensive security.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">Threat</div>
										<div className="text-sm text-white/60">Detection</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">Zero Trust</div>
										<div className="text-sm text-white/60">Security</div>
									</div>
								</div>
								<Link href="/services/cybersecurity" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
									Explore Security Services →
								</Link>
							</div>
						</div>
					</section>

					{/* Service Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Service Categories</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Link href="/services/ai-solutions" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🤖
										</div>
										<div>
											<h3 className="text-xl font-semibold text-cyan-400">AI & Machine Learning</h3>
											<p className="text-blue-400 text-sm">Intelligent Solutions</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Custom AI development, autonomous systems, machine learning models, and intelligent automation solutions.
									</p>
								</div>
							</Link>

							<Link href="/services/cybersecurity" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🔒
										</div>
										<div>
											<h3 className="text-xl font-semibold text-fuchsia-400">Cybersecurity</h3>
											<p className="text-purple-400 text-sm">Protection & Compliance</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Advanced threat detection, compliance automation, zero-trust security, and security analytics.
									</p>
								</div>
							</Link>

							<Link href="/services/cloud-devops" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											☁️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-green-400">Cloud & DevOps</h3>
											<p className="text-emerald-400 text-sm">Infrastructure & Automation</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Cloud infrastructure, DevOps automation, container orchestration, and infrastructure as code.
									</p>
								</div>
							</Link>

							<Link href="/services/data-analytics" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											📊
										</div>
										<div>
											<h3 className="text-xl font-semibold text-blue-400">Data Analytics</h3>
											<p className="text-cyan-400 text-sm">Insights & Intelligence</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Data engineering, business intelligence, predictive analytics, and real-time insights.
									</p>
								</div>
							</Link>

							<Link href="/services/quantum-technology" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											⚛️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-purple-400">Quantum Technology</h3>
											<p className="text-indigo-400 text-sm">Next-Gen Computing</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Quantum computing solutions, quantum-ready infrastructure, and quantum algorithm development.
									</p>
								</div>
							</Link>

							<Link href="/solutions" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏢
										</div>
										<div>
											<h3 className="text-xl font-semibold text-yellow-400">Enterprise Solutions</h3>
											<p className="text-orange-400 text-sm">Business Transformation</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Digital transformation, legacy modernization, enterprise automation, and business process optimization.
									</p>
								</div>
							</Link>
						</div>
					</section>

					{/* Service Features */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Our Services?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🎯
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Expert Team</h3>
								<p className="text-white/70">
									Our team consists of world-class engineers, data scientists, and technology experts with decades of combined experience.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									⚡
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Cutting-Edge Tech</h3>
								<p className="text-white/70">
									We stay at the forefront of technology, continuously researching and implementing the latest advancements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔒
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Security First</h3>
								<p className="text-white/70">
									Security is built into every solution we create, ensuring your data and systems remain protected.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									📊
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Measurable Results</h3>
								<p className="text-white/70">
									We deliver solutions that provide clear, measurable business outcomes and ROI for your investments.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔄
								</div>
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Ongoing Support</h3>
								<p className="text-white/70">
									Continuous support, updates, and optimization to ensure your solutions remain effective and up-to-date.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🤝
								</div>
								<h3 className="text-xl font-semibold mb-3 text-red-400">Client Partnership</h3>
								<p className="text-white/70">
									We work closely with our clients, building long-term partnerships focused on mutual success.
								</p>
							</div>
						</div>
					</section>

					{/* Service Process */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Service Process</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									1
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Discovery</h3>
								<p className="text-white/70 text-sm">
									Deep dive into your business needs, challenges, and technology requirements to understand your goals.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									2
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Strategy</h3>
								<p className="text-white/70 text-sm">
									Develop comprehensive technology strategy and roadmap aligned with your business objectives.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									3
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Implementation</h3>
								<p className="text-white/70 text-sm">
									Execute the solution using industry best practices and cutting-edge technologies.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									4
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Optimization</h3>
								<p className="text-white/70 text-sm">
									Continuous monitoring, optimization, and support to ensure peak performance and results.
								</p>
							</div>
						</div>
					</section>

					{/* Service Statistics */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Service Statistics</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
								<div className="text-white/70">Projects Delivered</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-fuchsia-400 mb-2">98%</div>
								<div className="text-white/70">Client Satisfaction</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
								<div className="text-white/70">Industries Served</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
								<div className="text-white/70">Support Available</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
									Get Started Today
								</Link>
								<Link href="/case-studies" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									View Case Studies
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
