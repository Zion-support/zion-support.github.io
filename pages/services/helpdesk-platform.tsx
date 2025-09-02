import React from 'react';
import { ArrowRight, CheckCircle, Headphones, MessageSquare, Users, BarChart3, Zap, Shield, Clock, Star, TrendingUp, Globe } from 'lucide-react';
import PageTransition from '../../src/components/PageTransition';

export default function HelpdeskPlatform() {
	const title = 'Customer Support & Helpdesk Platform — Zion Tech Group'
	const description = 'Comprehensive customer support platform with ticket management, live chat, AI chatbots, and knowledge base creation.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="flex items-center justify-center mb-4">
							<Headphones className="h-6 w-6 text-indigo-600 mr-2" />
							<span className="text-base font-semibold leading-7 text-indigo-600">Customer Support Solution</span>
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Customer Support & Helpdesk Platform
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Deliver exceptional customer experiences with our comprehensive support platform featuring AI-powered chatbots, ticket management, and live chat.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Complete Support Solution
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Everything you need to provide world-class customer support and build lasting relationships.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Ticket Management */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
									<MessageSquare className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Ticket Management</h3>
									<p className="text-sm text-indigo-600 font-medium">Organized Support</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Automated ticket routing</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Priority-based queuing</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">SLA management</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Multi-channel support</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Custom fields & tags</span>
								</li>
							</ul>
						</div>

						{/* Live Chat */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors">
									<Users className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
									<p className="text-sm text-green-600 font-medium">Real-time Support</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Real-time messaging</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">File sharing & co-browsing</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Chat routing & queuing</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Offline message capture</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-green-600" />
									<span className="text-sm text-gray-700">Mobile app support</span>
								</li>
							</ul>
						</div>

						{/* AI Chatbots */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
									<Zap className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">AI Chatbots</h3>
									<p className="text-sm text-purple-600 font-medium">Intelligent Automation</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Natural language processing</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Intent recognition</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Multi-language support</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Escalation to human agents</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Learning & improvement</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Knowledge Base Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Knowledge Base & Self-Service
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Empower customers to find answers quickly with our intelligent knowledge base system.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
									<MessageSquare className="h-6 w-6 text-indigo-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Smart Search</h3>
									<p className="mt-2 text-gray-600">AI-powered search that understands context and provides relevant results instantly.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
									<Users className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Community Forums</h3>
									<p className="mt-2 text-gray-600">Enable peer-to-peer support with moderated community forums and Q&A sections.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
									<BarChart3 className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Analytics & Insights</h3>
									<p className="mt-2 text-gray-600">Track article performance, search queries, and user satisfaction to optimize content.</p>
								</div>
							</div>
						</div>
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
									<Zap className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Content Management</h3>
									<p className="mt-2 text-gray-600">Easy-to-use editor with version control, approval workflows, and content scheduling.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
									<Globe className="h-6 w-6 text-orange-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Multi-Language Support</h3>
									<p className="mt-2 text-gray-600">Create and manage knowledge base content in multiple languages with automatic translation.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
									<Star className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Feedback System</h3>
									<p className="mt-2 text-gray-600">Collect user feedback on articles to continuously improve content quality and relevance.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Transparent Pricing
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Choose the plan that fits your support team size and needs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Starter Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Starter</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$29</span>
									<span className="text-gray-600">/agent/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Perfect for small teams</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Up to 3 agents</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Unlimited tickets</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Basic live chat</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Email support</span>
								</li>
							</ul>
						</div>

						{/* Professional Plan */}
						<div className="relative rounded-2xl border-2 border-indigo-600 bg-white p-8 shadow-lg">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
							</div>
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Professional</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$59</span>
									<span className="text-gray-600">/agent/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Ideal for growing teams</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Up to 25 agents</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Advanced live chat</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">AI chatbots</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Knowledge base</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Priority support</span>
								</li>
							</ul>
						</div>

						{/* Enterprise Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$99</span>
									<span className="text-gray-600">/agent/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">For large organizations</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Unlimited agents</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Custom integrations</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">Advanced analytics</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">White-label options</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-indigo-600" />
									<span className="text-sm text-gray-700">24/7 phone support</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Why Choose Our Helpdesk Platform?
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Built for performance, scalability, and customer satisfaction.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
									<Zap className="h-6 w-6 text-indigo-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Lightning Fast Setup</h3>
									<p className="mt-2 text-gray-600">Get up and running in minutes with our intuitive setup wizard and pre-built templates.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
									<Shield className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
									<p className="mt-2 text-gray-600">SOC 2 compliant with end-to-end encryption, SSO, and advanced security controls.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
									<Users className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Dedicated Support</h3>
									<p className="mt-2 text-gray-600">24/7 support from customer service experts and technical specialists.</p>
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
									<p className="mt-2 text-gray-600">Comprehensive reporting with custom dashboards and real-time performance insights.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
									<TrendingUp className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Proven Results</h3>
									<p className="mt-2 text-gray-600">Average 40% reduction in response time and 60% improvement in customer satisfaction.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
									<Clock className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">99.9% Uptime</h3>
									<p className="mt-2 text-gray-600">Reliable infrastructure with automatic failover and disaster recovery capabilities.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Transform Your Customer Support?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
							Start your free 14-day trial today. No credit card required.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
								aria-label="Start free trial"
							>
								Start Free Trial
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="mailto:kleber@ziontechgroup.com"
								className="text-sm font-semibold leading-6 text-white hover:text-indigo-100 transition-colors group"
								aria-label="Email us for more information"
							>
								Email kleber@ziontechgroup.com <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}