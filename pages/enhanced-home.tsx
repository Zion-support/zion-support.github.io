import React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import SEO from "../src/components/SEO";
import { useAnalytics } from "../src/hooks/useAnalytics";

export default function Home(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const handleSelectPlan = (tierId: string) => {
		trackClick(`select-plan-${tierId}`, "conversion");
		console.log("Selected plan:", tierId);
	};

	const handleReadMore = (slug: string) => {
		trackClick(`read-blog-${slug}`, "engagement");
		console.log("Read more:", slug);
	};

	const features = [
		{
			title: "AI-Powered Solutions",
			description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
			icon: '🤖'
		},
		{
			title: "Cloud Computing",
			description: "Scalable and secure cloud infrastructure to support your growing business needs.",
			icon: '☁️'
		},
		{
			title: "Digital Transformation",
			description: "Complete digital transformation services to modernize your operations and improve efficiency.",
			icon: '🚀'
		}
	];

	const testimonials = [
		{
			name: "Sarah Johnson",
			company: "TechCorp Inc.",
			content: "Zion App transformed our entire digital infrastructure. The results exceeded our expectations.",
			rating: 5
		},
		{
			name: "Michael Chen",
			company: "InnovateLabs",
			content: "Outstanding service and support. They delivered exactly what we needed on time and within budget.",
			rating: 5
		},
		{
			name: "Emily Rodriguez",
			company: "FutureTech",
			content: "Professional, reliable, and innovative. Highly recommend their services to any business.",
			rating: 5
		}
	];

	return (
		<>
			<SEO
				title="Zion Tech Solutions - AI-Powered Business Solutions"
				description="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology."
				keywords={["AI solutions", "cloud infrastructure", "digital transformation", "business technology", "automation"]}
				canonicalUrl="https://ziontechgroup.com"
				ogImage="/images/og-image.jpg"
				twitterCard="summary_large_image"
			/>
			<Head>
				<title>Zion Tech Solutions - AI-Powered Business Solutions</title>
				<meta name="description" content="Leading provider of AI-powered business solutions, cloud infrastructure, and digital transformation services. Transform your business with cutting-edge technology." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://ziontechgroup.com" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				{/* Hero Section */}
				<section className="relative overflow-hidden">
					<div className="container mx-auto px-4 py-20 max-w-7xl">
						<div className="text-center">
							<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
								Transform Your Business with{" "}
								<span className="text-blue-600">AI-Powered Solutions</span>
							</h1>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
								Leading provider of cutting-edge technology solutions including AI, cloud infrastructure, and digital transformation services.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button
									onClick={() => handleSelectPlan("premium")}
									className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
								>
									Get Started Today
								</button>
								<button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
									Learn More
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-4 max-w-7xl">
						<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
							Our Solutions
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<div
									key={index}
									className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
								>
									<div className="text-4xl mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Testimonials Section */}
				<section className="py-20 bg-gray-50">
					<div className="container mx-auto px-4 max-w-7xl">
						<h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
							What Our Clients Say
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{testimonials.map((testimonial, index) => (
								<div key={index} className="bg-white rounded-lg p-6 shadow-lg">
									<div className="flex items-center mb-4">
										{Array.from({ length: testimonial.rating }).map((_, i) => (
											<svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<p className="text-gray-600 mb-4">"{testimonial.content}"</p>
									<div>
										<p className="font-semibold text-gray-900">{testimonial.name}</p>
										<p className="text-blue-600">{testimonial.company}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-blue-600">
					<div className="container mx-auto px-4 max-w-4xl text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
							Ready to Transform Your Business?
						</h2>
						<p className="text-xl text-blue-100 mb-8">
							Let's discuss how our solutions can help you achieve your goals.
						</p>
						<button
							onClick={() => handleSelectPlan("enterprise")}
							className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							Start Your Project
						</button>
					</div>
				</section>
			</div>
		</>
	);
}