import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// // import ErrorBoundary from '../src/components/ErrorBoundary';
import { usePageView, useAnalytics } from '../src/hooks/useAnalytics';
import { blogPosts, categories, getPostsByCategory, getFeaturedPosts } from '../src/data/blogPosts';
// import { BlogSearch  BlogCard  BlogPagination  BlogNewsletter } from '../src/components/BlogEnhancements';
import EnhancedSEO from '../src/components/EnhancedSEO';

export default function Blog(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>('all');
	const [searchQuery, setSearchQuery] = useState('');
	const [bookmarkedPosts, setBookmarkedPosts] = useState<Set<string>>(new Set());
	const [currentPage, setCurrentPage] = useState(1);
	const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);
	const postsPerPage = 6;

	useEffect(() => {
		setIsVisible(true);
		// Load bookmarked posts from localStorage
		const savedBookmarks = localStorage.getItem('blog-bookmarks');
		if (savedBookmarks) {
			try {
				setBookmarkedPosts(new Set(JSON.parse(savedBookmarks)))} catch (error) {
				console.warn('Failed to load bookmarks:', error)}
		}
	}, []);

	// Analytics tracking
	usePageView('blog');
	const { trackClick } = useAnalytics();

	// Use memoized data for better performance
	const filteredPosts = useMemo(() => {
		let posts = getPostsByCategory(selectedCategory === 'all' ? 'All' : selectedCategory);
		
		if (searchQuery) {
			posts = posts.filter(post => 
				post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
				post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
			)}
		
		return posts}, [selectedCategory, searchQuery]);
	
	const featuredPosts = useMemo(() => getFeaturedPosts(), []);
	const regularPosts = useMemo(() => 
		filteredPosts.filter(post => !post.featured), 
		[filteredPosts]
	);

	// Pagination
	const totalPages = Math.ceil(regularPosts.length / postsPerPage);
	const paginatedPosts = useMemo(() => {
		const startIndex = (currentPage - 1) * postsPerPage;
		return regularPosts.slice(startIndex, startIndex + postsPerPage)}, [regularPosts, currentPage, postsPerPage]);

	// Handlers
	const handleSearch = (query: string) => {
		setSearchQuery(query);
		setCurrentPage(1);
		trackClick('blog-search', 'search');
	};

	const handleCategoryFilter = (category: string) => {
		setSelectedCategory(category.toLowerCase());
		setCurrentPage(1);
		trackClick(`blog-category-${category}`, 'filter')};

	const handleReadMore = (post: any) => {
		trackClick(`read-post-${post.id}`, 'cta');
		// Navigate to post detail page or open modal
		console.log('Read more:', post.title)};

	const handleBookmark = (post: any) => {
		const newBookmarks = new Set(bookmarkedPosts);
		if (newBookmarks.has(post.id)) {
			newBookmarks.delete(post.id)} else {
			newBookmarks.add(post.id)}
		setBookmarkedPosts(newBookmarks);
		localStorage.setItem('blog-bookmarks', JSON.stringify([...newBookmarks]));
		trackClick(`bookmark-post-${post.id}`, 'engagement')};

	const handleNewsletterSubscribe = async (email: string) => {
		setIsNewsletterLoading(true);
		// Simulate API call
			await new Promise(resolve => setTimeout(resolve, 1000));
		trackClick('newsletter-signup', 'cta');
			setIsNewsletterLoading(false);
		};

	return (
		<>
			<EnhancedSEO
				title="Blog - Zion Tech Solutions"
				description="Stay updated with the latest insights on technology  AI  cloud computing  and digital transformation from our expert team."
				keywords={['Technology Blog', 'AI Insights', 'Cloud Computing', 'Digital Transformation', 'Tech Trends']}
				url="https://zion.app/blog"
				type="website"
			/>
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
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
							Insights  trends  and best practices from our technology experts
						</p>
					</header>

					<main>
						{/* Search and Filter */}
						<section className={`mb-12 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							{/* <BlogSearch
								onSearch={handleSearch}
								onCategoryFilter={handleCategoryFilter}
								categories={categories}
								currentCategory={selectedCategory}
							/> */}
						</section>

						{/* Featured Posts */}
						{selectedCategory === 'all' && (
							<section className={`mb-16 transition-all duration-700 delay-200 ${
								isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
							}`}>
								<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
									Featured Articles
								</h2>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									<AnimatePresence>
										{featuredPosts.map((post  index) => (
											<motion.div
												key={post.id}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												exit={{ opacity: 0, y: -20 }}
												transition={{ duration: 0.5, delay: index * 0.1 }}
											>
												{/* <BlogCard
													post={post}
													variant="featured"
													onReadMore={handleReadMore}
													onBookmark={handleBookmark}
													isBookmarked={bookmarkedPosts.has(post.id)}
												/> */}
											</motion.div>
										))}
									</AnimatePresence>
								</div>
							</section>
						)}

						{/* Regular Posts */}
						<section className={`mb-16 transition-all duration-700 delay-400 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
								{selectedCategory === 'all' ? 'Latest Articles' : `${selectedCategory} Articles`}
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								<AnimatePresence mode="wait">
									{paginatedPosts.map((post  index) => (
										<motion.div
											key={post.id}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: -20 }}
											transition={{ duration: 0.3, delay: index * 0.05 }}
										>
											{/* <BlogCard
												post={post}
												variant="regular"
												onReadMore={handleReadMore}
												onBookmark={handleBookmark}
												isBookmarked={bookmarkedPosts.has(post.id)}
											/> */}
										</motion.div>
									))}
								</AnimatePresence>
							</div>
							
							{/* Pagination */}
							{totalPages > 1 && (
								{/* <BlogPagination
									currentPage={currentPage}
									totalPages={totalPages}
									onPageChange={setCurrentPage}
								/> */}
							)}
						</section>

						{/* Newsletter Signup */}
						<section className={`mb-16 transition-all duration-1000 delay-600 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							{/* <BlogNewsletter
								onSubscribe={handleNewsletterSubscribe}
								isLoading={isNewsletterLoading}
							/> */}
						</section>
					</main>
				</div>
			</div>
		</>
	)}