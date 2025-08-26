import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Users, Award, Globe, Target, Zap, CheckCircle } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function About() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We build pragmatic, high-quality technology solutions across cloud, data, AI, and product engineering. Our focus is measurable outcomes, reliability, and speed.
						</p>
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

			{/* Mission & Vision */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
								Our Mission
							</h2>
							<p className="text-lg leading-8 text-gray-600 mb-6">
								To democratize access to enterprise-grade technology solutions, enabling businesses of all sizes to leverage the power of AI, cloud computing, and cybersecurity to scale efficiently and securely.
							</p>
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<CheckCircle className="h-5 w-5 text-blue-600" />
									<span className="text-gray-700">Transform business operations with AI</span>
								</div>
								<div className="flex items-center gap-3">
									<CheckCircle className="h-5 w-5 text-blue-600" />
									<span className="text-gray-700">Build scalable cloud infrastructure</span>
								</div>
								<div className="flex items-center gap-3">
									<CheckCircle className="h-5 w-5 text-blue-600" />
									<span className="text-gray-700">Secure digital assets and data</span>
								</div>
							</div>
						</div>
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
								Our Vision
							</h2>
							<p className="text-lg leading-8 text-gray-600 mb-6">
								To be the leading technology partner for businesses seeking to harness the full potential of emerging technologies, creating a future where innovation drives sustainable growth and competitive advantage.
							</p>
							<div className="space-y-4">
								<div className="flex items-center gap-3">
									<Zap className="h-5 w-5 text-purple-600" />
									<span className="text-gray-700">Pioneer next-generation solutions</span>
								</div>
								<div className="flex items-center gap-3">
									<Globe className="h-5 w-5 text-purple-600" />
									<span className="text-gray-700">Global technology leadership</span>
								</div>
								<div className="flex items-center gap-3">
									<Target className="h-5 w-5 text-purple-600" />
									<span className="text-gray-700">Measurable business impact</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Values</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							What drives us forward
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our core values shape every decision we make and every solution we deliver.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Brain className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
									Innovation First
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We constantly explore emerging technologies and innovative approaches to solve complex business challenges.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Shield className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
									Trust & Security
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We prioritize security, privacy, and trust in everything we build, ensuring our clients' data and systems remain protected.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Users className="h-5 w-5 flex-none text-purple-600" aria-hidden="true" />
									Client Success
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Your success is our success. We measure our achievements by the measurable impact we deliver to your business.
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Our Team</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Expert technologists and innovators
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our team brings together decades of experience in AI, cloud computing, cybersecurity, and enterprise software development.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid gap-8 lg:grid-cols-3">
							<div className="text-center">
								<div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4">
									<Brain className="h-12 w-12 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900">AI & Machine Learning</h3>
								<p className="text-gray-600 mt-2">Experts in autonomous systems, RAG workflows, and intelligent automation</p>
							</div>
							<div className="text-center">
								<div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-green-600 to-blue-600 flex items-center justify-center mb-4">
									<Cloud className="h-12 w-12 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900">Cloud & Infrastructure</h3>
								<p className="text-gray-600 mt-2">Specialists in scalable cloud platforms and DevOps practices</p>
							</div>
							<div className="text-center">
								<div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-r from-red-600 to-orange-600 flex items-center justify-center mb-4">
									<Shield className="h-12 w-12 text-white" />
								</div>
								<h3 className="text-lg font-semibold text-gray-900">Security & Compliance</h3>
								<p className="text-gray-600 mt-2">Cybersecurity experts ensuring your business remains protected</p>
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
								Our Impact
							</h2>
							<p className="mt-4 text-lg leading-8 text-gray-600">
								Numbers that tell our story of growth and success.
							</p>
						</div>
						<dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Years of Experience</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">10+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Projects Delivered</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">200+</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Client Satisfaction</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">98%</dd>
							</div>
							<div className="flex flex-col bg-gray-400/5 p-8">
								<dt className="text-sm font-semibold leading-6 text-gray-600">Team Members</dt>
								<dd className="order-first text-3xl font-bold tracking-tight text-gray-900">25+</dd>
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
							Ready to work with us?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's discuss how our expertise can help transform your business and drive measurable results.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get in Touch
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
