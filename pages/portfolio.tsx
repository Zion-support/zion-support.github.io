import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';

export default function Portfolio(): JSX.Element {
	const projects = [
		{
			id: 1,
			title: 'AI-Powered E-commerce Platform',
			description: 'Built a comprehensive e-commerce solution with AI-driven recommendations and personalized shopping experiences.',
			technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'AWS'],
			category: 'AI & Machine Learning',
			image: '🛒',
			results: ['40% increase in conversion rate', '60% improvement in user engagement', '25% reduction in bounce rate']
		},
		{
			id: 2,
			title: 'Cloud Migration for Healthcare Provider',
			description: 'Successfully migrated legacy healthcare systems to cloud infrastructure with enhanced security and scalability.',
			technologies: ['AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
			category: 'Cloud Computing',
			image: '🏥',
			results: ['50% reduction in infrastructure costs', '99.9% uptime achieved', '3x faster application performance']
		},
		{
			id: 3,
			title: 'Mobile Banking Application',
			description: 'Developed a secure mobile banking app with advanced fraud detection and biometric authentication.',
			technologies: ['React Native', 'Node.js', 'MongoDB', 'Blockchain', 'Biometric APIs'],
			category: 'Mobile Development',
			image: '📱',
			results: ['100,000+ active users', 'Zero security incidents', '4.8/5 app store rating']
		},
		{
			id: 4,
			title: 'Data Analytics Dashboard',
			description: 'Created an interactive dashboard for real-time business intelligence and predictive analytics.',
			technologies: ['React', 'D3.js', 'Python', 'Apache Kafka', 'Elasticsearch'],
			category: 'Data Analytics',
			image: '📊',
			results: ['80% faster decision making', 'Real-time insights', 'Custom reporting capabilities']
		},
		{
			id: 5,
			title: 'Cybersecurity Platform',
			description: 'Built a comprehensive cybersecurity platform with threat detection and automated response capabilities.',
			technologies: ['Python', 'Machine Learning', 'Elasticsearch', 'Redis', 'Docker'],
			category: 'Cybersecurity',
			image: '🔒',
			results: ['95% threat detection accuracy', 'Automated incident response', 'Compliance with industry standards']
		},
		{
			id: 6,
			title: 'IoT Fleet Management System',
			description: 'Developed an IoT-based fleet management system with real-time tracking and predictive maintenance.',
			technologies: ['React', 'Node.js', 'IoT Sensors', 'Time Series DB', 'Machine Learning'],
			category: 'IoT Solutions',
			image: '🚛',
			results: ['30% reduction in maintenance costs', 'Real-time fleet visibility', 'Predictive maintenance alerts']
		}
	];

	const stats = [
		{ number: '100+', label: 'Projects Completed' },
		{ number: '50+', label: 'Happy Clients' },
		{ number: '98%', label: 'Client Satisfaction' },
		{ number: '2M+', label: 'Users Impacted' },
		{ number: '5 Years', label: 'Average Partnership' }
	];

	return (
		<>
			<SEO />
			<Head>
				<title>Portfolio - Zion App</title>
				<meta name="description" content="Explore our portfolio of successful projects and case studies across AI, cloud computing, mobile development, and more." />
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
							Our Portfolio
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Discover our successful projects and see how we've helped businesses transform through innovative technology solutions.
						</p>
					</header>

					{/* Stats Section */}
					<section className="mb-20">
						<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
							<h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
							<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
								{stats.map((stat, index) => (
									<div key={index} className="text-center">
										<div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
										<div className="text-blue-100">{stat.label}</div>
									</div>
								))}
							</div>
						</div>
					</section>

					{/* Projects Grid */}
					<section className="mb-20">
						<h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{projects.map((project) => (
								<div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
									<div className="p-6">
										<div className="text-6xl mb-4 text-center">{project.image}</div>
										<div className="mb-3">
											<span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
												{project.category}
											</span>
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
										<p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
										
										<div className="mb-4">
											<h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h4>
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech, index) => (
													<span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
														{tech}
													</span>
												))}
											</div>
										</div>

										<div>
											<h4 className="text-sm font-semibold text-gray-900 mb-2">Key Results:</h4>
											<ul className="space-y-1">
												{project.results.map((result, index) => (
													<li key={index} className="text-sm text-green-600 flex items-center">
														<span className="text-green-500 mr-2">✓</span>
														{result}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>

					{/* CTA Section */}
					<section className="text-center">
						<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
							<h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
							<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
								Let's discuss how we can help bring your vision to life with cutting-edge technology solutions.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
									Start a Project
								</Link>
								<Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
									View Our Services
								</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}