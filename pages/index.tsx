import { motion, useInView } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { latestInsights } from "../src/content/insights";
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
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Latest Insights</h2>
							<p className="text-lg text-gray-600">New guides and case studies from our team</p>
						</div>
						<div className="grid md:grid-cols-3 gap-8">
							{latestInsights.slice(0, 3).map((item) => (
								<div key={item.id} className="bg-gray-50 rounded-lg p-6">
									<div className="text-sm font-medium mb-2 text-indigo-600">{item.category}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
									<p className="text-gray-600 mb-3">{item.summary}</p>
									<div className="flex items-center justify-between text-sm text-gray-500 mb-2">
										<span>{new Date(item.date).toLocaleDateString()}</span>
										<span>{item.readMinutes} min read</span>
									</div>
									<Link href="/blog" className="text-indigo-600 font-medium hover:text-indigo-700">Read more →</Link>
								</div>
							))}
						</div>

						{/* New This Week Promo */}
						<div className="mt-12">
							<div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white">
								<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
									<div>
										<h3 className="text-2xl font-bold mb-1">New this week</h3>
										<p className="text-white/90">Golden Paths, Cost‑Aware CI/CD, and AI Supply Chain Security</p>
									</div>
									<Link href="/blog" className="bg-white text-indigo-700 hover:bg-indigo-50 px-5 py-3 rounded-lg font-semibold inline-flex items-center gap-2 self-start md:self-auto">
										<span>Explore updates</span>
									</Link>
								</div>
							</div>
						</div>

						<div className="text-center mt-10">
							<Link href="/blog" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">View all insights</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
});

export default Home;