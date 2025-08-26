import Head from 'next/head';
import { AppLayout } from '../src/layout/AppLayout';
import Link from 'next/link';

export default function Careers() {
	return (
		<AppLayout>
			<Head>
				<title>Careers - Zion Tech Group</title>
				<meta name="description" content="Join Zion Tech Group's innovative team and help shape the future of AI, cloud, and cybersecurity technology." />
				<meta property="og:title" content="Careers - Zion Tech Group" />
				<meta property="og:description" content="Join Zion Tech Group's innovative team and help shape the future of AI, cloud, and cybersecurity technology." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ziontechgroup.com/careers" />
			</Head>
			
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
				
				<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Team</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
						Help us build the future of technology. We're looking for passionate individuals who want to make a difference in AI, cloud computing, and cybersecurity.
					</p>
					<div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl p-6 max-w-2xl mx-auto">
						<p className="text-yellow-300 font-medium">
							🚀 We are currently hiring! Check out our open positions below.
						</p>
					</div>
				</div>
			</section>

			{/* Open Positions Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Open Positions
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Explore opportunities to join our growing team
						</p>
					</div>
					
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* AI Engineer Position */}
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-semibold text-white mb-2">Senior AI Engineer</h3>
									<p className="text-cyan-400 font-medium">Full-time • Remote</p>
								</div>
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Join our AI team to develop cutting-edge autonomous systems, machine learning models, and intelligent automation solutions.
							</p>
							<div className="mb-6">
								<h4 className="text-white font-semibold mb-3">Requirements:</h4>
								<ul className="text-gray-400 text-sm space-y-1">
									<li>• 5+ years experience in AI/ML development</li>
									<li>• Expertise in Python, TensorFlow, PyTorch</li>
									<li>• Experience with cloud AI services</li>
									<li>• Strong problem-solving skills</li>
								</ul>
							</div>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Apply Now
							</Link>
						</div>

						{/* Cloud Architect Position */}
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-semibold text-white mb-2">Cloud Solutions Architect</h3>
									<p className="text-cyan-400 font-medium">Full-time • Remote</p>
								</div>
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Design and implement scalable cloud infrastructure solutions using AWS, Azure, and Google Cloud Platform.
							</p>
							<div className="mb-6">
								<h4 className="text-white font-semibold mb-3">Requirements:</h4>
								<ul className="text-gray-400 text-sm space-y-1">
									<li>• 7+ years cloud architecture experience</li>
									<li>• AWS/Azure/GCP certifications</li>
									<li>• Kubernetes and Docker expertise</li>
									<li>• Infrastructure as Code experience</li>
								</ul>
							</div>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Apply Now
							</Link>
						</div>

						{/* Cybersecurity Specialist Position */}
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-semibold text-white mb-2">Cybersecurity Specialist</h3>
									<p className="text-cyan-400 font-medium">Full-time • Remote</p>
								</div>
								<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Protect our clients' digital assets with advanced security solutions, threat detection, and incident response capabilities.
							</p>
							<div className="mb-6">
								<h4 className="text-white font-semibold mb-3">Requirements:</h4>
								<ul className="text-gray-400 text-sm space-y-1">
									<li>• 5+ years cybersecurity experience</li>
									<li>• CISSP, CEH, or similar certifications</li>
									<li>• Penetration testing skills</li>
									<li>• Security architecture knowledge</li>
								</ul>
							</div>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Apply Now
							</Link>
						</div>

						{/* Full Stack Developer Position */}
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-semibold text-white mb-2">Full Stack Developer</h3>
									<p className="text-cyan-400 font-medium">Full-time • Remote</p>
								</div>
								<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
									</svg>
								</div>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Build modern web applications and microservices using React, Node.js, and cloud-native technologies.
							</p>
							<div className="mb-6">
								<h4 className="text-white font-semibold mb-3">Requirements:</h4>
								<ul className="text-gray-400 text-sm space-y-1">
									<li>• 3+ years full-stack development</li>
									<li>• React, Node.js, TypeScript</li>
									<li>• Database design experience</li>
									<li>• API development skills</li>
								</ul>
							</div>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
							>
								Apply Now
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20 bg-black">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Why Work With Us?
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							We offer competitive benefits and a supportive work environment
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Flexible Work</h3>
							<p className="text-gray-400 text-sm">
								Remote-first culture with flexible hours and work-life balance
							</p>
						</div>
						
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Competitive Pay</h3>
							<p className="text-gray-400 text-sm">
								Attractive salary packages with equity options and bonuses
							</p>
						</div>
						
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Learning & Growth</h3>
							<p className="text-gray-400 text-sm">
								Continuous learning opportunities and career development
							</p>
						</div>
						
						<div className="text-center p-6">
							<div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
							<h3 className="text-lg font-semibold text-white mb-2">Great Team</h3>
							<p className="text-gray-400 text-sm">
								Collaborate with talented professionals in a supportive environment
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Application Process Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
						How to Apply
					</h2>
					<p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
						Our simple application process gets you started quickly
					</p>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
								1
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">Submit Application</h3>
							<p className="text-gray-400">
								Send us your resume and cover letter through our contact form
							</p>
						</div>
						
						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
								2
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">Technical Interview</h3>
							<p className="text-gray-400">
								Discuss your skills and experience with our team
							</p>
						</div>
						
						<div className="text-center">
							<div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
								3
							</div>
							<h3 className="text-xl font-semibold text-white mb-2">Join the Team</h3>
							<p className="text-gray-400">
								Start your journey with Zion Tech Group
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
						Ready to Join Us?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
						>
							Apply Now
						</Link>
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
						>
							Send Resume
						</Link>
					</div>
				</div>
			</section>
		</AppLayout>
	);
}