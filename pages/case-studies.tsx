import Head from 'next/head';
import { AppLayout } from '../src/layout/AppLayout';
import Link from 'next/link';

export default function CaseStudies() {
	return (
		<AppLayout>
			<Head>
				<title>Case Studies - Zion Tech Group</title>
				<meta name="description" content="Explore real-world success stories and transformative technology solutions delivered by Zion Tech Group." />
				<meta property="og:title" content="Case Studies - Zion Tech Group" />
				<meta property="og:description" content="Explore real-world success stories and transformative technology solutions delivered by Zion Tech Group." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ziontechgroup.com/case-studies" />
			</Head>
			
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
				
				<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Success <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Stories</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						Real-world examples of how our technology solutions have transformed businesses and driven measurable results.
					</p>
				</div>
			</section>

			{/* Featured Case Study */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Featured Success Story
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							How we helped a Fortune 500 company achieve digital transformation
						</p>
					</div>
					
					<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-gray-700 overflow-hidden">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
							<div className="p-12 flex flex-col justify-center">
								<div className="mb-6">
									<span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full border border-cyan-500/30">
										Digital Transformation
									</span>
								</div>
								<h3 className="text-3xl font-bold text-white mb-4">
									Global Manufacturing Company
								</h3>
								<p className="text-gray-300 mb-6 leading-relaxed">
									A leading manufacturing company with operations in 15 countries needed to modernize their legacy systems and implement AI-powered predictive maintenance.
								</p>
								<div className="grid grid-cols-2 gap-6 mb-8">
									<div>
										<div className="text-2xl font-bold text-cyan-400 mb-1">40%</div>
										<div className="text-gray-400 text-sm">Reduction in downtime</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-cyan-400 mb-1">$2.5M</div>
										<div className="text-gray-400 text-sm">Annual cost savings</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-cyan-400 mb-1">60%</div>
										<div className="text-gray-400 text-sm">Faster decision making</div>
									</div>
									<div>
										<div className="text-2xl font-bold text-cyan-400 mb-1">15</div>
										<div className="text-gray-400 text-sm">Countries deployed</div>
									</div>
								</div>
								<Link 
									href="/contact" 
									className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
								>
									Learn More
								</Link>
							</div>
							<div className="bg-gradient-to-br from-cyan-400/20 to-blue-600/20 p-12 flex items-center justify-center">
								<div className="text-center">
									<div className="w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
										<svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
										</svg>
									</div>
									<p className="text-cyan-400 font-semibold text-lg">Manufacturing Excellence</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section className="py-20 bg-black">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							More Success Stories
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Discover how we've helped organizations across various industries
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Healthcare Case Study */}
						<div className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-green-400/20 to-teal-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
										Healthcare
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">
									AI-Powered Patient Care
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Implemented intelligent patient monitoring systems for a major hospital network, improving care quality and reducing readmission rates.
								</p>
								<div className="flex items-center justify-between">
									<div className="text-cyan-400 font-semibold text-sm">25% improvement in outcomes</div>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</div>

						{/* Financial Services Case Study */}
						<div className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-blue-400/20 to-purple-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
										Financial Services
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">
									Fraud Detection System
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Developed advanced fraud detection algorithms for a leading bank, preventing millions in fraudulent transactions.
								</p>
								<div className="flex items-center justify-between">
									<div className="text-cyan-400 font-semibold text-sm">99.8% detection accuracy</div>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</div>

						{/* Retail Case Study */}
						<div className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-purple-400/20 to-pink-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-500/30">
										Retail
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">
									Smart Inventory Management
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Created intelligent inventory optimization system for a retail chain, reducing stockouts and improving customer satisfaction.
								</p>
								<div className="flex items-center justify-between">
									<div className="text-cyan-400 font-semibold text-sm">30% inventory reduction</div>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</div>

						{/* Education Case Study */}
						<div className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
										Education
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">
									Personalized Learning Platform
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Built adaptive learning system for a university, providing personalized education paths for thousands of students.
								</p>
								<div className="flex items-center justify-between">
									<div className="text-cyan-400 font-semibold text-sm">40% improvement in grades</div>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</div>

						{/* Transportation Case Study */}
						<div className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-red-400/20 to-pink-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full border border-red-500/30">
										Transportation
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">
									Fleet Optimization System
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Developed route optimization and predictive maintenance for a logistics company, reducing fuel costs and delivery times.
								</p>
								<div className="flex items-center justify-between">
									<div className="text-cyan-400 font-semibold text-sm">35% fuel savings</div>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</div>

						{/* Energy Case Study */}
						<div className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-teal-400/20 to-green-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-medium rounded-full border border-teal-500/30">
										Energy
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3">
									Smart Grid Management
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Implemented intelligent grid monitoring for a utility company, improving efficiency and reducing power outages.
								</p>
								<div className="flex items-center justify-between">
									<div className="text-cyan-400 font-semibold text-sm">50% fewer outages</div>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Results Summary Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Impact by the Numbers
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Our solutions have delivered measurable results across industries
						</p>
					</div>
					
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">$50M+</div>
							<div className="text-gray-400">Total cost savings delivered</div>
						</div>
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">200+</div>
							<div className="text-gray-400">Successful projects completed</div>
						</div>
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">25+</div>
							<div className="text-gray-400">Industries served</div>
						</div>
						<div className="text-center">
							<div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">98%</div>
							<div className="text-gray-400">Client satisfaction rate</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
						Ready to Write Your Success Story?
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Let's discuss how our technology solutions can transform your business and deliver measurable results.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
						>
							Start Your Project
						</Link>
						<Link 
							href="/services" 
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
						>
							Explore Services
						</Link>
					</div>
				</div>
			</section>
		</AppLayout>
	);
}
