import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
	const [selectedService, setSelectedService] = useState<string | null>(null);
	const { trackClick } = useAnalytics();

	const services = [
		{
			id: 'ai-ml',
			title: 'AI & Machine Learning',
			description: 'Transform your business with intelligent automation and predictive analytics.',
			icon: '🤖',
			features: [
				'Custom AI model development',
				'Predictive analytics solutions',
				'Natural language processing',
				'Computer vision applications',
				'Automated decision making',
				'AI-powered chatbots'
			],
			benefits: [
				'Improved operational efficiency',
				'Data-driven decision making',
				'Enhanced customer experience',
				'Reduced manual workload'
			]
		},
		{
			id: 'cloud-computing',
			title: 'Cloud Computing',
			description: 'Scalable, secure, and cost-effective cloud infrastructure solutions.',
			icon: '☁️',
			features: [
				'Cloud migration services',
				'Infrastructure as a Service (IaaS)',
				'Platform as a Service (PaaS)',
				'Multi-cloud strategies',
				'Disaster recovery solutions',
				'Cost optimization'
			],
			benefits: [
				'Reduced infrastructure costs',
				'Improved scalability',
				'Enhanced security',
				'24/7 availability'
			]
		},
		{
			id: 'web-development',
			title: 'Web Development',
			description: 'Modern, responsive, and high-performance web applications.',
			icon: '🌐',
			features: [
				'Custom web applications',
				'Progressive Web Apps (PWA)',
				'E-commerce solutions',
				'API development',
				'Performance optimization',
				'Responsive design'
			],
			benefits: [
				'Enhanced user experience',
				'Improved conversion rates',
				'Mobile-first approach',
				'SEO optimization'
			]
		},
		{
			id: 'mobile-development',
			title: 'Mobile App Development',
			description: 'Native and cross-platform mobile applications for iOS and Android.',
			icon: '📱',
			features: [
				'iOS and Android apps',
				'Cross-platform development',
				'App store optimization',
				'Push notifications',
				'Offline functionality',
				'App maintenance & support'
			],
			benefits: [
				'Reach wider audience',
				'Improved user engagement',
				'Platform-specific optimization',
				'Regular updates & support'
			]
		},
		{
			id: 'data-analytics',
			title: 'Data Analytics',
			description: 'Turn your data into actionable insights with advanced analytics solutions.',
			icon: '📊',
			features: [
				'Business intelligence dashboards',
				'Real-time data processing',
				'Predictive modeling',
				'Data visualization',
				'ETL/ELT pipelines',
				'Custom reporting'
			],
			benefits: [
				'Data-driven insights',
				'Improved decision making',
				'Real-time monitoring',
				'Competitive advantage'
			]
		},
		{
			id: 'cybersecurity',
			title: 'Cybersecurity',
			description: 'Comprehensive security solutions to protect your digital assets.',
			icon: '🔒',
			features: [
				'Security assessments',
				'Penetration testing',
				'Threat monitoring',
				'Incident response',
				'Compliance management',
				'Security training'
			],
			benefits: [
				'Enhanced security posture',
				'Regulatory compliance',
				'Risk mitigation',
				'Peace of mind'
			]
		},
		{
			id: 'digital-transformation',
			title: 'Digital Transformation',
			description: 'Complete digital transformation strategies for modern businesses.',
			icon: '🚀',
			features: [
				'Digital strategy consulting',
				'Process automation',
				'Legacy system modernization',
				'Change management',
				'Technology roadmap',
				'Implementation support'
			],
			benefits: [
				'Increased efficiency',
				'Improved agility',
				'Enhanced competitiveness',
				'Future-ready operations'
			]
		},
		{
			id: 'consulting',
			title: 'Technology Consulting',
			description: 'Expert guidance on technology strategy and implementation.',
			icon: '💼',
			features: [
				'Technology assessment',
				'Architecture design',
				'Vendor selection',
				'Project management',
				'Team augmentation',
				'Training & mentoring'
			],
			benefits: [
				'Expert guidance',
				'Reduced risks',
				'Cost optimization',
				'Accelerated delivery'
			]
		}
	];

	return (
		<>
			<SEO />
			<Head>
				<title>Services - Zion App</title>
				<meta name="description" content="Explore our comprehensive technology services including AI, cloud solutions, web development, mobile apps, data analytics, and cybersecurity." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Our Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Comprehensive technology solutions designed to drive innovation, efficiency, and growth for your business.
						</p>
					</header>

					{/* Services Grid */}
					<section className="mb-20">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{services.map((service) => (
								<div
									key={service.id}
									className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
										selectedService === service.id ? 'ring-2 ring-blue-600' : ''
									}`}
									onClick={() => {
										setSelectedService(selectedService === service.id ? null : service.id);
										trackClick(`service-${service.id}`, 'engagement');
									}}
								>
									<div className="text-6xl mb-6 text-center">{service.icon}</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
									<p className="text-gray-600 mb-6 leading-relaxed text-center">{service.description}</p>
									
									{selectedService === service.id && (
										<div className="mt-6 space-y-6">
											<div>
												<h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
												<ul className="space-y-2">
													{service.features.map((feature, index) => (
														<li key={index} className="text-gray-600 flex items-center">
															<span className="text-blue-500 mr-2">✓</span>
															{feature}
														</li>
													))}
												</ul>
											</div>
											<div>
												<h4 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h4>
												<ul className="space-y-2">
													{service.benefits.map((benefit, index) => (
														<li key={index} className="text-green-600 flex items-center">
															<span className="text-green-500 mr-2">★</span>
															{benefit}
														</li>
													))}
												</ul>
											</div>
										</div>
									)}
								</div>
							))}
						</div>
					</section>

					{/* Process Section */}
					<section className="mb-20">
						<h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Process</h2>
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Discovery</h3>
								<p className="text-gray-600">We analyze your business needs and requirements to understand your goals.</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Planning</h3>
								<p className="text-gray-600">We create a detailed roadmap and strategy for your project.</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Development</h3>
								<p className="text-gray-600">Our team builds and implements your solution with regular updates.</p>
							</div>
							<div className="text-center">
								<div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">4</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
								<p className="text-gray-600">We provide ongoing maintenance and support to ensure success.</p>
							</div>
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
							<h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
							<p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
								Let's discuss how our services can help transform your business and drive growth.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<button
									onClick={() => trackClick('services-cta-contact', 'conversion')}
									className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
								>
									Get a Free Consultation
								</button>
								<Link
									href="/portfolio"
									className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
								>
									View Our Work
								</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}