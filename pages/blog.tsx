import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import EnhancedSEO from '../src/components/EnhancedSEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
	const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
	const { trackClick } = useAnalytics();

	const blogPosts = [
		{
			id: 1,
			title: 'The Future of AI in Business: Trends and Predictions for 2024',
			excerpt: 'Explore the latest AI trends shaping the business landscape and how companies are leveraging artificial intelligence for competitive advantage.',
			author: 'Sarah Johnson',
			date: '2024-01-15',
			readTime: '5 min read',
			category: 'AI & Machine Learning',
			image: '/api/placeholder/600/300',
			slug: 'future-ai-business-2024'
		},
		{
			id: 2,
			title: 'Cloud Migration Best Practices: A Complete Guide',
			excerpt: 'Learn the essential strategies and considerations for successfully migrating your infrastructure to the cloud.',
			author: 'Michael Chen',
			date: '2024-01-12',
			readTime: '8 min read',
			category: 'Cloud Computing',
			image: '/api/placeholder/600/300',
			slug: 'cloud-migration-best-practices'
		},
		{
			id: 3,
			title: 'Building Scalable Web Applications with Modern Architecture',
			excerpt: 'Discover the architectural patterns and technologies that enable web applications to scale efficiently and reliably.',
			author: 'Emily Rodriguez',
			date: '2024-01-10',
			readTime: '6 min read',
			category: 'Web Development',
			image: '/api/placeholder/600/300',
			slug: 'scalable-web-applications-architecture'
		},
		{
			id: 4,
			title: 'Cybersecurity in 2024: Emerging Threats and Defense Strategies',
			excerpt: 'Stay ahead of the latest cybersecurity threats and learn about the most effective defense strategies for modern businesses.',
			author: 'David Kim',
			date: '2024-01-08',
			readTime: '7 min read',
			category: 'Cybersecurity',
			image: '/api/placeholder/600/300',
			slug: 'cybersecurity-2024-threats-defense'
		},
		{
			id: 5,
			title: 'Digital Transformation: A Step-by-Step Implementation Guide',
			excerpt: 'Navigate the complexities of digital transformation with our comprehensive guide to planning and executing successful initiatives.',
			author: 'Sarah Johnson',
			date: '2024-01-05',
			readTime: '9 min read',
			category: 'Digital Transformation',
			image: '/api/placeholder/600/300',
			slug: 'digital-transformation-implementation-guide'
		},
		{
			id: 6,
			title: 'The Rise of Edge Computing: Benefits and Use Cases',
			excerpt: 'Explore how edge computing is revolutionizing data processing and discover its potential applications across industries.',
			author: 'Michael Chen',
			date: '2024-01-03',
			readTime: '6 min read',
			category: 'Edge Computing',
			image: '/api/placeholder/600/300',
			slug: 'rise-edge-computing-benefits-use-cases'
		}
	];

	const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Web Development', 'Cybersecurity', 'Digital Transformation', 'Edge Computing'];

	const handleNewsletterSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsNewsletterLoading(true);
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		setIsNewsletterLoading(false);
		trackClick('newsletter-subscribe', 'engagement');
		alert('Thank you for subscribing to our newsletter!');
	};

	return (
		<>
			<EnhancedSEO
				title="Blog - Zion App"
				description="Stay updated with the latest insights on AI, cloud computing, digital transformation, and technology trends."
				keywords={['technology blog', 'AI insights', 'cloud computing', 'digital transformation', 'tech trends']}
			/>
			<Head>
				<title>Blog - Zion App</title>
				<meta name="description" content="Stay updated with the latest insights on AI, cloud computing, digital transformation, and technology trends." />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
							Our Blog
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Insights, trends, and best practices in technology, AI, and digital transformation.
						</p>
					</header>

					{/* Newsletter Signup */}
					<section className="bg-white rounded-2xl shadow-xl p-8 mb-16">
						<div className="text-center">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
							<p className="text-gray-600 mb-6">Get the latest insights delivered to your inbox.</p>
							<form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
								<div className="flex gap-4">
									<input
										type="email"
										placeholder="Enter your email"
										className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
										required
									/>
									<button
										type="submit"
										disabled={isNewsletterLoading}
										className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
									>
										{isNewsletterLoading ? 'Subscribing...' : 'Subscribe'}
									</button>
								</div>
							</form>
						</div>
					</section>

					{/* Blog Posts */}
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{blogPosts.map((post) => (
							<article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
								<img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
								<div className="p-6">
									<div className="flex items-center gap-2 mb-3">
										<span className="text-sm text-blue-600 font-medium">{post.category}</span>
										<span className="text-gray-400">•</span>
										<span className="text-sm text-gray-500">{post.readTime}</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
										{post.title}
									</h3>
									<p className="text-gray-600 mb-4 line-clamp-3">
										{post.excerpt}
									</p>
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-3">
											<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
												<span className="text-blue-600 text-sm font-semibold">
													{post.author.split(' ').map(n => n[0]).join('')}
												</span>
											</div>
											<div>
												<p className="text-sm font-medium text-gray-900">{post.author}</p>
												<p className="text-xs text-gray-500">{post.date}</p>
											</div>
										</div>
										<Link
											href={`/blog/${post.slug}`}
											className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
											onClick={() => trackClick(`blog-post-${post.slug}`, 'engagement')}
										>
											Read More →
										</Link>
									</div>
								</div>
							</article>
						))}
					</section>
				</div>
			</div>
		</>
	);
}