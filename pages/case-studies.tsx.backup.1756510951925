import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, Users, Clock, ArrowRight, Star, Award, Building, Zap } from 'lucide-react'


export default function CaseStudies() {
	const caseStudies = [
		{
			id: 1,
			title: 'TechCorp: 300% Efficiency Increase with AI Automation',
			client: 'TechCorp Inc.',
			industry: 'Technology',
			challenge: 'Manual processes were slowing down operations and causing errors in customer service.',
			solution: 'Implemented AI-powered multi-agent system for customer service and sales operations.',
			results: [
				'300% increase in operational efficiency',
				'90% reduction in response time',
				'$2.5M annual cost savings',
				'Improved customer satisfaction scores'
			],
			duration: '6 months',
			team: 12,
			rating: 5
		},
		{
			id: 2,
			title: 'HealthCare Solutions: Secure Cloud Migration',
			client: 'HealthCare Solutions',
			industry: 'Healthcare',
			challenge: 'Legacy on-premise systems were expensive to maintain and lacked scalability.',
			solution: 'Migrated to secure cloud infrastructure with HIPAA compliance and disaster recovery.',
			results: [
				'40% reduction in infrastructure costs',
				'99.9% uptime achieved',
				'Full HIPAA compliance',
				'Improved data security'
			],
			duration: '8 months',
			team: 8,
			rating: 5
		},
		{
			id: 3,
			title: 'ManufacturingCo: IoT and AI Integration',
			client: 'ManufacturingCo',
			industry: 'Manufacturing',
			challenge: 'Production inefficiencies and lack of real-time monitoring were causing delays.',
			solution: 'Deployed IoT sensors and AI analytics for predictive maintenance and optimization.',
			results: [
				'25% increase in production output',
				'60% reduction in downtime',
				'Predictive maintenance alerts',
				'Real-time production monitoring'
			],
			duration: '10 months',
			team: 15,
			rating: 5
		},
		{
			id: 4,
			title: 'FinTech Startup: Micro SaaS Platform',
			client: 'FinTech Startup',
			industry: 'Financial Services',
			challenge: 'Needed a scalable platform to manage multiple financial services efficiently.',
			solution: 'Built custom micro SaaS platform with automated workflows and AI-powered insights.',
			results: [
				'50% faster service delivery',
				'Automated compliance reporting',
				'Scalable architecture',
				'Reduced operational overhead'
			],
			duration: '4 months',
			team: 6,
			rating: 5
		}
	]

	const industries = ['All', 'Technology', 'Healthcare', 'Manufacturing', 'Financial Services', 'Retail', 'Education']

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Case Studies
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Real results from real clients. See how we've transformed businesses across industries.
						</p>
					</div>
				</div>
			</section>

			{/* Industry Filter */}
			<section className="py-12 border-b border-gray-200">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-wrap gap-4 justify-center">
						{industries.map((industry) => (
							<button
								key={industry}
								className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-colors"
							>
								{industry}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Featured Case Study */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Success Story</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we transformed TechCorp's operations with AI automation
						</p>
					</div>
					<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
						<div className="grid gap-8 lg:grid-cols-2">
							<div>
								<div className="flex items-center gap-2 mb-4">
									<Building className="h-5 w-5 text-blue-600" />
									<span className="text-sm text-gray-500">{caseStudies[0].industry}</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudies[0].title}</h3>
								<p className="text-gray-600 mb-6">{caseStudies[0].challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{caseStudies[0].duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{caseStudies[0].team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									Learn More <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
							<div>
								<h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
								<div className="space-y-3">
									{caseStudies[0].results.map((result, index) => (
										<div key={index} className="flex items-center gap-2">
											<Star className="h-4 w-4 text-yellow-500" />
											<span className="text-gray-700">{result}</span>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Case Studies Grid */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">More Success Stories</h2>
						<p className="mt-6 text-lg text-gray-600">
							Explore how we've helped businesses across different industries achieve their goals
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						{caseStudies.slice(1).map((study) => (
							<div key={study.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
								<div className="flex items-center justify-between mb-4">
									<div className="flex items-center gap-2">
										<Building className="h-5 w-5 text-blue-600" />
										<span className="text-sm text-gray-500">{study.industry}</span>
									</div>
									<div className="flex items-center gap-1">
										{Array.from({ length: study.rating }).map((_, i) => (
											<Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
										))}
									</div>
								</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
								<p className="text-gray-600 mb-4">{study.challenge}</p>
								<div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										{study.duration}
									</div>
									<div className="flex items-center gap-1">
										<Users className="h-4 w-4" />
										{study.team} team members
									</div>
								</div>
								<Link
									to="/contact"
									className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
								>
									View Details <ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Success Metrics */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Track Record</h2>
						<p className="mt-6 text-lg text-gray-600">
							Consistent results across all our client engagements
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
							<p className="text-gray-600">Client Satisfaction Rate</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
							<p className="text-gray-600">Total Client Savings</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
							<p className="text-gray-600">Projects Completed</p>
						</div>
						<div className="text-center">
							<div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
							<p className="text-gray-600">Support Available</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Process</h2>
						<p className="mt-6 text-lg text-gray-600">
							How we deliver consistent results for our clients
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
								<TrendingUp className="h-8 w-8 text-blue-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Discovery</h3>
							<p className="text-gray-600">
								We analyze your current state and identify opportunities for improvement.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
								<Zap className="h-8 w-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Strategy</h3>
							<p className="text-gray-600">
								We develop a comprehensive plan tailored to your specific needs and goals.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
								<Users className="h-8 w-8 text-purple-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation</h3>
							<p className="text-gray-600">
								Our expert team executes the solution with precision and attention to detail.
							</p>
						</div>
						<div className="text-center">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 mb-6">
								<Award className="h-8 w-8 text-orange-600" />
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">Optimization</h3>
							<p className="text-gray-600">
								We continuously monitor and optimize to ensure maximum performance and ROI.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-24 sm:py-32 bg-blue-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white">Ready to Write Your Success Story?</h2>
						<p className="mt-6 text-lg text-blue-100">
							Let's discuss how our expertise can help your business achieve similar results.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<Link
								to="/contact"
								className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
							>
								Get Started Today
							</Link>
							<Link
								to="/services"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100"
							>
								Explore Our Services →
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}