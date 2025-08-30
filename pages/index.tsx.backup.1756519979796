import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Cloud, Brain, Users, Target, Award, Globe, Rocket, Cpu, Database, Lock } from 'lucide-react'


export default function Index() {
	const features = [
		{
			icon: Brain,
			title: 'AI Autonomous Systems',
			description: 'Multi-agent workflows, RAG systems, and intelligent automation platforms.',
			href: '/services#ai'
		},
		{
			icon: Cloud,
			title: 'Cloud Platforms',
			description: 'Serverless infrastructure, Kubernetes orchestration, and DevOps automation.',
			href: '/services#cloud'
		},
		{
			icon: Shield,
			title: 'Cybersecurity',
			description: 'Zero-trust architecture, compliance frameworks, and threat intelligence.',
			href: '/services#cybersecurity'
		}
	]

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Building the Future of Business Technology
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Zion Tech Group delivers cutting-edge AI, cloud, and cybersecurity solutions that transform how businesses operate and compete in the digital economy.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/services"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Explore Our Services
							</Link>
							<Link
								to="/contact"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Get in Touch <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Why Choose Zion Tech Group?</h2>
						<p className="mt-6 text-lg text-gray-600">
							We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{features.map((feature) => (
							<div key={feature.title} className="text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
									<feature.icon className="h-8 w-8 text-blue-600" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
								<p className="text-gray-600 mb-6">{feature.description}</p>
								<Link
									to={feature.href}
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Transform Your Business?</h2>
						<p className="mt-6 text-lg text-gray-600">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you achieve your technology goals.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
							>
								Get Started Today
							</Link>
							<Link
								to="/about"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Learn More <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}