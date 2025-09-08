import Head from 'next/head';
import { AppLayout } from '../src/layout/AppLayout';
import Link from 'next/link';

export default function Resources() {
	return (
		<AppLayout>
			<Head>
				<title>Resources - Zion Tech Group</title>
				<meta name="description" content="Access our library of resources including blog posts, documentation, white papers, webinars, and training materials." />
				<meta property="og:title" content="Resources - Zion Tech Group" />
				<meta property="og:description" content="Access our library of resources including blog posts, documentation, white papers, webinars, and training materials." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://ziontechgroup.com/resources" />
			</Head>
			
			{/* Hero Section */}
			<section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
				<div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
				<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-pulse" />
				
				<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
						Knowledge <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Resources</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
						Access our comprehensive library of insights, guides, and educational content to stay ahead in technology.
					</p>
				</div>
			</section>

			{/* Blog Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Latest Insights
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Stay updated with the latest trends, best practices, and industry insights
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Blog Post 1 */}
						<article className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
										AI & Machine Learning
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
									The Future of Autonomous AI Systems
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Explore how autonomous AI systems are transforming business operations and what this means for the future of work.
								</p>
								<div className="flex items-center justify-between">
									<span className="text-gray-500 text-sm">March 15, 2025</span>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</article>

						{/* Blog Post 2 */}
						<article className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-blue-400/20 to-purple-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
										Cloud Computing
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
									Multi-Cloud Strategy Best Practices
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Learn how to design and implement an effective multi-cloud strategy that maximizes flexibility and cost efficiency.
								</p>
								<div className="flex items-center justify-between">
									<span className="text-gray-500 text-sm">March 10, 2025</span>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</article>

						{/* Blog Post 3 */}
						<article className="bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group">
							<div className="h-48 bg-gradient-to-br from-green-400/20 to-teal-600/20 flex items-center justify-center">
								<svg className="w-20 h-20 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
								</svg>
							</div>
							<div className="p-6">
								<div className="mb-4">
									<span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
										Cybersecurity
									</span>
								</div>
								<h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
									Zero-Trust Security Architecture
								</h3>
								<p className="text-gray-400 mb-4 text-sm leading-relaxed">
									Discover how zero-trust security principles can protect your organization from modern cyber threats.
								</p>
								<div className="flex items-center justify-between">
									<span className="text-gray-500 text-sm">March 5, 2025</span>
									<Link 
										href="/contact" 
										className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
									>
										Read More →
									</Link>
								</div>
							</div>
						</article>
					</div>
					
					<div className="text-center mt-12">
						<Link 
							href="/contact" 
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
						>
							View All Posts
						</Link>
					</div>
				</div>
			</section>

			{/* Documentation Section */}
			<section className="py-20 bg-black">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Documentation & Guides
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Comprehensive technical documentation and implementation guides
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">API Documentation</h3>
							<p className="text-gray-400 mb-6">
								Complete API reference guides with examples, authentication, and best practices.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								View Docs →
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Implementation Guides</h3>
							<p className="text-gray-400 mb-6">
								Step-by-step guides for implementing our solutions in your environment.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								View Guides →
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
								<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Configuration</h3>
							<p className="text-gray-400 mb-6">
								Configuration options and customization guides for all our services.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								View Config →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* White Papers Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							White Papers & Research
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							In-depth research and analysis on emerging technologies and industry trends
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-semibold text-white mb-2">AI in Enterprise</h3>
									<p className="text-cyan-400 font-medium">Research Report</p>
								</div>
								<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Comprehensive analysis of AI adoption in enterprise environments, including implementation strategies, ROI analysis, and future trends.
							</p>
							<div className="flex items-center justify-between">
								<span className="text-gray-400 text-sm">25 pages • PDF</span>
								<Link 
									href="/contact" 
									className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
								>
									Download
								</Link>
							</div>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="flex items-start justify-between mb-6">
								<div>
									<h3 className="text-2xl font-semibold text-white mb-2">Cloud Security</h3>
									<p className="text-cyan-400 font-medium">Security Guide</p>
								</div>
								<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
									<svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
									</svg>
								</div>
							</div>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Best practices for securing cloud infrastructure, including compliance requirements, threat detection, and incident response.
							</p>
							<div className="flex items-center justify-between">
								<span className="text-gray-400 text-sm">30 pages • PDF</span>
								<Link 
									href="/contact" 
									className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
								>
									Download
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Webinars & Events Section */}
			<section className="py-20 bg-black">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Webinars & Events
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Join our live events and webinars to learn from industry experts
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="mb-6">
								<span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
									Upcoming
								</span>
							</div>
							<h3 className="text-2xl font-semibold text-white mb-4">
								AI Implementation Workshop
							</h3>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Join us for a hands-on workshop where you'll learn how to implement AI solutions in your organization.
							</p>
							<div className="space-y-3 mb-6">
								<div className="flex items-center text-gray-400">
									<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
									<span className="text-sm">March 25, 2025 • 2:00 PM EST</span>
								</div>
								<div className="flex items-center text-gray-400">
									<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span className="text-sm">90 minutes</span>
								</div>
							</div>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-teal-700 transition-all duration-300"
							>
								Register Now
							</Link>
						</div>
						
						<div className="p-8 rounded-2xl border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 bg-gray-800/50 hover:bg-gray-800/80">
							<div className="mb-6">
								<span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
									On-Demand
								</span>
							</div>
							<h3 className="text-2xl font-semibold text-white mb-4">
								Cloud Migration Strategies
							</h3>
							<p className="text-gray-300 mb-6 leading-relaxed">
								Learn proven strategies for migrating your applications and infrastructure to the cloud.
							</p>
							<div className="space-y-3 mb-6">
								<div className="flex items-center text-gray-400">
									<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
									</svg>
									<span className="text-sm">60 minutes</span>
								</div>
								<div className="flex items-center text-gray-400">
									<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
									</svg>
									<span className="text-sm">Available Now</span>
								</div>
							</div>
							<Link 
								href="/contact" 
								className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
							>
								Watch Now
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Training Section */}
			<section className="py-20 bg-gray-900">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Training & Certification
						</h2>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto">
							Develop your skills with our comprehensive training programs
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center p-8">
							<div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Online Courses</h3>
							<p className="text-gray-400 mb-6">
								Self-paced online courses covering AI, cloud computing, and cybersecurity fundamentals.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Browse Courses →
							</Link>
						</div>
						
						<div className="text-center p-8">
							<div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">In-Person Training</h3>
							<p className="text-gray-400 mb-6">
								Hands-on training sessions with our expert instructors at your location or ours.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								Schedule Training →
							</Link>
						</div>
						
						<div className="text-center p-8">
							<div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
								<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<h3 className="text-xl font-semibold text-white mb-4">Certification</h3>
							<p className="text-gray-400 mb-6">
								Earn industry-recognized certifications in AI, cloud, and cybersecurity technologies.
							</p>
							<Link 
								href="/contact" 
								className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
							>
								View Certifications →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-cyan-900 to-blue-900">
				<div className="max-w-4xl mx-auto text-center px-6">
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
						Stay Updated with Our Resources
					</h2>
					<p className="text-xl text-gray-300 mb-8">
						Get the latest insights, guides, and training materials delivered to your inbox.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
						>
							Subscribe to Updates
						</Link>
						<Link 
							href="/contact" 
							className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
						>
							Request Custom Content
						</Link>
					</div>
				</div>
			</section>
		</AppLayout>
	);
}