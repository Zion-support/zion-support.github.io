import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
	return (
		<>
			<Head>
				<title>Case Studies | Zion Tech Group - Success Stories & Technology Solutions</title>
				<meta name="description" content="Explore Zion Tech Group's success stories and case studies. See how our technology solutions have transformed businesses across various industries." />
				<link rel="canonical" href="https://ziontechgroup.com/case-studies" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Case Studies
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Discover how our technology solutions have transformed businesses and delivered measurable results. From AI implementation to digital transformation, these success stories showcase our expertise and impact.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
								Start Your Success Story
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								Our Services
							</Link>
						</div>
					</section>

					{/* Featured Case Studies */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Featured Success Stories</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full mb-2">Healthcare</span>
									<h3 className="text-2xl font-semibold mb-3 text-cyan-400">AI-Powered Diagnostic Platform</h3>
								</div>
								<p className="text-white/70 mb-4">
									Transformed a major healthcare provider's diagnostic capabilities with AI-powered image analysis, reducing diagnosis time by 60% and improving accuracy by 25%.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-cyan-400">60%</div>
										<div className="text-sm text-white/60">Faster Diagnosis</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">25%</div>
										<div className="text-sm text-white/60">Accuracy Improvement</div>
									</div>
								</div>
								<Link href="/case-studies/healthcare-ai-diagnostics" className="text-cyan-400 hover:text-cyan-300 transition-colors">
									Read Full Case Study →
								</Link>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full mb-2">Finance</span>
									<h3 className="text-2xl font-semibold mb-3 text-fuchsia-400">Fraud Detection System</h3>
								</div>
								<p className="text-white/70 mb-4">
									Implemented an AI-powered fraud detection system for a leading bank, preventing $50M in fraudulent transactions and reducing false positives by 40%.
								</p>
								<div className="grid grid-cols-2 gap-4 mb-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-fuchsia-400">$50M</div>
										<div className="text-sm text-white/60">Fraud Prevented</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">40%</div>
										<div className="text-sm text-white/60">False Positive Reduction</div>
									</div>
								</div>
								<Link href="/case-studies/finance-fraud-detection" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
									Read Full Case Study →
								</Link>
							</div>
						</div>
					</section>

					{/* Industry Case Studies */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Industry Success Stories</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<span className="inline-block px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full mb-3">Manufacturing</span>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Smart Factory Transformation</h3>
								<p className="text-white/70 mb-4">
									Helped a manufacturing company implement Industry 4.0 solutions, resulting in 35% increased productivity and 20% reduced operational costs.
								</p>
								<div className="flex justify-between items-center">
									<div className="text-sm text-white/60">Read More →</div>
									<div className="text-2xl font-bold text-green-400">35%</div>
								</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full mb-3">Retail</span>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Omnichannel Platform</h3>
								<p className="text-white/70 mb-4">
									Built a unified omnichannel platform for a retail chain, increasing online sales by 150% and improving customer satisfaction scores.
								</p>
								<div className="flex justify-between items-center">
									<div className="text-sm text-white/60">Read More →</div>
									<div className="text-2xl font-bold text-blue-400">150%</div>
								</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<span className="inline-block px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full mb-3">Technology</span>
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Cloud Migration</h3>
								<p className="text-white/70 mb-4">
									Successfully migrated a tech company's infrastructure to the cloud, achieving 99.9% uptime and 40% cost savings.
								</p>
								<div className="flex justify-between items-center">
									<div className="text-sm text-white/60">Read More →</div>
									<div className="text-2xl font-bold text-purple-400">40%</div>
								</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<span className="inline-block px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm rounded-full mb-3">Government</span>
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Digital Transformation</h3>
								<p className="text-white/70 mb-4">
									Modernized government services with digital solutions, reducing processing time by 70% and improving citizen satisfaction.
								</p>
								<div className="flex justify-between items-center">
									<div className="text-sm text-white/60">Read More →</div>
									<div className="text-2xl font-bold text-yellow-400">70%</div>
								</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-red-400/50 transition-all duration-200">
								<span className="inline-block px-3 py-1 bg-red-400/20 text-red-400 text-sm rounded-full mb-3">Education</span>
								<h3 className="text-xl font-semibold mb-3 text-red-400">Learning Analytics Platform</h3>
								<p className="text-white/70 mb-4">
									Developed an AI-powered learning analytics platform for a university, improving student outcomes by 30% and reducing dropout rates.
								</p>
								<div className="flex justify-between items-center">
									<div className="text-sm text-white/60">Read More →</div>
									<div className="text-2xl font-bold text-red-400">30%</div>
								</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-indigo-400/50 transition-all duration-200">
								<span className="inline-block px-3 py-1 bg-indigo-400/20 text-indigo-400 text-sm rounded-full mb-3">Energy</span>
								<h3 className="text-xl font-semibold mb-3 text-indigo-400">Smart Grid Optimization</h3>
								<p className="text-white/70 mb-4">
									Implemented smart grid solutions for an energy company, achieving 25% energy efficiency improvement and 15% cost reduction.
								</p>
								<div className="flex justify-between items-center">
									<div className="text-sm text-white/60">Read More →</div>
									<div className="text-2xl font-bold text-indigo-400">25%</div>
								</div>
							</div>
						</div>
					</section>

					{/* Success Metrics */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Success Metrics</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
								<div className="text-white/70">Successful Projects</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-fuchsia-400 mb-2">98%</div>
								<div className="text-white/70">Client Satisfaction</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-purple-400 mb-2">$2B+</div>
								<div className="text-white/70">Value Delivered</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-green-400 mb-2">50+</div>
								<div className="text-white/70">Industries Served</div>
							</div>
						</div>
					</section>

					{/* Client Testimonials */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">What Our Clients Say</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
										J
									</div>
									<div>
										<div className="font-semibold text-white">John Smith</div>
										<div className="text-sm text-white/60">CTO, TechCorp</div>
									</div>
								</div>
								<p className="text-white/80 italic">
									"Zion Tech Group transformed our business with their AI solutions. The results exceeded our expectations, and their team's expertise is unmatched."
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
										M
									</div>
									<div>
										<div className="font-semibold text-white">Maria Garcia</div>
										<div className="text-sm text-white/60">CEO, HealthTech</div>
									</div>
								</div>
								<p className="text-white/80 italic">
									"The healthcare AI platform they built for us has revolutionized our diagnostic capabilities. Their understanding of our industry needs is exceptional."
								</p>
							</div>
						</div>
					</section>

					{/* Why Choose Zion */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group?</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-cyan-400">Proven Track Record</h3>
								<p className="text-white/70 mb-4">
									Our case studies demonstrate consistent success across industries, with measurable results and satisfied clients.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• 200+ successful projects</li>
									<li>• 98% client satisfaction rate</li>
									<li>• $2B+ value delivered</li>
									<li>• 50+ industries served</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-fuchsia-400">Expert Team</h3>
								<p className="text-white/70 mb-4">
									Our team brings decades of combined experience in cutting-edge technologies and industry best practices.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Industry experts</li>
									<li>• Certified professionals</li>
									<li>• Continuous innovation</li>
									<li>• Proven methodologies</li>
								</ul>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Create Your Success Story?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our technology solutions can transform your business and deliver measurable results like the ones in our case studies.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
									Start Your Project
								</Link>
								<Link href="/services" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									Explore Our Services
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}