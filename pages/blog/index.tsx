import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import PageTransition from '../../src/components/PageTransition'

export default function BlogIndex() {
	const blogPosts = [
		{
			id: 'ai-autonomous-systems-2025',
			title: 'The Future of AI Autonomous Systems in 2025',
			excerpt: 'Discover how autonomous AI systems are revolutionizing business operations and what to expect in the coming year.',
			author: 'Dr. Sarah Chen',
			date: '2025-01-15',
			readTime: '8 min read',
			tags: ['AI', 'Automation', 'Future Tech'],
			image: '/api/placeholder/400/250'
		},
		{
			id: 'cloud-migration-best-practices',
			title: 'Cloud Migration Best Practices for Enterprise',
			excerpt: 'Learn the essential strategies and best practices for successful cloud migration in enterprise environments.',
			author: 'Michael Rodriguez',
			date: '2025-01-10',
			readTime: '12 min read',
			tags: ['Cloud', 'Migration', 'Enterprise'],
			image: '/api/placeholder/400/250'
		},
		{
			id: 'cybersecurity-trends-2025',
			title: 'Top Cybersecurity Trends to Watch in 2025',
			excerpt: 'Stay ahead of the curve with our analysis of the most important cybersecurity trends and threats.',
			author: 'Jennifer Park',
			date: '2025-01-05',
			readTime: '10 min read',
			tags: ['Cybersecurity', 'Trends', 'Security'],
			image: '/api/placeholder/400/250'
		},
		{
			id: 'quantum-computing-ai',
			title: 'Quantum Computing and AI: The Next Frontier',
			excerpt: 'Explore how quantum computing is set to transform artificial intelligence and machine learning.',
			author: 'Kleber Santos',
			date: '2024-12-28',
			readTime: '15 min read',
			tags: ['Quantum', 'AI', 'Computing'],
			image: '/api/placeholder/400/250'
		},
		{
			id: 'micro-saas-success',
			title: 'Building Successful Micro SaaS Products',
			excerpt: 'Insights and strategies for building and scaling micro SaaS products in today\'s competitive market.',
			author: 'Dr. Sarah Chen',
			date: '2024-12-20',
			readTime: '11 min read',
			tags: ['SaaS', 'Product', 'Strategy'],
			image: '/api/placeholder/400/250'
		},
		{
			id: 'devops-automation',
			title: 'DevOps Automation: From CI/CD to GitOps',
			excerpt: 'A comprehensive guide to modern DevOps automation practices and tools.',
			author: 'Michael Rodriguez',
			date: '2024-12-15',
			readTime: '14 min read',
			tags: ['DevOps', 'Automation', 'CI/CD'],
			image: '/api/placeholder/400/250'
		}
	]

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	}

	return (
		<PageTransition>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
							Zion Tech{' '}
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								Blog
							</span>
						</h1>
						<p className="mt-6 text-lg leading-8 text-gray-600">
							Insights, trends, and expert analysis on AI, cloud computing, cybersecurity, and the future of technology.
						</p>
					</div>
				</div>
			</section>

			{/* Blog Posts Grid */}
			<section className="py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{blogPosts.map((post) => (
							<article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow group">
								<div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-t-2xl flex items-center justify-center">
									<div className="text-white text-4xl font-bold">
										{post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
									</div>
								</div>
								<div className="p-6">
									<div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
										<div className="flex items-center">
											<User className="h-4 w-4 mr-1" />
											{post.author}
										</div>
										<div className="flex items-center">
											<Calendar className="h-4 w-4 mr-1" />
											{formatDate(post.date)}
										</div>
										<div className="flex items-center">
											<Clock className="h-4 w-4 mr-1" />
											{post.readTime}
										</div>
									</div>
									
									<h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
										<Link to={`/blog/${post.id}`}>
											{post.title}
										</Link>
									</h2>
									
									<p className="text-gray-600 mb-4 line-clamp-3">
										{post.excerpt}
									</p>
									
									<div className="flex items-center justify-between">
										<div className="flex flex-wrap gap-2">
											{post.tags.map((tag) => (
												<span
													key={tag}
													className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
												>
													<Tag className="h-3 w-3 mr-1" />
													{tag}
												</span>
											))}
										</div>
										<Link
											to={`/blog/${post.id}`}
											className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center"
										>
											Read more
											<ArrowRight className="h-4 w-4 ml-1" />
										</Link>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Stay Updated
						</h2>
						<p className="mt-4 text-lg leading-8 text-gray-600">
							Get the latest insights on AI, cloud, and cybersecurity delivered to your inbox.
						</p>
						<div className="mt-8 flex gap-x-4">
							<input
								type="email"
								placeholder="Enter your email"
								className="min-w-0 flex-auto rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
							/>
							<button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:ring-2 focus:ring-blue-500 transition-colors">
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>
		</PageTransition>
	)
}
