import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, Plus, Star, TrendingUp } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
						</p>
					</div>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-2">
						{/* AI Autonomous Systems */}
						<div id="ai" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
									<Brain className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">AI Autonomous Systems</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Transform your operations with intelligent automation and AI-powered decision making.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Sales/CS multi-agent copilots</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">RAG and workflow orchestration</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Observability and guardrails</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Intelligent process automation</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
								>
									Get started with AI
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Cloud Platforms */}
						<div id="cloud" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
									<Cloud className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Cloud Platforms</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Build scalable, resilient cloud infrastructure that grows with your business.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Server className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Serverless and Kubernetes</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Data pipelines and ML ops</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">FinOps and SRE practices</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Globe className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Multi-cloud architecture</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors"
								>
									Build your cloud platform
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Cybersecurity */}
						<div id="cybersecurity" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
									<Shield className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Cybersecurity</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Protect your business with enterprise-grade security frameworks and compliance.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Lock className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Zero-trust frameworks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Shield className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Compliance and threat modeling</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Incident response playbooks</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Security monitoring & analytics</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-500 transition-colors"
								>
									Secure your business
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Micro SaaS */}
						<div id="saas" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-600">
									<Code className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-semibold text-gray-900">Micro SaaS</h2>
							</div>
							<p className="mt-4 text-gray-600">
								Rapidly build and deploy SaaS products with proven infrastructure patterns.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Rapid product delivery</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Billing, auth, and analytics</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Growth experiments</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">User onboarding & retention</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-500 transition-colors"
								>
									Build your SaaS
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Expanded Services Showcase */}
			<section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Expanded Service Portfolio
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Discover our comprehensive range of AI, cloud, data, and emerging technology solutions designed to accelerate your digital transformation.
						</p>
					</div>
					
					<div className="grid gap-8 lg:grid-cols-3 mb-12">
						{/* AI & Machine Learning */}
						<div className="text-center">
							<div className="flex justify-center mb-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-4xl">
									🤖
								</div>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
							<p className="text-sm text-gray-600 mb-4">Intelligent automation and decision-making systems</p>
							<div className="flex items-center justify-center gap-2 text-sm text-gray-500">
								<Star className="h-4 w-4 text-yellow-400" />
								<span>15+ AI Solutions</span>
							</div>
						</div>

						{/* Cloud & Infrastructure */}
						<div className="text-center">
							<div className="flex justify-center mb-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-4xl">
									☁️
								</div>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud & Infrastructure</h3>
							<p className="text-sm text-gray-600 mb-4">Scalable cloud solutions and infrastructure management</p>
							<div className="flex items-center justify-center gap-2 text-sm text-gray-500">
								<TrendingUp className="h-4 w-4 text-green-400" />
								<span>12+ Cloud Solutions</span>
							</div>
						</div>

						{/* Emerging Technology */}
						<div className="text-center">
							<div className="flex justify-center mb-4">
								<div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-4xl">
									🚀
								</div>
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Emerging Technology</h3>
							<p className="text-sm text-gray-600 mb-4">Cutting-edge technology solutions and platforms</p>
							<div className="flex items-center justify-center gap-2 text-sm text-gray-500">
								<Plus className="h-4 w-4 text-purple-400" />
								<span>8+ Emerging Tech</span>
							</div>
						</div>
					</div>

					<div className="text-center">
						<Link
							to="/comprehensive-services"
							className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
						>
							Explore All Services
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
						<p className="mt-4 text-sm text-gray-600">
							Over 50+ specialized solutions across 6 major categories
						</p>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Process</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							How we deliver results
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We follow a proven methodology that ensures successful delivery and measurable outcomes.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">1</span>
									Discovery
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We analyze your current state, understand your goals, and design a roadmap for success.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">2</span>
									Design
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We architect solutions that align with your business objectives and technical requirements.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">3</span>
									Develop
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We build and test your solution using industry best practices and modern technologies.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">4</span>
									Deploy
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We launch your solution and provide ongoing support to ensure continued success.
									</p>
								</dd>
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
							Ready to get started?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss your project and how we can help you achieve your goals.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get in touch
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
