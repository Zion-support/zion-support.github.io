import React from 'react';
import { ArrowRight, CheckCircle, Mail, Clock, Users, BarChart3, Zap, Target, TrendingUp, Star, Shield } from 'lucide-react';
import PageTransition from '../../src/components/PageTransition';

export default function EmailAutomation() {
	const title = 'Automated Email Follow-up Service — Zion Tech Group'
	const description = 'Intelligent email automation platform with AI-powered personalization, drip campaigns, and advanced analytics.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="flex items-center justify-center mb-4">
							<Mail className="h-6 w-6 text-blue-600 mr-2" />
							<span className="text-base font-semibold leading-7 text-blue-600">Micro SaaS Solution</span>
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Automated Email Follow-up Service
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Intelligent email automation that nurtures leads, engages customers, and drives conversions with AI-powered personalization.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Powerful Email Automation Features
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Everything you need to create, manage, and optimize your email marketing campaigns.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* AI-Powered Personalization */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
									<Target className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">AI-Powered Personalization</h3>
									<p className="text-sm text-blue-600 font-medium">Smart Content</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Dynamic content based on behavior</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Predictive send time optimization</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Subject line A/B testing</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Smart segmentation</span>
								</li>
							</ul>
						</div>

						{/* Drip Campaigns */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
									<Clock className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Drip Campaigns</h3>
									<p className="text-sm text-green-600 font-medium">Automated Sequences</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Welcome series automation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Lead nurturing sequences</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Re-engagement campaigns</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Conditional logic flows</span>
								</li>
							</ul>
						</div>

						{/* Advanced Analytics */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
									<BarChart3 className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Advanced Analytics</h3>
									<p className="text-sm text-purple-600 font-medium">Data-Driven Insights</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Real-time performance tracking</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Revenue attribution</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Customer journey mapping</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">ROI optimization suggestions</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Simple, Transparent Pricing
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Choose the plan that fits your email marketing needs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Starter Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Starter</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$49</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Perfect for small businesses</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Up to 5,000 contacts</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">10,000 emails/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Basic automation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Email support</span>
								</li>
							</ul>
						</div>

						{/* Professional Plan */}
						<div className="relative rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-lg">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
							</div>
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Professional</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$149</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Ideal for growing businesses</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Up to 25,000 contacts</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">50,000 emails/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Advanced automation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">AI personalization</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Priority support</span>
								</li>
							</ul>
						</div>

						{/* Enterprise Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$499</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">For large-scale operations</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Unlimited contacts</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Unlimited emails</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Custom integrations</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Dedicated account manager</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">24/7 phone support</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Why Choose Our Email Automation?
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Built for performance, deliverability, and results.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
									<Zap className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Lightning Fast Setup</h3>
									<p className="mt-2 text-gray-600">Get started in minutes with our intuitive drag-and-drop campaign builder.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
									<Shield className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">High Deliverability</h3>
									<p className="mt-2 text-gray-600">99.5% deliverability rate with advanced spam filtering and reputation management.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
									<Users className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Expert Support</h3>
									<p className="mt-2 text-gray-600">24/7 support from email marketing experts and deliverability specialists.</p>
								</div>
							</div>
						</div>
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
									<BarChart3 className="h-6 w-6 text-orange-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Advanced Analytics</h3>
									<p className="mt-2 text-gray-600">Comprehensive reporting with custom dashboards and real-time insights.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
									<TrendingUp className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Proven Results</h3>
									<p className="mt-2 text-gray-600">Average 3x increase in email engagement and 2x improvement in conversion rates.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
									<Star className="h-6 w-6 text-indigo-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Award-Winning Platform</h3>
									<p className="mt-2 text-gray-600">Recognized as the #1 email automation platform by industry experts.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-24 sm: py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Transform Your Email Marketing?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
							Start your free 30-day trial today. No credit card required.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
								aria-label="Start free trial"
							>
								Start Free Trial
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="mailto:kleber@ziontechgroup.com"
								className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors group"
								aria-label="Email us for more information"
							>
								Email kleber@ziontechgroup.com <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)}