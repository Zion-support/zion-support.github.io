import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
// import { ServiceCard } from '../src/components/ServiceCard';
// import Navigation from '../src/components/Navigation';
// import { PricingCalculator } from '../src/components/PricingCalculator';
import { SERVICES } from '../src/utils/constants';
// import ErrorBoundary from '../src/components/ErrorBoundary';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Services(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedService  setSelectedService] = useState<string | null>(null);
	const [isLoading  setIsLoading] = useState(true);

	useEffect(() => {
		setIsVisible(true);
		setIsLoading(false)}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const serviceDetails = {
		'ai-ml': {
			title: 'AI & Machine Learning',
			description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
			features: [
				'Natural Language Processing (NLP)',
				'Computer Vision & Image Recognition',
				'Predictive Analytics & Forecasting',
				'Chatbots & Virtual Assistants',
				'Recommendation Systems',
				'Automated Decision Making'
			],
			technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'Pandas'],
			benefits: [
				'Automate repetitive tasks and processes',
				'Gain insights from large datasets',
				'Improve customer experience with intelligent interactions',
				'Reduce operational costs through automation',
				'Make data-driven decisions with predictive analytics'
			]
		},
		'cloud': {
			title: 'Cloud Solutions',
			description: 'Scalable  secure  and reliable cloud infrastructure tailored to your business needs.',
			features: [
				'Cloud Migration & Strategy',
				'Container Orchestration (Kubernetes)',
				'Serverless Architecture',
				'DevOps & CI/CD Pipelines',
				'Microservices Architecture',
				'Cloud Security & Compliance'
			],
			technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
			benefits: [
				'Scale resources based on demand',
				'Reduce infrastructure costs',
				'Improve reliability and uptime',
				'Enable global accessibility',
				'Simplify maintenance and updates'
			]
		},
		'web-dev': {
			title: 'Web Development',
			description: 'Modern  responsive web applications built with the latest technologies and best practices.',
			features: [
				'Progressive Web Apps (PWA)',
				'Single Page Applications (SPA)',
				'Responsive Design',
				'API Development & Integration',
				'Performance Optimization',
				'SEO & Accessibility'
			],
			technologies: ['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS'],
			benefits: [
				'Enhanced user experience',
				'Cross-platform compatibility',
				'Fast loading times',
				'Search engine optimization',
				'Mobile-first design approach'
			]
		},
		'mobile': {
			title: 'Mobile Development',
			description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
			features: [
				'iOS & Android Native Apps',
				'Cross-platform Development',
				'App Store Optimization',
				'Push Notifications',
				'Offline Functionality',
				'Performance Monitoring'
			],
			technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic'],
			benefits: [
				'Reach customers on their preferred devices',
				'Leverage device-specific features',
				'Improve customer engagement',
				'Enable offline functionality',
				'Faster time to market'
			]
		},
		'data-analytics': {
			title: 'Data Analytics',
			description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
			features: [
				'Business Intelligence Dashboards',
				'Data Warehousing & ETL',
				'Real-time Analytics',
				'Predictive Modeling',
				'Data Visualization',
				'Custom Reporting Solutions'
			],
			technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'SQL'],
			benefits: [
				'Make informed business decisions',
				'Identify trends and patterns',
				'Improve operational efficiency',
				'Enhance customer understanding',
				'Drive revenue growth'
			]
		},
		'cybersecurity': {
			title: 'Cybersecurity',
			description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
			features: [
				'Security Audits & Assessments',
				'Penetration Testing',
				'Compliance Management',
				'Incident Response Planning',
				'Security Training & Awareness',
				'Threat Detection & Prevention'
			],
			technologies: ['SIEM', 'Firewalls', 'VPN', 'Encryption', 'Multi-factor Authentication', 'Security Monitoring'],
			benefits: [
				'Protect sensitive data and assets',
				'Meet regulatory compliance requirements',
				'Reduce security risks and vulnerabilities',
				'Build customer trust and confidence',
				'Minimize potential financial losses'
			]
		}
	};
	return (
		<>
			<SEO />
			{/* <Navigation /> */}
			<Head>
				<title>Services - Zion App</title>
				<meta name="description" content="Explore our comprehensive technology services including AI  cloud solutions  web development  mobile apps  data analytics  and cybersecurity." />
				<meta name="viewport" content="width=device-width  initial-scale=1" />
			</Head>
			{isLoading ? (
			<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
			<div className="text-center">
			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
						<p className="text-gray-600">Loading services...</p>
					</div>
				</div>
			) : (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
			<div className="container mx-auto px-4 py-8 max-w-7xl">
				<nav className="mb-8">
					<Link href="/" className="text-blue-600 hover: text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl,
		md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Our Services
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Comprehensive technology solutions to drive your business forward
						</p>
					</header>

					<main>
						{/* Services Grid */}
						<section className="mb-20">
			<div className="grid grid-cols-1 md: grid-cols-2,
		lg:grid-cols-3 gap-8">
								{SERVICES.map((service ,, index) => (
			<div
										key={service.id}
										className={`transform transition-all duration-700 delay-${index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
										}`}
									>
			<div className="p-6 bg-white rounded-lg shadow-md">
											<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
											<p className="text-gray-600 mb-4">{service.description}</p>
			<div className="text-blue-600 font-medium">Service Card (temporarily disabled)</div>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Service Details */}
						{selectedService && (
							<section className={`mb-20 transition-all duration-500 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
			<div className="bg-white rounded-3xl shadow-2xl p-8 md: p-12">
			<div className="flex justify-between items-start mb-8">
			<div>
											<h2 className="text-3xl,
		md:text-4xl font-bold text-gray-800 mb-4">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.title}
											</h2>
											<p className="text-xl text-gray-600 leading-relaxed">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.description}
											</p>
										</div>
										<button
										,, onClick={() => setSelectedService(null)}
											className="text-gray-400 hover:text-gray-600 transition-colors"
										>
											<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
											</svg>
										</button>
									</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
										{/* Features */}
			<div>
											<h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
											<ul className="space-y-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.features.map((feature ,, index) => (
													<li key={index} className="flex items-center text-gray-600">
														<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														{feature}
													</li>
												))}
											</ul>
										</div>

										{/* Technologies */}
			<div>
											<h3 className="text-xl font-semibold text-gray-800 mb-4">Technologies</h3>
			<div className="flex flex-wrap gap-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.technologies.map((tech ,, index) => (
													<span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
														{tech}
													</span>
												))}
											</div>
										</div>

										{/* Benefits */}
			<div>
											<h3 className="text-xl font-semibold text-gray-800 mb-4">Benefits</h3>
											<ul className="space-y-2">
												{serviceDetails[selectedService as keyof typeof serviceDetails]?.benefits.map((benefit ,, index) => (
													<li key={index} className="flex items-start text-gray-600">
														<svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
														</svg>
														{benefit}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</section>
						)}

						{/* Why Choose Us */}
						<section className={`mb-20 transition-all duration-1000 delay-700 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="text-center mb-12">
								<h2 className="text-3xl md: text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									Why Choose Our Services?
								</h2>
								<p className="text-xl text-gray-600 max-w-3xl mx-auto">
									We combine technical expertise with business acumen to deliver solutions that drive real results.
								</p>
							</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">👥</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
									<p className="text-gray-600">Certified professionals with years of experience in cutting-edge technologies</p>
								</div>
			<div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">📈</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
									<p className="text-gray-600">Track record of successful projects and satisfied clients across industries</p>
								</div>
			<div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">🔄</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
									<p className="text-gray-600">Round-the-clock support and maintenance for all our solutions</p>
								</div>
			<div className="text-center p-6 bg-white rounded-2xl shadow-lg,
		hover:shadow-xl transition-shadow">
			<div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<span className="text-2xl">⚡</span>
									</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">Scalable Solutions</h3>
									<p className="text-gray-600">Future-proof solutions that grow with your business needs</p>
								</div>
							</div>
						</section>

						{/* CTA Section */}
						<section className={`text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-20 text-white relative overflow-hidden transition-all duration-1000 delay-500 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
			<div className="absolute inset-0 opacity-10">
			<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<div className="relative z-10">
								<h2 className="text-4xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Ready to Get Started?
								</h2>
								<p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
									Let&apos;s discuss your project requirements and find the perfect solution for your business.
								</p>
			<div className="flex flex-col,
		sm:flex-row gap-6 justify-center">
					<Link href="/contact">
										<button 
											onClick={() => trackClick('get-quote-button', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform,
		hover:-translate-y-1 text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Get a Quote
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
												</svg>
											</span>
										</button>
									</Link>
									<button 
										onClick={() => trackClick('schedule-consultation-button', 'cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transform,
		hover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											Schedule Consultation
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>

						{/* Pricing Calculator Section */}
						<section className={`mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
			<div className="text-center mb-12">
								<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									Project Pricing Calculator
								</h2>
								<p className="text-xl text-gray-600 max-w-3xl mx-auto">
									Get an instant estimate for your project based on your specific requirements and preferences.
								</p>
							</div>
							{/* <PricingCalculator /> */}
			<div className="text-center py-8 text-gray-500">Pricing Calculator temporarily disabled</div>
						</section>
					</main>
				</div>
			</div>
			)}
		</>
	)}