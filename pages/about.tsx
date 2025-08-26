import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Target, Eye, Award, TrendingUp, Globe, Zap, Shield } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function About() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							About Zion Tech Group
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We're a team of innovators, engineers, and strategists building the future of business technology.
						</p>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Mission</h2>
							<p className="text-lg text-gray-600 mb-6">
								To democratize access to enterprise-grade AI and cloud technologies, enabling businesses of all sizes to compete and thrive in the digital economy.
							</p>
							<div className="flex items-center gap-x-3 mb-4">
								<Target className="h-6 w-6 text-blue-600" />
								<span className="text-gray-700 font-medium">Transform business operations</span>
							</div>
							<div className="flex items-center gap-x-3 mb-4">
								<Zap className="h-6 w-6 text-blue-600" />
								<span className="text-gray-700 font-medium">Accelerate innovation</span>
							</div>
							<div className="flex items-center gap-x-3">
								<Shield className="h-6 w-6 text-blue-600" />
								<span className="text-gray-700 font-medium">Ensure security & compliance</span>
							</div>
						</div>
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Vision</h2>
							<p className="text-lg text-gray-600 mb-6">
								A world where every business can leverage cutting-edge AI and cloud technologies to create value, solve complex problems, and drive sustainable growth.
							</p>
							<div className="flex items-center gap-x-3 mb-4">
								<Globe className="h-6 w-6 text-green-600" />
								<span className="text-gray-700 font-medium">Global accessibility</span>
							</div>
							<div className="flex items-center gap-x-3 mb-4">
								<TrendingUp className="h-6 w-6 text-green-600" />
								<span className="text-gray-700 font-medium">Continuous innovation</span>
							</div>
							<div className="flex items-center gap-x-3">
								<Users className="h-6 w-6 text-green-600" />
								<span className="text-gray-700 font-medium">Human-centered design</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Values</h2>
						<p className="mt-6 text-lg text-gray-600">
							The principles that guide everything we do
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<Zap className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation First</h3>
							<p className="text-gray-600">
								We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Users className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Success</h3>
							<p className="text-gray-600">
								Your success is our success. We're committed to delivering measurable business outcomes.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Shield className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Trust & Security</h3>
							<p className="text-gray-600">
								We prioritize security, privacy, and compliance in everything we build and deliver.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Team */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Team</h2>
						<p className="mt-6 text-lg text-gray-600">
							Meet the experts behind our innovative solutions
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-6 flex items-center justify-center">
								<Users className="h-16 w-16 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">AI & ML Engineers</h3>
							<p className="text-gray-600">
								Experts in machine learning, neural networks, and autonomous systems
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-green-600 to-blue-600 mb-6 flex items-center justify-center">
								<Globe className="h-16 w-16 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Architects</h3>
							<p className="text-gray-600">
								Specialists in scalable cloud infrastructure and DevOps practices
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6 flex items-center justify-center">
								<Shield className="h-16 w-16 text-white" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Security Experts</h3>
							<p className="text-gray-600">
								Cybersecurity professionals ensuring your systems remain protected
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Let's discuss how our AI and cloud solutions can drive your success
					</p>
					<div className="flex items-center justify-center gap-x-6">
						<Link
							to="/contact"
							className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
						>
							Get Started
						</Link>
						<Link
							to="/services"
							className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
						>
							Learn more <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
