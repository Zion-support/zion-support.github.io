import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>('all');

	useEffect(() => {
		setIsVisible(true)}, []);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const categories = ['All', 'Technology', 'AI', 'Cloud Computing', 'Digital Transformation'];

	const blogPosts = [
		{
			id: 1,
			title: 'The Future of AI in Business',
			excerpt: 'Explore how artificial intelligence is revolutionizing modern business operations.',
			author: 'John Smith',
			date: '2024-01-15',
			category: 'AI',
			readTime: '5 min read',
			image: '/images/blog/ai-future.jpg'
		},
		{
			id: 2,
			title: 'Cloud Computing Best Practices',
			excerpt: 'Essential strategies for successful cloud migration and optimization.',
			author: 'Sarah Johnson',
			date: '2024-01-10',
			category: 'Cloud Computing',
			readTime: '7 min read',
			image: '/images/blog/cloud-best-practices.jpg'
		},
		{
			id: 3,
			title: 'Digital Transformation Guide',
			excerpt: 'A comprehensive roadmap for modernizing your business processes.',
			author: 'Mike Chen',
			date: '2024-01-05',
			category: 'Digital Transformation',
			readTime: '8 min read',
			image: '/images/blog/digital-transformation.jpg'
		}
	];

	const handleCategoryFilter = (category: string) => {
		setSelectedCategory(category.toLowerCase());
		trackClick(`blog-category-${category}`, 'filter')};

	const handleReadMore = (post: any) => {
		trackClick(`read-post-${post.id}`, 'cta');
		console.log('Read more:', post.title)};

	const filteredPosts = selectedCategory === 'all' 
		? blogPosts 
		: blogPosts.filter(post => post.category.toLowerCase() === selectedCategory);

	return (
		<>
			<SEO />
			<Head>
				<title>Blog - Zion Tech Solutions</title>
				<meta name="description" content="Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation from our expert team." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Our Blog
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Insights, trends, and best practices from our technology experts
						</p>
					</header>

					{/* Category Filter */}
					<section className="mb-12">
						<div className="flex flex-wrap justify-center gap-4">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => handleCategoryFilter(category)}
									className={`px-6 py-2 rounded-full font-medium transition-colors ${
										selectedCategory === category.toLowerCase() || (category === 'All' && selectedCategory === 'all')
											? 'bg-blue-600 text-white'
											: 'bg-white text-gray-600 hover:bg-gray-100'
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</section>

					{/* Blog Posts */}
					<section className="mb-16">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredPosts.map((post) => (
								<article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
									<div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
										<span className="text-white text-lg font-semibold">{post.category}</span>
									</div>
									<div className="p-6">
										<div className="flex items-center text-sm text-gray-500 mb-3">
											<span>{post.author}</span>
											<span className="mx-2">•</span>
											<span>{post.date}</span>
											<span className="mx-2">•</span>
											<span>{post.readTime}</span>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
										<p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
										<button
											onClick={() => handleReadMore(post)}
											className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
										>
											Read More →
										</button>
									</div>
								</article>
							))}
						</div>
					</section>

					{/* Newsletter Signup */}
					<section className="text-center">
						<div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								Stay Updated
							</h2>
							<p className="text-gray-600 mb-6">
								Get the latest insights and updates delivered to your inbox.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
								<button
									onClick={() => trackClick('newsletter-signup', 'cta')}
									className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
								>
									Subscribe
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	)}