import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Quote } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	const testimonials = [
		{
			name: 'Sarah Chen',
			role: 'CTO, TechFlow Inc.',
			content: 'Zion Tech Group transformed our infrastructure with AI-powered automation. Our operational efficiency increased by 300%.',
			rating: 5
		},
		{
			name: 'Michael Rodriguez',
			role: 'VP Engineering, DataSphere',
			content: 'Their cloud migration expertise and cybersecurity implementation exceeded our expectations. Highly recommended.',
			rating: 5
		},
		{
			name: 'Jennifer Park',
			role: 'CEO, InnovateLab',
			content: 'The AI solutions they built for us are game-changing. We\'ve seen unprecedented growth in our business intelligence.',
			rating: 5
		}
	]

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="mb-8">
							<span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-4">
								🚀 Leading the Future of Technology
							</span>
						</div>
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Transform Your Business with{' '}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								AI & Cloud
							</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="group rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors group"
							>
								Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</Link>
						</div>
					</div>
				</div>
				
				{/* Background Pattern */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
						<defs>
							<pattern id="hero-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
								<path d="M.5 200V.5H200" fill="none" />
							</pattern>
						</defs>
						<rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-pattern)" />
					</svg>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<span className="text-base font-semibold leading-7 text-blue-600">Advanced Technology</span>
						<h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Everything you need to scale your business
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
										<Brain className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									AI Autonomous Systems
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
									</p>
									<p className="mt-6">
										<Link to="/services#ai" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group">
											Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
										</Link>
									</p>
								</dd>
							</div>
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
										<Cloud className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									Cloud Platforms
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
									</p>
									<p className="mt-6">
										<Link to="/services#cloud" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group">
											Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
										</Link>
									</p>
								</dd>
							</div>
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
										<Shield className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									Cybersecurity
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Zero-trust frameworks, compliance automation, and incident response that protects your business.
									</p>
									<p className="mt-6">
										<Link to="/services#cybersecurity" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group">
											Learn more <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
										</Link>
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<div className="text-center">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Trusted by leading companies
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-600">
								We've helped businesses across industries transform their operations and scale efficiently.
							</p>
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col bg-gray-400/5 p-8 hover:bg-gray-400/10 transition-colors">
								<dt className="text-sm font-semibold leading-6 text-gray-600">AI Systems Deployed</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">50+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8 hover:bg-gray-400/10 transition-colors">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Cloud Migrations</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">100+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8 hover:bg-gray-400/10 transition-colors">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Security Audits</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">200+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8 hover:bg-gray-400/10 transition-colors">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Client Satisfaction</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">98%</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							What our clients say
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							Don't just take our word for it. Here's what our clients have to say about working with us.
						</p>
					</div>
					<div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center gap-1 mb-4">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
									))}
								</div>
								<blockquote className="text-gray-600 mb-6">
									<Quote className="h-8 w-8 text-gray-300 mb-2" />
									<p className="text-sm leading-6">{testimonial.content}</p>
								</blockquote>
								<div>
									<div className="font-semibold text-gray-900">{testimonial.name}</div>
									<div className="text-sm text-gray-600">{testimonial.role}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to transform your business?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 transform hover:-translate-y-1"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
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
