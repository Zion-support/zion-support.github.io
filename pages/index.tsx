import Head from 'next/head';
import { useState } from 'react';
import { ServiceCard } from '../src/components/ServiceCard';
import { FeatureCard } from '../src/components/FeatureCard';
import { SERVICES, FEATURES, FOOTER_LINKS } from '../src/utils/constants';

export default function Home(): JSX.Element {
	const [hoveredService, setHoveredService] = useState<string | null>(null);

	return (
		<>
			<Head>
				<title>Zion App - Advanced Technology Solutions</title>
				<meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AI, cloud computing, web development, and digital transformation." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="keywords" content="technology solutions, AI, machine learning, cloud computing, web development, mobile apps, data analytics, cybersecurity" />
				<meta property="og:title" content="Zion App - Advanced Technology Solutions" />
				<meta property="og:description" content="Cutting-edge technology solutions for modern businesses" />
				<meta property="og:type" content="website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<header className="text-center mb-12">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Zion App
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Advanced Technology Solutions for Modern Businesses
						</p>
						<div className="mt-6 flex justify-center space-x-4">
							<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">AI-Powered</span>
							<span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Cloud-Native</span>
							<span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Scalable</span>
						</div>
					</header>

					<main>
						<section className="mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
								Our Services
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{SERVICES.map((service) => (
									<ServiceCard
										key={service.id}
										service={service}
										isHovered={hoveredService === service.id}
										onMouseEnter={() => setHoveredService(service.id)}
										onMouseLeave={() => setHoveredService(null)}
									/>
								))}
							</div>
						</section>

						<section className="text-center py-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-16 text-white">
							<h2 className="text-3xl md:text-4xl font-bold mb-4">
								Ready to Get Started?
							</h2>
							<p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
								Contact us today to discuss your project requirements and how we can help your business grow.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
									Get In Touch
								</button>
								<button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
									View Portfolio
								</button>
							</div>
						</section>

						<section className="mb-16">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
								Why Choose Zion App?
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{FEATURES.map((feature, index) => (
									<FeatureCard
										key={index}
										icon={feature.icon}
										title={feature.title}
										description={feature.description}
										color={feature.color}
									/>
								))}
							</div>
						</section>
					</main>

					<footer className="text-center py-8 border-t border-gray-200 bg-white rounded-t-2xl">
						<div className="max-w-4xl mx-auto px-4">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
								{Object.entries(FOOTER_LINKS).map(([section, links]) => (
									<div key={section}>
										<h4 className="font-semibold text-gray-800 mb-3 capitalize">{section}</h4>
										<ul className="space-y-2 text-gray-600">
											{links.map((link, index) => (
												<li key={index}>{link}</li>
											))}
										</ul>
									</div>
								))}
							</div>
							<div className="border-t border-gray-200 pt-6">
								<p className="text-gray-600">&copy; 2024 Zion App. All rights reserved.</p>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
}