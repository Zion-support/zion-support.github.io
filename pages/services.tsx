import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function Services(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedService, setSelectedService] = useState<string | null>(null);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	usePageView("services");
	const { trackClick } = useAnalytics();

	const serviceDetails = {
		"ai-ml": {
			title: "AI & Machine Learning",
			description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
			features: [
				"Natural Language Processing (NLP)",
				"Computer Vision",
				"Predictive Analytics",
				"Automated Decision Making"
			]
		},
		"cloud": {
			title: "Cloud Infrastructure",
			description: "Scalable and secure cloud solutions designed to grow with your business needs.",
			features: [
				"AWS, Azure, GCP Expertise",
				"Container Orchestration",
				"Auto-scaling Solutions",
				"Disaster Recovery"
			]
		},
		"data": {
			title: "Data Analytics",
			description: "Transform your data into actionable insights with our advanced analytics platform.",
			features: [
				"Real-time Data Processing",
				"Business Intelligence Dashboards",
				"Data Visualization",
				"Custom Reporting"
			]
		}
	};

	const handleServiceClick = (serviceId: string) => {
		setSelectedService(selectedService === serviceId ? null : serviceId);
		trackClick(`service-${serviceId}`, "engagement");
	};

	return (
		<>
			<Head>
				<title>Services - Zion App</title>
				<meta name="description" content="Comprehensive technology services including AI, cloud infrastructure, and data analytics." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gray-50 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Header */}
					<section className="text-center mb-16">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Our Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Comprehensive technology solutions designed to drive your business forward in the digital age.
						</p>
					</section>

					{/* Services Grid */}
					<section className="grid md:grid-cols-3 gap-8">
						{Object.entries(serviceDetails).map(([serviceId, service]) => (
							<div key={serviceId} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
								<h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
								<p className="text-gray-600 mb-6">{service.description}</p>
								<button
									onClick={() => handleServiceClick(serviceId)}
									className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
								>
									{selectedService === serviceId ? 'Hide Features' : 'View Features'}
								</button>
								{selectedService === serviceId && (
									<div className="mt-6">
										<h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
										<ul className="space-y-2">
											{service.features.map((feature, index) => (
												<li key={index} className="flex items-center text-gray-600">
													<span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
													{feature}
												</li>
											))}
										</ul>
									</div>
								)}
							</div>
						))}
					</section>

					{/* CTA Section */}
					<section className="mt-16 text-center bg-blue-600 rounded-lg p-8 text-white">
						<h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
						<p className="text-xl mb-6">Let's discuss how our services can help transform your business.</p>
						<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
							Contact Us Today
						</Link>
					</section>
				</div>
			</div>
		</>
	);
}