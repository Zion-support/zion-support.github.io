import React from 'react';
import { ArrowRight, CheckCircle, Brain, FileText, Image, Video, Mic, Globe, Zap, Target, TrendingUp, Star, Shield } from 'lucide-react';
import PageTransition from '../../src/components/PageTransition';

export default function AIContentTools() {
	const title = 'AI-Powered Content Creation Tools — Zion Tech Group'
	const description = 'Advanced AI content generation platform for blogs, social media, marketing copy, and multimedia content creation.'

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<div className="flex items-center justify-center mb-4">
							<Brain className="h-6 w-6 text-purple-600 mr-2" />
							<span className="text-base font-semibold leading-7 text-purple-600">AI-Powered Solution</span>
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							AI-Powered Content Creation Tools
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Generate high-quality content at scale with our advanced AI platform. From blog posts to social media, create engaging content in minutes.
						</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Comprehensive Content Creation Suite
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Everything you need to create, optimize, and distribute content across all channels.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Text Content Generation */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600 group-hover:bg-purple-700 transition-colors">
									<FileText className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Text Content Generation</h3>
									<p className="text-sm text-purple-600 font-medium">AI Writing Assistant</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Blog posts and articles</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Marketing copy and ads</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Product descriptions</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Email campaigns</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">SEO-optimized content</span>
								</li>
							</ul>
						</div>

						{/* Visual Content Creation */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-600 group-hover:bg-pink-700 transition-colors">
									<Image className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Visual Content Creation</h3>
									<p className="text-sm text-pink-600 font-medium">AI Image & Video</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-pink-600" />
									<span className="text-sm text-gray-700">AI-generated images</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-pink-600" />
									<span className="text-sm text-gray-700">Social media graphics</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-pink-600" />
									<span className="text-sm text-gray-700">Video thumbnails</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-pink-600" />
									<span className="text-sm text-gray-700">Infographic generation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-pink-600" />
									<span className="text-sm text-gray-700">Brand-consistent designs</span>
								</li>
							</ul>
						</div>

						{/* Audio & Video Content */}
						<div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
							<div className="flex items-center gap-x-3 mb-6">
								<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
									<Video className="h-7 w-7 text-white" />
								</div>
								<div>
									<h3 className="text-xl font-semibold text-gray-900">Audio & Video Content</h3>
									<p className="text-sm text-blue-600 font-medium">Multimedia Generation</p>
								</div>
							</div>
							<ul className="space-y-3">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">AI voice generation</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Podcast scripts</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Video scripts</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Audio transcription</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-blue-600" />
									<span className="text-sm text-gray-700">Multilingual content</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Content Types Section */}
			<section className="py-24 sm:py-32 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Content Types We Generate
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							From social media posts to comprehensive whitepapers, we create all types of content.
						</p>
					</div>
					<div className="grid gap-6 lg:grid-cols-4">
						{/* Social Media */}
						<div className="text-center p-6 bg-white rounded-xl shadow-sm">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-4">
								<Globe className="h-6 w-6 text-purple-600" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
							<p className="text-sm text-gray-600">Posts, captions, hashtags, and stories for all platforms</p>
						</div>

						{/* Blog Content */}
						<div className="text-center p-6 bg-white rounded-xl shadow-sm">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 mb-4">
								<FileText className="h-6 w-6 text-blue-600" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Blog Content</h3>
							<p className="text-sm text-gray-600">Articles, how-to guides, and thought leadership pieces</p>
						</div>

						{/* Marketing Copy */}
						<div className="text-center p-6 bg-white rounded-xl shadow-sm">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 mb-4">
								<Target className="h-6 w-6 text-green-600" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Copy</h3>
							<p className="text-sm text-gray-600">Ads, landing pages, and conversion-focused content</p>
						</div>

						{/* Technical Content */}
						<div className="text-center p-6 bg-white rounded-xl shadow-sm">
							<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
								<Brain className="h-6 w-6 text-orange-600" />
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Content</h3>
							<p className="text-sm text-gray-600">Documentation, tutorials, and technical guides</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl lg:text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Flexible Pricing Plans
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Choose the plan that fits your content creation needs.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Starter Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Starter</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$79</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Perfect for small teams</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">10,000 words/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">50 AI-generated images</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Basic templates</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Email support</span>
								</li>
							</ul>
						</div>

						{/* Professional Plan */}
						<div className="relative rounded-2xl border-2 border-purple-600 bg-white p-8 shadow-lg">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
							</div>
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Professional</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$199</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">Ideal for content teams</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">50,000 words/month</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">200 AI-generated images</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Advanced templates</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Brand voice training</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Priority support</span>
								</li>
							</ul>
						</div>

						{/* Enterprise Plan */}
						<div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
							<div className="text-center mb-8">
								<h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
								<div className="mt-4">
									<span className="text-4xl font-bold text-gray-900">$599</span>
									<span className="text-gray-600">/month</span>
								</div>
								<p className="mt-2 text-sm text-gray-600">For large organizations</p>
							</div>
							<ul className="space-y-3 mb-8">
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Unlimited words</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Unlimited images</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Custom AI models</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">API access</span>
								</li>
								<li className="flex items-center gap-x-3">
									<CheckCircle className="h-4 w-4 text-purple-600" />
									<span className="text-sm text-gray-700">Dedicated support</span>
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
							Why Choose Our AI Content Tools?
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Built for quality, speed, and scalability.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
									<Zap className="h-6 w-6 text-purple-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Lightning Fast Generation</h3>
									<p className="mt-2 text-gray-600">Generate high-quality content in seconds, not hours. 10x faster than traditional methods.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
									<Shield className="h-6 w-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
									<p className="mt-2 text-gray-600">Your content and data are protected with enterprise-grade security and privacy controls.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
									<Star className="h-6 w-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Premium Quality</h3>
									<p className="mt-2 text-gray-600">AI models trained on premium content to ensure high-quality, engaging output every time.</p>
								</div>
							</div>
						</div>
						<div className="space-y-8">
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100">
									<Target className="h-6 w-6 text-orange-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Brand Consistency</h3>
									<p className="mt-2 text-gray-600">Train AI on your brand voice and style for consistent, on-brand content across all channels.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100">
									<TrendingUp className="h-6 w-6 text-red-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Proven Results</h3>
									<p className="mt-2 text-gray-600">Average 5x increase in content production and 3x improvement in engagement rates.</p>
								</div>
							</div>
							<div className="flex items-start gap-x-4">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
									<Globe className="h-6 w-6 text-indigo-600" />
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">Multi-Language Support</h3>
									<p className="mt-2 text-gray-600">Generate content in 50+ languages with native-level quality and cultural awareness.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-gradient-to-r from-purple-600 to-pink-600 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Ready to Transform Your Content Creation?
						</h2>
						<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-purple-100">
							Start creating amazing content with AI today. Free trial available.
						</p>
						<div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/contact"
								className="group rounded-md bg-white px-8 py-4 text-sm font-semibold text-purple-600 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-105"
								aria-label="Start free trial"
							>
								Start Free Trial
								<ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
							</a>
							<a
								href="tel:+13024640950"
								className="text-sm font-semibold leading-6 text-white hover:text-purple-100 transition-colors group"
								aria-label="Call us for more information"
							>
								Call +1 302 464 0950 <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform inline-block">→</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	);
}