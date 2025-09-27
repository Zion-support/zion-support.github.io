import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";

export default function Portfolio(): React.JSX.Element {
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

	useEffect(() => {
		// Initialize component
	}, []);

	// Analytics tracking
	usePageView("portfolio");
	const { trackClick } = useAnalytics();

	const projects = [
		{
			title: "AI-Powered Analytics Platform",
			description: "A comprehensive analytics platform leveraging machine learning for business insights.",
			image: "/images/projects/analytics.jpg",
			technologies: ["React", "Node.js", "Python", "TensorFlow"]
		},
		{
			title: "Cloud Migration Solution",
			description: "Enterprise-grade cloud migration solution for seamless digital transformation.",
			image: "/images/projects/cloud.jpg",
			technologies: ["AWS", "Docker", "Kubernetes", "Terraform"]
		},
		{
			title: "Mobile Banking App",
			description: "Secure and user-friendly mobile banking application with advanced features.",
			image: "/images/projects/banking.jpg",
			technologies: ["React Native", "Node.js", "PostgreSQL", "Redis"]
		}
	];

	const handleProjectClick = (index: number) => {
		setSelectedProject(selectedProject === index ? null : index);
		trackClick(`portfolio-project-${index}`, "engagement");
	};

	return (
		<>
			<Head>
				<title>Portfolio - Zion App</title>
				<meta name="description" content="Explore our portfolio of successful technology projects and solutions." />
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
							Our Portfolio
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover the innovative projects and solutions we&apos;ve delivered for our clients across various industries.
						</p>
					</section>

					{/* Projects Grid */}
					<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
								<div className="h-48 bg-gray-200"></div>
								<div className="p-6">
									<h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
									<p className="text-gray-600 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech, techIndex) => (
											<span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
												{tech}
											</span>
										))}
									</div>
									<button
										onClick={() => handleProjectClick(index)}
										className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
									>
										{selectedProject === index ? 'Hide Details' : 'View Details'}
									</button>
								</div>
							</div>
						))}
					</section>
				</div>
			</div>
		</>
	);
}