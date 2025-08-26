import Head from 'next/head';
import { AppLayout } from '../src/layout/AppLayout';
import Link from 'next/link';

export default function About() {
	return (
		<AppLayout>
			<Head>
				<title>About Us - Zion Tech Group</title>
				<meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI, cloud, and cybersecurity solutions." />
				<meta property="og:title" content="About Us - Zion Tech Group" />
				<meta property="og:description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI, cloud, and cybersecurity solutions." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ziontechgroup.com/about" />
			</Head>
			
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
				
				<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						About <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Zion Tech Group</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						Pioneering the future of technology through innovative AI solutions, secure cloud platforms, and transformative digital experiences.
					</p>
				</div>
			</section>

			{/* Mission Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Our Mission
							</h2>
							<p className="text-lg text-gray-300 mb-6 leading-relaxed">
								To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to leverage the power of AI, cloud computing, and cybersecurity to accelerate their growth and digital transformation.
							</p>
							<p className="text-lg text-gray-300 mb-8 leading-relaxed">
								We believe that every organization deserves access to enterprise-grade technology solutions that were once only available to Fortune 500 companies.
							</p>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Get in Touch
							</Link>
						</div>
						<div className="relative">
							<div className="w-full h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl border border-cyan-400/30 flex items-center justify-center">
								<div className="text-center">
									<div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
										</svg>
									</div>
									<p className="text-cyan-400 font-semibold">Innovation First</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 bg-black">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Our Core Values
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							The principles that guide everything we do
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
							<p className="text-gray-400">
								We constantly push the boundaries of what's possible, exploring emerging technologies and finding new ways to solve complex problems.
							</p>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Trust & Security</h3>
							<p className="text-gray-400">
								Security is at the heart of everything we build. We maintain the highest standards of data protection and privacy.
							</p>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50">
							<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Collaboration</h3>
							<p className="text-gray-400">
								We believe in the power of partnership, working closely with our clients to understand their needs and deliver tailored solutions.
							</p>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Excellence</h3>
							<p className="text-gray-400">
								We strive for excellence in every project, delivering high-quality solutions that exceed expectations and drive measurable results.
							</p>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50">
							<div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Agility</h3>
							<p className="text-gray-400">
								We move fast and adapt quickly to changing market conditions and client needs, ensuring timely delivery of solutions.
							</p>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50">
							<div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Passion</h3>
							<p className="text-gray-400">
								We're passionate about technology and its potential to transform businesses and improve lives.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Our Leadership Team
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Experienced professionals dedicated to driving innovation and delivering exceptional results
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-4xl font-bold text-white">K</span>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
							<p className="text-cyan-400 font-medium mb-2">Founder & CEO</p>
							<p className="text-gray-400 text-sm">
								Visionary leader with expertise in AI, cloud architecture, and digital transformation strategies.
							</p>
						</div>
						
						<div className="text-center">
							<div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-4xl font-bold text-white">T</span>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">Tech Team</h3>
							<p className="text-cyan-400 font-medium mb-2">Engineering & Development</p>
							<p className="text-gray-400 text-sm">
								Skilled professionals specializing in AI, cybersecurity, cloud infrastructure, and software development.
							</p>
						</div>
						
						<div className="text-center">
							<div className="w-32 h-32 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<span className="text-4xl font-bold text-white">A</span>
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">Advisory Board</h3>
							<p className="text-cyan-400 font-medium mb-2">Strategic Guidance</p>
							<p className="text-gray-400 text-sm">
								Industry experts providing strategic direction and market insights to drive innovation.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
						Ready to Work Together?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss how we can help transform your business with cutting-edge technology solutions.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
						>
							Start a Conversation
						</Link>
						<Link 
							href="/case-studies" 
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
						>
							View Our Work
						</Link>
					</div>
				</div>
			</section>
		</AppLayout>
	);
}
