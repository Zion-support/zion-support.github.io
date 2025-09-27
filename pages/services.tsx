import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function Services(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsVisible(true);
		setIsLoading(false);
	}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const serviceDetails = {
		'ai-ml': {
			title: "AI & Machine Learning",
			description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
			features: [
				"Natural Language Processing (NLP)",
				"Computer Vision & Image Recognition",
				"Predictive Analytics & Forecasting",
				"Chatbots & Virtual Assistants",
				"Recommendation Systems",
				"Automated Decision Making"
			],
			technologies: ["TensorFlow", "PyTorch", "OpenAI", "HuggingFace", "Scikit-learn", "Pandas"],
			benefits: [
				"Automate repetitive tasks and processes",
				"Gain insights from large datasets",
				"Improve customer experience with intelligent interactions",
				"Reduce operational costs through automation",
				"Make data-driven decisions with predictive analytics"
			]
		},
		"cloud": {
			title: "Cloud Solutions",
			description: "Scalable, secure, and reliable cloud infrastructure tailored to your business needs.",
			features: [
				"Cloud Migration & Strategy",
				"Infrastructure as Code (IaC)",
				"Container Orchestration",
				"Serverless Architecture",
				"Multi-cloud Management",
				"Disaster Recovery & Backup"
			],
			technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
			benefits: [
				"Scale resources based on demand",
				"Reduce infrastructure costs",
				"Improve reliability and uptime",
				"Enhance security and compliance",
				"Enable remote work and collaboration"
			]
		},
		"web": {
			title: "Web Development",
			description: "Modern, responsive, and high-performance web applications built with the latest technologies.",
			features: [
				"Responsive Web Design",
				"Progressive Web Apps (PWA)",
				"E-commerce Solutions",
				"Content Management Systems",
				"API Development & Integration",
				"Performance Optimization"
			],
			technologies: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL"],
			benefits: [
				"Fast, responsive user experience",
				"Mobile-first design approach",
				"SEO-optimized for better visibility",
				"Scalable and maintainable code",
				"Cross-browser compatibility"
			]
		},
		"mobile": {
			title: "Mobile App Development",
			description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
			features: [
				"iOS & Android Development",
				"Cross-platform Solutions",
				"App Store Optimization",
				"Push Notifications",
				"Offline Functionality",
				"Biometric Authentication"
			],
			technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Stripe"],
			benefits: [
				"Native performance and feel",
				"Faster development and deployment",
				"Consistent user experience across platforms",
				"Easy maintenance and updates",
				"Integration with existing systems"
			]
		},
		"data": {
			title: "Data Analytics",
			description: "Turn your data into actionable insights with powerful analytics and visualization tools.",
			features: [
				"Business Intelligence Dashboards",
				"Real-time Data Processing",
				"Data Warehousing",
				"ETL/ELT Pipelines",
				"Predictive Modeling",
				"Custom Reporting"
			],
			technologies: ["Python", "R", "Apache Kafka", "Elasticsearch", "Tableau", "Power BI"],
			benefits: [
				"Make informed business decisions",
				"Identify trends and patterns",
				"Improve operational efficiency",
				"Enhance customer understanding",
				"Drive revenue growth"
			]
		},
		"consulting": {
			title: "Technology Consulting",
			description: "Strategic guidance and expertise to help you navigate digital transformation and technology adoption.",
			features: [
				"Digital Transformation Strategy",
				"Technology Architecture Review",
				"Process Optimization",
				"Change Management",
				"Security Audits",
				"Training & Support"
			],
			technologies: ["Architecture Design", "Process Mapping", "Security Frameworks", "Best Practices", "Industry Standards"],
			benefits: [
				"Align technology with business goals",
				"Reduce risks and costs",
				"Accelerate time to market",
				"Improve team capabilities",
				"Ensure compliance and security"
			]
		}
	};

	const services = [
		{
			id: "ai-ml",
			title: "AI & Machine Learning",
			description: "Transform your business with cutting-edge AI solutions",
			icon: "🤖",
			color: "blue"
		},
		{
			id: "cloud",
			title: "Cloud Solutions",
			description: "Scalable and secure cloud infrastructure",
			icon: "☁️",
			color: "green"
		},
		{
			id: "web",
			title: "Web Development",
			description: "Modern, responsive web applications",
			icon: "🌐",
			color: "purple"
		},
		{
			id: "mobile",
			title: "Mobile Apps",
			description: "Native and cross-platform mobile solutions",
			icon: "📱",
			color: "orange"
		},
		{
			id: "data",
			title: "Data Analytics",
			description: "Turn data into actionable insights",
			icon: "📊",
			color: "red"
		},
		{
			id: "consulting",
			title: "Consulting",
			description: "Strategic technology guidance",
			icon: "💡",
			color: "indigo"
		}
	];

	const [selectedService, setSelectedService] = useState<string | null>(null);

	const handleServiceClick = (serviceId: string) => {
		setSelectedService(serviceId);
		trackClick(`service-${serviceId}`, "interaction");
	};

	return (
		<>
			<Head>
				<title>Our Services - Zion App</title>
				<meta name="description" content="Comprehensive technology services including AI, cloud computing, web development, mobile apps, data analytics, and consulting." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Header */}
					<section className="text-center mb-16">
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
							Our Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Comprehensive technology solutions designed to transform your business and drive growth through innovation.
						</p>
					</section>

					{/* Services Grid */}
					<section className="mb-16">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{services.map((service) => (
								<div
									key={service.id}
									onClick={() => handleServiceClick(service.id)}
									className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
								>
									<div className="text-4xl mb-4">{service.icon}</div>
									<h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
									<p className="text-gray-600 mb-6">{service.description}</p>
									<div className="flex items-center text-blue-600 font-medium">
										<span>Learn More</span>
										<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
										</svg>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Service Details Modal */}
					{selectedService && (
						<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
							<div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
								<div className="p-8">
									<div className="flex justify-between items-start mb-6">
										<h2 className="text-3xl font-bold text-gray-900">
											{serviceDetails[selectedService as keyof typeof serviceDetails]?.title}
										</h2>
										<button
											onClick={() => setSelectedService(null)}
											className="text-gray-400 hover:text-gray-600"
										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>

									<p className="text-xl text-gray-600 mb-8">
										{serviceDetails[selectedService as keyof typeof serviceDetails]?.description}
									</p>

									<div className="grid md:grid-cols-2 gap-8">
										<div>
											<h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
											<ul className="space-y-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.features.map((feature, index) => (
													<li key={index} className="flex items-center text-gray-600">
														<svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														{feature}
													</li>
												))}
											</ul>
										</div>

										<div>
											<h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
											<div className="flex flex-wrap gap-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.technologies.map((tech, index) => (
													<span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>

									<div className="mt-8">
										<h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
										<ul className="space-y-2">
											{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefit, index) => (
												<li key={index} className="flex items-start text-gray-600">
													<svg className="w-4 h-4 mr-2 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
													{benefit}
												</li>
											))}
										</ul>
									</div>

									<div className="mt-8 flex gap-4">
										<Link
											href="/contact"
											className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
										>
											Get Started
										</Link>
										<button
											onClick={() => setSelectedService(null)}
											className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
										>
											Close
										</button>
									</div>
								</div>
							</div>
						</div>
					)}

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-blue-600 rounded-lg p-12 text-white">
							<h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
							<p className="text-xl mb-8">Let's discuss how our services can help you achieve your goals.</p>
							<Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Start Your Project
							</Link>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}