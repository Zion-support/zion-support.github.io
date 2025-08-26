import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, TrendingUp, CheckCircle, Rocket, Cpu, Network, Smartphone, ShieldCheck, Globe2, ServerCog, FileText, Palette, Target, Lightbulb, Wrench, Cog } from 'lucide-react'
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
							<a
								href="tel:+13024640950"
								className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
							>
								Call: +1 302 464 0950
							</a>
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
									AI & Machine Learning
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										AI Autonomous Suite ($79/month), Email Responder ($99/month), and intelligent automation that scales with your business needs.
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
									Cloud & Infrastructure
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Quantum Cloud Infrastructure ($299/month), Autonomous DevOps ($199/month), and edge computing built for enterprise scale.
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
										Zero Trust Architecture ($399/month), AI Threat Intelligence ($249/month), and incident response that protects your business.
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

			{/* Featured Services Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Featured Services</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Our most popular solutions
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Discover the services that are transforming businesses across industries.
						</p>
					</div>

					<div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
						{/* AI Autonomous Suite */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="flex items-center justify-between mb-4">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
									Popular
								</span>
								<div className="text-2xl">🤖</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">AI Autonomous Suite</h3>
							<p className="text-sm text-gray-600 mb-3">Intelligent automation for modern businesses</p>
							<p className="text-gray-700 mb-4">Comprehensive AI-powered automation platform that streamlines business processes and increases efficiency.</p>
							<div className="mb-4">
								<span className="text-2xl font-bold text-gray-900">$79/month</span>
							</div>
							<ul className="space-y-2 mb-6">
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									Workflow automation
								</li>
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									AI decision making
								</li>
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									Integration APIs
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<a
									href="https://ziontechgroup.com/services/ai-autonomous-suite"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
								>
									Learn more
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
								<Link
									to="/contact"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
								>
									Get Started
								</Link>
							</div>
						</div>

						{/* Quantum Cloud Infrastructure */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="flex items-center justify-between mb-4">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
									New
								</span>
								<div className="text-2xl">⚛️</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Quantum Cloud Infrastructure</h3>
							<p className="text-sm text-gray-600 mb-3">Next-generation cloud computing with quantum capabilities</p>
							<p className="text-gray-700 mb-4">Advanced cloud infrastructure leveraging quantum computing principles for unprecedented performance and security.</p>
							<div className="mb-4">
								<span className="text-2xl font-bold text-gray-900">$299/month</span>
							</div>
							<ul className="space-y-2 mb-6">
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									Quantum-resistant encryption
								</li>
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									Advanced load balancing
								</li>
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									AI-powered optimization
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<a
									href="https://ziontechgroup.com/services/quantum-cloud-infrastructure"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
								>
									Learn more
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
								<Link
									to="/contact"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
								>
									Get Started
								</Link>
							</div>
						</div>

						{/* Zero Trust Network Architecture */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
							<div className="flex items-center justify-between mb-4">
								<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
									Popular
								</span>
								<div className="text-2xl">🛡️</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-2">Zero Trust Network Architecture</h3>
							<p className="text-sm text-gray-600 mb-3">Comprehensive zero-trust security implementation</p>
							<p className="text-gray-700 mb-4">Complete zero-trust network architecture with continuous verification and adaptive access controls.</p>
							<div className="mb-4">
								<span className="text-2xl font-bold text-gray-900">$399/month</span>
							</div>
							<ul className="space-y-2 mb-6">
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									Continuous verification
								</li>
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									Adaptive access controls
								</li>
								<li className="flex items-center gap-2 text-sm text-gray-600">
									<CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
									Threat detection
								</li>
							</ul>
							<div className="flex items-center justify-between">
								<a
									href="https://ziontechgroup.com/services/zero-trust-network-architecture"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
								>
									Learn more
									<ArrowRight className="ml-2 h-4 w-4" />
								</a>
								<Link
									to="/contact"
									className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
								>
									Get Started
								</Link>
							</div>
						</div>
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

			{/* Contact Information Section */}
			<section className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Get In Touch</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Ready to start your transformation?
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
								<Globe2 className="h-6 w-6 text-white" />
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
							<a
								href="tel:+13024640950"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
							>
								Call: +1 302 464 0950
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
