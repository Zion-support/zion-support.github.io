import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function EnterpriseSolutionsPage() {
	return (
		<>
			<Head>
				<title>Enterprise Solutions | Zion Tech Group - Large-Scale Business Technology Solutions</title>
				<meta name="description" content="Transform your enterprise with Zion Tech Group's comprehensive business solutions. Digital transformation, legacy modernization, enterprise automation, and business process optimization." />
				<link rel="canonical" href="https://ziontechgroup.com/services/enterprise-solutions" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
							Enterprise Solutions
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Transform your enterprise with comprehensive technology solutions designed for large-scale operations. From digital transformation to legacy modernization, we deliver enterprise-grade solutions that drive business growth.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-200">
								Transform Your Enterprise
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								All Services
							</Link>
						</div>
					</section>

					{/* Enterprise Services Overview */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Enterprise Services</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Digital Transformation</h3>
								<p className="text-white/70 mb-4">Complete digital transformation solutions to modernize your business operations and customer experience.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Business process digitization</li>
									<li>• Customer experience transformation</li>
									<li>• Digital strategy development</li>
									<li>• Change management</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-orange-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-orange-400">Legacy Modernization</h3>
								<p className="text-white/70 mb-4">Transform legacy systems into modern, scalable, and maintainable technology solutions.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• System migration strategies</li>
									<li>• Code modernization</li>
									<li>• Database upgrades</li>
									<li>• API development</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-red-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-red-400">Enterprise Automation</h3>
								<p className="text-white/70 mb-4">Comprehensive automation solutions that streamline operations and improve efficiency across your organization.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Workflow automation</li>
									<li>• RPA implementation</li>
									<li>• Business process automation</li>
									<li>• Integration automation</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Enterprise Architecture</h3>
								<p className="text-white/70 mb-4">Design and implement scalable enterprise architectures that support business growth and innovation.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Architecture design</li>
									<li>• Technology roadmaps</li>
									<li>• Integration strategies</li>
									<li>• Scalability planning</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Data & Analytics</h3>
								<p className="text-white/70 mb-4">Enterprise data solutions that provide insights and enable data-driven decision making.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Data warehousing</li>
									<li>• Business intelligence</li>
									<li>• Advanced analytics</li>
									<li>• Data governance</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Cloud Migration</h3>
								<p className="text-white/70 mb-4">Seamless migration to cloud platforms with minimal disruption to business operations.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Cloud strategy development</li>
									<li>• Migration planning</li>
									<li>• Multi-cloud solutions</li>
									<li>• Cost optimization</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Enterprise Solutions */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Enterprise Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-yellow-400">Business Process Optimization</h3>
								<p className="text-white/70 mb-4">
									Analyze, redesign, and optimize business processes to improve efficiency, reduce costs, and enhance customer satisfaction.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Process analysis and mapping</li>
									<li>• Bottleneck identification</li>
									<li>• Workflow redesign</li>
									<li>• Performance metrics</li>
									<li>• Continuous improvement</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-orange-400">Enterprise Integration</h3>
								<p className="text-white/70 mb-4">
									Seamlessly integrate disparate systems and applications to create a unified enterprise technology ecosystem.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• API development and management</li>
									<li>• Middleware solutions</li>
									<li>• Data synchronization</li>
									<li>• Real-time integration</li>
									<li>• Error handling and monitoring</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-red-400">Change Management</h3>
								<p className="text-white/70 mb-4">
									Comprehensive change management strategies to ensure successful adoption of new technologies and processes.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Stakeholder engagement</li>
									<li>• Training and development</li>
									<li>• Communication strategies</li>
									<li>• Resistance management</li>
									<li>• Success measurement</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-green-400">Performance Optimization</h3>
								<p className="text-white/70 mb-4">
									Optimize system performance, scalability, and reliability to support enterprise growth and user demands.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Performance monitoring</li>
									<li>• Load testing and optimization</li>
									<li>• Database optimization</li>
									<li>• Caching strategies</li>
									<li>• Scalability planning</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Enterprise Capabilities */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Enterprise Capabilities</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🏢
								</div>
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Large-Scale Projects</h3>
								<p className="text-white/70">
									Experience managing complex, multi-year enterprise projects with hundreds of stakeholders and multiple systems.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔒
								</div>
								<h3 className="text-xl font-semibold mb-3 text-orange-400">Enterprise Security</h3>
								<p className="text-white/70">
									Comprehensive security solutions that meet enterprise compliance requirements and protect sensitive data.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									📊
								</div>
								<h3 className="text-xl font-semibold mb-3 text-red-400">Enterprise Analytics</h3>
								<p className="text-white/70">
									Advanced analytics and business intelligence solutions that provide insights across the entire organization.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									☁️
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Cloud Expertise</h3>
								<p className="text-white/70">
									Deep expertise in cloud platforms and migration strategies for enterprise-scale applications and data.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🤖
								</div>
								<h3 className="text-xl font-semibold mb-3 text-blue-400">AI Integration</h3>
								<p className="text-white/70">
									Seamless integration of AI and machine learning capabilities into existing enterprise systems and workflows.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-lg flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🔄
								</div>
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Continuous Support</h3>
								<p className="text-white/70">
									24/7 enterprise support and maintenance to ensure your systems remain operational and optimized.
								</p>
							</div>
						</div>
					</section>

					{/* Enterprise Process */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Enterprise Process</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									1
								</div>
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Discovery & Assessment</h3>
								<p className="text-white/70 text-sm">
									Comprehensive analysis of your current systems, processes, and business requirements.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									2
								</div>
								<h3 className="text-xl font-semibold mb-3 text-orange-400">Strategy & Planning</h3>
								<p className="text-white/70 text-sm">
									Develop comprehensive transformation strategy and detailed implementation roadmap.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									3
								</div>
								<h3 className="text-xl font-semibold mb-3 text-red-400">Implementation</h3>
								<p className="text-white/70 text-sm">
									Execute transformation using enterprise best practices and proven methodologies.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									4
								</div>
								<h3 className="text-xl font-semibold mb-3 text-pink-400">Optimization</h3>
								<p className="text-white/70 text-sm">
									Continuous monitoring, optimization, and support to ensure peak performance.
								</p>
							</div>
						</div>
					</section>

					{/* Enterprise Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Enterprise Benefits</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-yellow-400">Operational Excellence</h3>
								<p className="text-white/70 mb-4">
									Streamline operations, reduce costs, and improve efficiency across your entire organization.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• 30-50% process efficiency improvement</li>
									<li>• 25-40% operational cost reduction</li>
									<li>• Faster time to market</li>
									<li>• Improved resource utilization</li>
									<li>• Enhanced customer satisfaction</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-orange-400">Competitive Advantage</h3>
								<p className="text-white/70 mb-4">
									Gain competitive advantages through technology innovation and digital transformation.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Market differentiation</li>
									<li>• Innovation leadership</li>
									<li>• Agility and responsiveness</li>
									<li>• Customer experience improvement</li>
									<li>• Data-driven decision making</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Why Choose Zion for Enterprise */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group for Enterprise Solutions?</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-yellow-400">Enterprise Experience</h3>
								<p className="text-white/80 mb-4">
									Our team has extensive experience working with Fortune 500 companies and large enterprises across various industries.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• 200+ enterprise projects delivered</li>
									<li>• Fortune 500 client experience</li>
									<li>• Multi-industry expertise</li>
									<li>• Large-scale transformation experience</li>
								</ul>
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-orange-400">Proven Methodologies</h3>
								<p className="text-white/80 mb-4">
									We follow industry best practices and proven methodologies to ensure successful enterprise transformations.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• Agile and DevOps practices</li>
									<li>• Change management expertise</li>
									<li>• Risk mitigation strategies</li>
									<li>• Quality assurance processes</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Enterprise Statistics */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Enterprise Success Metrics</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
								<div className="text-white/70">Enterprise Projects</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-orange-400 mb-2">98%</div>
								<div className="text-white/70">Success Rate</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-red-400 mb-2">$2B+</div>
								<div className="text-white/70">Value Delivered</div>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
								<div className="text-white/70">Enterprise Support</div>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Enterprise?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our enterprise solutions can help you achieve operational excellence and gain competitive advantages in your industry.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-200">
									Start Your Transformation
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