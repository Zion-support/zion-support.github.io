import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function SolutionsPage() {
	return (
		<>
			<Head>
				<title>Industry Solutions | Zion Tech Group - Tailored Technology Solutions</title>
				<meta name="description" content="Discover Zion Tech Group's industry-specific technology solutions. From healthcare to finance, manufacturing to retail, we deliver tailored solutions that drive business transformation." />
				<link rel="canonical" href="https://ziontechgroup.com/solutions" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Industry Solutions
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							We deliver tailored technology solutions designed specifically for your industry. Our deep understanding of sector-specific challenges enables us to create solutions that drive real business transformation.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
								Get Your Solution
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								Our Services
							</Link>
						</div>
					</section>

					{/* Featured Solutions */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Industry Solutions</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full mb-2">Healthcare</span>
									<h3 className="text-2xl font-semibold mb-3 text-cyan-400">AI-Powered Healthcare Solutions</h3>
								</div>
								<p className="text-white/70 mb-4">
									Transform patient care with AI-driven diagnostics, predictive analytics, and automated healthcare workflows that improve outcomes and reduce costs.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-cyan-400">60%</div>
										<div className="text-sm text-white/60">Faster Diagnosis</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">40%</div>
										<div className="text-sm text-white/60">Cost Reduction</div>
									</div>
								</div>
								<Link href="/solutions/healthcare" className="text-cyan-400 hover:text-cyan-300 transition-colors">
									Explore Healthcare Solutions →
								</Link>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full mb-2">Finance</span>
									<h3 className="text-2xl font-semibold mb-3 text-fuchsia-400">Financial Technology Innovation</h3>
								</div>
								<p className="text-white/70 mb-4">
									Revolutionize financial services with blockchain, AI-powered fraud detection, and automated compliance solutions that enhance security and efficiency.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">99.9%</div>
										<div className="text-sm text-white/60">Fraud Detection</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">70%</div>
										<div className="text-sm text-white/60">Faster Processing</div>
									</div>
								</div>
								<Link href="/solutions/finance" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
									Explore Finance Solutions →
								</Link>
							</div>
						</div>
					</section>

					{/* Industry Solutions Grid */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Industry Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Link href="/solutions/healthcare" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏥
										</div>
										<div>
											<h3 className="text-xl font-semibold text-cyan-400">Healthcare</h3>
											<p className="text-fuchsia-400 text-sm">AI Diagnostics & Patient Care</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										AI-powered diagnostics, patient monitoring, healthcare analytics, and automated workflows for improved patient outcomes.
									</p>
								</div>
							</Link>

							<Link href="/solutions/finance" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											💳
										</div>
										<div>
											<h3 className="text-xl font-semibold text-fuchsia-400">Finance</h3>
											<p className="text-purple-400 text-sm">FinTech & Banking Solutions</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Blockchain solutions, fraud detection, automated compliance, and digital banking platforms for modern financial services.
									</p>
								</div>
							</Link>

							<Link href="/solutions/manufacturing" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏭
										</div>
										<div>
											<h3 className="text-xl font-semibold text-green-400">Manufacturing</h3>
											<p className="text-emerald-400 text-sm">Industry 4.0 & Smart Factory</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										IoT integration, predictive maintenance, quality control automation, and smart factory solutions for Industry 4.0.
									</p>
								</div>
							</Link>

							<Link href="/solutions/retail" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🛍️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-blue-400">Retail</h3>
											<p className="text-cyan-400 text-sm">E-commerce & Omnichannel</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Omnichannel platforms, customer analytics, inventory optimization, and personalized shopping experiences.
									</p>
								</div>
							</Link>

							<Link href="/solutions/education" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🎓
										</div>
										<div>
											<h3 className="text-xl font-semibold text-yellow-400">Education</h3>
											<p className="text-orange-400 text-sm">EdTech & Learning Platforms</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										AI-powered learning analytics, virtual classrooms, adaptive learning systems, and educational content management.
									</p>
								</div>
							</Link>

							<Link href="/solutions/government" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200 group-hover:bg-white/10">
									<div className="flex items-center mb-4">
										<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center text-white text-xl mr-3">
											🏛️
										</div>
										<div>
											<h3 className="text-xl font-semibold text-purple-400">Government</h3>
											<p className="text-indigo-400 text-sm">Digital Transformation</p>
										</div>
									</div>
									<p className="text-white/70 text-sm">
										Digital government services, citizen portals, automated workflows, and secure data management solutions.
									</p>
								</div>
							</Link>
						</div>
					</section>

					{/* Solution Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Our Industry Solutions?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🎯
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Industry Expertise</h3>
								<p className="text-white/70">
									Deep understanding of industry-specific challenges, regulations, and best practices to deliver tailored solutions.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									⚡
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Rapid Implementation</h3>
								<p className="text-white/70">
									Proven methodologies and pre-built components enable faster deployment and quicker time to value.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔒
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Security & Compliance</h3>
								<p className="text-white/70">
									Built-in security features and compliance automation ensure your solutions meet industry standards.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									📊
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Measurable Results</h3>
								<p className="text-white/70">
									Clear metrics and analytics to track performance and demonstrate ROI for your technology investments.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔄
								</div>
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Scalable Architecture</h3>
								<p className="text-white/70">
									Solutions designed to grow with your business, handling increased demand and expanding requirements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🤝
								</div>
								<h3 className="text-xl font-semibold mb-3 text-red-400">Ongoing Support</h3>
								<p className="text-white/70">
									Continuous support, updates, and optimization to ensure your solutions remain effective and up-to-date.
								</p>
							</div>
						</div>
					</section>

					{/* Implementation Process */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Implementation Process</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									1
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Discovery</h3>
								<p className="text-white/70 text-sm">
									Deep dive into your industry challenges, business processes, and technology requirements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									2
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Design</h3>
								<p className="text-white/70 text-sm">
									Create tailored solution architecture and detailed implementation roadmap.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									3
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Development</h3>
								<p className="text-white/70 text-sm">
									Build and integrate your solution using industry best practices and cutting-edge technologies.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									4
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Deploy</h3>
								<p className="text-white/70 text-sm">
									Launch your solution with comprehensive testing, training, and ongoing support.
								</p>
							</div>
						</div>
					</section>

					{/* Success Stories */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Success Stories</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
										H
									</div>
									<div>
										<div className="font-semibold text-white">Healthcare Provider</div>
										<div className="text-sm text-white/60">AI Diagnostic Platform</div>
									</div>
								</div>
								<p className="text-white/80 mb-4">
									"Zion Tech Group's AI diagnostic solution reduced our diagnosis time by 60% and improved accuracy by 25%. The platform seamlessly integrated with our existing systems."
								</p>
								<div className="text-sm text-white/60">Results: 60% faster diagnosis, 25% accuracy improvement</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
										F
									</div>
									<div>
										<div className="font-semibold text-white">Financial Institution</div>
										<div className="text-sm text-white/60">Fraud Detection System</div>
									</div>
								</div>
								<p className="text-white/80 mb-4">
									"The AI-powered fraud detection system prevented $50M in fraudulent transactions and reduced false positives by 40%. Implementation was smooth and ROI was immediate."
								</p>
								<div className="text-sm text-white/60">Results: $50M fraud prevented, 40% false positive reduction</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Industry?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our industry-specific solutions can address your unique challenges and drive measurable business transformation.
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