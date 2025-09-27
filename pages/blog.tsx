import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageView, useAnalytics } from "../src/hooks/useAnalytics";
import { blogPosts, categories, getPostsByCategory, getFeaturedPosts } from "../src/data/blogPosts";

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
			title: "The Future of AI in Business",
			excerpt: "Explore how artificial intelligence is revolutionizing modern business operations.",
			author: "John Smith",
			date: "2024-01-15",
			category: 'AI',
			readTime: "5 min read",
			image: "/images/blog/ai-future.jpg"
		},
		{
			id: 2,
			title: "Cloud Computing Best Practices",
			excerpt: "Essential strategies for successful cloud migration and optimization.",
			author: "Sarah Johnson",
			date: "2024-01-10",
			category: "Cloud Computing",
			readTime: "7 min read",
			image: "/images/blog/cloud-best-practices.jpg"
		},
		{
			id: 3,
			title: "Digital Transformation Guide",
			excerpt: "A comprehensive roadmap for modernizing your business processes.",
			author: "Mike Chen",
			date: "2024-01-05",
			category: "Digital Transformation",
			readTime: "8 min read",
			image: "/images/blog/digital-transformation.jpg"
		}
	];

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category.toLowerCase());
		trackClick(`blog-category-${category}`, 'filter')};

	const handleReadMore = (post: any) => {
		trackClick(`read-post-${post.id}`, 'cta');
		console.log("Read more:", post.title)};

	const filteredPosts = useMemo(() => {
		if (selectedCategory === 'all') {
			return blogPosts}
		return blogPosts.filter(post => post.category.toLowerCase() === selectedCategory)}, [selectedCategory, blogPosts]);

	return (
		<>
			<Head>
				<title>Blog - Zion Tech Solutions</title>
				<meta name="description" content="Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation from our expert team." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7 xl">
					<nav className="mb-8">
						<Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
							← Back to Home
						</Link>
					</nav>

					{/* Hero Section */}
					<section className="text-center mb-16">
						<h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6">
							Our Blog
						</h1>
						<p className="text-xl text-gray-600 max-w-3 xl mx-auto">
							Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation.
						</p>
					</section>

					{/* Category Filter */}
					<section className="mb-12">
						<div className="flex flex-wrap justify-center gap-4">
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => handleCategoryChange(category)}
									className={`px-6 py-3 rounded-lg font-medium transition-colors ${
										selectedCategory === category.toLowerCase() || (selectedCategory === 'all' && category === 'All')
											? 'bg-blue-600 text-white'
											: 'bg-white text-gray-700 hover:bg-gray-100'
									}`}
								>
									{category}
								</button>
							))}
						</div>
					</section>

					{/* Blog Posts */}
					<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredPosts.map((post) => (
							<article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
								<div className="h-48 bg-gray-200"></div>
								<div className="p-6">
									<div className="flex items-center justify-between text-sm text-gray-500 mb-2">
										<span>{post.author}</span>
										<span>{post.date}</span>
									</div>
									<h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
									<p className="text-gray-600 mb-4">{post.excerpt}</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-500">{post.readTime}</span>
										<button
											onClick={() => handleReadMore(post)}
											className="text-blue-600 hover:text-blue-800 font-medium"
										>
											Read More →
										</button>
									</div>
								</div>
							</article>
						))}
					</section>

					{/* Newsletter Signup */}
					<section className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
						<h2 className="text-3 xl font-bold mb-4">Stay Updated</h2>
						<p className="text-xl mb-6">Get the latest insights delivered to your inbox.</p>
						<div className="flex max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
							/>
							<button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
								Subscribe
							</button>
						</div>
					</section>
				</div>
			</div>
		</>
	)}