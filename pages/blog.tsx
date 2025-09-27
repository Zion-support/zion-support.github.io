import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedSEO from '../src/components/EnhancedSEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
	const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState('All');
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

	const handleNewsletterSubscribe = async (email: string) => {
		setIsNewsletterLoading(true);
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));
		trackClick('newsletter-signup', 'cta');
		setIsNewsletterLoading(false);
	};

	const handleCategoryFilter = (category: string) => {
		setSelectedCategory(category);
		trackClick('blog-category-filter', 'navigation');
	};

	const handleReadMore = (post: any) => {
		trackClick('blog-read-more', 'engagement');
		// Navigate to blog post detail page
		window.location.href = `/blog/${post.slug}`;
	};

	const filteredPosts = selectedCategory === 'All' 
		? blogPosts 
		: blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

	return (
    <>
      {/* <EnhancedSEO title="Blog - Zion Tech Solutions"
				description="Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation from our expert team."
				keywords={["Technology Blog", "AI Insights", "Cloud Computing", "Digital Transformation", "Tech Trends"]}
				url="https://zion.app/blog"
				type="website"
			/> */}
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					<header className="text-center mb-16">
						<h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
							Tech Insights & Updates
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Stay informed with the latest trends, insights, and best practices in technology from our expert team.
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
										selectedCategory === category || (category === 'All' && selectedCategory === 'All')
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
  );
}