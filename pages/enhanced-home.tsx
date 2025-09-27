import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function EnhancedHome(): JSX.Element {
	const { trackClick } = useAnalytics();

	const handleSelectPlan = (tierId: string) => {
		trackClick(`select-plan-${tierId}`, 'conversion');
		// Handle plan selection logic here
		console.log('Selected plan:', tierId);
	};

	const handleReadMore = (slug: string) => {
		trackClick(`read-blog-${slug}`, 'engagement');
		// Handle blog navigation logic here
		console.log('Read more:', slug);
	};

	const pricingTiers = [
		{
			id: 'starter',
			name: 'Starter',
			price: '$99',
			period: '/month',
			description: 'Perfect for small businesses getting started',
			features: [
				'Up to 5 users',
				'Basic analytics',
				'Email support',
				'5GB storage',
				'Standard templates'
			],
			cta: 'Get Started',
			popular: false
		},
		{
			id: 'professional',
			name: 'Professional',
			price: '$299',
			period: '/month',
			description: 'Ideal for growing businesses',
			features: [
				'Up to 25 users',
				'Advanced analytics',
				'Priority support',
				'50GB storage',
				'Custom templates',
				'API access'
			],
			cta: 'Start Free Trial',
			popular: true
		},
		{
			id: 'enterprise',
			name: 'Enterprise',
			price: 'Custom',
			period: '',
			description: 'For large organizations with complex needs',
			features: [
				'Unlimited users',
				'Custom analytics',
				'24/7 dedicated support',
				'Unlimited storage',
				'Custom development',
				'SSO integration',
				'Custom integrations'
			],
			cta: 'Contact Sales',
			popular: false
		}
	];

	const blogPosts = [
		{
			title: 'The Future of AI in Business',
			excerpt: 'Discover how artificial intelligence is transforming modern business operations.',
			author: 'Sarah Johnson',
			date: '2024-01-15',
			slug: 'future-ai-business',
			image: '🤖'
		},
		{
			title: 'Cloud Migration Best Practices',
			excerpt: 'Learn the essential strategies for successful cloud migration.',
			author: 'Michael Chen',
			date: '2024-01-12',
			slug: 'cloud-migration-guide',
			image: '☁️'
		},
		{
			title: 'Building Scalable Applications',
			excerpt: 'Architectural patterns for modern, scalable web applications.',
			author: 'Emily Rodriguez',
			date: '2024-01-10',
			slug: 'scalable-applications',
			image: '🏗️'
		}
	];

	return (
		<>
			<SEO />
			<Head>
				<title>Zion App - Advanced Technology Solutions</title>
				<meta name="description" content="Zion App provides cutting-edge technology solutions and services for modern businesses. Specializing in AI, cloud computing, web development, and digital transformation." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
				{/* Animated background elements */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
					<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
				</div>

				{/* Navigation */}
				<nav className="relative z-10 flex items-center justify-between p-6">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-lg">Z</span>
						</div>
						<span className="text-xl font-bold text-gray-900">Zion App</span>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
							Services
						</Link>
						<Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
							About
						</Link>
						<Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
							Contact
						</Link>
						<Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
							Dashboard
						</Link>
					</div>
				</nav>

				{/* Hero Section */}
				<div className="relative z-10 text-center px-6 py-20">
					<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
						Transform Your Business with
						<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
							AI-Powered Solutions
						</span>
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
						Zion App delivers cutting-edge technology solutions that drive innovation, efficiency, and growth for modern businesses.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => trackClick('hero-cta-get-started', 'conversion')}
							className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors transform hover:-translate-y-1 text-lg"
						>
							Get Started Free
						</button>
						<button
							onClick={() => trackClick('hero-cta-demo', 'engagement')}
							className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-colors transform hover:-translate-y-1 text-lg"
						>
							Watch Demo
						</button>
					</div>
				</div>

				{/* Features Section */}
				<div className="relative z-10 px-6 py-20">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Zion App?</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
								<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
									<span className="text-3xl">🚀</span>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
								<p className="text-gray-600">
									Optimized performance with cutting-edge technology for the fastest user experience.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
								<div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
									<span className="text-3xl">🔒</span>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
								<p className="text-gray-600">
									Bank-level security with end-to-end encryption and compliance with industry standards.
								</p>
							</div>
							<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
								<div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
									<span className="text-3xl">⚡</span>
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered</h3>
								<p className="text-gray-600">
									Intelligent automation and machine learning to streamline your business processes.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Pricing Section */}
				<div className="relative z-10 px-6 py-20 bg-white">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Simple, Transparent Pricing</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{pricingTiers.map((tier) => (
								<div
									key={tier.id}
									className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative ${
										tier.popular ? 'ring-2 ring-blue-600' : ''
									}`}
								>
									{tier.popular && (
										<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
											<span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
												Most Popular
											</span>
										</div>
									)}
									<h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
									<p className="text-gray-600 mb-6">{tier.description}</p>
									<div className="mb-6">
										<span className="text-4xl font-bold text-gray-900">{tier.price}</span>
										<span className="text-gray-600">{tier.period}</span>
									</div>
									<ul className="space-y-3 mb-8">
										{tier.features.map((feature, index) => (
											<li key={index} className="flex items-center">
												<span className="text-green-500 mr-3">✓</span>
												<span className="text-gray-600">{feature}</span>
											</li>
										))}
									</ul>
									<button
										onClick={() => handleSelectPlan(tier.id)}
										className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
											tier.popular
												? 'bg-blue-600 text-white hover:bg-blue-700'
												: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
										}`}
									>
										{tier.cta}
									</button>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Blog Section */}
				<div className="relative z-10 px-6 py-20">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Latest Insights</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{blogPosts.map((post, index) => (
								<article key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
									<div className="text-4xl mb-4">{post.image}</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
									<p className="text-gray-600 mb-4">{post.excerpt}</p>
									<div className="flex items-center justify-between">
										<div className="text-sm text-gray-500">
											<span>By {post.author}</span>
											<span className="mx-2">•</span>
											<span>{post.date}</span>
										</div>
										<button
											onClick={() => handleReadMore(post.slug)}
											className="text-blue-600 hover:text-blue-800 font-medium"
										>
											Read More →
										</button>
									</div>
								</article>
							))}
						</div>
					</div>
				</div>

				{/* CTA Section */}
				<div className="relative z-10 px-6 py-20">
					<div className="max-w-4xl mx-auto text-center">
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
							<h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
							<p className="text-xl mb-8 opacity-90">
								Join thousands of businesses already using Zion App to drive innovation and growth.
							</p>
							<button
								onClick={() => trackClick('final-cta', 'conversion')}
								className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors transform hover:-translate-y-1 text-lg"
							>
								Start Your Free Trial
							</button>
						</div>
					</div>
				</div>

				{/* Footer */}
				<footer className="relative z-10 bg-gray-900 text-white py-12">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
							<div>
								<div className="flex items-center space-x-2 mb-4">
									<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
										<span className="text-white font-bold text-lg">Z</span>
									</div>
									<span className="text-xl font-bold">Zion App</span>
								</div>
								<p className="text-gray-400">
									Transforming businesses with cutting-edge technology solutions.
								</p>
							</div>
							<div>
								<h3 className="font-semibold mb-4">Product</h3>
								<ul className="space-y-2 text-gray-400">
									<li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
									<li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
									<li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
								</ul>
							</div>
							<div>
								<h3 className="font-semibold mb-4">Company</h3>
								<ul className="space-y-2 text-gray-400">
									<li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
									<li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
									<li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
								</ul>
							</div>
							<div>
								<h3 className="font-semibold mb-4">Resources</h3>
								<ul className="space-y-2 text-gray-400">
									<li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
									<li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
									<li><Link href="/support" className="hover:text-white transition-colors">Support</Link></li>
								</ul>
							</div>
						</div>
						<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
							<p>&copy; 2024 Zion App. All rights reserved.</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}