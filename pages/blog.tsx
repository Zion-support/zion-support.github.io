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
			slug: 'scalable-web-applications'
		}
	];

	const handleNewsletterSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsNewsletterLoading(true);
		trackClick('newsletter-subscribe');
		
		// Simulate API call
		await new Promise(resolve => setTimeout(resolve, 1000));
		setIsNewsletterLoading(false);
		alert('Thank you for subscribing to our newsletter!');
	};

	return (
		<>
			<Head>
				<title>Blog - Zion Tech Solutions</title>
				<meta name="description" content="Stay updated with the latest insights on AI, cloud computing, web development, and technology trends." />
			</Head>
			
			<EnhancedSEO
				title="Blog - Zion Tech Solutions"
				description="Stay updated with the latest insights on AI, cloud computing, web development, and technology trends."
				keywords={['blog', 'technology', 'AI', 'cloud computing', 'web development', 'tech insights']}
			/>

			<main className="min-h-screen bg-gray-50">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Technology Insights & Industry Trends
							</h1>
							<p className="text-xl md:text-2xl mb-8 opacity-90">
								Stay ahead with expert analysis, best practices, and the latest developments in technology
							</p>
						</div>
					</div>
				</section>

				{/* Blog Posts Grid */}
				<section className="py-16">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{blogPosts.map((post) => (
								<article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
									<div className="h-48 bg-gray-200 flex items-center justify-center">
										<span className="text-gray-500">Image Placeholder</span>
									</div>
									<div className="p-6">
										<div className="flex items-center justify-between mb-3">
											<span className="text-sm text-blue-600 font-medium">{post.category}</span>
											<span className="text-sm text-gray-500">{post.readTime}</span>
										</div>
										<h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
										<p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
										<div className="flex items-center justify-between">
											<div className="text-sm text-gray-500">
												<span>By {post.author}</span>
												<span className="mx-2">•</span>
												<span>{post.date}</span>
											</div>
											<Link 
												href={`/blog/${post.slug}`}
												className="text-blue-600 hover:text-blue-800 font-medium"
												onClick={() => trackClick(`blog-post-${post.slug}`)}
											>
												Read More →
											</Link>
										</div>
									</div>
								</article>
							))}
						</div>
					</div>
				</section>

				{/* Newsletter Signup */}
				<section className="bg-blue-600 py-16">
					<div className="container mx-auto px-4">
						<div className="max-w-2xl mx-auto text-center text-white">
							<h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
							<p className="text-xl mb-8 opacity-90">
								Subscribe to our newsletter for the latest tech insights and industry updates
							</p>
							<form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-3 rounded-lg text-gray-900"
									required
								/>
								<button
									type="submit"
									disabled={isNewsletterLoading}
									className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
								>
									{isNewsletterLoading ? 'Subscribing...' : 'Subscribe'}
								</button>
							</form>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}