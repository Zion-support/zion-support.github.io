import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
// import { AnimatePresence } from "framer-motion";
// import dynamic from "next/dynamic";

const Home = React.memo(function Home(): React.JSX.Element {
	// const [isVisible, setIsVisible] = useState(false);
	const [performanceMetrics, setPerformanceMetrics] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const heroRef = useRef(null);
	const featuresRef = useRef(null);
	const isHeroInView = useInView(heroRef, { once: true });
	const isFeaturesInView = useInView(featuresRef, { once: true });

	useEffect(() => {
		setIsLoading(false);

		// Performance monitoring
		if (typeof window !== "undefined") {
			const observer = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				entries.forEach((entry) => {
					if (entry.entryType === "navigation") {
						const navEntry = entry as PerformanceNavigationTiming;
						setPerformanceMetrics({
							loadTime: navEntry.loadEventEnd - navEntry.fetchStart,
							domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.fetchStart
						});
					}
				});
			});
			observer.observe({ entryTypes: ["navigation"] });
		}
	}, []);

	const features = useMemo(() => [
		{
			title: "AI-Powered Solutions",
			description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
			icon: "🤖",
			color: "blue"
		},
		{
			title: "Cloud Infrastructure",
			description: "Scalable and secure cloud solutions designed to grow with your business needs.",
			icon: "☁️",
			color: "green"
		},
		{
			title: "Data Analytics",
			description: "Transform your data into actionable insights with our advanced analytics platform.",
			icon: "📊",
			color: "purple"
		}
	], []);

	const handleGetStarted = useCallback(() => {
		// Analytics tracking would go here
		console.log("Get started clicked");
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>Zion App - Technology Solutions for Modern Business</title>
				<meta name="description" content="Transform your business with cutting-edge AI, cloud infrastructure, and data analytics solutions." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				{/* Hero Section */}
				<section ref={heroRef} className="pt-20 pb-16">
					<div className="container mx-auto px-4 max-w-7xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6 }}
							className="text-center"
						>
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
								Technology Solutions for Modern Business
							</h1>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
								Transform your business with cutting-edge AI, cloud infrastructure, and data analytics solutions designed for the digital age.
							</p>
							<motion.div
								initial={{ opacity: 0 }}
								animate={isHeroInView ? { opacity: 1 } : {}}
								transition={{ delay: 0.3, duration: 0.6 }}
							>
								<Link
									href="/contact"
									onClick={handleGetStarted}
									className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
								>
									Get Started Today
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</section>

				{/* Features Section */}
				<section ref={featuresRef} className="py-16 bg-white">
					<div className="container mx-auto px-4 max-w-7xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6 }}
							className="text-center mb-12"
						>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Our Core Solutions
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Comprehensive technology services designed to drive your business forward
							</p>
						</motion.div>

						<div className="grid md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
									transition={{ delay: index * 0.2, duration: 0.6 }}
									className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
								>
									<div className="text-4xl mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
									<p className="text-gray-600">{feature.description}</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Performance Metrics */}
				{performanceMetrics && (
					<section className="py-16 bg-gray-100">
						<div className="container mx-auto px-4 max-w-7xl text-center">
							<h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimized</h3>
							<p className="text-gray-600">
								Load time: {Math.round(performanceMetrics.loadTime)}ms
							</p>
						</div>
					</section>
				)}

				{/* Latest Insights Promo */}
				<section className="py-16 bg-white">
					<div className="container mx-auto px-4 max-w-7xl">
						<div className="text-center mb-10">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Latest Insights & Expert Content</h2>
							<p className="text-lg text-gray-600">Comprehensive guides, case studies, and strategic insights from our team</p>
						</div>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-100 hover:shadow-lg transition-shadow">
								<div className="text-sm text-indigo-600 font-medium mb-2">🔥 NEW: AI Strategy</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">Designing High-Impact AI Roadmaps</h3>
								<p className="text-gray-600 mb-3">Align AI investments to measurable outcomes and reduce time-to-value with our proven framework.</p>
								<Link href="/blog/ai-roadmaps" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center">
									Read full guide →
								</Link>
							</div>
							<div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-100 hover:shadow-lg transition-shadow">
								<div className="text-sm text-pink-600 font-medium mb-2">💰 POPULAR: Cloud FinOps</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting Cloud Spend Without Slowing Teams</h3>
								<p className="text-gray-600 mb-3">Proven tactics for right-sizing, demand shaping, and engineering-friendly guardrails.</p>
								<Link href="/blog/cloud-finops" className="text-pink-600 font-medium hover:text-pink-700 inline-flex items-center">
									Read full guide →
								</Link>
							</div>
							<div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-100 hover:shadow-lg transition-shadow">
								<div className="text-sm text-emerald-600 font-medium mb-2">🛡️ ESSENTIAL: Security</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-2">Zero-Trust in Practice for SaaS</h3>
								<p className="text-gray-600 mb-3">Pragmatic guide to least-privilege, continuous verification, and blast radius controls.</p>
								<Link href="/blog/zero-trust-saas" className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center">
									Read full guide →
								</Link>
							</div>
						</div>

						<div className="text-center mt-10">
							<Link href="/blog" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-lg">
								Explore All Insights
							</Link>
						</div>
					</div>
				</section>

				{/* Featured Services Promo */}
				<section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
					<div className="container mx-auto px-4 max-w-7xl">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
							<p className="text-lg text-gray-600">Comprehensive solutions designed to accelerate your digital transformation</p>
						</div>
						<div className="grid md:grid-cols-2 gap-8">
							<div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
								<div className="flex items-center mb-6">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mr-4">
										🤖
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900">AI & Machine Learning</h3>
										<p className="text-gray-600">Transform your business with cutting-edge AI solutions</p>
									</div>
								</div>
								<ul className="space-y-2 mb-6">
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Custom AI model development
									</li>
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Natural language processing
									</li>
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Computer vision solutions
									</li>
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Predictive analytics
									</li>
								</ul>
								<Link href="/services/ai-ml" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
									Learn More →
								</Link>
							</div>
							<div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
								<div className="flex items-center mb-6">
									<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mr-4">
										☁️
									</div>
									<div>
										<h3 className="text-2xl font-bold text-gray-900">Cloud Infrastructure</h3>
										<p className="text-gray-600">Scalable, secure, and cost-optimized cloud solutions</p>
									</div>
								</div>
								<ul className="space-y-2 mb-6">
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Cloud migration services
									</li>
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Infrastructure as code
									</li>
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Auto-scaling solutions
									</li>
									<li className="flex items-center text-gray-700">
										<span className="text-green-500 mr-2">✓</span>
										Cost optimization
									</li>
								</ul>
								<Link href="/services/cloud" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
									Learn More →
								</Link>
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter & Resources CTA */}
				<section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
					<div className="container mx-auto px-4 max-w-4xl text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Ahead with Expert Insights</h2>
						<p className="text-xl text-purple-100 mb-8">
							Get the latest strategies, case studies, and technical guides delivered to your inbox monthly.
						</p>
						<div className="bg-white rounded-lg p-6 max-w-md mx-auto">
							<form className="flex flex-col sm:flex-row gap-3">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								<button
									type="submit"
									className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
								>
									Subscribe
								</button>
							</form>
							<p className="text-sm text-gray-600 mt-3">
								Join 10,000+ professionals. No spam, unsubscribe anytime.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
});

export default Home;