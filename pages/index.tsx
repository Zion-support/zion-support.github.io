import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ServiceCard } from '../src/components/ServiceCard';
import { FeatureCard } from '../src/components/FeatureCard';
import PerformanceMonitor from '../src/components/PerformanceMonitor';
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEO from '../src/components/SEO';
import { usePageView, useAnalytics } from '../src/hooks/useAnalytics';
import { SERVICES, FEATURES, FOOTER_LINKS } from '../src/utils/constants';

export default function Home(): JSX.Element {
	const [hoveredService, setHoveredService] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		setIsVisible(true);
		
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Analytics tracking
	usePageView('homepage');
	const { trackClick } = useAnalytics();

	return (
		<ErrorBoundary>
			<SEO />
			<PerformanceMonitor />
			<Head>
				<title>Zion App - Advanced Technology Solutions</title>
				<meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AI, cloud computing, web development, and digital transformation." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content="technology solutions, AI, machine learning, cloud computing, web development, mobile apps, data analytics, cybersecurity" />
				<meta property="og:title" content="Zion App - Advanced Technology Solutions" />
				<meta property="og:description" content="Cutting-edge technology solutions for modern businesses" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://zion.app" />
				<meta property="og:image" content="https://zion.app/og-image.jpg" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Zion App - Advanced Technology Solutions" />
				<meta name="twitter:description" content="Cutting-edge technology solutions for modern businesses" />
				<meta name="twitter:image" content="https://zion.app/og-image.jpg" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href="https://zion.app" />
				<meta name="robots" content="index, follow" />
				<meta name="author" content="Zion App" />
				<meta name="theme-color" content="#2563eb" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
				{/* Animated background elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
					<div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
				</div>
				
				<div className="container mx-auto px-4 py-8 max-w-7xl relative z-10">
					<header className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<h1 className="text-5xl md:text-7xl font-bold text-blue-600 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
							Zion App
						</h1>
						<p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
							Advanced Technology Solutions for Modern Businesses
						</p>
						<div className="mt-8 flex flex-wrap justify-center gap-3">
							<span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-300 cursor-default">AI-Powered</span>
							<span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300 cursor-default">Cloud-Native</span>
							<span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors duration-300 cursor-default">Scalable</span>
							<span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors duration-300 cursor-default">Secure</span>
						</div>
					</header>

					<main>
						<section className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
							<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
								Our Services
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{SERVICES.map((service, index) => (
									<div 
										key={service.id}
										className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
									>
										<ServiceCard
											service={service}
											isHovered={hoveredService === service.id}
											onMouseEnter={() => setHoveredService(service.id)}
											onMouseLeave={() => setHoveredService(null)}
										/>
									</div>
								))}
							</div>
						</section>

						<section className={`text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-20 text-white relative overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
							{/* Background pattern */}
							<div className="absolute inset-0 opacity-10">
								<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								}}></div>
							</div>
							
							<div className="relative z-10">
								<h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Ready to Get Started?
								</h2>
								<p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
									Contact us today to discuss your project requirements and how we can help your business grow with cutting-edge technology solutions.
								</p>
								<div className="flex flex-col sm:flex-row gap-6 justify-center">
									<button className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
										<span className="flex items-center justify-center gap-2">
											Get In Touch
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</span>
									</button>
									<button className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg">
										<span className="flex items-center justify-center gap-2">
											View Portfolio
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>

						<section className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
							<h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
								Why Choose Zion App?
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
								{FEATURES.map((feature, index) => (
									<div 
										key={index}
										className={`transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
									>
										<FeatureCard
											icon={feature.icon}
											title={feature.title}
											description={feature.description}
											color={feature.color}
										/>
									</div>
								))}
							</div>
						</section>
					</main>

					<footer className={`text-center py-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-t-3xl border-t border-gray-200 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<div className="max-w-6xl mx-auto px-4">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
								{Object.entries(FOOTER_LINKS).map(([section, links]) => (
									<div key={section} className="text-left">
										<h4 className="font-bold text-gray-800 mb-4 capitalize text-lg">{section}</h4>
										<ul className="space-y-3 text-gray-600">
											{links.map((link, index) => (
												<li key={index} className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
													{link}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
							<div className="border-t border-gray-300 pt-8">
								<div className="flex flex-col md:flex-row justify-between items-center gap-4">
									<p className="text-gray-600 font-medium">&copy; 2024 Zion App. All rights reserved.</p>
									<div className="flex space-x-6">
										<a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
											<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
												<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
											</svg>
										</a>
										<a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
											<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
												<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
											</svg>
										</a>
										<a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
											<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</ErrorBoundary>
	);
}