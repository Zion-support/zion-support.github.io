import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-20 sm:py-32">
				{/* Animated Background Elements */}
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
					<div className="absolute top-0 left-0 w-full h-full">
						<div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
						<div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
					</div>
					{/* Grid Pattern */}
					<div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
				</div>
				
				<div className="relative mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
							Transform Your Business with{' '}
							<span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
								AI & Cloud
							</span>
						</h1>
						<p className="mt-6 text-xl leading-8 text-blue-100">
							We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-gradient-to-r from-cyan-400 to-purple-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 hover:shadow-2xl hover:scale-105"
							>
								Get Started
								<ArrowRight className="ml-2 h-5 w-5 inline" />
							</Link>
							<Link
								to="/enhanced-services"
								className="text-lg font-semibold leading-6 text-white hover:text-cyan-300 transition-colors border-2 border-white/20 px-6 py-4 rounded-lg hover:border-white/40 hover:bg-white/10"
							>
								Explore Services <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32 relative overflow-hidden">
				{/* Animated Background Elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
				</div>
				
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Advanced Technology</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Everything you need to scale your business
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Brain className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
									AI Autonomous Systems
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
									</p>
									<p className="mt-6">
										<a href="/services#ai" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
											Learn more <span aria-hidden="true">→</span>
										</a>
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Cloud className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
									Cloud Platforms
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
									</p>
									<p className="mt-6">
										<a href="/services#cloud" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
											Learn more <span aria-hidden="true">→</span>
										</a>
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Shield className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
									Cybersecurity
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Zero-trust frameworks, compliance automation, and incident response that protects your business.
									</p>
									<p className="mt-6">
										<a href="/services#cybersecurity" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors">
											Learn more <span aria-hidden="true">→</span>
										</a>
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Enhanced Services Preview */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24 sm:py-32 relative overflow-hidden">
				{/* Animated Background */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
					<div className="absolute top-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
					<div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
				</div>
				
				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Comprehensive Service Portfolio
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Explore our extensive range of AI, cloud, cybersecurity, and micro SaaS solutions designed to accelerate your business growth.
						</p>
					</div>
					
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Brain className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">AI Solutions</h3>
							<p className="text-sm text-gray-600 mb-4">Intelligent automation and decision-making systems</p>
							<Link to="/enhanced-services#ai" className="text-blue-600 hover:text-blue-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
						
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Cloud className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Infrastructure</h3>
							<p className="text-sm text-gray-600 mb-4">Scalable and resilient cloud platforms</p>
							<Link to="/enhanced-services#cloud" className="text-green-600 hover:text-green-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
						
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Shield className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
							<p className="text-sm text-gray-600 mb-4">Enterprise-grade security and compliance</p>
							<Link to="/enhanced-services#cybersecurity" className="text-red-600 hover:text-red-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
						
						<div className="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
							<div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
								<Code className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Micro SaaS</h3>
							<p className="text-sm text-gray-600 mb-4">Rapid SaaS development and deployment</p>
							<Link to="/enhanced-services#saas" className="text-purple-600 hover:text-purple-500 font-medium text-sm group-hover:scale-105 transition-all">
								Learn More →
							</Link>
						</div>
					</div>
					
					<div className="text-center mt-12">
						<Link
							to="/enhanced-services"
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
						>
							View All Services
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
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
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">AI Systems Deployed</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">50+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Cloud Migrations</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">100+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Security Audits</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">200+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Client Satisfaction</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">98%</dd>
							</div>
						</dl>
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
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
							>
								View Services <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
