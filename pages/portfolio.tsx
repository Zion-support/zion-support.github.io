import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function Portfolio(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>("all");
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	usePageView("portfolio");
	const { trackClick } = useAnalytics();

	const projects = [
		{
			id: 1,
			title: "AI-Powered E-commerce Platform",
			client: "TechRetail Inc.",
			category: 'AI',
			description: "Built a comprehensive e-commerce platform with AI-powered recommendations, inventory management, and customer analytics.",
			technologies: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],
			results: ["40% increase in sales", "60% improvement in user engagement", "25% reduction in cart abandonment"],
			image: '🛒',
			featured: true,
			duration: "6 months",
			team: "8 developers"
		},
		{
			id: 2,
			title: "Cloud Migration & DevOps Transformation",
			client: "FinanceCorp",
			category: 'Cloud',
			description: "Migrated legacy systems to AWS cloud infrastructure with automated CI/CD pipelines and monitoring solutions.",
			technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
			results: ["99.9% uptime", "50% cost reduction", "3x faster deployments"],
			image: '☁️',
			featured: true,
			duration: "4 months",
			team: "6 developers"
		},
		{
			id: 3,
			title: "Mobile Banking App",
			client: "SecureBank",
			category: 'Mobile',
			description: "Developed a secure mobile banking application with biometric authentication and real-time transaction processing.",
			technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe'],
			results: ["100k+ downloads", "4.8 app store rating", "Zero security incidents"],
			image: '📱',
			featured: false,
			duration: "8 months",
			team: "10 developers"
		},
		{
			id: 4,
			title: "Data Analytics Dashboard",
			client: "DataInsights Ltd",
			category: 'Analytics',
			description: "Created an interactive dashboard for real-time business intelligence and predictive analytics.",
			technologies: ['React', 'D3.js', 'Python', 'Apache Kafka', 'Elasticsearch'],
			results: ["Real-time insights", "50% faster decision making", "Customizable reports"],
			image: '📊',
			featured: false,
			duration: "3 months",
			team: "5 developers"
		}
	];

	const categories = ['all', 'AI', 'Cloud', 'Mobile', 'Analytics'];

	const filteredProjects = selectedCategory === 'all' 
		? projects 
		: projects.filter(project => project.category === selectedCategory);

	const featuredProjects = projects.filter(project => project.featured);

	return (
		<>
			<Head>
				<title>Portfolio - Zion App</title>
				<meta name="description" content="Explore our portfolio of successful projects across AI, cloud computing, mobile development, and data analytics." />
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
					<section className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
							Our Portfolio
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover the innovative solutions we've delivered for clients across various industries. 
							Each project represents our commitment to excellence and cutting-edge technology.
						</p>
					</section>

					{/* Category Filter */}
					<section className="mb-12">
						<div className="flex flex-wrap justify-center gap-4">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => {
										setSelectedCategory(category);
										trackClick(`portfolio-filter-${category}`, "navigation");
									}}
									className={`px-6 py-3 rounded-lg font-medium transition-colors ${
										selectedCategory === category
											? 'bg-blue-600 text-white'
											: 'bg-white text-gray-700 hover:bg-gray-50'
									}`}
								>
									{category === 'all' ? 'All Projects' : category}
								</button>
							))}
						</div>
					</section>

					{/* Featured Projects */}
					{selectedCategory === 'all' && (
						<section className="mb-16">
							<h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Featured Projects</h2>
							<div className="grid md:grid-cols-2 gap-8">
								{featuredProjects.map((project) => (
									<div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
										<div className="p-8">
											<div className="text-4xl mb-4">{project.image}</div>
											<h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
											<p className="text-blue-600 font-medium mb-4">{project.client}</p>
											<p className="text-gray-600 mb-6">{project.description}</p>
											<div className="flex flex-wrap gap-2 mb-4">
												{project.technologies.map((tech, index) => (
													<span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
														{tech}
													</span>
												))}
											</div>
											<div className="space-y-2">
												{project.results.map((result, index) => (
													<div key={index} className="flex items-center text-green-600">
														<svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
															<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
														</svg>
														<span className="text-sm">{result}</span>
													</div>
												))}
											</div>
										</div>
									</div>
								))}
							</div>
						</section>
					)}

					{/* All Projects */}
					<section>
						<h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
							{selectedCategory === 'all' ? 'All Projects' : `${selectedCategory} Projects`}
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredProjects.map((project) => (
								<div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
									<div className="p-6">
										<div className="text-3xl mb-4">{project.image}</div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
										<p className="text-blue-600 font-medium mb-3">{project.client}</p>
										<p className="text-gray-600 mb-4 text-sm">{project.description}</p>
										<div className="flex flex-wrap gap-1 mb-4">
											{project.technologies.slice(0, 3).map((tech, index) => (
												<span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
													{tech}
												</span>
											))}
											{project.technologies.length > 3 && (
												<span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
													+{project.technologies.length - 3} more
												</span>
											)}
										</div>
										<div className="text-sm text-gray-500">
											<p>Duration: {project.duration}</p>
											<p>Team: {project.team}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center mt-16">
						<div className="bg-blue-600 rounded-lg p-8 text-white">
							<h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
							<p className="text-xl mb-6">Let's discuss how we can help bring your vision to life with cutting-edge technology.</p>
							<Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
								Get Started Today
							</Link>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}