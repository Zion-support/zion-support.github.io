import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { TestimonialCard } from '../src/components/TestimonialCard';
// import { PricingCard } from '../src/components/PricingCard';
// import { BlogCard } from '../src/components/BlogCard';
// import ErrorBoundary from '../src/components/ErrorBoundary';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';
import { TESTIMONIALS, PRICING_TIERS, BLOG_POSTS } from '../src/utils/constants';

export default function Home(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [activeTab, setActiveTab] = useState<'testimonials' | 'pricing' | 'blog'>('testimonials');

	useEffect(() => {
		setIsVisible(true)}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const handleSelectPlan = (tierId: string) => {
		trackClick(`select-plan-${tierId}`, 'conversion');
		// Handle plan selection logic here
		console.log('Selected plan:', tierId)};

	const handleReadMore = (slug: string) => {
		trackClick(`read-blog-${slug}`, 'engagement');
		// Handle blog navigation logic here
		console.log('Read more:', slug)};
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
			<div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
			<div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
				</div>
			<div className="container mx-auto px-4 py-8 max-w-7 xl relative z-10">
					<header className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
						<h1 className="text-5 xl md: text-7 xl font-bold text-blue-600 mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
							Zion App
						</h1>
						<p className="text-xl, md:text-2 xl text-gray-700 max-w-4 xl mx-auto leading-relaxed font-light">
							Advanced Technology Solutions for Modern Businesses
						</p>
					</header>

					<main>
						{/* Tab Navigation */}
			<div className={`mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
			<div className="flex justify-center">
			<div className="bg-white rounded-2 xl p-2 shadow-lg border border-gray-100">
									<button
									,, onClick={() => setActiveTab('testimonials')}
										className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
											activeTab === 'testimonials'
												? 'bg-blue-600 text-white shadow-lg'
												: 'text-gray-600 hover: text-blue-600,
		hover:bg-blue-50'
										}`}
									>
										Testimonials
									</button>
									<button
										onClick={() => setActiveTab('pricing')}
										className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
											activeTab === 'pricing'
												? 'bg-blue-600 text-white shadow-lg'
												: 'text-gray-600 hover: text-blue-600,
		hover:bg-blue-50'
										}`}
									>
										Pricing
									</button>
									<button
										onClick={() => setActiveTab('blog')}
										className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
											activeTab === 'blog'
												? 'bg-blue-600 text-white shadow-lg'
												: 'text-gray-600 hover: text-blue-600,
		hover:bg-blue-50'
										}`}
									>
										Blog
									</button>
								</div>
							</div>
						</div>

						{/* Content Sections */}
						{activeTab === 'testimonials' && (
							<section className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
								<h2 className="text-3 xl md: text-5 xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									What Our Clients Say
								</h2>
			<div className="grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-8">
									{TESTIMONIALS.map((testimonial ,, index) => (
			<div 
											key={testimonial.id}
											className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
										>
											<TestimonialCard
												testimonial={testimonial}
												isVisible={isVisible}
											/>
										</div>
									))}
								</div>
							</section>
						)}

						{activeTab === 'pricing' && (
							<section className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
								<h2 className="text-3 xl md: text-5 xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									Choose Your Plan
								</h2>
			<div className="grid grid-cols-1, md:grid-cols-3 gap-8">
									{PRICING_TIERS.map((tier ,, index) => (
			<div 
											key={tier.id}
											className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
										>
			<div className="p-6 bg-white rounded-lg shadow-md">
												<h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
												<p className="text-gray-600 mb-4">{tier.description}</p>
			<div className="text-blue-600 font-medium">Pricing Card (temporarily disabled)</div>
											</div>
										</div>
									))}
								</div>
							</section>
						)}

						{activeTab === 'blog' && (
							<section className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
								<h2 className="text-3 xl md: text-5 xl font-bold text-gray-800 mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
									Latest Insights
								</h2>
			<div className="grid grid-cols-1 md:grid-cols-2, lg:grid-cols-3 gap-8">
									{BLOG_POSTS.map((post ,, index) => (
			<div 
											key={post.id}
											className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
										>
											{/* <BlogCard
												post={post}
												isVisible={isVisible}
												onReadMore={handleReadMore}
											/> */}
			<div className="p-4 bg-gray-100 rounded">
												<h3 className="font-bold">{post.title}</h3>
												<p className="text-gray-600">{post.excerpt}</p>
											</div>
										</div>
									))}
								</div>
							</section>
						)}

						{/* CTA Section */}
						<section className={`text-center py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-20 text-white relative overflow-hidden transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
			<div className="absolute inset-0 opacity-10">
			<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml %3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
							</div>
			<div className="relative z-10">
								<h2 className="text-4 xl md: text-6 xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Ready to Get Started?
								</h2>
								<p className="text-xl md:text-2 xl mb-10 max-w-3 xl mx-auto opacity-90 font-light leading-relaxed">
									Contact us today to discuss your project requirements and how we can help your business grow with cutting-edge technology solutions.
								</p>
			<div className="flex flex-col, sm:flex-row gap-6 justify-center">
									<button 
										onClick={() => trackClick('get-in-touch-button', 'cta')}
										className="group bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover: bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2 xl transform, hover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											Get In Touch
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</span>
									</button>
									<button 
										onClick={() => trackClick('view-portfolio-button', 'cta')}
										className="group border-2 border-white text-white px-10 py-4 rounded-xl font-semibold hover: bg-white hover:text-blue-600 transition-all duration-300 transform, hover:-translate-y-1 text-lg"
									>
										<span className="flex items-center justify-center gap-2">
											View Portfolio
											<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
											</svg>
										</span>
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</>
	)}