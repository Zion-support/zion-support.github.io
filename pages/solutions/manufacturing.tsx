import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ManufacturingSolutionsPage() {
	return (
		<>
			<Head>
				<title>Manufacturing Solutions | Zion Tech Group - Smart Manufacturing & Industry 4.0</title>
				<meta name="description" content="Transform manufacturing with Zion Tech Group's smart manufacturing solutions. Predictive maintenance, quality control, supply chain optimization, and Industry 4.0 technology." />
				<link rel="canonical" href="https://ziontechgroup.com/solutions/manufacturing" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
							Manufacturing Solutions
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Revolutionize manufacturing with Industry 4.0 technology solutions. From predictive maintenance to smart supply chains, we're building the future of manufacturing.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200">
								Transform Manufacturing
							</Link>
							<Link href="/solutions" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								All Solutions
							</Link>
						</div>
					</section>

					{/* Manufacturing Solutions Overview */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Manufacturing Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Predictive Maintenance</h3>
								<p className="text-white/70 mb-4">AI-powered predictive maintenance systems that prevent equipment failures and optimize uptime.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Equipment monitoring</li>
									<li>• Failure prediction</li>
									<li>• Maintenance scheduling</li>
									<li>• Cost optimization</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-indigo-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-indigo-400">Quality Control</h3>
								<p className="text-white/70 mb-4">Intelligent quality control systems that ensure product quality and reduce defects.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Automated inspection</li>
									<li>• Defect detection</li>
									<li>• Quality metrics</li>
									<li>• Process improvement</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Supply Chain Optimization</h3>
								<p className="text-white/70 mb-4">Smart supply chain solutions that optimize inventory, reduce costs, and improve efficiency.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Inventory management</li>
									<li>• Demand forecasting</li>
									<li>• Supplier optimization</li>
									<li>• Logistics planning</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Smart Factories</h3>
								<p className="text-white/70 mb-4">Industry 4.0 solutions that create intelligent, connected manufacturing environments.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• IoT integration</li>
									<li>• Real-time monitoring</li>
									<li>• Automated workflows</li>
									<li>• Data analytics</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Production Optimization</h3>
								<p className="text-white/70 mb-4">AI-powered production optimization that maximizes efficiency and reduces waste.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Process optimization</li>
									<li>• Resource allocation</li>
									<li>• Waste reduction</li>
									<li>• Performance analytics</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-red-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-red-400">Digital Twins</h3>
								<p className="text-white/70 mb-4">Digital twin technology for virtual manufacturing simulation and optimization.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Virtual simulation</li>
									<li>• Performance modeling</li>
									<li>• Scenario testing</li>
									<li>• Optimization</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Manufacturing Applications */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Manufacturing Applications We Build</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-purple-400">Manufacturing Execution Systems</h3>
								<p className="text-white/70 mb-4">
									Comprehensive MES solutions that manage and optimize manufacturing operations in real-time.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Production planning</li>
									<li>• Work order management</li>
									<li>• Quality control</li>
									<li>• Performance tracking</li>
									<li>• Compliance management</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-indigo-400">Industrial IoT Platforms</h3>
								<p className="text-white/70 mb-4">
									Connected IoT platforms that enable real-time monitoring and control of manufacturing equipment.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Sensor integration</li>
									<li>• Data collection</li>
									<li>• Remote monitoring</li>
									<li>• Predictive analytics</li>
									<li>• Alert systems</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-blue-400">Quality Management Systems</h3>
								<p className="text-white/70 mb-4">
									Comprehensive quality management solutions that ensure product quality and compliance.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Quality planning</li>
									<li>• Inspection management</li>
									<li>• Non-conformance tracking</li>
									<li>• Corrective actions</li>
									<li>• Quality reporting</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-green-400">Supply Chain Management</h3>
								<p className="text-white/70 mb-4">
									Intelligent supply chain solutions that optimize procurement, inventory, and logistics.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Supplier management</li>
									<li>• Inventory optimization</li>
									<li>• Demand forecasting</li>
									<li>• Logistics planning</li>
									<li>• Cost optimization</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Manufacturing Industries */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Industries We Transform</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-purple-400">Automotive</h3>
								<p className="text-white/70 text-sm">Smart manufacturing solutions for automotive production and assembly.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-indigo-400">Electronics</h3>
								<p className="text-white/70 text-sm">Precision manufacturing and quality control for electronics production.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-blue-400">Pharmaceuticals</h3>
								<p className="text-white/70 text-sm">Compliance-focused manufacturing solutions for pharmaceutical production.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-lg font-semibold mb-2 text-green-400">Food & Beverage</h3>
								<p className="text-white/70 text-sm">Safety and quality solutions for food and beverage manufacturing.</p>
							</div>
						</div>
					</section>

					{/* Manufacturing Benefits */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Benefits of Our Manufacturing Solutions</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Increased Efficiency</h3>
								<p className="text-white/70 mb-4">Optimized processes and automated workflows lead to significant efficiency improvements.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Higher productivity</li>
									<li>• Reduced downtime</li>
									<li>• Better resource use</li>
									<li>• Faster production</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-indigo-400">Improved Quality</h3>
								<p className="text-white/70 mb-4">Advanced quality control systems ensure consistent product quality and reduce defects.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Fewer defects</li>
									<li>• Consistent quality</li>
									<li>• Better compliance</li>
									<li>• Customer satisfaction</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Cost Reduction</h3>
								<p className="text-white/70 mb-4">Optimized operations and predictive maintenance lead to significant cost savings.</p>
								<ul className="text-white/60 text-sm space-y-1">
									<li>• Lower maintenance costs</li>
									<li>• Reduced waste</li>
									<li>• Better inventory management</li>
									<li>• Energy optimization</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Why Choose Zion for Manufacturing */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Why Choose Zion Tech Group for Manufacturing Solutions?</h2>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-purple-400">Manufacturing Expertise</h3>
								<p className="text-white/80 mb-4">
									Our team includes manufacturing professionals and technology experts with deep understanding of industrial processes and Industry 4.0.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• Manufacturing domain experts</li>
									<li>• Industry 4.0 knowledge</li>
									<li>• Process understanding</li>
									<li>• Best practices</li>
								</ul>
							</div>
							<div>
								<h3 className="text-2xl font-semibold mb-4 text-indigo-400">Proven Track Record</h3>
								<p className="text-white/80 mb-4">
									We have successfully delivered manufacturing solutions that have improved efficiency, quality, and productivity.
								</p>
								<ul className="text-white/70 space-y-2">
									<li>• Successful implementations</li>
									<li>• Measurable outcomes</li>
									<li>• Client satisfaction</li>
									<li>• Ongoing support</li>
								</ul>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Manufacturing?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our manufacturing solutions can improve efficiency, quality, and productivity in your operations.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200">
									Start Your Manufacturing Transformation
								</Link>
								<Link href="/solutions" className="px-8 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									Explore All Solutions
								</Link>
							</div>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}