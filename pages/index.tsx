import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Plus, Star } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
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
								className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
							>
								Learn more <span aria-hidden="true">→</span>
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
										Zero-trust security frameworks, compliance automation, and threat detection that protects your business.
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

			{/* Expanded Services Preview */}
			<section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Expanded Service Portfolio
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Beyond our core services, we offer a comprehensive suite of specialized solutions across multiple technology domains.
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 mb-12">
						{/* AI & Machine Learning */}
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-4">
								<div className="text-3xl">🤖</div>
								<div>
									<h3 className="font-semibold text-gray-900">AI & Machine Learning</h3>
									<p className="text-sm text-gray-600">15+ Specialized Solutions</p>
								</div>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									AI Customer Success Platform
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Sales Intelligence AI
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Content Personalization Engine
								</li>
							</ul>
						</div>

						{/* Cloud & Infrastructure */}
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-4">
								<div className="text-3xl">☁️</div>
								<div>
									<h3 className="font-semibold text-gray-900">Cloud & Infrastructure</h3>
									<p className="text-sm text-gray-600">12+ Cloud Solutions</p>
								</div>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Autonomous Cost Optimization
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Zero Trust Security Platform
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Kubernetes Operations
								</li>
							</ul>
						</div>

						{/* Data & Analytics */}
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-4">
								<div className="text-3xl">📊</div>
								<div>
									<h3 className="font-semibold text-gray-900">Data & Analytics</h3>
									<p className="text-sm text-gray-600">8+ Data Solutions</p>
								</div>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Real-time Data Pipelines
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									AI-Powered BI Platform
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Streaming Analytics
								</li>
							</ul>
						</div>

						{/* Developer Tools */}
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-4">
								<div className="text-3xl">🛠️</div>
								<div>
									<h3 className="font-semibold text-gray-900">Developer Tools</h3>
									<p className="text-sm text-gray-600">10+ Dev Solutions</p>
								</div>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									AI Code Review Assistant
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Autonomous Deployment
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									DevOps Automation
								</li>
							</ul>
						</div>

						{/* Industry Solutions */}
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-4">
								<div className="text-3xl">🏢</div>
								<div>
									<h3 className="font-semibold text-gray-900">Industry Solutions</h3>
									<p className="text-sm text-gray-600">6+ Industry Solutions</p>
								</div>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Healthcare AI Compliance
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									FinTech Fraud Detection
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Supply Chain Solutions
								</li>
							</ul>
						</div>

						{/* Emerging Technology */}
						<div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-4">
								<div className="text-3xl">🚀</div>
								<div>
									<h3 className="font-semibold text-gray-900">Emerging Technology</h3>
									<p className="text-sm text-gray-600">8+ Emerging Tech</p>
								</div>
							</div>
							<ul className="space-y-2 text-sm text-gray-600">
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Quantum Computing Platform
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Blockchain Enterprise
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle className="h-4 w-4 text-green-500" />
									Metaverse Solutions
								</li>
							</ul>
						</div>
					</div>

					<div className="text-center">
						<Link
							to="/comprehensive-services"
							className="inline-flex items-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
						>
							Explore Complete Portfolio
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
						<p className="mt-4 text-sm text-gray-600">
							Over 50+ specialized solutions with detailed pricing, features, and market analysis
						</p>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Impact</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Delivering results across industries
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We've helped hundreds of companies transform their operations and achieve measurable business outcomes.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">50+</span>
									Services
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Comprehensive portfolio of AI, cloud, and emerging technology solutions.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">6</span>
									Categories
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Major technology domains covering every business need.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">1000+</span>
									Clients
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Successful implementations across diverse industries.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">99%</span>
									Satisfaction
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Client satisfaction rate with our services and support.
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
							Ready to transform your business?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss how our comprehensive solutions can accelerate your digital transformation.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get started
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<Link
								to="/comprehensive-services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-300 transition-colors"
							>
								View all services <span aria-hidden="true">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
