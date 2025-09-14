import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code, Rocket, Target, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Services() {
	const title = 'Services — Zion Tech Group'
	const description = 'AI autonomous systems, cloud platforms, cybersecurity, and micro SaaS delivery.'
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		setIsVisible(true)
	}, [])

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
								Our Services
							</h1>
							<p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
								From strategy to production, we deliver outcomes fast. Our comprehensive suite of services covers everything you need to transform your business.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced Services Grid */}
			<section className="py-24 sm:py-32 bg-white dark:bg-slate-900">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-2">
						{/* AI Autonomous Systems */}
						<div id="ai" className={`group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
							<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 group-hover:scale-110 transition-transform duration-300">
										<Brain className="h-7 w-7 text-white" />
									</div>
									<h2 className="text-xl font-semibold text-gray-900 dark:text-white">AI Autonomous Systems</h2>
								</div>
								<p className="mt-4 text-gray-600 dark:text-gray-300 mb-6">
									Transform your operations with intelligent automation and AI-powered decision making.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/50 transition-colors duration-200">
											<Zap className="h-3 w-3 text-blue-600 dark:text-blue-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Sales/CS multi-agent copilots</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/50 transition-colors duration-200">
											<Database className="h-3 w-3 text-blue-600 dark:text-blue-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">RAG and workflow orchestration</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/50 transition-colors duration-200">
											<BarChart3 className="h-3 w-3 text-blue-600 dark:text-blue-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Observability and guardrails</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 group-hover/item:bg-blue-200 dark:group-hover/item:bg-blue-800/50 transition-colors duration-200">
											<Users className="h-3 w-3 text-blue-600 dark:text-blue-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Intelligent process automation</span>
									</li>
								</ul>
								<div className="mt-8">
									<Link
										to="/contact"
										className="group inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
									>
										Get started with AI
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
									</Link>
								</div>
							</div>
						</div>

						{/* Cloud Platforms */}
						<div id="cloud" className={`group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
							<div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-blue-600 group-hover:scale-110 transition-transform duration-300">
										<Cloud className="h-7 w-7 text-white" />
									</div>
									<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Cloud Platforms</h2>
								</div>
								<p className="mt-4 text-gray-600 dark:text-gray-300 mb-6">
									Build scalable, resilient cloud infrastructure that grows with your business.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-800/50 transition-colors duration-200">
											<Server className="h-3 w-3 text-green-600 dark:text-green-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Serverless and Kubernetes</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-800/50 transition-colors duration-200">
											<Database className="h-3 w-3 text-green-600 dark:text-green-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Data pipelines and ML ops</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-800/50 transition-colors duration-200">
											<BarChart3 className="h-3 w-3 text-green-600 dark:text-green-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">FinOps and SRE practices</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 group-hover/item:bg-green-200 dark:group-hover/item:bg-green-800/50 transition-colors duration-200">
											<Globe className="h-3 w-3 text-green-600 dark:text-green-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Multi-cloud architecture</span>
									</li>
								</ul>
								<div className="mt-8">
									<Link
										to="/contact"
										className="group inline-flex items-center text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-colors"
									>
										Get started with Cloud
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
									</Link>
								</div>
							</div>
						</div>

						{/* Cybersecurity */}
						<div id="cybersecurity" className={`group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
							<div className="absolute inset-0 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-orange-600 group-hover:scale-110 transition-transform duration-300">
										<Shield className="h-7 w-7 text-white" />
									</div>
									<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Cybersecurity</h2>
								</div>
								<p className="mt-4 text-gray-600 dark:text-gray-300 mb-6">
									Protect your business with enterprise-grade security solutions and compliance frameworks.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-800/50 transition-colors duration-200">
											<Lock className="h-3 w-3 text-red-600 dark:text-red-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Zero-trust security framework</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-800/50 transition-colors duration-200">
											<Shield className="h-3 w-3 text-red-600 dark:text-red-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Compliance automation</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-800/50 transition-colors duration-200">
											<BarChart3 className="h-3 w-3 text-red-600 dark:text-red-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Incident response & monitoring</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 group-hover/item:bg-red-200 dark:group-hover/item:bg-red-800/50 transition-colors duration-200">
											<Code className="h-3 w-3 text-red-600 dark:text-red-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Secure development practices</span>
									</li>
								</ul>
								<div className="mt-8">
									<Link
										to="/contact"
										className="group inline-flex items-center text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition-colors"
									>
										Get started with Security
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
									</Link>
								</div>
							</div>
						</div>

						{/* Micro SaaS */}
						<div id="saas" className={`group relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-300">
										<Rocket className="h-7 w-7 text-white" />
									</div>
									<h2 className="text-xl font-semibold text-gray-900 dark:text-white">Micro SaaS</h2>
								</div>
								<p className="mt-4 text-gray-600 dark:text-gray-300 mb-6">
									Launch and scale your software business with our micro SaaS development and deployment services.
								</p>
								<ul className="space-y-3 mb-6">
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-800/50 transition-colors duration-200">
											<Code className="h-3 w-3 text-purple-600 dark:text-purple-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Rapid MVP development</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-800/50 transition-colors duration-200">
											<Cloud className="h-3 w-3 text-purple-600 dark:text-purple-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Cloud-native architecture</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-800/50 transition-colors duration-200">
											<Users className="h-3 w-3 text-purple-600 dark:text-purple-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">User onboarding & analytics</span>
									</li>
									<li className="flex items-center gap-x-3 group/item">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 group-hover/item:bg-purple-200 dark:group-hover/item:bg-purple-800/50 transition-colors duration-200">
											<Target className="h-3 w-3 text-purple-600 dark:text-purple-400" />
										</div>
										<span className="text-sm text-gray-700 dark:text-gray-300">Growth & monetization</span>
									</li>
								</ul>
								<div className="mt-8">
									<Link
										to="/contact"
										className="group inline-flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors"
									>
										Get started with SaaS
										<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-24 sm:py-32 relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
				</div>
				
				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
					<div className="mx-auto max-w-2xl text-center">
						<div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
								Ready to get started?
							</h2>
							<p className="mx-auto max-w-xl text-lg leading-8 text-blue-100 mb-8">
								Let's discuss how our services can help transform your business and drive growth.
							</p>
						</div>
						<div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
							<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
								<Link
									to="/contact"
									className="group relative rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:scale-105 transform w-full sm:w-auto text-center"
								>
									<span className="relative z-10">Start Your Project</span>
									<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform duration-200" />
								</Link>
								<Link
									to="/"
									className="group text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors duration-200"
								>
									Learn more about us <span className="group-hover:translate-x-1 inline-block transition-transform duration-200" aria-hidden="true">→</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
