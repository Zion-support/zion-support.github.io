import React from 'react'
import Link from 'next/link'
import { Users, Target, Award, Globe, Zap, Shield, TrendingUp, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'
export default function About() {
	const values = [
		{
			icon: Target,
			title: 'Innovation First',
			description: 'We push the boundaries of what\'s possible with cutting-edge AI and cloud technologies.'
		},
		{
			icon: Shield,
			title: 'Security & Trust',
			description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
		},
		{
			icon: Users,
			title: 'Client Success',
			description: 'We measure our success by the success of our clients and their digital transformation journey.'
		},
		{
			icon: Zap,
			title: 'Agile Delivery',
			description: 'Fast, iterative development that delivers value quickly and adapts to changing requirements.'
		}
	]
	const milestones = [
		{ year: '2020', title: 'Company Founded', description: 'Zion Tech Group established with a vision for AI-powered business transformation' },
		{ year: '2021', title: 'First AI System', description: 'Successfully deployed our first autonomous AI system for enterprise client' },
		{ year: '2022', title: 'Cloud Platform Launch', description: 'Launched our flagship cloud-native platform for scalable infrastructure' },
		{ year: '2023', title: '100+ Clients', description: 'Reached milestone of serving 100+ clients across various industries' },
		{ year: '2024', title: 'Quantum Integration', description: 'Began integrating quantum computing solutions into our AI platforms' },
		{ year: '2025', title: 'Global Expansion', description: 'Expanded operations to serve clients across North America and Europe' }
	]
	const team = [
		{
			name: 'Kleber Santos',
			role: 'Founder & CEO',
			description: 'Visionary leader with 15+ years in AI and cloud technologies',
			image: '/api/placeholder/150/150'
		},
		{
			name: 'Dr. Sarah Chen',
			role: 'Chief AI Officer',
			description: 'PhD in Machine Learning, leading our AI research and development',
			image: '/api/placeholder/150/150'
		},
		{
			name: 'Michael Rodriguez',
			role: 'CTO',
			description: 'Cloud architecture expert with experience at major tech companies',
			image: '/api/placeholder/150/150'
		},
		{
			name: 'Jennifer Park',
			role: 'VP of Engineering',
			description: 'Full-stack development leader specializing in scalable systems',
			image: '/api/placeholder/150/150'
		}
	]
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							About{' '}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Zion Tech Group
							</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We're a team of innovators, engineers, and visionaries dedicated to transforming businesses through cutting-edge AI, cloud, and cybersecurity solutions.
						</p>
					</div>
				</div>
			</section>
			{/* Mission Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
								Our Mission
							</h2>
							<p className="text-lg leading-8 text-gray-600 mb-6">
								To democratize access to enterprise-grade AI and cloud technologies, enabling businesses of all sizes to compete in the digital economy.
							</p>
							<p className="text-lg leading-8 text-gray-600 mb-8">
								We believe that every organization deserves access to the same powerful tools that drive innovation at the world's largest tech companies.
							</p>
							<div className="flex items-center space-x-4">
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-5 w-5 text-green-600" />
									<span className="text-sm text-gray-600">AI-Powered Solutions</span>
								</div>
								<div className="flex items-center space-x-2">
									<CheckCircle className="h-5 w-5 text-green-600" />
									<span className="text-sm text-gray-600">Cloud-Native Architecture</span>
								</div>
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 flex items-center justify-center">
								<Globe className="h-32 w-32 text-white" />
							</div>
							<div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
								<div className="text-2xl font-bold text-gray-900">200+</div>
								<div className="text-sm text-gray-600">Happy Clients</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Values Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Core Values
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							These principles guide everything we do, from product development to client relationships.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
							{values.map((value, index) => (
								<div key={index} className="flex flex-col group">
									<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
										<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
											<value.icon className="h-6 w-6 text-white" />
										</div>
										{value.title}
									</dt>
									<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
										<p className="flex-auto">{value.description}</p>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</section>
			{/* Timeline Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Journey
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							From startup to industry leader, here's how we've grown and evolved over the years.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
						<div className="relative">
							{/* Timeline line */}
							<div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
							
							<div className="space-y-12">
								{milestones.map((milestone, index) => (
									<div key={index} className="relative flex items-start space-x-6">
										{/* Timeline dot */}
										<div className="absolute left-6 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
										
										<div className="ml-16">
											<div className="text-sm font-semibold text-blue-600">{milestone.year}</div>
											<h3 className="text-lg font-semibold text-gray-900 mt-1">{milestone.title}</h3>
											<p className="text-gray-600 mt-2">{milestone.description}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Team Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Meet Our Team
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							The brilliant minds behind our innovative solutions and client success stories.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
							{team.map((member, index) => (
								<div key={index} className="text-center group">
									<div className="relative mx-auto w-32 h-32 mb-6">
										<div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
											{member.name.split(' ').map(n => n[0]).join('')}
										</div>
									</div>
									<h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
									<p className="text-blue-600 font-medium">{member.role}</p>
									<p className="text-sm text-gray-600 mt-2">{member.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to work with us?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss how our team can help transform your business with cutting-edge technology solutions.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1"
							>
								Get Started
								<TrendingUp className="ml-2 h-4 w-4 inline group-hover:scale-110 transition-transform" />
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
							>
								View Services <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
