import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from '../src/components/ErrorBoundary';
import { usePageView, useAnalytics } from '../src/hooks/useAnalytics';

export default function Portfolio(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>('all');
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	usePageView('portfolio');
	const { trackClick } = useAnalytics();

	const projects = [
		{
			id: 1,
			title: 'AI-Powered E-commerce Platform',
			client: 'TechRetail Inc.',
			category: 'AI',
			description: 'Built a comprehensive e-commerce platform with AI-powered recommendations, inventory management, and customer analytics.',
			technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],
			results: ['40% increase in sales', '60% improvement in user engagement', '25% reduction in cart abandonment'],
			image: '🛒',
			featured: true,
			duration: '6 months',
			team: '8 developers'
		},
		{
			id: 2,
			title: 'Cloud Migration & DevOps Transformation',
			client: 'FinanceFlow Corp',
			category: 'Cloud',
			description: 'Migrated legacy systems to AWS cloud infrastructure and implemented CI/CD pipelines for improved deployment efficiency.',
			technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
			results: ['50% faster deployments', '99.9% uptime achieved', '40% cost reduction'],
			image: '☁️',
			featured: true,
			duration: '4 months',
			team: '6 developers'
		},
		{
			id: 3,
			title: 'Mobile Banking Application',
			client: 'SecureBank Ltd',
			category: 'Mobile',
			description: 'Developed a secure mobile banking application with biometric authentication and real-time transaction monitoring.',
			technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
			results: ['95% user satisfaction', 'Zero security incidents', '2M+ downloads'],
			image: '🏦',
			featured: false,
			duration: '8 months',
			team: '10 developers'
		},
		{
			id: 4,
			title: 'Data Analytics Dashboard',
			client: 'HealthTech Solutions',
			category: 'Data',
			description: 'Created an advanced analytics dashboard for healthcare data visualization and predictive analytics.',
			technologies: ['Python', 'Django', 'PostgreSQL', 'D3.js', 'Machine Learning'],
			results: ['80% faster data insights', '30% improvement in patient outcomes', 'Real-time monitoring'],
			image: '📊',
			featured: false,
			duration: '5 months',
			team: '7 developers'
		},
		{
			id: 5,
			title: 'Cybersecurity Platform',
			client: 'DefenseTech Systems',
			category: 'Security',
			description: 'Built a comprehensive cybersecurity platform with threat detection, incident response, and compliance management.',
			technologies: ['Python', 'React', 'Elasticsearch', 'Kafka', 'Machine Learning'],
			results: ['99.5% threat detection accuracy', '50% faster incident response', 'SOC2 compliance'],
			image: '🔒',
			featured: false,
			duration: '10 months',
			team: '12 developers'
		},
		{
			id: 6,
			title: 'Progressive Web Application',
			client: 'EduTech Innovations',
			category: 'Web Development',
			description: 'Developed a PWA for online learning with offline capabilities, real-time collaboration, and adaptive learning paths.',
			technologies: ['Next.js', 'TypeScript', 'PWA', 'WebRTC', 'IndexedDB'],
			results: ['90% user retention', '60% faster load times', 'Offline functionality'],
			image: '🎓',
			featured: false,
			duration: '7 months',
			team: '9 developers'
		}
	];

	const categories = ['all', 'AI', 'Cloud', 'Mobile', 'Data', 'Security', 'Web Development'];

	const filteredProjects = selectedCategory === 'all' 
		? projects 
		: projects.filter(project => project.category === selectedCategory);

	const featuredProjects = projects.filter(project => project.featured);
	const regularProjects = filteredProjects.filter(project => !project.featured);

	const stats = [
		{ number: '50+', label: 'Projects Completed' },
		{ number: '98%', label: 'Client Satisfaction' },
		{ number: '2M+', label: 'Users Impacted' },
		{ number: '5 Years', label: 'Average Partnership' }
	];

	return (
		<ErrorBoundary>
			<Head>
				<title>Portfolio - Zion App</title>
				<meta name="description" content="Explore our portfolio of successful projects and case studies across AI, cloud computing, mobile development, and more." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Our Portfolio
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Showcasing our successful projects and the impact we&apos;ve made for our clients
						</p>
					</header>

					<main>
						{/* Stats Section */}
						<section className={`mb-16 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
								{stats.map((stat, index) => (
									<div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg">
										<div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
											{stat.number}
										</div>
										<div className="text-gray-600 font-medium">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Category Filter */}
						<section className={`mb-12 transition-all duration-700 delay-200 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<div className="flex flex-wrap justify-center gap-4">
								{categories.map((category, index) => (
									<button
										key={category}
										onClick={() => {
											setSelectedCategory(category);
											trackClick(`portfolio-category-${category}`, 'filter');
										}}
										className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
											selectedCategory === category
												? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
												: 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
										}`}
									>
										{category === 'all' ? 'All Projects' : category}
									</button>
								))}
							</div>
						</section>

						{/* Featured Projects */}
						{selectedCategory === 'all' && (
							<section className={`mb-16 transition-all duration-700 delay-300 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
									Featured Projects
								</h2>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									{featuredProjects.map((project, index) => (
										<div key={project.id} className={`transform transition-all duration-700 delay-${400 + index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
										}`}>
											<div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow p-8 h-full">
												<div className="flex items-center mb-6">
													<div className="text-5xl mr-4">{project.image}</div>
													<div>
														<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
															{project.category}
														</span>
														<p className="text-sm text-gray-500 mt-1">{project.duration} • {project.team}</p>
													</div>
												</div>
												<h3 className="text-2xl font-bold text-gray-800 mb-3">
													{project.title}
												</h3>
												<p className="text-gray-600 mb-4 leading-relaxed">
													{project.description}
												</p>
												<div className="mb-4">
													<h4 className="text-sm font-semibold text-gray-700 mb-2">Key Results:</h4>
													<ul className="space-y-1">
														{project.results.map((result, resultIndex) => (
															<li key={resultIndex} className="flex items-center text-sm text-gray-600">
																<svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
																	<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
																</svg>
																{result}
															</li>
														))}
													</ul>
												</div>
												<div className="flex flex-wrap gap-2 mb-4">
													{project.technologies.map((tech, techIndex) => (
														<span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
															{tech}
														</span>
													))}
												</div>
												<div className="flex items-center justify-between">
													<span className="text-sm font-medium text-gray-600">{project.client}</span>
													<button 
														onClick={() => {
															setSelectedProject(project.id);
															trackClick(`view-project-${project.id}`, 'cta');
														}}
														className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
													>
														View Details →
													</button>
												</div>
											</div>
										</div>
									))}
								</div>
							</section>
						)}

						{/* Regular Projects */}
						<section className={`mb-16 transition-all duration-700 delay-500 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
								{selectedCategory === 'all' ? 'All Projects' : `${selectedCategory} Projects`}
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{regularProjects.map((project, index) => (
									<div key={project.id} className={`transform transition-all duration-700 delay-${600 + index * 100} ${
										isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}>
										<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full">
											<div className="flex items-center mb-4">
												<div className="text-3xl mr-3">{project.image}</div>
												<div>
													<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
														{project.category}
													</span>
													<p className="text-xs text-gray-500 mt-1">{project.duration}</p>
												</div>
											</div>
											<h3 className="text-lg font-bold text-gray-800 mb-3">
												{project.title}
											</h3>
											<p className="text-gray-600 mb-4 text-sm leading-relaxed">
												{project.description}
											</p>
											<div className="mb-4">
												<h4 className="text-xs font-semibold text-gray-700 mb-2">Results:</h4>
												<ul className="space-y-1">
													{project.results.slice(0, 2).map((result, resultIndex) => (
														<li key={resultIndex} className="flex items-center text-xs text-gray-600">
															<svg className="w-3 h-3 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
																<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
															</svg>
															{result}
														</li>
													))}
												</ul>
											</div>
											<div className="flex flex-wrap gap-1 mb-4">
												{project.technologies.slice(0, 3).map((tech, techIndex) => (
													<span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
														{tech}
													</span>
												))}
												{project.technologies.length > 3 && (
													<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
														+{project.technologies.length - 3}
													</span>
												)}
											</div>
											<div className="flex items-center justify-between">
												<span className="text-xs font-medium text-gray-600">{project.client}</span>
												<button 
													onClick={() => {
														setSelectedProject(project.id);
														trackClick(`view-project-${project.id}`, 'cta');
													}}
													className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
												>
													View →
												</button>
											</div>
										</div>
									</div>
								))}
							</div>
						</section>

						{/* CTA Section */}
						<section className={`text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-16 text-white relative overflow-hidden transition-all duration-1000 delay-700 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<div className="absolute inset-0 opacity-10">
								<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								}}></div>
							</div>
							
							<div className="relative z-10">
								<h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Ready to Start Your Project?
								</h2>
								<p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 font-light leading-relaxed">
									Let&apos;s discuss how we can help bring your vision to life with our proven expertise.
								</p>
								<div className="flex flex-col sm:flex-row gap-6 justify-center">
									<Link href="/contact">
										<button 
											onClick={() => trackClick('start-project-button', 'cta')}
											className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg"
										>
											<span className="flex items-center justify-center gap-2">
												Start Your Project
												<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
												</svg>
											</span>
										</button>
									</Link>
									<button 
										onClick={() => trackClick('view-case-studies-button', 'cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											View Case Studies
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</ErrorBoundary>
	);
}