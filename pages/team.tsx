import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TeamPage() {
	return (
		<>
			<Head>
				<title>Our Team | Zion Tech Group - Expert Technology Professionals</title>
				<meta name="description" content="Meet the expert team at Zion Tech Group. Our professionals bring decades of experience in AI, cybersecurity, cloud computing, and enterprise technology solutions." />
				<link rel="canonical" href="https://ziontechgroup.com/team" />
			</Head>
			<main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
				<div className="container mx-auto px-6 py-16">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
							Our Team
						</h1>
						<p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
							Meet the brilliant minds behind Zion Tech Group. Our team of experts brings together decades of experience in cutting-edge technologies, AI, cybersecurity, and enterprise solutions.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
								Join Our Team
							</Link>
							<Link href="/services" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
								Our Services
							</Link>
						</div>
					</section>

					{/* Leadership Team */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Leadership Team</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
										K
									</div>
									<h3 className="text-xl font-semibold text-cyan-400">Kleber</h3>
									<p className="text-fuchsia-400 font-medium">Founder & CEO</p>
								</div>
								<p className="text-white/70 text-center mb-4">
									Visionary leader with over 15 years of experience in technology innovation and business transformation.
								</p>
								<div className="text-center">
									<span className="inline-block px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">AI Strategy</span>
									<span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full ml-2">Innovation</span>
								</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-fuchsia-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-24 h-24 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
										M
									</div>
									<h3 className="text-xl font-semibold text-fuchsia-400">Dr. Sarah Chen</h3>
									<p className="text-purple-400 font-medium">Chief Technology Officer</p>
								</div>
								<p className="text-white/70 text-center mb-4">
									PhD in Computer Science with expertise in AI, machine learning, and autonomous systems.
								</p>
								<div className="text-center">
									<span className="inline-block px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full">AI Research</span>
									<span className="inline-block px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full ml-2">ML</span>
								</div>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
										J
									</div>
									<h3 className="text-xl font-semibold text-purple-400">James Rodriguez</h3>
									<p className="text-blue-400 font-medium">Chief Security Officer</p>
								</div>
								<p className="text-white/70 text-center mb-4">
									Cybersecurity expert with 20+ years protecting Fortune 500 companies and government agencies.
								</p>
								<div className="text-center">
									<span className="inline-block px-3 py-1 bg-purple-400/20 text-purple-400 text-sm rounded-full">Security</span>
									<span className="inline-block px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full ml-2">Compliance</span>
								</div>
							</div>
						</div>
					</section>

					{/* Core Team */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Core Team</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-green-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										A
									</div>
									<h3 className="text-lg font-semibold text-green-400">Alex Kim</h3>
									<p className="text-emerald-400 text-sm">AI Engineer</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Specializes in deep learning and neural network architectures.
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										R
									</div>
									<h3 className="text-lg font-semibold text-blue-400">Rachel Wang</h3>
									<p className="text-cyan-400 text-sm">Cloud Architect</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Expert in AWS, Azure, and multi-cloud strategies.
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										D
									</div>
									<h3 className="text-lg font-semibold text-yellow-400">David Park</h3>
									<p className="text-orange-400 text-sm">DevOps Engineer</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Kubernetes and infrastructure automation specialist.
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-red-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										L
									</div>
									<h3 className="text-lg font-semibold text-red-400">Lisa Thompson</h3>
									<p className="text-pink-400 text-sm">Data Scientist</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Expert in predictive analytics and ML model development.
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-indigo-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										M
									</div>
									<h3 className="text-lg font-semibold text-indigo-400">Mike Johnson</h3>
									<p className="text-purple-400 text-sm">Security Engineer</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Penetration testing and threat intelligence expert.
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-teal-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-green-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										S
									</div>
									<h3 className="text-lg font-semibold text-teal-400">Sophie Chen</h3>
									<p className="text-green-400 text-sm">UX Designer</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Creates intuitive user experiences for complex systems.
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-rose-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-rose-400 to-red-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										T
									</div>
									<h3 className="text-lg font-semibold text-rose-400">Tom Wilson</h3>
									<p className="text-red-400 text-sm">Product Manager</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Drives product strategy and customer success.
								</p>
							</div>

							<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-violet-400/50 transition-all duration-200">
								<div className="text-center mb-4">
									<div className="w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-3">
										E
									</div>
									<h3 className="text-lg font-semibold text-violet-400">Emma Davis</h3>
									<p className="text-purple-400 text-sm">Business Analyst</p>
								</div>
								<p className="text-white/70 text-sm text-center">
									Bridges technology and business requirements.
								</p>
							</div>
						</div>
					</section>

					{/* Team Culture */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Culture</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-cyan-400">Innovation First</h3>
								<p className="text-white/70 mb-4">
									We foster a culture of continuous learning and experimentation, encouraging our team to push boundaries and explore new technologies.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Weekly innovation sessions</li>
									<li>• Hackathons and innovation challenges</li>
									<li>• Continuous learning programs</li>
									<li>• Research and development initiatives</li>
								</ul>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6">
								<h3 className="text-2xl font-semibold mb-4 text-fuchsia-400">Collaboration & Growth</h3>
								<p className="text-white/70 mb-4">
									We believe in the power of teamwork and personal development, creating an environment where everyone can thrive and grow.
								</p>
								<ul className="text-white/60 space-y-2">
									<li>• Cross-functional collaboration</li>
									<li>• Mentorship programs</li>
									<li>• Professional development</li>
									<li>• Knowledge sharing sessions</li>
								</ul>
							</div>
						</div>
					</section>

					{/* Values */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Our Values</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🎯
								</div>
								<h3 className="text-xl font-semibold mb-3 text-cyan-400">Excellence</h3>
								<p className="text-white/70">
									We strive for excellence in everything we do, from code quality to customer service.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🤝
								</div>
								<h3 className="text-xl font-semibold mb-3 text-fuchsia-400">Integrity</h3>
								<p className="text-white/70">
									We maintain the highest ethical standards and build trust with our clients and partners.
								</p>
							</div>
							<div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
								<div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
									🚀
								</div>
								<h3 className="text-xl font-semibold mb-3 text-green-400">Innovation</h3>
								<p className="text-white/70">
									We embrace change and continuously innovate to stay ahead of technology trends.
								</p>
							</div>
						</div>
					</section>

					{/* Join Our Team */}
					<section className="mb-16">
						<h2 className="text-3xl font-bold mb-8 text-center text-white">Join Our Team</h2>
						<div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								We're always looking for talented individuals who are passionate about technology and innovation. 
								Join us in building the future of AI and enterprise solutions.
							</p>
							<div className="flex flex-wrap justify-center gap-4">
								<Link href="/careers" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
									View Open Positions
								</Link>
								<Link href="/contact" className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200">
									Contact Us
								</Link>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-400/30 rounded-lg p-8">
							<h2 className="text-2xl font-bold mb-4 text-white">Ready to Work with Our Expert Team?</h2>
							<p className="text-white/80 mb-6 max-w-2xl mx-auto">
								Our team of experts is ready to help you transform your business with cutting-edge technology solutions.
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