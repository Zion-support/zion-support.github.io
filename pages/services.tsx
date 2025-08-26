import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, Search, CheckCircle, Rocket, Wrench, Cpu, Network, Smartphone, ShieldCheck, Globe2, ServerCog, FileText, Palette, Target, Lightbulb, Cog } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'
import ComprehensiveServicesShowcase from '../src/components/ComprehensiveServicesShowcase'

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
							Our Comprehensive Services
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From AI automation to quantum computing, we deliver cutting-edge solutions that transform your business operations and drive innovation.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl"
							>
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<a
								href="tel:+13024640950"
								className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
							>
								Call: +1 302 464 0950
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Core Services Overview */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Core Service Categories</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Transform your business with our innovative solutions
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our comprehensive suite covers everything from AI automation to emerging technologies, designed to scale your business efficiently.
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-2">
						{/* AI & Machine Learning */}
						<div id="ai" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
									<Brain className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900">AI & Machine Learning</h3>
							</div>
							<p className="mt-4 text-gray-600">
								Transform your operations with intelligent automation and AI-powered decision making.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">AI Autonomous Suite - $79/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">AI Email Responder - $99/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">AI Customer QA Benchmark - $99/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">AI Autonomous Code Review - $149/month</span>
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

						{/* Cloud & Infrastructure */}
						<div id="cloud" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
									<Cloud className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900">Cloud & Infrastructure</h3>
							</div>
							<p className="mt-4 text-gray-600">
								Build scalable, resilient cloud infrastructure that grows with your business.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Server className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Quantum Cloud Infrastructure - $299/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Autonomous DevOps Platform - $199/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Edge Computing Orchestrator - $159/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Globe className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Multi-cloud architecture solutions</span>
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
								<h3 className="text-xl font-semibold text-gray-900">Cybersecurity</h3>
							</div>
							<p className="mt-4 text-gray-600">
								Protect your business with enterprise-grade security frameworks and compliance.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Lock className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Zero Trust Network Architecture - $399/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Shield className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">AI-Powered Threat Intelligence - $249/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">M365 Security Hardening Kit - $199/month</span>
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
								<h3 className="text-xl font-semibold text-gray-900">Micro SaaS</h3>
							</div>
							<p className="mt-4 text-gray-600">
								Rapidly build and deploy SaaS products with proven infrastructure patterns.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Zap className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Mobile-First Survey Tool - $19/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Event Management Dashboard - $89/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Churn Risk Alerts - $49/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Subscription Revenue Analytics - $59/month</span>
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

						{/* Business Intelligence */}
						<div id="bi" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
									<BarChart3 className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900">Business Intelligence</h3>
							</div>
							<p className="mt-4 text-gray-600">
								Transform data into actionable insights with AI-powered analytics and reporting.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Brain className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">AI Business Intelligence Platform - $179/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Database className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Data Pipeline Automation - $129/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<BarChart3 className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Predictive analytics & insights</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Real-time dashboards & reporting</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
								>
									Unlock your data
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>

						{/* Emerging Technologies */}
						<div id="emerging" className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600">
									<Rocket className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900">Emerging Technologies</h3>
							</div>
							<p className="mt-4 text-gray-600">
								Stay ahead with cutting-edge technologies like quantum computing and blockchain.
							</p>
							<ul className="mt-6 space-y-3">
								<li className="flex items-center gap-x-3">
									<Cpu className="h-4 w-4 text-violet-600" />
									<span className="text-sm text-gray-700">Quantum Neural Network Platform - $499/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Network className="h-4 w-4 text-violet-600" />
									<span className="text-sm text-gray-700">Blockchain Web3 Platform - $299/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Globe2 className="h-4 w-4 text-violet-600" />
									<span className="text-sm text-gray-700">Space Technology Solutions - $399/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<Users className="h-4 w-4 text-violet-600" />
									<span className="text-sm text-gray-700">Future-ready infrastructure</span>
								</li>
							</ul>
							<div className="mt-8">
								<Link
									to="/contact"
									className="inline-flex items-center text-sm font-semibold text-violet-600 hover:text-violet-500 transition-colors"
								>
									Explore the future
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Comprehensive Services Showcase */}
			<ComprehensiveServicesShowcase />

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

			{/* Contact Information */}
			<section className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Get Started</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Ready to transform your business?
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Contact us today to discuss how our innovative solutions can help you achieve your goals.
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-3">
						<div className="text-center">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
								<Smartphone className="h-6 w-6 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
							<p className="text-gray-600">
								<a href="tel:+13024640950" className="text-blue-600 hover:text-blue-500 font-medium">
									+1 302 464 0950
								</a>
							</p>
						</div>

						<div className="text-center">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 mb-4">
								<FileText className="h-6 w-6 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
							<p className="text-gray-600">
								<a href="mailto:kleber@ziontechgroup.com" className="text-green-600 hover:text-green-500 font-medium">
									kleber@ziontechgroup.com
								</a>
							</p>
						</div>

						<div className="text-center">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 mb-4">
								<Globe className="h-6 w-6 text-white" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
							<p className="text-gray-600">
								364 E Main St STE 1008<br />
								Middletown DE 19709
							</p>
						</div>
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
							<a
								href="tel:+13024640950"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
							>
								Call now: +1 302 464 0950
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
