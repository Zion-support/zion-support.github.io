import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Cloud, Shield, Zap, Database, Server, Lock, BarChart3, Users, Globe, Code } from 'lucide-react'
import PageTransition from '../src/components/PageTransition'

// Sample data for services
const microSaaS = [
	{
		id: 'ai-workflow-automation',
		icon: '🤖',
		name: 'AI Workflow Automation',
		tagline: 'Automate complex business processes with AI',
		price: '$299',
		period: '/month',
		features: ['Process mapping', 'AI decision trees', 'Integration APIs', 'Analytics dashboard']
	},
	{
		id: 'blockchain-enterprise',
		icon: '⛓️',
		name: 'Blockchain Enterprise Solutions',
		tagline: 'Secure, transparent business operations',
		price: '$499',
		period: '/month',
		features: ['Smart contracts', 'Supply chain tracking', 'Identity management', 'Compliance tools']
	},
	{
		id: 'iot-data-analytics',
		icon: '📊',
		name: 'IoT Data Analytics Platform',
		tagline: 'Real-time insights from connected devices',
		price: '$199',
		period: '/month',
		features: ['Device management', 'Data visualization', 'Alert system', 'Predictive analytics']
	}
];

const itServices = [
	{
		id: 'cloud-devops',
		icon: '☁️',
		name: 'Cloud & DevOps',
		tagline: 'Scalable infrastructure and automation',
		price: '$2,500',
		period: '/month',
		features: ['Kubernetes management', 'CI/CD pipelines', 'Monitoring & alerting', 'Cost optimization']
	},
	{
		id: 'cybersecurity',
		icon: '🛡️',
		name: 'Cybersecurity Services',
		tagline: 'Comprehensive security solutions',
		price: '$3,500',
		period: '/month',
		features: ['Threat detection', 'Vulnerability assessment', 'Compliance management', 'Incident response']
	},
	{
		id: 'enterprise-it',
		icon: '🏢',
		name: 'Enterprise IT Solutions',
		tagline: 'Large-scale IT transformation',
		price: '$8,000',
		period: '/month',
		features: ['Digital transformation', 'Legacy modernization', 'Change management', 'ROI tracking']
	}
];

const aiServices = [
	{
		id: 'ai-autonomous-systems',
		icon: '🧠',
		name: 'AI Autonomous Systems',
		tagline: 'Self-managing business operations',
		price: '$4,500',
		period: '/month',
		features: ['Multi-agent systems', 'Decision automation', 'Learning algorithms', 'Performance monitoring']
	},
	{
		id: 'ai-business-intelligence',
		icon: '📈',
		name: 'AI Business Intelligence',
		tagline: 'Data-driven insights and predictions',
		price: '$3,200',
		period: '/month',
		features: ['Predictive analytics', 'Natural language queries', 'Custom dashboards', 'Automated reporting']
	},
	{
		id: 'ai-marketing-automation',
		icon: '🎯',
		name: 'AI Marketing Automation',
		tagline: 'Intelligent customer engagement',
		price: '$2,800',
		period: '/month',
		features: ['Customer segmentation', 'Personalized content', 'Campaign optimization', 'ROI tracking']
	}
];

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
									Explore cloud solutions
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

			{/* Expanded Catalog Sections */}
			<section className="mt-16">
				<h2 className="text-2xl font-semibold">Featured Micro SaaS</h2>
				<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{microSaaS.map((item) => (
						<article key={item.id} className="rounded-lg border p-4">
							<div className="text-lg font-semibold">{item.icon} {item.name}</div>
							<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
							<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
							</ul>
							<Link to={`/services/${item.id}`} className="mt-3 inline-block text-blue-600 underline">Learn more</Link>
						</article>
					))}
				</div>
			</section>

			<section className="mt-16">
				<h2 className="text-2xl font-semibold">Advanced IT Services</h2>
				<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{itServices.map((item) => (
						<article key={item.id} className="rounded-lg border p-4">
							<div className="text-lg font-semibold">{item.icon} {item.name}</div>
							<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
							<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
							</ul>
							<Link to={`/services/${item.id}`} className="mt-3 inline-block text-blue-600 underline">Learn more</Link>
						</article>
					))}
				</div>
			</section>

			<section className="mt-16">
				<h2 className="text-2xl font-semibold">Innovative AI Services</h2>
				<div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{aiServices.map((item) => (
						<article key={item.id} className="rounded-lg border p-4">
							<div className="text-lg font-semibold">{item.icon} {item.name}</div>
							<p className="mt-1 text-sm text-gray-600">{item.tagline}</p>
							<div className="mt-2 text-sm"><span className="font-semibold">{item.price}</span> <span className="text-gray-500">{item.period}</span></div>
							<ul className="mt-2 list-disc pl-5 text-sm text-gray-700">
								{item.features.slice(0,3).map((f, idx) => (<li key={idx}>{f}</li>))}
							</ul>
							<Link to={`/services/${item.id}`} className="mt-3 inline-block text-blue-600 underline">Learn more</Link>
						</article>
					))}
				</div>
			</section>

			<section className="mt-16 rounded-lg border bg-gray-50 p-6">
				<h2 className="text-xl font-medium">Why Zion Tech Group</h2>
				<ul className="mt-2 list-disc pl-5 text-gray-700">
					<li>Real, battle-tested implementations (no mockups)</li>
					<li>Transparent pricing and fast onboarding</li>
					<li>Enterprise-grade security and compliance</li>
					<li>ROI-focused delivery and measurable outcomes</li>
				</ul>
				<p className="mt-3 text-sm text-gray-700">Average market prices (monthly): Micro SaaS $99–$999, AI Services $499–$4,999, Enterprise IT $2,000–$15,000. We price competitively based on scope.</p>
				<p className="mt-1 text-sm text-gray-700">Call <a className="text-blue-600 underline" href="tel:+13024640950">+1 302 464 0950</a>, email <a className="text-blue-600 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>, or visit <a className="text-blue-600 underline" href="https://ziontechgroup.com">ziontechgroup.com</a>.</p>
				<div className="mt-4 grid gap-3 sm:grid-cols-2">
					<Link to="/pricing" className="inline-block rounded border px-4 py-2 text-blue-700 hover:bg-blue-50">See pricing guidance</Link>
					<Link to="/request-quote" className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Request a custom quote</Link>
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
