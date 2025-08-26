import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Rocket, Cpu, Globe } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				{/* Animated Background Elements */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce"></div>
					<div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
				</div>

				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-4xl text-center">
						<div className="mb-8">
							<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
								<Star className="h-4 w-4 mr-2" />
								Innovative 2026 Technology Solutions
							</div>
						</div>
						
						<h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-8">
							Transform Your Business with{' '}
							<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
								AI & Cloud
							</span>
						</h1>
						<p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
							We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								to="/contact"
								className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
							>
								Get Started
								<ArrowRight className="ml-2 h-5 w-5 inline" />
							</Link>
							<Link
								to="/services/innovative-2026-showcase"
								className="w-full sm:w-auto bg-white/80 backdrop-blur-md border border-gray-200 px-8 py-4 text-lg font-semibold text-gray-900 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
							>
								<Rocket className="mr-2 h-5 w-5 inline" />
								View Innovative 2026 Services
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32 bg-white">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<div className="mb-6">
							<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium">
								<Zap className="h-4 w-4 mr-2" />
								Advanced Technology
							</div>
						</div>
						<h2 className="text-base font-semibold leading-7 text-blue-600">Cutting-Edge Solutions</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Everything you need to scale your business
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300">
										<Brain className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									<span className="text-xl">AI Autonomous Systems</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
									</p>
									<p className="mt-6">
										<Link to="/services/innovative-2026-showcase" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group-hover:text-blue-700">
											Explore AI Services <span aria-hidden="true">→</span>
										</Link>
									</p>
								</dd>
							</div>
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all duration-300">
										<Cloud className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									<span className="text-xl">Cloud Platforms</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
									</p>
									<p className="mt-6">
										<Link to="/services/innovative-2026-showcase" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group-hover:text-blue-700">
											Explore Cloud Services <span aria-hidden="true">→</span>
										</Link>
									</p>
								</dd>
							</div>
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-xl group-hover:shadow-cyan-500/50 transition-all duration-300">
										<Shield className="h-6 w-6 text-white" aria-hidden="true" />
									</div>
									<span className="text-xl">Cybersecurity</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Zero-trust frameworks, compliance automation, and incident response that protects your business.
									</p>
									<p className="mt-6">
										<Link to="/services/innovative-2026-showcase" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group-hover:text-blue-700">
											Explore Security Services <span aria-hidden="true">→</span>
										</Link>
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:max-w-none">
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
								Trusted by leading companies
							</h2>
							<p className="text-lg leading-8 text-blue-100">
								We've helped businesses across industries transform their operations and scale efficiently.
							</p>
						</div>
						<dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-3xl text-center sm:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col bg-white/10 backdrop-blur-md p-8 border border-white/20">
								<dt className="text-sm font-semibold leading-6 text-blue-100">AI Systems Deployed</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-white">50+</dd>
							</div>
							<div className="flex flex-col bg-white/10 backdrop-blur-md p-8 border border-white/20">
								<dt className="text-sm font-semibold leading-6 text-blue-100">Cloud Migrations</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-white">100+</dd>
							</div>
							<div className="flex flex-col bg-white/10 backdrop-blur-md p-8 border border-white/20">
								<dt className="text-sm font-semibold leading-6 text-blue-100">Security Audits</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-white">200+</dd>
							</div>
							<div className="flex flex-col bg-white/10 backdrop-blur-md p-8 border border-white/20">
								<dt className="text-sm font-semibold leading-6 text-blue-100">Client Satisfaction</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-white">98%</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Innovative Services Preview */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<div className="mb-6">
							<div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-sm font-medium">
								<Rocket className="h-4 w-4 mr-2" />
								New for 2026
							</div>
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
							Innovative 2026 Services
						</h2>
						<p className="text-lg leading-8 text-gray-600">
							Discover our revolutionary micro SaaS, IT infrastructure, and AI solutions that are transforming industries.
						</p>
					</div>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
						<div className="bg-white rounded-2xl p-8 shadow-lg shadow-blue-500/10 border border-gray-100 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
								<Zap className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Micro SaaS Solutions</h3>
							<p className="text-gray-600 mb-6">Innovative micro SaaS services for modern businesses, from content orchestration to quantum data sync.</p>
							<Link to="/services/innovative-2026-showcase" className="text-blue-600 hover:text-blue-700 font-semibold">
								Explore Services →
							</Link>
						</div>
						
						<div className="bg-white rounded-2xl p-8 shadow-lg shadow-purple-500/10 border border-gray-100 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
								<Cpu className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">IT Infrastructure</h3>
							<p className="text-gray-600 mb-6">Next-generation IT solutions powered by quantum computing and AI for maximum efficiency.</p>
							<Link to="/services/innovative-2026-showcase" className="text-blue-600 hover:text-blue-700 font-semibold">
								Explore Services →
							</Link>
						</div>
						
						<div className="bg-white rounded-2xl p-8 shadow-lg shadow-cyan-500/10 border border-gray-100 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105">
							<div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl flex items-center justify-center mb-6">
								<Brain className="h-8 w-8 text-white" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">Advanced AI</h3>
							<p className="text-gray-600 mb-6">Revolutionary AI platforms with consciousness, creativity, and autonomous decision-making.</p>
							<Link to="/services/innovative-2026-showcase" className="text-blue-600 hover:text-blue-700 font-semibold">
								Explore Services →
							</Link>
						</div>
					</div>
					
					<div className="text-center">
						<Link
							to="/services/innovative-2026-showcase"
							className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
						>
							<Globe className="mr-2 h-5 w-5" />
							View All Innovative 2026 Services
							<ArrowRight className="ml-2 h-5 w-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
							Ready to transform your business?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
						</p>
						<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Link
								to="/contact"
								className="w-full sm:w-auto bg-white px-8 py-4 text-lg font-semibold text-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
							>
								Get Started
								<ArrowRight className="ml-2 h-5 w-5 inline" />
							</Link>
							<Link
								to="/services/innovative-2026-showcase"
								className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white px-8 py-4 text-lg font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
							>
								<Star className="mr-2 h-5 w-5 inline" />
								Explore Services
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
