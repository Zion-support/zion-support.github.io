
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
		trackClick(`select-plan-${tierId}`, 'conversion');
		console.log("Selected plan:", tierId);
	};

	const handleReadMore = (slug: string) => {
		trackClick(`read-blog-${slug}`, 'engagement');
		console.log("Read more:", slug);
	};

	const features = [
		{
			title: "AI-Powered Solutions",
			description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
			icon: '🤖'
		},
		{
			title: "Cloud Infrastructure",
			description: "Scalable and secure cloud solutions designed to grow with your business needs.",
			icon: '☁️'
		},
		{
			title: "Data Analytics",
			description: "Transform your data into actionable insights with our advanced analytics platform.",
			icon: '📊'
		}
	];

	return (
		<>
			<SEO />
			<Head>
				<title>Home - Zion App</title>
				<meta name="description" content="Welcome to Zion App - Your technology partner for digital transformation." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
							Welcome to Zion App
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
							Transform your business with cutting-edge technology solutions designed for the modern enterprise.
						</p>
					</section>

					{/* Features Section */}
					<section className="mb-16">
						<div className="grid md:grid-cols-3 gap-8">
							{features.map((feature, index) => (
								<div key={index} className="bg-white rounded-lg p-6 shadow-lg">
									<div className="text-4xl mb-4">{feature.icon}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>

									<p className="text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>

					</section>
				</div>
			</div>
		</>
	);
}

