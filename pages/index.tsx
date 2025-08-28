import React from 'react'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Cloud, Brain, Users, Target, Award, Globe, Rocket, Cpu, Database, Lock } from 'lucide-react'


export default function Index() {
	const features = [
		{
			icon: Brain,
			title: 'AI & Machine Learning',
			description: 'Multi-agent workflows, RAG systems, and intelligent automation platforms.',
			href: '/services#ai',
			color: 'from-purple-600 to-indigo-700'
		},
		{
			icon: Cloud,
			title: 'Cloud & DevOps',
			description: 'Serverless infrastructure, Kubernetes orchestration, and DevOps automation.',
			href: '/services#cloud',
			color: 'from-cyan-600 to-blue-700'
		},
		{
			icon: Shield,
			title: 'Cybersecurity',
			description: 'Zero-trust architecture, compliance frameworks, and threat intelligence.',
			href: '/services#cybersecurity',
			color: 'from-red-600 to-orange-700'
		},
		{
			icon: BarChart3,
			title: 'Data & Analytics',
			description: 'Real-time analytics, data warehousing, and business intelligence.',
			href: '/services#data',
			color: 'from-emerald-600 to-teal-700'
		},
		{
			icon: Database,
			title: 'Enterprise Solutions',
			description: 'ERP systems, CRM platforms, and workflow automation.',
			href: '/services#enterprise',
			color: 'from-blue-600 to-indigo-700'
		},
		{
			icon: Rocket,
			title: 'Emerging Technologies',
			description: 'Quantum computing, blockchain, and IoT platforms.',
			href: '/services#emerging',
			color: 'from-pink-600 to-rose-700'
		}
	]

	const stats = [
		{ number: '500+', label: 'Active Customers', icon: Users },
		{ number: '4.7/5', label: 'Customer Rating', icon: Star },
		{ number: '99.9%', label: 'Uptime SLA', icon: TrendingUp },
		{ number: '50+', label: 'Services Offered', icon: Zap }
	]

	const benefits = [
		'Cutting-edge AI and machine learning solutions',
		'Enterprise-grade security and compliance',
		'Scalable cloud infrastructure and DevOps',
		'Real-time data analytics and insights',
		'Quantum computing and emerging technologies',
		'24/7 expert support and consultation'
	]

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
							Building the Future of Business Technology
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
							Zion Tech Group delivers cutting-edge AI, cloud, and cybersecurity solutions that transform how businesses operate and compete in the digital economy.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								href="/services"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								<span className="relative z-10">Explore Our Services</span>
								<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							</Link>
							
							<Link
								href="/contact"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Get in Touch 
								<ArrowRight className="ml-2 h-5 w-5 inline transition-transform group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-4">
									<stat.icon className="h-8 w-8 text-blue-600" />
								</div>
								<div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Zion Tech Group?</h2>
						<p className="mt-6 text-lg text-gray-600">
							We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.title} className="text-center group">
								<div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
									<feature.icon className="h-8 w-8 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
								<p className="text-gray-600 mb-6">{feature.description}</p>
								<Link
									href={feature.href}
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-24 sm:py-32 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
								Transform Your Business with Advanced Technology
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Our comprehensive suite of services empowers businesses to innovate, scale, and compete in the digital age.
							</p>
							<div className="space-y-4">
								{benefits.map((benefit, index) => (
									<div key={index} className="flex items-start space-x-3">
										<CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
										<span className="text-gray-700">{benefit}</span>
									</div>
								))}
							</div>
							<div className="mt-8">
								<Link
									to="/services"
									className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
								>
									View All Services
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
						<div className="relative">
							<div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
								<div className="grid grid-cols-2 gap-4 h-full">
									<div className="space-y-4">
										<div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Brain className="h-8 w-8 text-purple-600" />
										</div>
										<div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Cloud className="h-6 w-6 text-blue-600" />
										</div>
									</div>
									<div className="space-y-4 pt-8">
										<div className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<Shield className="h-6 w-6 text-red-600" />
										</div>
										<div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
											<BarChart3 className="h-8 w-8 text-green-600" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Transform Your Business?</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you achieve your technology goals.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								href="/contact"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get Started Today
							</Link>
							<Link
								href="/about"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Learn More About Us
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}