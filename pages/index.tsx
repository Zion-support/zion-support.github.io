import React from 'react'
import Link from 'next/link'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Index() {
	const title = 'Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
	const description = 'We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business.'

	return (
		<PageTransition>
			{/* Enhanced Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-zion-slate via-zion-slate-light to-zion-purple py-20 sm:py-32 min-h-screen flex items-center">
				{/* Animated Background Elements */}
				<div className="absolute inset-0 -z-10 overflow-hidden">
					<div className="absolute top-20 left-10 w-72 h-72 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
					<div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
					<div className="absolute bottom-20 left-1/4 w-80 h-80 bg-zion-blue/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
					
					{/* Grid Pattern */}
					<svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
						<defs>
							<pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
								<path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-zion-cyan"/>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#hero-grid)" />
					</svg>
				</div>

				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
					<div className="mx-auto max-w-4xl text-center">
						{/* Enhanced Badge */}
						<div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 backdrop-blur-sm">
							<span className="w-2 h-2 bg-zion-cyan rounded-full mr-2 animate-pulse"></span>
							Leading AI & Cloud Solutions
						</div>

						<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8">
							Transform Your Business with{' '}
							<span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent animate-pulse">
								AI & Cloud
							</span>
						</h1>
						
						<p className="text-xl md:text-2xl leading-8 text-zion-cyan/80 mb-12 max-w-3xl mx-auto">
							We build autonomous AI systems, cloud-native platforms, and secure infrastructure that scale your business from startup to enterprise.
						</p>
						
						<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
							<Link
								href="/contact"
								className="group relative px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105 overflow-hidden"
							>
								<span className="relative z-10 flex items-center">
									Get Started
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
								</span>
								<div className="absolute inset-0 bg-gradient-to-r from-zion-blue to-zion-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</Link>
							
							<Link
								href="/services"
								className="group px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-zion-slate transition-all duration-300 hover:scale-105"
							>
								Learn more 
								<span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
							</Link>
						</div>

						{/* Enhanced Stats Preview */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">500+</div>
								<div className="text-sm text-zion-cyan/70">Happy Clients</div>
							</div>
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-bold text-zion-blue mb-2">50+</div>
								<div className="text-sm text-zion-blue/70">Countries</div>
							</div>
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-bold text-zion-purple mb-2">1000+</div>
								<div className="text-sm text-zion-purple/70">Projects</div>
							</div>
							<div className="text-center">
								<div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">99.9%</div>
								<div className="text-sm text-zion-cyan/70">Uptime</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced Features Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-br from-zion-slate/50 to-zion-slate-light/30 relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
				</div>

				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<div className="inline-flex items-center px-3 py-1 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-6">
							Advanced Technology
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl mb-6">
							Everything you need to{' '}
							<span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
								scale your business
							</span>
						</h2>
						<p className="text-xl leading-8 text-zion-cyan/80">
							From AI-powered automation to enterprise-grade security, we provide the tools and expertise to transform your operations.
						</p>
					</div>
					
					<div className="mx-auto max-w-6xl">
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
							{/* AI Autonomous Systems */}
							<div className="group relative p-8 bg-gradient-to-br from-zion-slate/80 to-zion-slate-light/40 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/10 backdrop-blur-sm">
								<div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="relative z-10">
									<div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
										<Brain className="h-8 w-8 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">AI Autonomous Systems</h3>
									<p className="text-zion-cyan/80 mb-6 leading-relaxed">
										Multi-agent copilots, RAG workflows, and intelligent automation that scales with your business needs.
									</p>
									<Link 
										href="/services#ai" 
										className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group/link transition-colors"
									>
										Learn more 
										<span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
									</Link>
								</div>
							</div>

							{/* Cloud Platforms */}
							<div className="group relative p-8 bg-gradient-to-br from-zion-slate/80 to-zion-slate-light/40 rounded-2xl border border-zion-blue/20 hover:border-zion-blue/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-blue/10 backdrop-blur-sm">
								<div className="absolute inset-0 bg-gradient-to-br from-zion-blue/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="relative z-10">
									<div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
										<Cloud className="h-8 w-8 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">Cloud Platforms</h3>
									<p className="text-zion-cyan/80 mb-6 leading-relaxed">
										Serverless architectures, Kubernetes orchestration, and data pipelines built for enterprise scale.
									</p>
									<Link 
										href="/services#cloud" 
										className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group/link transition-colors"
									>
										Learn more 
										<span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
									</Link>
								</div>
							</div>

							{/* Cybersecurity */}
							<div className="group relative p-8 bg-gradient-to-br from-zion-slate/80 to-zion-slate-light/40 rounded-2xl border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/10 backdrop-blur-sm">
								<div className="absolute inset-0 bg-gradient-to-br from-zion-purple/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
								<div className="relative z-10">
									<div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
										<Shield className="h-8 w-8 text-white" />
									</div>
									<h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>
									<p className="text-zion-cyan/80 mb-6 leading-relaxed">
										Zero-trust frameworks, compliance automation, and incident response that protects your business.
									</p>
									<Link 
										href="/services#cybersecurity" 
										className="inline-flex items-center text-zion-cyan hover:text-zion-cyan-light font-semibold group/link transition-colors"
									>
										Learn more 
										<span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced Stats Section */}
			<section className="py-24 sm:py-32 bg-gradient-to-br from-zion-slate to-zion-slate-light relative overflow-hidden">
				{/* Background Elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-1/3 left-1/3 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-zion-purple/10 rounded-full blur-3xl"></div>
				</div>

				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
					<div className="mx-auto max-w-3xl text-center mb-16">
						<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
							Trusted by{' '}
							<span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
								leading companies
							</span>
						</h2>
						<p className="text-xl leading-8 text-zion-cyan/80">
							We've helped businesses across industries transform their operations and scale efficiently.
						</p>
					</div>
					
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
						<div className="group relative p-8 bg-gradient-to-br from-zion-slate/80 to-zion-slate-light/40 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20 backdrop-blur-sm">
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
								<div className="text-sm font-semibold text-zion-cyan/80">AI Systems Deployed</div>
							</div>
						</div>
						
						<div className="group relative p-8 bg-gradient-to-br from-zion-slate/80 to-zion-slate-light/40 rounded-2xl border border-zion-blue/20 hover:border-zion-blue/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-blue/20 backdrop-blur-sm">
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-zion-blue mb-3 group-hover:scale-110 transition-transform duration-300">100+</div>
								<div className="text-sm font-semibold text-zion-blue/80">Cloud Migrations</div>
							</div>
						</div>
						
						<div className="group relative p-8 bg-gradient-to-br from-zion-slate/80 to-zion-slate-light/40 rounded-2xl border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/20 backdrop-blur-sm">
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-zion-purple mb-3 group-hover:scale-110 transition-transform duration-300">200+</div>
								<div className="text-sm font-semibold text-zion-purple/80">Security Audits</div>
							</div>
						</div>
						
						<div className="group relative p-8 bg-gradient-to-br from-zion-slate/80 to-zion-slate-light/40 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20 backdrop-blur-sm">
							<div className="text-center">
								<div className="text-4xl md:text-5xl font-bold text-zion-cyan mb-3 group-hover:scale-110 transition-transform duration-300">98%</div>
								<div className="text-sm font-semibold text-zion-cyan/80">Client Satisfaction</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced CTA Section */}
			<section className="relative py-24 sm:py-32 overflow-hidden">
				{/* Background */}
				<div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple"></div>
				
				{/* Animated Background Elements */}
				<div className="absolute inset-0 -z-10">
					<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-ping"></div>
					<div className="absolute top-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-ping delay-1000"></div>
					<div className="absolute bottom-20 left-1/3 w-28 h-28 bg-white/10 rounded-full animate-ping delay-2000"></div>
				</div>

				<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
							Ready to transform your{' '}
							<span className="bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
								business?
							</span>
						</h2>
						<p className="mx-auto text-xl leading-8 text-white/90 mb-12">
							Let's discuss how our AI, cloud, and cybersecurity solutions can help you scale efficiently and securely.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
							<Link
								href="/contact"
								className="group relative px-8 py-4 bg-white text-zion-slate font-semibold rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 overflow-hidden"
							>
								<span className="relative z-10 flex items-center">
									Get Started
									<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
								</span>
								<div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</Link>
							<Link
								href="/services"
								className="group px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-zion-slate transition-all duration-300 hover:scale-105"
							>
								View Services 
								<span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
