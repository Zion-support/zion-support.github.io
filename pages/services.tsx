import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ServicesPage() {
	return (
		<>
			<Head>
				<title>Services | Zion Tech Group - AI & Automation Solutions</title>
				<meta name="description" content="Explore Zion Tech Group's comprehensive range of AI development, automation, cloud, DevOps, data, and consulting services." />
				<meta property="og:title" content="Services - Zion Tech Group" />
				<meta property="og:description" content="AI development, automation, and technology consulting services." />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>

			<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<main className="container mx-auto px-6 py-12">
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Our Services
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto">
							Comprehensive AI and automation solutions designed to transform your business and drive innovation
						</p>

						<div className="flex flex-wrap justify-center gap-4 mt-8">
							<a href="/about" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
								About Us
							</a>
							<a href="/case-studies" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-fuchsia-400/50">
								Case Studies
							</a>
							<a href="/team" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
								Our Team
							</a>
							<a href="/contact" className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-blue-400/50">
								Contact Us
							</a>
						</div>
					</section>

					<section className="mx-auto max-w-6xl">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
							<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
								<div className="text-4xl mb-4">🤖</div>
								<h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
								<p className="text-white/70 mb-6">
									Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
								</p>
								<ul className="space-y-2 text-sm text-white/60">
									<li>• Machine Learning Models</li>
									<li>• Natural Language Processing</li>
									<li>• Computer Vision</li>
									<li>• Predictive Analytics</li>
								</ul>
							</div>

							<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
								<div className="text-4xl mb-4">⚡</div>
								<h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
								<p className="text-white/70 mb-6">
									End-to-end automation solutions that streamline operations and improve efficiency across your organization.
								</p>
								<ul className="space-y-2 text-sm text-white/60">
									<li>• Process Automation</li>
									<li>• Workflow Optimization</li>
									<li>• Robotic Process Automation</li>
									<li>• Smart Workflows</li>
								</ul>
							</div>

							<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
								<div className="text-4xl mb-4">☁️</div>
								<h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
								<p className="text-white/70 mb-6">
									Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
								</p>
								<ul className="space-y-2 text-sm text-white/60">
									<li>• Cloud Migration</li>
									<li>• Auto-scaling</li>
									<li>• Performance Optimization</li>
									<li>• Security Hardening</li>
								</ul>
							</div>

							<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
								<div className="text-4xl mb-4">🔧</div>
								<h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
								<p className="text-white/70 mb-6">
									Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
								</p>
								<ul className="space-y-2 text-sm text-white/60">
									<li>• CI/CD Pipeline Setup</li>
									<li>• Automated Testing</li>
									<li>• Infrastructure as Code</li>
									<li>• Monitoring & Alerting</li>
								</ul>
							</div>

							<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
								<div className="text-4xl mb-4">📊</div>
								<h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
								<p className="text-white/70 mb-6">
									Advanced analytics and business intelligence solutions that turn your data into actionable insights.
								</p>
								<ul className="space-y-2 text-sm text-white/60">
									<li>• Data Visualization</li>
									<li>• Predictive Analytics</li>
									<li>• Business Intelligence</li>
									<li>• Real-time Dashboards</li>
								</ul>
							</div>

							<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
								<div className="text-4xl mb-4">💡</div>
								<h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
								<p className="text-white/70 mb-6">
									Strategic technology consulting to help you navigate digital transformation and innovation challenges.
								</p>
								<ul className="space-y-2 text-sm text-white/60">
									<li>• Digital Strategy</li>
									<li>• Technology Roadmap</li>
									<li>• Innovation Workshops</li>
									<li>• Performance Audits</li>
								</ul>
							</div>
						</div>

						<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
							<h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose Our Services?</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI-Powered Excellence</h3>
									<p className="text-white/70">
										Our services leverage cutting-edge AI technology to deliver superior results, faster implementation, and continuous improvement.
									</p>
								</div>
								<div>
									<h3 className="text-xl font-semibold mb-3 text-green-400">Proven Results</h3>
									<p className="text-white/70">
										With 227 active automations and 2,960+ pages generated, we have a track record of delivering measurable business value.
									</p>
								</div>
							</div>
						</div>

						<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
							<h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
							<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
								<div className="text-center">
									<div className="text-3xl font-bold text-cyan-400 mb-2">1</div>
									<h3 className="text-lg font-semibold mb-2">Discovery</h3>
									<p className="text-sm text-white/70">Understanding your needs and objectives</p>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-fuchsia-400 mb-2">2</div>
									<h3 className="text-lg font-semibold mb-2">Planning</h3>
									<p className="text-sm text-white/70">Creating detailed roadmap and strategy</p>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-green-400 mb-2">3</div>
									<h3 className="text-lg font-semibold mb-2">Implementation</h3>
									<p className="text-sm text-white/70">Building and deploying solutions</p>
								</div>
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-400 mb-2">4</div>
									<h3 className="text-lg font-semibold mb-2">Optimization</h3>
									<p className="text-sm text-white/70">Continuous improvement and support</p>
								</div>
							</div>
						</div>

						<section className="mt-16">
							<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
								<h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Started?</h2>
								<p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
									Let's discuss how our AI and automation services can transform your business operations and drive growth in the digital age.
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Link href="/contact" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300 text-lg">
										Schedule a Consultation
									</Link>
									<a href="/case-studies" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 text-lg">
										View Our Work
									</a>
								</div>
							</div>
						</section>
					</section>
				</main>
			</div>
		</>
	);
}
