import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, Star, TrendingUp, Zap as ZapIcon } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'
import EnhancedServicesShowcase from '../src/components/EnhancedServicesShowcase'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							Our Comprehensive Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
						</p>
					</div>
				</div>
			</section>

			{/* Core Services Overview */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-purple-600">Core Services</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Transform your business with cutting-edge technology
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our core services provide the foundation for digital transformation and business growth.
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-2">
						{/* AI Autonomous Systems */}
						<div id="ai" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-purple-200">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
									<Brain className="h-7 w-7 text-white" />
								</div>
								<h2 className="text-2xl font-semibold text-gray-900">AI Autonomous Systems</h2>
							</div>
							<p className="text-gray-600 text-lg mb-6">
								Transform your operations with intelligent automation and AI-powered decision making.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<Zap className="h-5 w-5 text-purple-500" />
									<span className="text-gray-700">Sales/CS multi-agent copilots</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-5 w-5 text-purple-500" />
									<span className="text-gray-700">RAG and workflow orchestration</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-5 w-5 text-purple-500" />
									<span className="text-gray-700">Observability and guardrails</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-5 w-5 text-purple-500" />
									<span className="text-gray-700">Intelligent process automation</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors group-hover:gap-2"
								>
									Get started with AI
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Star className="h-4 w-4 text-yellow-400 fill-current" />
									<span>4.8/5</span>
								</div>
							</div>
						</div>

						{/* Cloud Platforms */}
						<div id="cloud" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-blue-200">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
									<Cloud className="h-7 w-7 text-white" />
								</div>
								<h2 className="text-2xl font-semibold text-gray-900">Cloud Platforms</h2>
							</div>
							<p className="text-gray-600 text-lg mb-6">
								Build scalable, resilient cloud infrastructure that grows with your business.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<Server className="h-5 w-5 text-blue-500" />
									<span className="text-gray-700">Serverless and Kubernetes</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-5 w-5 text-blue-500" />
									<span className="text-gray-700">Data pipelines and ML ops</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-5 w-5 text-blue-500" />
									<span className="text-gray-700">FinOps and SRE practices</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Globe className="h-5 w-5 text-blue-500" />
									<span className="text-gray-700">Multi-cloud architecture</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group-hover:gap-2"
								>
									Build your cloud platform
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Star className="h-4 w-4 text-yellow-400 fill-current" />
									<span>4.7/5</span>
								</div>
							</div>
						</div>

						{/* Cybersecurity */}
						<div id="cybersecurity" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-red-200">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-orange-500 shadow-lg">
									<Shield className="h-7 w-7 text-white" />
								</div>
								<h2 className="text-2xl font-semibold text-gray-900">Cybersecurity</h2>
							</div>
							<p className="text-gray-600 text-lg mb-6">
								Protect your business with enterprise-grade security frameworks and compliance.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<Lock className="h-5 w-5 text-red-500" />
									<span className="text-gray-700">Zero-trust frameworks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Shield className="h-5 w-5 text-red-500" />
									<span className="text-gray-700">Compliance and threat modeling</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Zap className="h-5 w-5 text-red-500" />
									<span className="text-gray-700">Incident response playbooks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-5 w-5 text-red-500" />
									<span className="text-gray-700">Security monitoring & analytics</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-500 transition-colors group-hover:gap-2"
								>
									Secure your business
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Star className="h-4 w-4 text-yellow-400 fill-current" />
									<span>4.8/5</span>
								</div>
							</div>
						</div>

						{/* Micro SaaS */}
						<div id="saas" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-green-200">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
									<Code className="h-7 w-7 text-white" />
								</div>
								<h2 className="text-2xl font-semibold text-gray-900">Micro SaaS</h2>
							</div>
							<p className="text-gray-600 text-lg mb-6">
								Rapidly build and deploy SaaS products with proven infrastructure patterns.
							</p>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<Zap className="h-5 w-5 text-green-500" />
									<span className="text-gray-700">Rapid product delivery</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-5 w-5 text-green-500" />
									<span className="text-gray-700">Billing, auth, and analytics</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-5 w-5 text-green-500" />
									<span className="text-gray-700">Growth experiments</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-5 w-5 text-green-500" />
									<span className="text-gray-700">User onboarding & retention</span>
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group-hover:gap-2"
								>
									Build your SaaS
									<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
								</Link>
								<div className="flex items-center gap-2 text-sm text-gray-500">
									<Star className="h-4 w-4 text-yellow-400 fill-current" />
									<span>4.6/5</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-purple-600">Our Process</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							How we deliver results
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our proven methodology ensures successful delivery and maximum value for your business.
						</p>
					</div>
					
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
										1
									</div>
									<span>Discovery & Strategy</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We analyze your business needs, technical requirements, and goals to create a comprehensive strategy.
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
										2
									</div>
									<span>Design & Architecture</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Our experts design scalable, secure, and efficient solutions tailored to your specific requirements.
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
										3
									</div>
									<span>Development & Testing</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We build your solution using cutting-edge technologies and rigorous testing methodologies.
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
										4
									</div>
									<span>Deployment & Support</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We deploy your solution and provide ongoing support, monitoring, and optimization.
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Enhanced Services Showcase */}
			<EnhancedServicesShowcase />

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-purple-600 to-blue-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to get started?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-100">
							Let's discuss how our services can help transform your business and accelerate your growth.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-8 py-4 text-lg font-semibold text-purple-600 shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
							>
								Get Started
								<ArrowRight className="ml-2 h-5 w-5 inline" />
							</Link>
							<a
								href="tel:+13024640950"
								className="text-lg font-semibold leading-6 text-white hover:text-purple-100 transition-colors"
							>
								Call +1 302 464 0950
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
