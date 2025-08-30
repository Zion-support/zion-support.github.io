import React from 'react'
import { Link } from 'react-router-dom'
import { FlaskConical, Lightbulb, Users, Award, ArrowRight, BookOpen, Microscope, Rocket } from 'lucide-react'


export default function ResearchDevelopment() {
	const researchAreas = [
		{
			title: 'AI & Machine Learning',
			description: 'Advancing autonomous systems, neural networks, and intelligent automation technologies.',
			projects: ['Multi-agent AI systems', 'Federated learning', 'Explainable AI'],
			icon: FlaskConical,
			color: 'blue'
		},
		{
			title: 'Quantum Computing',
			description: 'Exploring quantum algorithms and their applications in business and scientific computing.',
			projects: ['Quantum neural networks', 'Quantum cryptography', 'Quantum optimization'],
			icon: Microscope,
			color: 'purple'
		},
		{
			title: 'Edge Computing',
			description: 'Developing next-generation edge computing platforms for IoT and real-time applications.',
			projects: ['Edge AI deployment', '5G integration', 'Autonomous edge systems'],
			icon: Rocket,
			color: 'green'
		}
	]

	const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
								green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600'
							


}
							return (
								<div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
									<div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${colorClasses[area.color]} mb-6`}>
										<IconComponent className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
									<p className="text-gray-600 mb-6">{area.description}</p>
									<div className="space-y-2">
										<h4 className="font-medium text-gray-900">Key Projects:</h4>
										<ul className="space-y-1">
											{area.projects.map((project, idx) => (
												<li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
													<div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
													{project}
												</li>
											))}
									</ul>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>

			{/* Current Projects */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Current Projects</h2>
						<p className="mt-6 text-lg text-gray-600">
							See what we're building today
						</p>
					</div>
					<div className="space-y-8">
						{currentProjects.map((project, index) => (
							<div key={index} className="bg-white border border-gray-200 rounded-2xl p-8">
								<div className="lg:flex lg:items-start lg:justify-between">
									<div className="flex-1">
										<div className="flex items-center gap-4 mb-4">
											<h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
											<span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
												project.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
												project.status === 'Research Phase' ? 'bg-yellow-100 text-yellow-800' :
												'bg-green-100 text-green-800'
											}`}>
												{project.status}
											</span>
										</div>
										<p className="text-gray-600 mb-6">{project.description}</p>
										<div className="grid gap-4 sm:grid-cols-3 mb-6">
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<Users className="h-4 w-4" />
												{project.team} team members
											</div>
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<Award className="h-4 w-4" />
												{project.timeline}
											</div>
											<div className="flex items-center gap-2 text-sm text-gray-500">
												<BookOpen className="h-4 w-4" />
												{project.progress}% complete
											</div>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div 
												className="bg-blue-600 h-2 rounded-full transition-all duration-300"
												style={{ width: `${project.progress}%` }}
											></div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Publications */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Publications</h2>
						<p className="mt-6 text-lg text-gray-600">
							Our research contributions to the scientific community
						</p>
					</div>
					<div className="space-y-6">
						{publications.map((pub, index) => (
							<div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{pub.title}</h3>
								<div className="grid gap-4 sm:grid-cols-3 text-sm text-gray-500 mb-4">
									<div>
										<span className="font-medium">Authors:</span> {pub.authors}
									</div>
									<div>
										<span className="font-medium">Journal:</span> {pub.journal}
									</div>
									<div>
										<span className="font-medium">Year:</span> {pub.year}
									</div>
								</div>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">DOI: {pub.doi}</span>
									<Link
										to={`/research/${pub.doi}`}
										className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
									>
										Read Paper
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Collaboration */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Research Collaboration</h2>
						<p className="mt-6 text-lg text-gray-600">
							We partner with leading universities and research institutions worldwide
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="bg-white border border-gray-200 rounded-2xl p-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Partnerships</h3>
							<p className="text-gray-600 mb-6">
								Collaborate with our research team on cutting-edge projects in AI, quantum computing, and cybersecurity.
							</p>
							<Link
								to="/contact"
								className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
							>
								Learn More
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
						<div className="bg-white border border-gray-200 rounded-2xl p-8">
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Collaboration</h3>
							<p className="text-gray-600 mb-6">
								Partner with us to develop innovative solutions that address your specific business challenges.
							</p>
							<Link
								to="/contact"
								className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-6">
						Join Our Research Mission
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Interested in collaborating on cutting-edge research? Let's explore possibilities together.
					</p>
					<div className="flex items-center justify-center gap-x-6">
						<Link
							to="/contact"
							className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
						>
							Contact Us
						</Link>
						<Link
							to="/careers"
							className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
						>
							Join Our Team <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</section>
		</>;
	);
};