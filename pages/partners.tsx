import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building, Users, Globe, Handshake, Award, CheckCircle, Star, Zap, Shield } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

export default function Partners() {
	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partners</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We collaborate with leading technology companies and service providers to deliver comprehensive solutions that drive your business forward.
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

			{/* Partnership Benefits */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Partnership Benefits</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Why partner with Zion Tech Group?
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our partnerships create mutual value through shared expertise, expanded capabilities, and enhanced market reach.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Globe className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
									Expanded Market Reach
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Access new markets and customer segments through our established network and expertise.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Zap className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
									Innovation Acceleration
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Leverage our AI and cloud expertise to accelerate your product development and innovation.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
									<Shield className="h-5 w-5 flex-none text-purple-600" aria-hidden="true" />
									Enhanced Security
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										Benefit from our cybersecurity expertise and compliance frameworks to protect your solutions.
									</p>
								</dd>
							</div>
						</dl>
					</div>
				</div>
			</section>

			{/* Technology Partners */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Technology Partners</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Leading cloud and AI platforms
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We partner with the world's leading technology companies to deliver enterprise-grade solutions.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid gap-8 lg:grid-cols-3">
							<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
										<Building className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">Cloud Providers</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Strategic partnerships with AWS, Microsoft Azure, and Google Cloud Platform for scalable infrastructure solutions.
								</p>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Multi-cloud expertise</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Certified professionals</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Optimized pricing</span>
									</div>
								</div>
							</div>

							<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
										<Star className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">AI & ML Platforms</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Partnerships with OpenAI, Anthropic, and leading AI research institutions for cutting-edge AI solutions.
								</p>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Early access to new models</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Custom training capabilities</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Ethical AI frameworks</span>
									</div>
								</div>
							</div>

							<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
										<Shield className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">Security Partners</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Collaborations with CrowdStrike, Palo Alto Networks, and other security leaders for comprehensive protection.
								</p>
								<div className="space-y-2">
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Advanced threat detection</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">Compliance frameworks</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle className="h-4 w-4 text-green-600" />
										<span className="text-sm text-gray-700">24/7 monitoring</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Service Partners */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Service Partners</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Specialized expertise and delivery
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							We work with specialized service providers to deliver comprehensive solutions across all aspects of your technology needs.
						</p>
					</div>
					<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
						<div className="grid gap-8 lg:grid-cols-2">
							<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
										<Users className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">Consulting Partners</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Strategic partnerships with management consulting firms for business transformation and digital strategy.
								</p>
								<ul className="space-y-2 text-sm text-gray-700">
									<li>• Business process optimization</li>
									<li>• Change management</li>
									<li>• Digital transformation strategy</li>
									<li>• ROI analysis and measurement</li>
								</ul>
							</div>

							<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
								<div className="flex items-center gap-x-3 mb-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
										<Building className="h-6 w-6 text-white" />
									</div>
									<h3 className="text-xl font-semibold text-gray-900">Implementation Partners</h3>
								</div>
								<p className="text-gray-600 mb-6">
									Technical implementation partners for specialized domains like ERP, CRM, and industry-specific solutions.
								</p>
								<ul className="space-y-2 text-sm text-gray-700">
									<li>• Enterprise software implementation</li>
									<li>• Data migration services</li>
									<li>• Training and change management</li>
									<li>• Ongoing support and maintenance</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Partnership Process */}
			<section className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center">
						<h2 className="text-base font-semibold leading-7 text-blue-600">Partnership Process</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							How we build successful partnerships
						</p>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Our structured approach ensures successful partnerships that deliver value for all stakeholders.
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
										We explore mutual opportunities and align on shared goals and objectives.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">2</span>
									Planning
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We develop a comprehensive partnership strategy and implementation roadmap.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">3</span>
									Execution
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We implement the partnership with clear communication and regular progress updates.
									</p>
								</dd>
							</div>
							<div className="flex flex-col">
								<dt className="text-lg font-semibold leading-7 text-gray-900">
									<span className="mr-2 text-2xl font-bold text-blue-600">4</span>
									Optimization
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
									<p className="flex-auto">
										We continuously optimize and expand the partnership based on results and feedback.
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
							Interested in partnering with us?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Let's explore how we can create mutual value and drive innovation together.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								href="/contact"
								className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
							>
								Get in Touch
								<ArrowRight className="ml-2 h-4 w-4 inline" />
							</Link>
							<Link
								href="/services"
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