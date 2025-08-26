import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Star, Globe, Code, Lock } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'
import FuturisticHero from '../src/components/FuturisticHero'
import EnhancedServicesShowcase from '../src/components/EnhancedServicesShowcase'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	return (
		<PageTransition>
			{/* Futuristic Hero Section */}
			<FuturisticHero />

			{/* Services Overview Section */}
			<section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Core Services</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Transform your business with cutting-edge technology
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
						</p>
					</div>
					
					<div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Brain className="h-6 w-6 text-white" />
									</div>
									<span>AI Autonomous Systems</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
									</p>
									<p className="mt-6">
										<Link to="/services#ai" className="text-sm font-semibold leading-6 text-purple-600 hover:text-purple-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Cloud className="h-6 w-6 text-white" />
									</div>
									<span>Cloud Platforms</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
									</p>
									<p className="mt-6">
										<Link to="/services#cloud" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Shield className="h-6 w-6 text-white" />
									</div>
									<span>Cybersecurity</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Zero-trust frameworks, compliance automation, and incident response that protects your business.
									</p>
									<p className="mt-6">
										<Link to="/services#cybersecurity" className="text-sm font-semibold leading-6 text-red-600 hover:text-red-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
										</Link>
									</p>
								</dd>
							</div>
							
							<div className="flex flex-col group">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 mb-4">
									<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
										<Code className="h-6 w-6 text-white" />
									</div>
									<span>Micro SaaS</span>
								</dt>
								<dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Rapidly build and deploy SaaS products with proven infrastructure patterns and AI-powered features.
									</p>
									<p className="mt-6">
										<Link to="/services#saas" className="text-sm font-semibold leading-6 text-green-600 hover:text-green-500 transition-colors group-hover:gap-2 flex items-center">
											Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
						<div className="text-center mb-16">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
								Trusted by leading companies worldwide
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-600">
								We've helped businesses across industries transform their operations and scale efficiently.
							</p>
						</div>
						<dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-purple-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">AI Systems Deployed</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-purple-600">500+</dd>
							</div>
							<div className="flex flex-col bg-gradient-to-br from-blue-50 to-cyan-50 p-8 border border-blue-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Cloud Migrations</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-blue-600">1000+</dd>
							</div>
							<div className="flex flex-col bg-gradient-to-br from-red-50 to-orange-50 p-8 border border-red-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Security Audits</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-red-600">2000+</dd>
							</div>
							<div className="flex flex-col bg-gradient-to-br from-green-50 to-emerald-50 p-8 border border-green-100">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Client Satisfaction</dt>
								<dd className="order-first text-4xl font-bold tracking-tight text-green-600">98%</dd>
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
							Ready to transform your business?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-100">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
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
