import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from '../src/components/ErrorBoundary';
import { usePageView, useAnalytics } from '../src/hooks/useAnalytics';

export default function Blog(): JSX.Element {
	const [isVisible, setIsVisible] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState<string>('all');

	useEffect(() => {
		setIsVisible(true);
	}, []);

	// Analytics tracking
	usePageView('blog');
	const { trackClick } = useAnalytics();

	const blogPosts = [
		{
			id: 1,
			title: 'The Future of AI in Enterprise Software Development',
			excerpt: 'Exploring how artificial intelligence is revolutionizing enterprise software development and what it means for businesses.',
			author: 'Sarah Johnson',
			date: '2024-01-15',
			category: 'AI',
			readTime: '8 min read',
			image: '🤖',
			featured: true
		},
		{
			id: 2,
			title: 'Cloud Migration Best Practices: A Complete Guide',
			excerpt: 'Learn the essential strategies and best practices for successful cloud migration projects.',
			author: 'Michael Chen',
			date: '2024-01-12',
			category: 'Cloud',
			readTime: '12 min read',
			image: '☁️',
			featured: true
		},
		{
			id: 3,
			title: 'Building Scalable Web Applications with Next.js',
			excerpt: 'Discover how to build high-performance, scalable web applications using Next.js and modern development practices.',
			author: 'David Kim',
			date: '2024-01-10',
			category: 'Web Development',
			readTime: '10 min read',
			image: '💻',
			featured: false
		},
		{
			id: 4,
			title: 'Cybersecurity Trends to Watch in 2024',
			excerpt: 'Stay ahead of the curve with the latest cybersecurity trends and threats facing businesses today.',
			author: 'Emily Rodriguez',
			date: '2024-01-08',
			category: 'Security',
			readTime: '6 min read',
			image: '🔒',
			featured: false
		},
		{
			id: 5,
			title: 'Data Analytics: Turning Information into Insights',
			excerpt: 'Learn how to transform raw data into actionable business insights that drive growth.',
			author: 'Alex Thompson',
			date: '2024-01-05',
			category: 'Data',
			readTime: '9 min read',
			image: '📊',
			featured: false
		},
		{
			id: 6,
			title: 'Mobile App Development: Native vs Cross-Platform',
			excerpt: 'Compare native and cross-platform mobile development approaches to choose the right strategy for your project.',
			author: 'Lisa Wang',
			date: '2024-01-03',
			category: 'Mobile',
			readTime: '7 min read',
			image: '📱',
			featured: false
		}
	];

	const categories = ['all', 'AI', 'Cloud', 'Web Development', 'Security', 'Data', 'Mobile'];

	const filteredPosts = selectedCategory === 'all' 
		? blogPosts 
		: blogPosts.filter(post => post.category === selectedCategory);

	const featuredPosts = blogPosts.filter(post => post.featured);
	const regularPosts = filteredPosts.filter(post => !post.featured);

	return (
		<ErrorBoundary>
			<Head>
				<title>Blog - Zion App</title>
				<meta name="description" content="Stay updated with the latest insights on technology, AI, cloud computing, and digital transformation from our expert team." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
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
							Insights, trends, and best practices from our technology experts
						</p>
					</header>

					<main>
						{/* Category Filter */}
						<section className={`mb-12 transition-all duration-700 delay-100 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<div className="flex flex-wrap justify-center gap-4">
								{categories.map((category, index) => (
									<button
										key={category}
										onClick={() => {
											setSelectedCategory(category);
											trackClick(`blog-category-${category}`, 'filter');
										}}
										className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
											selectedCategory === category
												? 'bg-blue-600 text-white shadow-lg transform -translate-y-1'
												: 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
										}`}
									>
										{category === 'all' ? 'All Posts' : category}
									</button>
								))}
							</div>
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
									{featuredPosts.map((post, index) => (
										<article key={post.id} className={`transform transition-all duration-700 delay-${300 + index * 100} ${
											isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
										}`}>
											<div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-shadow p-8 h-full">
												<div className="flex items-center mb-4">
													<div className="text-4xl mr-4">{post.image}</div>
													<div>
														<span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
															{post.category}
														</span>
														<span className="ml-2 text-sm text-gray-500">{post.readTime}</span>
													</div>
												</div>
												<h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
													{post.title}
												</h3>
												<p className="text-gray-600 mb-4 leading-relaxed">
													{post.excerpt}
												</p>
												<div className="flex items-center justify-between">
													<div className="flex items-center">
														<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
															<span className="text-sm font-medium text-gray-600">
																{post.author.split(' ').map(n => n[0]).join('')}
															</span>
														</div>
														<div>
															<p className="text-sm font-medium text-gray-800">{post.author}</p>
															<p className="text-xs text-gray-500">{post.date}</p>
														</div>
													</div>
													<button 
														onClick={() => trackClick(`read-post-${post.id}`, 'cta')}
														className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
													>
														Read More →
													</button>
												</div>
											</div>
										</article>
									))}
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
								{regularPosts.map((post, index) => (
									<article key={post.id} className={`transform transition-all duration-700 delay-${500 + index * 100} ${
										isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
									}`}>
										<div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-6 h-full">
											<div className="flex items-center mb-4">
												<div className="text-3xl mr-3">{post.image}</div>
												<div>
													<span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
														{post.category}
													</span>
													<span className="ml-2 text-xs text-gray-500">{post.readTime}</span>
												</div>
											</div>
											<h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
												{post.title}
											</h3>
											<p className="text-gray-600 mb-4 text-sm leading-relaxed">
												{post.excerpt}
											</p>
											<div className="flex items-center justify-between">
												<div className="flex items-center">
													<div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2">
														<span className="text-xs font-medium text-gray-600">
															{post.author.split(' ').map(n => n[0]).join('')}
														</span>
													</div>
													<div>
														<p className="text-xs font-medium text-gray-800">{post.author}</p>
														<p className="text-xs text-gray-500">{post.date}</p>
													</div>
												</div>
												<button 
													onClick={() => trackClick(`read-post-${post.id}`, 'cta')}
													className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
												>
													Read →
												</button>
											</div>
										</div>
									</article>
								))}
							</div>
						</section>

						{/* Newsletter Signup */}
						<section className={`text-center py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl mb-16 text-white relative overflow-hidden transition-all duration-1000 delay-600 ${
							isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}>
							<div className="absolute inset-0 opacity-10">
								<div className="absolute inset-0" style={{
									backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
								}}></div>
							</div>
							
							<div className="relative z-10">
								<h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
									Stay Updated
								</h2>
								<p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
									Get the latest insights and trends delivered to your inbox
								</p>
								<div className="max-w-md mx-auto flex gap-4">
									<input
										type="email"
										placeholder="Enter your email"
										className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
									/>
									<button 
										onClick={() => trackClick('newsletter-signup', 'cta')}
										className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
									>
										Subscribe
									</button>
								</div>
							</div>
						</section>
					</main>
				</div>
			</div>
		</ErrorBoundary>
	);
}