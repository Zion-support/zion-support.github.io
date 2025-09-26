import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ServiceCard } from '../src/components/ServiceCard';
import { FeatureCard } from '../src/components/FeatureCard';
import PerformanceMonitor from '../src/components/PerformanceMonitor';
import { ErrorBoundary } from '../src/components/ErrorBoundary';
import SEO from '../src/components/SEO';
import { SecurityDashboard } from '../src/components/SecurityMonitor';
import { ErrorDashboard } from '../src/components/EnhancedErrorBoundary';
import { AnalyticsDashboard } from '../src/components/AnalyticsDashboard';
import { TestDashboard } from '../src/components/TestDashboard';
import { ThemeProvider, ThemeToggle } from '../src/components/ThemeProvider';
import { useAnalytics } from '../src/hooks/useAnalytics';
import { useAdvancedAnalytics } from '../src/hooks/useAdvancedAnalytics';
import { useCache } from '../src/hooks/useAdvancedCache';
import { Analytics, useEventTracking, useScrollTracking, useTimeTracking } from '../src/hooks/useAnalytics';
import { SERVICES, FEATURES, FOOTER_LINKS } from '../src/utils/constants';

export default function Home(): JSX.Element {
	const [hoveredService, setHoveredService] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	// Analytics hooks
	const { trackButtonClick, trackServiceView } = useEventTracking();
	useScrollTracking();
	useTimeTracking();

	// Analytics tracking
	const { trackClick } = useAnalytics();
	const { trackPageView, trackConversion } = useAdvancedAnalytics();

	// Advanced caching for API calls
	const { data: cachedData, loading: cacheLoading } = useCache(
		'homepage-data',
		async () => {
			// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
			return { services: SERVICES, features: FEATURES };
		},
		{ ttl: 5 * 60 * 1000 } // 5 minutes cache
	);

	useEffect(() => {
		setIsVisible(true);
		setIsLoading(false);
		
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Track page view
	useEffect(() => {
		trackPageView('homepage');
	}, [trackPageView]);

	return (
		<ThemeProvider>
			<ErrorBoundary>
				<SEO />
				<PerformanceMonitor />
				<SecurityDashboard />
				<ErrorDashboard />
				<AnalyticsDashboard />
				<TestDashboard />
				<Analytics />
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

				{isLoading ? (
					<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
						<div className="text-center">
							<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
							<p className="text-gray-600">Loading...</p>
						</div>
					</div>
				) : (
				<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
					{/* Theme Toggle */}
					<div className="fixed top-4 right-4 z-50">
						<ThemeToggle />
					</div>

					{/* Animated background elements */}
					<div className="absolute inset-0 overflow-hidden">
						<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
						<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
					</div>

					{/* Main content */}
					<div className="relative z-10">
						{/* Hero Section */}
						<section className="pt-20 pb-16 px-4">
							<div className="container mx-auto max-w-7xl text-center">
								<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
									<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
										<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
											Zion App
										</span>
									</h1>
									<p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
										Advanced technology solutions for modern businesses. 
										<span className="text-blue-600 font-semibold"> Transform your digital future</span> with cutting-edge AI, cloud computing, and innovative software development.
									</p>
									<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
										<Link 
											href="/services" 
											onClick={() => trackClick('hero-cta-services', 'cta')}
											className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Explore Our Services
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
												</svg>
											</span>
										</Link>
										<Link 
											href="/contact" 
											onClick={() => trackClick('hero-cta-contact', 'cta')}
											className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Get Started Today
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</section>

						{/* Services Section */}
						<section className="py-16 px-4">
							<div className="container mx-auto max-w-7xl">
								<div className="text-center mb-16">
									<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
										Our <span className="text-blue-600">Services</span>
									</h2>
									<p className="text-xl text-gray-600 max-w-3xl mx-auto">
										Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
									</p>
								</div>
								
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{(cachedData?.services || SERVICES).map((service, index) => (
										<div
											key={service.id}
											className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
											onMouseEnter={() => setHoveredService(service.id)}
											onMouseLeave={() => setHoveredService(null)}
											onClick={() => trackServiceView(service.id)}
										>
											<ServiceCard 
												service={service} 
												isHovered={hoveredService === service.id}
												scrollY={scrollY}
											/>
										</div>
									))}
								</div>
							</div>
						</section>

						{/* Features Section */}
						<section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
							<div className="container mx-auto max-w-7xl">
								<div className="text-center mb-16">
									<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
										Why Choose <span className="text-blue-600">Zion App</span>
									</h2>
									<p className="text-xl text-gray-600 max-w-3xl mx-auto">
										We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
									</p>
								</div>
								
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{(cachedData?.features || FEATURES).map((feature, index) => (
										<div
											key={feature.id}
											className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
										>
											<FeatureCard feature={feature} />
										</div>
									))}
								</div>
							</div>
						</section>

						{/* CTA Section */}
						<section className="py-16 px-4">
							<div className="container mx-auto max-w-4xl text-center">
								<div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
									<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
										Ready to Transform Your Business?
									</h2>
									<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
										Join hundreds of companies that trust Zion App for their technology needs. 
										Let's build something amazing together.
									</p>
									<div className="flex flex-col sm:flex-row gap-4 justify-center">
										<Link 
											href="/contact" 
											onClick={() => trackConversion('contact-form', 'cta')}
											className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Start Your Project
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
												</svg>
											</span>
										</Link>
										<Link 
											href="/about" 
											onClick={() => trackButtonClick('learn-more-about')}
											className="group border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Learn More About Us
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
												</svg>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</section>

						{/* Footer */}
						<footer className="bg-gray-900 text-white py-12 px-4">
							<div className="container mx-auto max-w-7xl">
								<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
									<div className="col-span-1 md:col-span-2">
										<h3 className="text-2xl font-bold mb-4">Zion App</h3>
										<p className="text-gray-300 mb-6 max-w-md">
											Empowering businesses with cutting-edge technology solutions. 
											Your trusted partner in digital transformation.
										</p>
										<div className="flex space-x-4">
											<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
												<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
													<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
												</svg>
											</a>
											<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
												<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
													<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
												</svg>
											</a>
											<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
												<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
													<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
												</svg>
											</a>
										</div>
										{FOOTER_LINKS.map((section) => (
											<div key={section.title}>
												<h4 className="font-semibold mb-4">{section.title}</h4>
												<ul className="space-y-2">
													{section.links.map((link) => (
														<li key={link.name}>
															<Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-300">
																{link.name}
															</Link>
														</li>
													))}
												</ul>
											</div>
										))}
									</div>
								</div>
							</div>
						</footer>
					</div>
				</div>
				)}
			</ErrorBoundary>
		</ThemeProvider>
	);
}