import React from 'react';
import { SEO } from '../components/SEO';
import { ArrowRight, Users, Clock, Globe } from 'lucide-react';

export default function CaseStudies() {
	const caseStudies = [
		{
			id: 1,
			title: 'AI-Powered Customer Service Transformation',
			company: 'Global Retail Corp',
			industry: 'Retail',
			challenge:
				'High customer service costs and long response times affecting customer satisfaction',
			solution: 'Implemented AI-powered chatbots and intelligent routing system',
			results: [
				'40% reduction in customer service costs',
				'85% improvement in response time',
				'92% customer satisfaction rate',
			],
			duration: '6 months',
			investment: '$250,000',
			roi: '320%',
		},
		{
			id: 2,
			title: 'Cybersecurity Infrastructure Overhaul',
			company: 'Financial Services Inc',
			industry: 'Finance',
			challenge: 'Outdated security systems vulnerable to modern cyber threats',
			solution: 'Implemented zero-trust architecture with advanced threat detection',
			results: [
				'99.9% threat detection rate',
				'Zero security breaches in 18 months',
				'50% reduction in security incidents',
			],
			duration: '8 months',
			investment: '$500,000',
			roi: '280%',
		},
	];

	const industries = [
		{ name: 'Retail', count: 15 },
		{ name: 'Finance', count: 12 },
		{ name: 'Healthcare', count: 8 },
		{ name: 'Manufacturing', count: 10 },
		{ name: 'Technology', count: 20 },
		{ name: 'Government', count: 6 },
	];

	return (
		<div className="min-h-screen bg-white">
			<SEO title="Case Studies" description="Real-world success stories across industries." />

			<section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Case Studies</h1>
					<p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
						Real-world examples of how we've helped organizations transform their business through
						innovative technology solutions
					</p>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
						<div>
							<div className="text-4xl font-bold text-zion-cyan mb-2">71+</div>
							<div className="text-zion-slate-dark">Successful Projects</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-zion-purple mb-2">$2.5M+</div>
							<div className="text-zion-slate-dark">Total Investment</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-zion-cyan mb-2">280%</div>
							<div className="text-zion-slate-dark">Average ROI</div>
						</div>
						<div>
							<div className="text-4xl font-bold text-zion-purple mb-2">6</div>
							<div className="text-zion-slate-dark">Industries Served</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-zion-slate-light">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Industries We Serve</h2>
						<p className="text-xl text-zion-slate-light">Explore case studies from your industry</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{industries.map((industry, index) => (
							<div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow cursor-pointer">
								<div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
									<Globe className="w-6 h-6 text-zion-cyan" />
								</div>
								<div className="text-lg font-semibold text-zion-slate-dark mb-1">{industry.name}</div>
								<div className="text-sm text-zion-slate-light">{industry.count} projects</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Featured Case Studies</h2>
						<p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
							Discover how our solutions have delivered measurable results across different industries and use
							cases
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{caseStudies.map((study) => (
							<div key={study.id} className="bg-white border border-zion-slate-light/20 rounded-xl p-8 hover:shadow-lg transition-shadow">
								<div className="flex items-center justify-between mb-4">
									<span className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-sm font-medium rounded-full">
										{study.industry}
									</span>
									<div className="flex items-center space-x-2 text-zion-slate-light">
										<Clock className="w-4 h-4" />
										<span className="text-sm">{study.duration}</span>
									</div>
								</div>
								<h3 className="text-2xl font-bold text-zion-slate-dark mb-2">{study.title}</h3>
								<div className="flex items-center space-x-2 mb-4">
									<Users className="w-4 h-4 text-zion-slate-light" />
									<span className="text-zion-slate-light">{study.company}</span>
								</div>
								<div className="space-y-4 mb-6">
									<div>
										<h4 className="font-semibold text-zion-slate-dark mb-2">Challenge:</h4>
										<p className="text-zion-slate-light">{study.challenge}</p>
									</div>
									<div>
										<h4 className="font-semibold text-zion-slate-dark mb-2">Solution:</h4>
										<p className="text-zion-slate-light">{study.solution}</p>
									</div>
								</div>
								<button className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
									View Full Case Study
									<ArrowRight className="ml-2 w-4 h-4" />
								</button>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
