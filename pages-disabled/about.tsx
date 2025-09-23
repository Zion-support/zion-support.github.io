import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About Zion Tech Group | Leading AI & Technology Solutions</title>
				<meta name="description" content="Zion Tech Group is a leading technology company specializing in AI solutions, cybersecurity, cloud infrastructure, and enterprise automation. Learn about our mission, team, and innovative approach." />
				<link rel="canonical" href="https://ziontechgroup.com/about" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							About Zion Tech Group
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							We are a forward-thinking technology company dedicated to building autonomous systems and cutting-edge technology solutions that drive business transformation.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/services" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
								Our Services
							</Link>
							<Link href="/team" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								Meet Our Team
							</Link>
							<Link href="/contact" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								Get In Touch
							</Link>
						</div>
					</section>

					{/* Mission & Vision */}
					<section className="mb-16">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
							<div>
								<h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
								<p className="text-lg text-white/80 mb-4">
									To democratize access to cutting-edge technology solutions and empower businesses with autonomous systems that drive innovation and growth.
								</p>
								<p className="text-white/70">
									We believe that every organization, regardless of size, should have access to enterprise-grade technology solutions that can transform their operations and competitive position.
								</p>
							</div>
							<div>
								<h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Our Vision</h2>
								<p className="text-lg text-white/80 mb-4">
									To be the leading provider of autonomous technology solutions that enable businesses to operate more efficiently, securely, and innovatively.
								</p>
								<p className="text-white/70">
									We envision a future where AI and automation work seamlessly together to solve complex business challenges and unlock new opportunities.
								</p>
							</div>
						</div>
					</section>

					{/* Core Values */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Core Values</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Innovation First</h3>
								<p className="text-white/70">We constantly push the boundaries of what's possible, exploring emerging technologies and creative solutions.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Client Success</h3>
								<p className="text-white/70">Your success is our success. We're committed to delivering solutions that drive measurable business outcomes.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-purple-400">Excellence</h3>
								<p className="text-white/70">We maintain the highest standards of quality in everything we do, from code to customer service.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-green-400">Security & Trust</h3>
								<p className="text-white/70">Security is built into every solution we create, ensuring your data and systems remain protected.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-blue-400">Collaboration</h3>
								<p className="text-white/70">We work closely with our clients, partners, and team members to achieve the best possible outcomes.</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<h3 className="text-xl font-semibold mb-3 text-yellow-400">Continuous Learning</h3>
								<p className="text-white/70">We stay ahead of the curve by continuously learning and adapting to new technologies and market trends.</p>
							</div>
						</div>
					</section>

					{/* What We Do */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">What We Do</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<Link href="/services/ai-solutions" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200 group-hover:bg-white/10">
									<h3 className="text-xl font-semibold mb-3 text-cyan-400">AI & Machine Learning</h3>
									<p className="text-white/70">Custom AI development, autonomous systems, and intelligent automation solutions.</p>
								</div>
							</Link>
							<Link href="/services/cybersecurity" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200 group-hover:bg-white/10">
									<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Cybersecurity</h3>
									<p className="text-white/70">Comprehensive security solutions, compliance automation, and zero-trust architectures.</p>
								</div>
							</Link>
							<Link href="/services/cloud-devops" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200 group-hover:bg-white/10">
									<h3 className="text-xl font-semibold mb-3 text-purple-400">Cloud & DevOps</h3>
									<p className="text-white/70">Scalable cloud infrastructure, automation, and streamlined development processes.</p>
								</div>
							</Link>
							<Link href="/services/data-analytics" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200 group-hover:bg-white/10">
									<h3 className="text-xl font-semibold mb-3 text-green-400">Data Analytics</h3>
									<p className="text-white/70">Data engineering, analytics platforms, and real-time insights for informed decision-making.</p>
								</div>
							</Link>
							<Link href="/services/quantum-technology" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200 group-hover:bg-white/10">
									<h3 className="text-xl font-semibold mb-3 text-blue-400">Quantum Technology</h3>
									<p className="text-white/70">Next-generation computing solutions and quantum-ready infrastructure.</p>
								</div>
							</Link>
							<Link href="/solutions" className="group">
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200 group-hover:bg-white/10">
									<h3 className="text-xl font-semibold mb-3 text-yellow-400">Enterprise Solutions</h3>
									<p className="text-white/70">Large-scale business solutions tailored to your industry and specific needs.</p>
								</div>
							</Link>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Let's discuss how our technology solutions can help you achieve your goals and stay ahead of the competition.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
									Get Started Today
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