import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Users, Heart, Zap, Globe, Award, ArrowRight, MapPin, Clock } from 'lucide-react'


export default function Careers() {
	const openPositions = [
		{
			title: 'Senior AI Engineer',
			department: 'AI & Machine Learning',
			location: 'Remote / San Francisco',
			type: 'Full-time',
			description: 'Build next-generation autonomous AI systems and multi-agent workflows.'
		},
		{
			title: 'Cloud Infrastructure Engineer',
			department: 'Cloud & DevOps',
			location: 'Remote / New York',
			type: 'Full-time',
			description: 'Design and implement scalable cloud architectures for enterprise clients.'
		},
		{
			title: 'Cybersecurity Specialist',
			department: 'Security',
			location: 'Remote / Austin',
			type: 'Full-time',
			description: 'Develop advanced security solutions and compliance frameworks.'
		},
		{
			title: 'Frontend Developer',
			department: 'Engineering',
			location: 'Remote',
			type: 'Full-time',
			description: 'Create intuitive user interfaces for our AI-powered platforms.'
		}
	]

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Join Our Team
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Help us build the future of business technology. We're looking for passionate innovators who want to make a real impact.
						</p>
					</div>
				</div>
			</section>

			{/* Why Work With Us */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Work With Us?</h2>
						<p className="mt-6 text-lg text-gray-600">
							Join a team that's redefining what's possible in business technology
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
									<Zap className="h-6 w-6 text-white" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
									<p className="text-gray-600">
										Work with the latest AI, cloud, and cybersecurity technologies that are shaping the future of business.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
									<Globe className="h-6 w-6 text-white" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">Remote-First Culture</h3>
									<p className="text-gray-600">
										Work from anywhere in the world with flexible hours and a supportive remote work environment.
									</p>
								</div>
							</div>
						</div>
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
									<Users className="h-6 w-6 text-white" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Team</h3>
									<p className="text-gray-600">
										Join a diverse team of experts who value collaboration, innovation, and continuous learning.
									</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-600">
									<Award className="h-6 w-6 text-white" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900 mb-2">Career Growth</h3>
									<p className="text-gray-600">
										Clear career paths, mentorship programs, and opportunities to work on groundbreaking projects.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits & Perks */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Benefits & Perks</h2>
						<p className="mt-6 text-lg text-gray-600">
							We believe in taking care of our team so they can do their best work
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<Heart className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Health & Wellness</h3>
							<p className="text-gray-600">
								Comprehensive health coverage, wellness programs, and mental health support.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Globe className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Work</h3>
							<p className="text-gray-600">
								Remote-first culture with flexible hours and unlimited PTO.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Zap className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Learning & Development</h3>
							<p className="text-gray-600">
								Annual learning budget, conference attendance, and skill development programs.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Open Positions</h2>
						<p className="mt-6 text-lg text-gray-600">
							Ready to join our mission? Check out our current openings.
						</p>
					</div>
					<div className="grid gap-6 lg:grid-cols-2">
						{openPositions.map((position) => (
							<div key={position.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
								<div className="flex items-start justify-between mb-4">
									<div>
										<h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
										<p className="text-gray-600">{position.department}</p>
									</div>
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
										{position.type}
									</span>
								</div>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
									<div className="flex items-center gap-1">
										<MapPin className="h-4 w-4" />
										{position.location}
									</div>
								</div>
								<p className="text-gray-600 mb-4">{position.description}</p>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Apply Now <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Don't See the Right Role?</h2>
						<p className="mt-6 text-lg text-blue-100">
							We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Send Resume
							</Link>
							<a
								href="mailto:careers@ziontechgroup.com"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								careers@ziontechgroup.com
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
