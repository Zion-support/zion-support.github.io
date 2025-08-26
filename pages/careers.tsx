import React from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, Users, Heart, Zap, Globe, Award, ArrowRight, MapPin, Clock } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

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
		<PageTransition>
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
									<h3 className="text-lg font-semibold text-gray-900 mb-2">Impact & Growth</h3>
									<p className="text-gray-600">
										Make a real difference in how businesses operate and grow your career with us.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Benefits & Perks</h2>
						<p className="mt-6 text-lg text-gray-600">
							We take care of our team so you can focus on doing your best work
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<Heart className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Health & Wellness</h3>
							<p className="text-gray-600">
								Comprehensive health insurance, mental health support, and wellness programs
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Briefcase className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
							<p className="text-gray-600">
								Learning budget, conference attendance, and career growth opportunities
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Zap className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Work</h3>
							<p className="text-gray-600">
								Remote work, flexible hours, and unlimited PTO to maintain work-life balance
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
							Ready to join our team? Check out our current openings
						</p>
					</div>
					<div className="space-y-6">
						{openPositions.map((position, index) => (
							<div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
								<div className="flex items-start justify-between">
									<div className="flex-1">
										<h3 className="text-xl font-semibold text-gray-900 mb-2">{position.title}</h3>
										<p className="text-gray-600 mb-4">{position.description}</p>
										<div className="flex items-center gap-6 text-sm text-gray-500">
											<div className="flex items-center gap-2">
												<Briefcase className="h-4 w-4" />
												{position.department}
											</div>
											<div className="flex items-center gap-2">
												<MapPin className="h-4 w-4" />
												{position.location}
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-4 w-4" />
												{position.type}
											</div>
										</div>
									</div>
									<Link
										to="/contact"
										className="ml-6 flex items-center text-blue-600 hover:text-blue-700 font-medium"
									>
										Apply Now
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-6">
						Don't See the Right Role?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
					</p>
					<Link
						to="/contact"
						className="inline-flex items-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
					>
						Send Resume
						<ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</div>
			</section>
		</PageTransition>
	)
}
