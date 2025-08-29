import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'


export default function News() {
	const newsArticles = [
		{
			id: 1,
			title: 'Zion Tech Group Launches New AI-Powered Cybersecurity Platform',
			excerpt: 'Our latest innovation combines machine learning with advanced threat detection to provide enterprise-grade security for businesses of all sizes.',
			author: 'Zion Team',
			date: '2025-01-15',
			readTime: '5 min read',
			category: 'Product Launch',
			image: '/api/placeholder/400/250'
		},
		{
			id: 2,
			title: 'How AI is Transforming Cloud Infrastructure Management',
			excerpt: 'Discover how autonomous systems are revolutionizing the way businesses manage their cloud resources and optimize costs.',
			author: 'Dr. Sarah Chen',
			date: '2025-01-10',
			readTime: '7 min read',
			category: 'Industry Insights',
			image: '/api/placeholder/400/250'
		},
		{
			id: 3,
			title: 'Zion Tech Group Named Top AI Solutions Provider 2025',
			excerpt: 'We\'re honored to be recognized for our innovative AI solutions and commitment to delivering measurable business outcomes.',
			author: 'Zion Team',
			date: '2025-01-05',
			readTime: '3 min read',
			category: 'Company News',
			image: '/api/placeholder/400/250'
		},
		{
			id: 4,
			title: 'The Future of Micro SaaS: Trends and Opportunities',
			excerpt: 'Explore emerging trends in the micro SaaS space and how businesses can leverage these solutions for competitive advantage.',
			author: 'Michael Rodriguez',
			date: '2024-12-28',
			readTime: '6 min read',
			category: 'Industry Insights',
			image: '/api/placeholder/400/250'
		},
		{
			id: 5,
			title: 'Customer Success Story: How TechCorp Increased Efficiency by 300%',
			excerpt: 'Learn how our AI automation solutions helped TechCorp streamline operations and achieve unprecedented efficiency gains.',
			author: 'Zion Team',
			date: '2024-12-20',
			readTime: '4 min read',
			category: 'Customer Success',
			image: '/api/placeholder/400/250'
		},
		{
			id: 6,
			title: 'Cybersecurity in the Age of AI: New Threats and Defenses',
			excerpt: 'As AI becomes more sophisticated, so do cyber threats. Learn about the latest security challenges and our innovative defense strategies.',
			author: 'Alex Thompson',
			date: '2024-12-15',
			readTime: '8 min read',
			category: 'Security',
			image: '/api/placeholder/400/250'
		}
	]

	const categories = ['All', 'Product Launch', 'Company News', 'Industry Insights', 'Customer Success', 'Security']

	return (
		<>
			{/* Hero Section */}
			<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							News & Insights
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Stay updated with the latest developments in AI, cloud technology, and cybersecurity from Zion Tech Group.
						</p>
					</div>
				</div>
			</section>

			{/* Category Filter */}
			<section className="py-12 border-b border-gray-200">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="flex flex-wrap gap-4 justify-center">
						{categories.map((category) => (
							<button
								key={category}
								className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-600"
							>
								{category}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Featured Article */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
						<div className="lg:flex">
							<div className="lg:w-1/2">
								<div className="h-64 lg:h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
									<div className="text-center">
										<Tag className="h-16 w-16 text-blue-600 mx-auto mb-4" />
										<p className="text-blue-600 font-medium">Featured Article</p>
									</div>
								</div>
							</div>
							<div className="lg:w-1/2 p-8">
								<div className="flex items-center gap-4 mb-4">
									<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
										{newsArticles[0].category}
									</span>
									<div className="flex items-center gap-2 text-sm text-gray-500">
										<Calendar className="h-4 w-4" />
										{new Date(newsArticles[0].date).toLocaleDateString()}
									</div>
								</div>
								<h2 className="text-2xl font-bold text-gray-900 mb-4">
									{newsArticles[0].title}
								</h2>
								<p className="text-gray-600 mb-6">
									{newsArticles[0].excerpt}
								</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4 text-sm text-gray-500">
										<div className="flex items-center gap-2">
											<User className="h-4 w-4" />
											{newsArticles[0].author}
										</div>
										<div className="flex items-center gap-2">
											<Clock className="h-4 w-4" />
											{newsArticles[0].readTime}
										</div>
									</div>
									<Link
										to={`/news/${newsArticles[0].id}`}
										className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
									>
										Read More
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* News Grid */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-8 lg:grid-cols-2">
						{newsArticles.slice(1).map((article) => (
							<article key={article.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
								<div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
									<Tag className="h-12 w-12 text-gray-400" />
								</div>
								<div className="p-6">
									<div className="flex items-center gap-4 mb-4">
										<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
											{article.category}
										</span>
										<div className="flex items-center gap-2 text-sm text-gray-500">
											<Calendar className="h-4 w-4" />
											{new Date(article.date).toLocaleDateString()}
										</div>
									</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-3">
										{article.title}
									</h3>
									<p className="text-gray-600 mb-4">
										{article.excerpt}
									</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-4 text-sm text-gray-500">
											<div className="flex items-center gap-2">
												<User className="h-4 w-4" />
												{article.author}
											</div>
											<div className="flex items-center gap-2">
												<Clock className="h-4 w-4" />
												{article.readTime}
											</div>
										</div>
										<Link
											to={`/news/${article.id}`}
											className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
										>
											Read More
											<ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Signup */}
			<section className="py-16 bg-gray-50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
							Stay Updated
						</h2>
						<p className="text-lg text-gray-600 mb-8">
							Get the latest news and insights delivered to your inbox
						</p>
						<div className="flex gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							/>
							<button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA */}
			<section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white mb-6">
						Ready to Transform Your Business?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Let's discuss how our AI and cloud solutions can drive your success
					</p>
					<div className="flex items-center justify-center gap-x-6">
						<Link
							to="/contact"
							className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-50 transition-colors"
						>
							Get Started
						</Link>
						<Link
							to="/services"
							className="text-sm font-semibold leading-6 text-white hover:text-blue-100 transition-colors"
						>
							Learn more <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</section>
		</>
	)
}