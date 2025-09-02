import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Users, Shield, BarChart3, DollarSign, Clock, Star, Zap } from 'lucide-react';
import PageTransition from '../../src/components/PageTransition';

export default function AffiliateMarketingTracking() {
	const title = 'Affiliate Marketing Tracking Software — Zion Tech Group'
	const description = 'Advanced affiliate marketing tracking platform with fraud detection, automated payouts, and comprehensive analytics.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="flex items-center justify-center mb-4">
							<TrendingUp className="h-6 w-6 text-emerald-600 mr-2" />
							<span className="text-base font-semibold leading-7 text-emerald-600">Micro SaaS Solution</span>
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Affiliate Marketing Tracking Software
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Comprehensive affiliate marketing platform with advanced tracking, fraud detection, and automated commission management.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Powerful Features for Affiliate Success
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Everything you need to manage, track, and optimize your affiliate marketing programs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Advanced Tracking */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 group-hover:bg-emerald-700 transition-colors">
									<BarChart3 className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Advanced Tracking</h3>
									<p className="text-sm text-emerald-600 font-medium">Real-time Analytics</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Cross-device attribution tracking</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Custom referral link generation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Real-time conversion monitoring</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Multi-channel campaign tracking</span>
								</li>
							</ul>
						</div>

						{/* Fraud Detection */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 group-hover:bg-red-700 transition-colors">
									<Shield className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Fraud Detection</h3>
									<p className="text-sm text-red-600 font-medium">AI-Powered Security</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">AI-powered fraud detection</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Click fraud prevention</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Duplicate conversion filtering</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-red-600" />
									<span className="text-sm text-gray-700">Suspicious activity alerts</span>
								</li>
							</ul>
						</div>

						{/* Automated Payouts */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
									<DollarSign className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Automated Payouts</h3>
									<p className="text-sm text-green-600 font-medium">Smart Commission Management</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Automated commission calculations</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Multiple payment methods</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Scheduled payout processing</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Tax reporting and compliance</span>
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
							Transparent Pricing
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Choose the plan that fits your affiliate marketing needs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Starter Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Starter</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$99</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Perfect for small businesses</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Up to 1,000 affiliates</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Basic tracking & analytics</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Email support</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Standard fraud protection</span>
								</li>
							</ul>
						</div>

						{/* Professional Plan */}
						<div className="relative rounded-2xl border-2 border-emerald-600 bg-white p-8 shadow-lg">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
							</div>
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Professional</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$299</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Ideal for growing businesses</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Up to 10,000 affiliates</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Advanced analytics & reporting</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Priority support</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">AI-powered fraud detection</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">API access</span>
								</li>
							</ul>
						</div>

						{/* Enterprise Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$999</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">For large-scale operations</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Unlimited affiliates</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Custom integrations</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">Dedicated account manager</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
									<span className="text-sm text-gray-700">White-label options</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-emerald-600" />
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
							Why Choose Our Platform?
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Built for performance, security, and scalability.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100">
									<Zap className="h-6 w-6 text-emerald-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Lightning Fast Performance</h3>
									<p className="mt-2 text-gray-600">Sub-second response times with 99.9% uptime guarantee.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
									<Shield className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
									<p className="mt-2 text-gray-600">SOC 2 compliant with end-to-end encryption and regular security audits.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
									<Users className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Dedicated Support</h3>
									<p className="mt-2 text-gray-600">24/7 support from affiliate marketing experts and technical specialists.</p>
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
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
									<TrendingUp className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Scalable Infrastructure</h3>
									<p className="mt-2 text-gray-600">Handles millions of clicks and conversions with automatic scaling.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
									<Clock className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Quick Setup</h3>
									<p className="mt-2 text-gray-600">Get started in minutes with our intuitive setup wizard and API integration.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-emerald-600 to-teal-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Optimize Your Affiliate Program?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-emerald-100">
							Start your free 14-day trial today. No credit card required.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-emerald-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
								aria-label="Start free trial"
							>
								Start Free Trial
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="tel:+13024640950"
								className="text-sm font-semibold leading-6 text-white hover:text-emerald-100 transition-colors group"
								aria-label="Call us for more information"
							>
								Call +1 302 464 0950 <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}